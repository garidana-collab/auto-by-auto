import { useState, useMemo } from 'react'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Legend,
} from 'recharts'

import { BRANDS, BIKES, ALL_CATEGORIES } from './data/bikes'
import { SPECS, RADAR_KEYS, COLORS, fmtVal } from './data/specs'

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  // 보조 필터
  const [selCats, setSelCats] = useState([])
  const [selLic,  setSelLic]  = useState('전체')
  const [maxDisp, setMaxDisp] = useState(2000)
  const [maxSeat, setMaxSeat] = useState(950)

  // 드릴다운
  const [openBrand, setOpenBrand] = useState(null)
  const [openModel, setOpenModel] = useState(null)

  // 비교 대상
  const [compared, setCompared] = useState(['mt03-2023', 'z900-2021'])

  // ── 필터된 바이크 목록
  const filtered = useMemo(() => BIKES.filter(b => {
    if (selCats.length && !selCats.includes(b.category)) return false
    if (selLic === '원동기'  && b.license !== '원동기')   return false
    if (selLic === '소형이륜' && b.license !== '소형이륜') return false
    if (b.displacement > maxDisp) return false
    if (b.seatHeight   > maxSeat) return false
    return true
  }), [selCats, selLic, maxDisp, maxSeat])

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
    setSelCats([]); setSelLic('전체')
    setMaxDisp(2000); setMaxSeat(950)
  }
  const hasFilter = selCats.length > 0 || selLic !== '전체' || maxDisp < 2000 || maxSeat < 950

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

          <div className="sf-label mt14">
            배기량
            <span className="sf-val">{maxDisp >= 2000 ? '제한 없음' : `~${maxDisp}cc`}</span>
          </div>
          <input type="range" min={125} max={2000} step={25}
            value={maxDisp}
            onChange={e => setMaxDisp(Number(e.target.value))}
            className="aba-slider"
          />
          <div className="slider-ends"><span>125cc</span><span>최대</span></div>

          <div className="sf-label mt14">
            시트고
            <span className="sf-val">{maxSeat >= 950 ? '제한 없음' : `~${maxSeat}mm`}</span>
          </div>
          <input type="range" min={700} max={950} step={5}
            value={maxSeat}
            onChange={e => setMaxSeat(Number(e.target.value))}
            className="aba-slider"
          />
          <div className="slider-ends"><span>700mm</span><span>950mm</span></div>
        </section>

        {/* 브랜드 드릴다운 */}
        <section className="sf-section flex1">
          <div className="sf-heading">브랜드 · 모델 · 연식</div>

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
                        return (
                          <button
                            key={yr}
                            className={`year-row ${isOn ? 'on' : ''} ${isFull ? 'full' : ''}`}
                            onClick={() => !isFull && toggleCompare(bike.id)}
                          >
                            <span className="year-num">{yr}년식</span>
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
          <div className="main-eyebrow">제원 비교 · PROTOTYPE 2</div>
          <h1 className="main-title">
            어떤 <span className="hl">바이크</span>가<br />당신에게 맞을까
          </h1>
        </div>

        {/* 선택된 바이크 칩 */}
        <div className="chips-bar">
          {comparedBikes.length === 0 ? (
            <span className="chips-hint">← 왼쪽에서 브랜드 → 모델 → 연식 순으로 선택하세요</span>
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
            <div className="empty-sub">브랜드 → 모델 → 연식 순서로 선택합니다</div>
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

.sidebar {
  width: 268px;
  min-width: 268px;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--line);
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sidebar-logo {
  display: flex;
  align-items: baseline;
  gap: 7px;
  padding: 20px 18px 16px;
  border-bottom: 1px solid var(--line);
}
.logo-aba { font-size: 17px; font-weight: 900; color: var(--orange); letter-spacing: -.02em; }
.logo-sep { color: var(--line); }
.logo-sub { font-size: 12px; color: var(--muted); font-weight: 500; }

.sf-section { padding: 16px 14px 14px; border-bottom: 1px solid var(--line); }
.sf-section.flex1 { flex: 1; border-bottom: none; }

.sf-heading-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.sf-heading {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 700;
}
.reset-btn {
  font-size: 11px; color: var(--orange);
  background: none; border: none; cursor: pointer; padding: 0; font-weight: 600;
}
.reset-btn:hover { opacity: 0.8; }

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
  display: flex; justify-content: space-between;
  font-size: 10px; color: var(--dim); margin-top: 2px;
}

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
  width: 100%; display: flex; align-items: center; gap: 6px;
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

.empty-msg { font-size: 12px; color: var(--dim); text-align: center; padding: 20px 0; }

.main { flex: 1; padding: 32px 28px 60px; overflow-y: auto; max-width: 800px; }

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
