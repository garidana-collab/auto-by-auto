import { useState, useMemo } from 'react'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Legend,
} from 'recharts'

import { BRANDS, BIKES, ALL_CATEGORIES } from './data/bikes'
import { SPECS, RADAR_KEYS, COLORS, fmtVal } from './data/specs'

// ─── 상수 ─────────────────────────────────────────────────────────────────────

const DISP_CATS = [
  { id: '125이하',   label: '125cc',    min: 0,    max: 125     },
  { id: '쿼터',     label: '쿼터급',   min: 126,  max: 400     },
  { id: '미들',     label: '미들급',   min: 401,  max: 700     },
  { id: '리터',     label: '리터급',   min: 701,  max: 1000    },
  { id: '오버리터', label: '오버리터', min: 1001, max: Infinity },
]

const LEG_FACTOR = { short: 0.44, normal: 0.47, long: 0.50 }

// 카테고리별 카드 배경 그라디언트
const CAT_GRADIENT = {
  '미니/입문': 'linear-gradient(135deg, #1a3a1a 0%, #0d200d 100%)',
  '스쿠터':   'linear-gradient(135deg, #1a2a3a 0%, #0d1620 100%)',
  '네이키드':  'linear-gradient(135deg, #3a2a0a 0%, #201600 100%)',
  '스포츠':   'linear-gradient(135deg, #3a0a0a 0%, #200000 100%)',
  '클래식':   'linear-gradient(135deg, #2a2408 0%, #181400 100%)',
  '어드벤처':  'linear-gradient(135deg, #0a2a1a 0%, #001810 100%)',
  '크루저':   'linear-gradient(135deg, #1a0a2a 0%, #100016 100%)',
  '투어러':   'linear-gradient(135deg, #0a1a2e 0%, #00101e 100%)',
}

const CATEGORY_ORDER = ['미니/입문', '스쿠터', '네이키드', '스포츠', '클래식', '어드벤처', '크루저', '투어러']

// 시트고 적합 등급 계산
function getFitLabel(seatHeight, inseam) {
  if (seatHeight <= inseam * 0.95) return { text: '편안', cls: 'fit-good' }
  if (seatHeight <= inseam)        return { text: '적합', cls: 'fit-ok'   }
  return                                  { text: '발끝', cls: 'fit-tip'  }
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  // 검색
  const [searchQuery, setSearchQuery] = useState('')

  // 보조 필터
  const [selCats, setSelCats] = useState([])
  const [selLic,  setSelLic]  = useState('전체')
  const [selDisp, setSelDisp] = useState([])

  // 체형 필터
  const [riderHeight, setRiderHeight] = useState(170)
  const [legType,     setLegType]     = useState('normal')

  // 드릴다운
  const [openBrand, setOpenBrand] = useState(null)
  const [openModel, setOpenModel] = useState(null)

  // 비교 대상
  const [compared, setCompared] = useState(['mt03-2023', 'z900-2021'])

  // 뷰 모드: 'browse' | 'compare'
  const [viewMode, setViewMode] = useState('browse')

  // ── 인심 & 권장 시트고 계산
  const inseam        = Math.round(riderHeight * LEG_FACTOR[legType] * 10)
  const maxSeatHeight = Math.round(inseam * 1.05)

  // ── 필터된 바이크 목록
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return BIKES.filter(b => {
      if (q) {
        const brand     = BRANDS.find(br => br.id === b.brand)
        const brandName = brand ? brand.name.toLowerCase() : ''
        if (!b.model.toLowerCase().includes(q) && !brandName.includes(q)) return false
      }
      if (selCats.length && !selCats.includes(b.category)) return false
      if (selLic === '원동기'   && b.license !== '원동기')   return false
      if (selLic === '소형이륜' && b.license !== '소형이륜') return false
      if (selDisp.length) {
        const match = selDisp.some(id => {
          const cat = DISP_CATS.find(c => c.id === id)
          return b.displacement >= cat.min && b.displacement <= cat.max
        })
        if (!match) return false
      }
      if (b.seatHeight > maxSeatHeight) return false
      return true
    })
  }, [searchQuery, selCats, selLic, selDisp, maxSeatHeight])

  // ── 카드 뷰용 정렬 (카테고리→브랜드→모델→연식)
  const sortedFiltered = useMemo(() =>
    [...filtered].sort((a, b) => {
      const ci = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
      if (ci !== 0) return ci
      const bi = a.brand.localeCompare(b.brand)
      if (bi !== 0) return bi
      if (a.model !== b.model) return a.model.localeCompare(b.model)
      return b.year - a.year
    }),
  [filtered])

  // ── 브랜드 목록 (카운트 포함)
  const brandList = useMemo(() =>
    BRANDS.map(br => ({
      ...br,
      count: filtered.filter(b => b.brand === br.id).length,
    })).filter(br => br.count > 0),
  [filtered])

  // ── 선택된 브랜드의 모델 목록
  const modelList = useMemo(() => {
    if (!openBrand) return []
    const bikes = filtered.filter(b => b.brand === openBrand)
    const map = {}
    bikes.forEach(b => { (map[b.model] = map[b.model] || []).push(b.year) })
    return Object.entries(map).map(([name, years]) => ({
      name,
      years: [...years].sort((a, z) => z - a),
    }))
  }, [openBrand, filtered])

  // ── 비교 목록
  const comparedBikes = useMemo(() =>
    compared.map(id => BIKES.find(b => b.id === id)).filter(Boolean),
  [compared])

  function toggleCompare(id) {
    setCompared(prev =>
      prev.includes(id)  ? prev.filter(x => x !== id)
      : prev.length >= 3 ? prev
      : [...prev, id]
    )
  }

  // ── 제원 표 하이라이트
  const extremes = useMemo(() => {
    const out = {}
    SPECS.forEach(spec => {
      const vals = comparedBikes.map(b => b[spec.key])
      out[spec.key] = { max: Math.max(...vals), min: Math.min(...vals) }
    })
    return out
  }, [comparedBikes])

  // ── 레이더 데이터
  const radarData = useMemo(() => RADAR_KEYS.map(key => {
    const spec = SPECS.find(s => s.key === key)
    const all  = BIKES.map(b => b[key])
    const mn = Math.min(...all), mx = Math.max(...all)
    const norm = v => {
      const t = mx === mn ? 0.5 : (v - mn) / (mx - mn)
      return Math.round((spec.higherBetter === false ? 1 - t : t) * 100)
    }
    const row = { spec: spec.label }
    comparedBikes.forEach((b, i) => { row[`bike${i}`] = norm(b[key]) })
    return row
  }), [comparedBikes])

  // ── 드릴다운 핸들러
  function handleBrandClick(id) {
    if (openBrand === id) { setOpenBrand(null); setOpenModel(null) }
    else { setOpenBrand(id); setOpenModel(null) }
  }
  function handleModelClick(name) {
    setOpenModel(prev => prev === name ? null : name)
  }

  // ── 필터 초기화
  function resetFilters() {
    setSelCats([]); setSelLic('전체'); setSelDisp([])
    setRiderHeight(170); setLegType('normal')
  }
  const hasFilter = selCats.length > 0 || selLic !== '전체' || selDisp.length > 0
    || riderHeight !== 170 || legType !== 'normal'
  const totalCount = filtered.length

  // ─── RENDER ──────────────────────────────────────────────────────────────

  return (
    <div className="aba-root">
      <style>{css}</style>

      {/* ── 사이드바 ──────────────────────────────────────── */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <span className="logo-aba">ABA</span>
          <span className="logo-sep">·</span>
          <span className="logo-sub">기종 정보</span>
        </div>

        {/* 검색창 */}
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="브랜드 · 모델명 검색"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        {/* 보조 필터 */}
        <section className="sf-section">
          <div className="sf-heading-row">
            <span className="sf-heading">필터</span>
            {hasFilter && (
              <button className="reset-btn" onClick={resetFilters}>초기화</button>
            )}
          </div>

          <div className="sf-label">장르</div>
          <div className="cat-grid">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`cat-chip ${selCats.includes(cat) ? 'on' : ''}`}
                onClick={() => setSelCats(prev =>
                  prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                )}
              >{cat}</button>
            ))}
          </div>

          <div className="sf-label mt14">면허</div>
          <div className="lic-group">
            {[['전체','전체'], ['원동기','원동기 이하'], ['소형이륜','소형이륜']].map(([val, label]) => (
              <button
                key={val}
                className={`lic-btn ${selLic === val ? 'on' : ''}`}
                onClick={() => setSelLic(val)}
              >{label}</button>
            ))}
          </div>

          <div className="sf-label mt14">배기량</div>
          <div className="cat-grid">
            {DISP_CATS.map(cat => (
              <button
                key={cat.id}
                className={`cat-chip ${selDisp.includes(cat.id) ? 'on' : ''}`}
                onClick={() => setSelDisp(prev =>
                  prev.includes(cat.id) ? prev.filter(c => c !== cat.id) : [...prev, cat.id]
                )}
              >{cat.label}</button>
            ))}
          </div>
        </section>

        {/* 체형 필터 */}
        <section className="sf-section">
          <div className="sf-heading">내 체형</div>

          <div className="sf-label">
            키
            <span className="sf-val">{riderHeight}cm</span>
          </div>
          <input type="range" min={150} max={195} step={1}
            value={riderHeight}
            onChange={e => setRiderHeight(Number(e.target.value))}
            className="aba-slider"
          />
          <div className="slider-ends"><span>150cm</span><span>195cm</span></div>

          <div className="sf-label mt14">다리 길이</div>
          <div className="lic-group">
            {[['short','짧은 편'], ['normal','보통'], ['long','긴 편']].map(([val, label]) => (
              <button
                key={val}
                className={`lic-btn ${legType === val ? 'on' : ''}`}
                onClick={() => setLegType(val)}
              >{label}</button>
            ))}
          </div>

          <div className="height-info">
            추정 인심 <strong>{inseam}mm</strong><br />
            권장 시트고 <strong>~{maxSeatHeight}mm 이하</strong>
          </div>
        </section>

        {/* 브랜드 드릴다운 */}
        <section className="sf-section flex1">
          <div className="sf-heading-row">
            <span className="sf-heading">브랜드 · 모델 · 연식</span>
            <span className="result-count">{totalCount}종</span>
          </div>

          {brandList.length === 0 && (
            <div className="empty-msg">조건에 맞는 기종이 없습니다</div>
          )}

          {brandList.map(br => {
            const isOpen = openBrand === br.id
            return (
              <div key={br.id} className="brand-block">
                <button
                  className={`brand-row ${isOpen ? 'open' : ''}`}
                  onClick={() => handleBrandClick(br.id)}
                >
                  <span className="brand-name">{br.name}</span>
                  <span className="brand-count">{br.count}</span>
                  <span className="drill-arrow">{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && modelList.map(m => {
                  const isModelOpen = openModel === m.name
                  return (
                    <div key={m.name} className="model-block">
                      <button
                        className={`model-row ${isModelOpen ? 'open' : ''}`}
                        onClick={() => handleModelClick(m.name)}
                      >
                        <span className="model-name">{m.name}</span>
                        <span className="drill-arrow sm">{isModelOpen ? '▲' : '▼'}</span>
                      </button>

                      {isModelOpen && m.years.map(yr => {
                        const bike = BIKES.find(
                          b => b.brand === br.id && b.model === m.name && b.year === yr
                        )
                        if (!bike) return null
                        const isOn   = compared.includes(bike.id)
                        const isFull = compared.length >= 3 && !isOn
                        const fit    = getFitLabel(bike.seatHeight, inseam)
                        return (
                          <button
                            key={yr}
                            className={`year-row ${isOn ? 'on' : ''} ${isFull ? 'full' : ''}`}
                            onClick={() => !isFull && toggleCompare(bike.id)}
                          >
                            <span className="year-num">{yr}년식</span>
                            <span className={`fit-badge ${fit.cls}`}>{fit.text}</span>
                            <span className="year-price">
                              {Math.round(bike.priceKRW / 10000)}만원
                            </span>
                            <span className="year-check">{isOn ? '✓' : '+'}</span>
                          </button>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </section>
      </aside>

      {/* ── 메인 ──────────────────────────────────────────── */}
      <main className="main">

        <div className="main-header">
          <div className="main-eyebrow">기종 정보 · AUTO by AUTO</div>
          <h1 className="main-title">
            어떤 <span className="hl">바이크</span>가<br />당신에게 맞을까
          </h1>
        </div>

        {/* 뷰 탭 */}
        <div className="view-tabs">
          <button
            className={`view-tab ${viewMode === 'browse' ? 'on' : ''}`}
            onClick={() => setViewMode('browse')}
          >
            탐색 <span className="tab-count">{totalCount}</span>
          </button>
          <button
            className={`view-tab ${viewMode === 'compare' ? 'on' : ''}`}
            onClick={() => setViewMode('compare')}
          >
            비교
            {compared.length > 0 && (
              <span className="tab-badge">{compared.length}</span>
            )}
          </button>
        </div>

        {/* ── 탐색 뷰: 카드 그리드 */}
        {viewMode === 'browse' && (
          sortedFiltered.length === 0 ? (
            <div className="main-empty">
              <div className="empty-icon">🔍</div>
              <div className="empty-text">조건에 맞는 기종이 없습니다</div>
              <div className="empty-sub">필터를 조정해 보세요</div>
            </div>
          ) : (
            <div className="card-grid">
              {sortedFiltered.map(bike => {
                const brand  = BRANDS.find(br => br.id === bike.brand)
                const isOn   = compared.includes(bike.id)
                const isFull = compared.length >= 3 && !isOn
                const fit    = getFitLabel(bike.seatHeight, inseam)
                return (
                  <div key={bike.id} className={`bike-card ${isOn ? 'selected' : ''}`}>
                    {/* 이미지 영역 */}
                    <div
                      className="card-img"
                      style={{ background: CAT_GRADIENT[bike.category] }}
                    >
                      <span className="card-cat-label">{bike.category}</span>
                      {bike.image
                        ? <img src={bike.image} alt={bike.model} className="card-photo" />
                        : <span className="card-emoji">🏍</span>
                      }
                    </div>

                    {/* 정보 */}
                    <div className="card-body">
                      <div className="card-model">{bike.model}</div>
                      <div className="card-meta">{brand?.name} · {bike.year}년식</div>
                      <div className="card-specs">
                        <span>{bike.displacement}cc</span>
                        <span>{bike.power}hp</span>
                        <span>시트고 {bike.seatHeight}mm</span>
                      </div>
                      <div className="card-price">{Math.round(bike.priceKRW / 10000)}만원</div>
                    </div>

                    {/* 푸터 */}
                    <div className="card-footer">
                      <span className={`fit-badge ${fit.cls}`}>{fit.text}</span>
                      <button
                        className={`card-btn ${isOn ? 'on' : ''} ${isFull ? 'dim' : ''}`}
                        onClick={() => {
                          if (isFull) return
                          toggleCompare(bike.id)
                          if (!isOn) setViewMode('compare')
                        }}
                      >
                        {isOn ? '✓ 비교 중' : '+ 비교'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        )}

        {/* ── 비교 뷰 */}
        {viewMode === 'compare' && (
          <>
            {/* 선택된 바이크 칩 */}
            <div className="chips-bar">
              {comparedBikes.length === 0 ? (
                <span className="chips-hint">탐색 탭에서 기종을 추가해 보세요</span>
              ) : (
                comparedBikes.map((b, i) => (
                  <div key={b.id} className="chip" style={{ '--c': COLORS[i] }}>
                    <span className="chip-dot" />
                    <span className="chip-label">
                      {b.model} <em>&apos;{String(b.year).slice(2)}</em>
                    </span>
                    <button className="chip-x" onClick={() => toggleCompare(b.id)}>×</button>
                  </div>
                ))
              )}
              {comparedBikes.length > 0 && comparedBikes.length < 3 && (
                <span className="chips-more">최대 {3 - comparedBikes.length}개 더 추가 가능</span>
              )}
            </div>

            {comparedBikes.length === 0 ? (
              <div className="main-empty">
                <div className="empty-icon">🏍</div>
                <div className="empty-text">비교할 기종을 추가해 주세요</div>
                <div className="empty-sub">탐색 탭에서 기종 카드의 + 비교 버튼을 누르세요</div>
              </div>
            ) : (
              <>
                {/* 레이더 차트 */}
                <section className="panel">
                  <div className="panel-label">성능 균형</div>
                  <ResponsiveContainer width="100%" height={320}>
                    <RadarChart data={radarData} outerRadius="70%">
                      <PolarGrid stroke="#2a2a2e" />
                      <PolarAngleAxis
                        dataKey="spec"
                        tick={{ fill: '#9a9aa0', fontSize: 12 }}
                      />
                      <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                      {comparedBikes.map((b, i) => (
                        <Radar
                          key={b.id}
                          name={`${b.model} '${String(b.year).slice(2)}`}
                          dataKey={`bike${i}`}
                          stroke={COLORS[i]}
                          fill={COLORS[i]}
                          fillOpacity={0.18}
                          strokeWidth={2}
                        />
                      ))}
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                    </RadarChart>
                  </ResponsiveContainer>
                  <div className="radar-note">
                    전체 데이터 기준 상대 점수(0–100) · 무게는 가벼울수록 높은 점수
                  </div>
                </section>

                {/* 제원 표 */}
                <section className="panel">
                  <div className="panel-label">제원 비교</div>
                  <div className="table-scroll">
                    <table className="spec-table">
                      <thead>
                        <tr>
                          <th className="th-spec">항목</th>
                          {comparedBikes.map((b, i) => (
                            <th key={b.id} style={{ '--c': COLORS[i] }}>
                              <span className="th-model">{b.model}</span>
                              <span className="th-year">&apos;{String(b.year).slice(2)}</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {SPECS.map(spec => (
                          <tr key={spec.key}>
                            <td className="td-spec">
                              {spec.label}
                              <span className="td-unit">{spec.unit}</span>
                            </td>
                            {comparedBikes.map(b => {
                              const v   = b[spec.key]
                              const ext = extremes[spec.key]
                              let cls   = ''
                              if (spec.higherBetter !== null && ext.max !== ext.min) {
                                if (spec.higherBetter ? v === ext.max : v === ext.min) cls = 'best'
                                else if (spec.higherBetter ? v === ext.min : v === ext.max) cls = 'worst'
                              }
                              return (
                                <td key={b.id} className={`td-val ${cls}`}>
                                  {fmtVal(spec, v)}
                                  {cls === 'best' && <span className="badge">▲</span>}
                                </td>
                              )
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="legend-row">
                    <span className="lg best">▲ 항목별 우위</span>
                    <span className="lg">상대적 열위 (흐림)</span>
                  </div>
                </section>
              </>
            )}
          </>
        )}

        <footer className="foot">
          프로토타입 · 데이터는 예시이며 실제 제원과 다를 수 있습니다
        </footer>
      </main>
    </div>
  )
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

const css = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
button { font-family: inherit; }

.aba-root {
  --bg:         #121214;
  --sidebar-bg: #0d0d0f;
  --panel:      #1a1a1e;
  --line:       #252528;
  --text:       #ececf0;
  --muted:      #8a8a92;
  --dim:        #4a4a52;
  --orange:     #FF5C00;

  font-family: "Inter", -apple-system, BlinkMacSystemFont,
               "Apple SD Gothic Neo", "Pretendard", sans-serif;
  background: var(--bg);
  color: var(--text);
  display: flex;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* ── SIDEBAR ── */
.sidebar {
  width: 268px; min-width: 268px;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--line);
  height: 100vh; position: sticky; top: 0;
  overflow-y: auto; display: flex; flex-direction: column;
}
.sidebar-logo {
  display: flex; align-items: baseline; gap: 7px;
  padding: 20px 18px 16px; border-bottom: 1px solid var(--line);
}
.logo-aba { font-size: 17px; font-weight: 900; color: var(--orange); letter-spacing: -.02em; }
.logo-sep { color: var(--line); }
.logo-sub { font-size: 12px; color: var(--muted); font-weight: 500; }

.search-wrap {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px; border-bottom: 1px solid var(--line);
}
.search-icon { font-size: 13px; flex-shrink: 0; opacity: 0.5; }
.search-input {
  flex: 1; background: transparent; border: none; outline: none;
  font-size: 13px; color: var(--text); font-family: inherit;
}
.search-input::placeholder { color: var(--dim); }
.search-clear {
  background: none; border: none; color: var(--muted);
  font-size: 18px; line-height: 1; cursor: pointer; padding: 0 2px;
}
.search-clear:hover { color: var(--text); }

.sf-section { padding: 16px 14px 14px; border-bottom: 1px solid var(--line); }
.sf-section.flex1 { flex: 1; border-bottom: none; }
.sf-heading-row {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;
}
.sf-heading {
  font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--muted); font-weight: 700;
}
.reset-btn {
  font-size: 11px; color: var(--orange);
  background: none; border: none; cursor: pointer; padding: 0; font-weight: 600;
}
.reset-btn:hover { opacity: 0.8; }
.result-count { font-size: 11px; color: var(--orange); font-weight: 700; }

.sf-label {
  font-size: 12px; font-weight: 600; color: var(--text);
  margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;
}
.sf-label.mt14 { margin-top: 14px; }
.sf-val { color: var(--orange); font-size: 11px; font-weight: 700; }

.cat-grid { display: flex; flex-wrap: wrap; gap: 5px; }
.cat-chip {
  font-size: 11px; padding: 4px 9px; border-radius: 999px;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; font-weight: 500; transition: all .12s;
}
.cat-chip.on { border-color: var(--orange); color: var(--orange); background: rgba(255,92,0,.1); }
.cat-chip:hover:not(.on) { border-color: #3a3a3f; color: var(--text); }

.lic-group { display: flex; gap: 5px; }
.lic-btn {
  flex: 1; font-size: 11px; padding: 5px 3px; border-radius: 8px;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; font-weight: 500; text-align: center; transition: all .12s;
}
.lic-btn.on { border-color: var(--orange); color: var(--orange); background: rgba(255,92,0,.1); }

.aba-slider {
  width: 100%; accent-color: var(--orange); cursor: pointer; margin: 2px 0 4px; display: block;
}
.slider-ends {
  display: flex; justify-content: space-between; font-size: 10px; color: var(--dim); margin-top: 2px;
}

.height-info {
  margin-top: 12px; font-size: 11px; color: var(--muted); line-height: 1.7;
  background: rgba(255,92,0,.06); border: 1px solid rgba(255,92,0,.18);
  border-radius: 8px; padding: 8px 10px;
}
.height-info strong { color: var(--orange); font-weight: 700; }

.brand-block { margin-bottom: 1px; }
.brand-row {
  width: 100%; display: flex; align-items: center; gap: 8px;
  padding: 9px 10px; border-radius: 10px;
  background: transparent; border: 1px solid transparent;
  cursor: pointer; text-align: left; transition: all .12s;
}
.brand-row:hover { background: rgba(255,255,255,.04); }
.brand-row.open { background: rgba(255,92,0,.08); border-color: rgba(255,92,0,.25); }
.brand-name { flex: 1; font-size: 14px; font-weight: 700; color: var(--text); }
.brand-count { font-size: 11px; color: var(--dim); }
.drill-arrow { font-size: 8px; color: var(--dim); }
.drill-arrow.sm { font-size: 7px; }

.model-block { margin-left: 10px; }
.model-row {
  width: 100%; display: flex; align-items: center; gap: 8px;
  padding: 7px 8px; border-radius: 8px;
  background: transparent; border: 1px solid transparent;
  cursor: pointer; text-align: left; transition: all .12s;
}
.model-row:hover { background: rgba(255,255,255,.04); }
.model-name { flex: 1; font-size: 13px; font-weight: 500; color: var(--muted); }
.model-row.open .model-name { color: var(--orange); }

.year-row {
  width: 100%; display: flex; align-items: center; gap: 5px;
  padding: 6px 8px 6px 20px; border-radius: 6px;
  background: transparent; border: 1px solid transparent;
  cursor: pointer; text-align: left; transition: all .12s; margin-bottom: 1px;
}
.year-row:hover:not(.full) { background: rgba(255,255,255,.04); }
.year-row.on { background: rgba(255,92,0,.12); border-color: rgba(255,92,0,.3); }
.year-row.full { opacity: 0.3; cursor: not-allowed; }
.year-num { flex: 1; font-size: 12px; color: var(--muted); }
.year-row.on .year-num { color: var(--orange); font-weight: 600; }
.year-price { font-size: 11px; color: var(--dim); }
.year-check { font-size: 11px; color: var(--dim); width: 14px; text-align: center; }
.year-row.on .year-check { color: var(--orange); font-weight: 700; }

.fit-badge {
  font-size: 9px; font-weight: 700; padding: 2px 5px;
  border-radius: 4px; flex-shrink: 0;
}
.fit-good { background: rgba(31,182,166,.15); color: #1FB6A6; }
.fit-ok   { background: rgba(255,92,0,.12);  color: var(--orange); }
.fit-tip  { background: rgba(220,180,0,.12); color: #C8A000; }

.empty-msg { font-size: 12px; color: var(--dim); text-align: center; padding: 20px 0; }

/* ── MAIN ── */
.main { flex: 1; padding: 32px 28px 60px; overflow-y: auto; }

.main-header { margin-bottom: 20px; }
.main-eyebrow {
  font-size: 10px; letter-spacing: .22em; font-weight: 700;
  color: var(--orange); text-transform: uppercase; margin-bottom: 12px;
}
.main-title {
  font-size: clamp(28px, 5vw, 42px); font-weight: 800;
  line-height: 1.05; letter-spacing: -.02em;
}
.main-title .hl { color: var(--orange); }

/* ── 뷰 탭 */
.view-tabs { display: flex; gap: 6px; margin-bottom: 24px; }
.view-tab {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 18px; border-radius: 999px; font-size: 13px; font-weight: 600;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; transition: all .15s;
}
.view-tab:hover:not(.on) { border-color: #3a3a3f; color: var(--text); }
.view-tab.on { background: var(--orange); border-color: var(--orange); color: #fff; }
.tab-count {
  font-size: 10px; font-weight: 700; opacity: 0.8;
}
.tab-badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 17px; height: 17px; border-radius: 50%;
  background: #fff; color: var(--orange); font-size: 10px; font-weight: 800;
}
.view-tab:not(.on) .tab-badge {
  background: var(--orange); color: #fff;
}

/* ── 카드 그리드 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  gap: 12px;
}
.bike-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 14px; overflow: hidden; transition: all .15s;
  display: flex; flex-direction: column;
}
.bike-card:hover { border-color: rgba(255,92,0,.25); transform: translateY(-2px); }
.bike-card.selected { border-color: var(--orange); }

.card-img {
  height: 110px; position: relative;
  display: flex; align-items: center; justify-content: center;
}
.card-cat-label {
  position: absolute; top: 8px; left: 10px;
  font-size: 9px; font-weight: 700; color: rgba(255,255,255,.5);
  letter-spacing: .1em; text-transform: uppercase;
}
.card-emoji { font-size: 38px; filter: drop-shadow(0 2px 8px rgba(0,0,0,.4)); }
.card-photo { width: 100%; height: 100%; object-fit: cover; }

.card-body { padding: 12px 12px 8px; flex: 1; }
.card-model { font-size: 14px; font-weight: 800; color: var(--text); margin-bottom: 2px; }
.card-meta  { font-size: 11px; color: var(--muted); margin-bottom: 8px; }
.card-specs { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 6px; }
.card-specs span {
  font-size: 10px; color: var(--dim); background: rgba(255,255,255,.04);
  padding: 2px 6px; border-radius: 4px; border: 1px solid var(--line);
}
.card-price { font-size: 13px; font-weight: 700; color: var(--orange); }

.card-footer {
  padding: 8px 12px 12px;
  display: flex; align-items: center; justify-content: space-between;
}
.card-btn {
  font-size: 11px; font-weight: 700; padding: 5px 11px; border-radius: 6px;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; transition: all .12s; white-space: nowrap;
}
.card-btn:hover:not(.dim) { border-color: var(--orange); color: var(--orange); }
.card-btn.on { background: var(--orange); border-color: var(--orange); color: #fff; }
.card-btn.dim { opacity: 0.3; cursor: not-allowed; }

/* ── 비교 뷰 */
.chips-bar {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: 8px; margin-bottom: 20px; min-height: 36px;
}
.chips-hint { font-size: 13px; color: var(--muted); }
.chips-more { font-size: 12px; color: var(--dim); }

.chip {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 999px; padding: 6px 8px 6px 12px;
  font-size: 13px; font-weight: 600;
}
.chip-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); flex-shrink: 0; }
.chip-label em { font-style: normal; color: var(--muted); margin-left: 3px; font-weight: 500; }
.chip-x {
  border: none; background: transparent; color: var(--muted);
  font-size: 18px; line-height: 1; cursor: pointer; padding: 0 3px;
}
.chip-x:hover { color: var(--text); }

.main-empty {
  text-align: center; color: var(--muted);
  padding: 80px 20px; border: 1px dashed var(--line); border-radius: 20px;
}
.empty-icon { font-size: 44px; margin-bottom: 14px; }
.empty-text { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
.empty-sub  { font-size: 13px; color: var(--dim); }

.panel {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 18px; padding: 20px; margin-bottom: 16px;
}
.panel-label {
  font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
  color: var(--muted); font-weight: 700; margin-bottom: 14px;
}
.radar-note { font-size: 11px; color: var(--dim); text-align: center; margin-top: 6px; }

.table-scroll { overflow-x: auto; margin: 0 -4px; }
.spec-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.spec-table th, .spec-table td {
  padding: 10px; text-align: right; border-bottom: 1px solid var(--line); white-space: nowrap;
}
.th-spec, .td-spec { text-align: left; }
.th-model { display: block; font-weight: 800; font-size: 15px; color: var(--c); }
.th-year  { display: block; font-size: 11px; color: var(--muted); }
.td-spec  { color: var(--muted); font-weight: 600; }
.td-unit  { display: block; font-size: 11px; color: var(--dim); font-weight: 400; }
.td-val   { font-variant-numeric: tabular-nums; font-weight: 600; }
.td-val.best  { color: var(--orange); font-weight: 800; }
.td-val.worst { color: var(--dim); }
.badge { font-size: 9px; margin-left: 4px; }

.legend-row { display: flex; gap: 16px; margin-top: 12px; font-size: 11px; }
.lg      { color: var(--muted); }
.lg.best { color: var(--orange); }

.foot { text-align: center; color: var(--dim); font-size: 11px; margin-top: 28px; }
`
