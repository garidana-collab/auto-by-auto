import { useState, useMemo, useRef } from 'react'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Legend,
} from 'recharts'

import { BRANDS, BIKES, ALL_CATEGORIES } from './data/bikes'
import { SPECS, RADAR_KEYS, COLORS, fmtVal, getSpecScore, formatPriceBandKRW } from './data/specs'

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

const CAT_COLOR = {
  '미니/입문': '#38d273',
  '스쿠터': '#48a8ff',
  '네이키드': '#d9a323',
  '스포츠': '#ff4d5a',
  '클래식': '#d6b84a',
  '어드벤처': '#32c67a',
  '크루저': '#b66cff',
  '투어러': '#55b6ff',
}

const CATEGORY_ORDER = ['미니/입문', '스쿠터', '네이키드', '스포츠', '클래식', '어드벤처', '크루저', '투어러']

const BEGINNER_TAGS = [
  { id: 'easy', label: '입문 친화', desc: '배기량과 무게 부담이 낮은 편' },
  { id: 'comfort', label: '편안함', desc: '시트고가 낮거나 자세 부담이 적은 편' },
  { id: 'light', label: '가벼움', desc: '차체가 가볍고 다루기 쉬운 편' },
  { id: 'speedy', label: '속도감', desc: '출력이나 배기량이 높은 편' },
  { id: 'solid', label: '묵직함', desc: '차체가 크고 안정감이 큰 편' },
  { id: 'agile', label: '날렵함', desc: '무게 대비 출력이 좋은 편' },
]

const BRAND_MARKS = {
  honda: 'H',
  yamaha: 'Y',
  kawasaki: 'K',
  bmw: 'BMW',
  harley: 'HD',
  suzuki: 'S',
  ktm: 'KTM',
  ducati: 'D',
  triumph: 'T',
  royalenfield: 'RE',
  vespa: 'V',
  indian: 'IM',
  aprilia: 'A',
  husqvarna: 'H',
  mvagusta: 'MV',
}

function isKnownValue(v) {
  return v !== null && v !== undefined && Number.isFinite(v)
}

function isKnownPrice(v) {
  return isKnownValue(v) && v > 0
}

function formatShortSpec(label, value, unit = '') {
  if (!isKnownValue(value)) return label ? `${label}정보 없음` : '정보 없음'
  return `${label}${value}${unit}`
}

function formatPrice(value) {
  return formatPriceBandKRW(value)
}

// 시트고 적합 등급 계산
function getFitLabel(seatHeight, inseam) {
  if (!isKnownValue(seatHeight)) return { text: '정보 없음', cls: 'fit-unknown' }
  if (seatHeight <= inseam * 0.95) return { text: '편안', cls: 'fit-good' }
  if (seatHeight <= inseam)        return { text: '적합', cls: 'fit-ok'   }
  if (seatHeight > inseam * 1.05)  return { text: '높음', cls: 'fit-high' }
  return                                  { text: '발끝', cls: 'fit-tip'  }
}

function getBeginnerTags(bike) {
  if (!bike) return []

  const cc = bike.displacement
  const power = bike.power
  const weight = bike.weight
  const seat = bike.seatHeight
  const powerWeight = isKnownValue(power) && isKnownValue(weight) && weight > 0
    ? power / weight
    : null

  const matched = []
  const hasEasyCc = isKnownValue(cc) && cc <= 400
  const hasMiddleCc = isKnownValue(cc) && cc <= 700
  const hasLowSeat = isKnownValue(seat) && seat <= 780
  const hasFriendlySeat = isKnownValue(seat) && seat <= 820
  const hasLightWeight = isKnownValue(weight) && weight <= 180
  const hasMiddleWeight = isKnownValue(weight) && weight <= 210
  const hasHeavyWeight = isKnownValue(weight) && weight >= 230

  if (hasEasyCc && hasMiddleWeight && hasFriendlySeat) matched.push('easy')
  if (hasLowSeat || (['스쿠터', '크루저', '클래식'].includes(bike.category) && hasFriendlySeat)) matched.push('comfort')
  if (hasLightWeight || (bike.category === '미니/입문' && hasMiddleWeight)) matched.push('light')
  if ((isKnownValue(power) && power >= 80) || (isKnownValue(cc) && cc >= 700 && bike.category !== '스쿠터')) matched.push('speedy')
  if (hasHeavyWeight || (isKnownValue(cc) && cc >= 1000) || ['투어러', '크루저'].includes(bike.category)) matched.push('solid')
  if (
    (powerWeight !== null && powerWeight >= 0.32 && hasMiddleWeight) ||
    (['스포츠', '네이키드', '슈퍼모토'].includes(bike.category) && hasMiddleCc && hasMiddleWeight)
  ) {
    matched.push('agile')
  }

  return BEGINNER_TAGS.filter(tag => matched.includes(tag.id))
}

function buildRadarData(targetBikes) {
  return RADAR_KEYS.map(key => {
    const spec = SPECS.find(s => s.key === key)
    const all  = BIKES.map(b => getSpecScore(spec, b)).filter(isKnownValue)
    const mn = Math.min(...all), mx = Math.max(...all)
    const norm = v => {
      if (!isKnownValue(v)) return null
      const t = mx === mn ? 0.5 : (v - mn) / (mx - mn)
      return Math.round((spec.higherBetter === false ? 1 - t : t) * 100)
    }
    const row = { spec: spec.label }
    targetBikes.forEach((b, i) => { row[`bike${i}`] = norm(getSpecScore(spec, b)) })
    return row
  })
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const mainRef = useRef(null)
  const detailTopRef = useRef(null)

  // 검색
  const [searchQuery, setSearchQuery] = useState('')

  // 보조 필터
  const [selBrands, setSelBrands] = useState([])
  const [selCats, setSelCats] = useState([])
  const [selLic,  setSelLic]  = useState('전체')
  const [selDisp, setSelDisp] = useState([])
  const [selBeginnerTags, setSelBeginnerTags] = useState([])

  // 체형 필터
  const [bodyFilterEnabled, setBodyFilterEnabled] = useState(true)
  const [riderHeight, setRiderHeight] = useState(170)
  const [legType,     setLegType]     = useState('normal')

  // 드릴다운
  const [openBrand, setOpenBrand] = useState(null)
  const [openModel, setOpenModel] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // 비교 대상
  const [compared, setCompared] = useState([])

  // 상세 보기 대상
  const [selectedBikeId, setSelectedBikeId] = useState('mt03-2023')

  // 뷰 모드: 'browse' | 'detail' | 'compare'
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
      if (selBrands.length && !selBrands.includes(b.brand)) return false
      if (selCats.length && !selCats.includes(b.category)) return false
      if (selLic === '원동기'   && b.license !== '원동기')   return false
      if (selLic === '소형이륜' && b.license !== '소형이륜') return false
      if (selDisp.length) {
        const match = selDisp.some(id => {
          const cat = DISP_CATS.find(c => c.id === id)
          if (!cat || !isKnownValue(b.displacement)) return false
          return b.displacement >= cat.min && b.displacement <= cat.max
        })
        if (!match) return false
      }
      if (selBeginnerTags.length) {
        const bikeTagIds = getBeginnerTags(b).map(tag => tag.id)
        if (!selBeginnerTags.some(id => bikeTagIds.includes(id))) return false
      }
      if (bodyFilterEnabled && isKnownValue(b.seatHeight) && b.seatHeight > maxSeatHeight) return false
      return true
    })
  }, [searchQuery, selBrands, selCats, selLic, selDisp, selBeginnerTags, bodyFilterEnabled, maxSeatHeight])

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

  // ── 상세 보기 대상
  const selectedBike = useMemo(() =>
    BIKES.find(b => b.id === selectedBikeId) ?? sortedFiltered[0] ?? BIKES[0],
  [selectedBikeId, sortedFiltered])

  const selectedBrand = useMemo(() =>
    BRANDS.find(br => br.id === selectedBike?.brand),
  [selectedBike])

  const sameModelBikes = useMemo(() => {
    if (!selectedBike) return []
    return BIKES
      .filter(b => b.brand === selectedBike.brand && b.model === selectedBike.model)
      .sort((a, b) => b.year - a.year)
  }, [selectedBike])

  const similarBikes = useMemo(() => {
    if (!selectedBike) return []
    return BIKES
      .filter(b => b.id !== selectedBike.id && b.category === selectedBike.category)
      .sort((a, b) => Math.abs(a.displacement - selectedBike.displacement) - Math.abs(b.displacement - selectedBike.displacement))
      .slice(0, 4)
  }, [selectedBike])

  function toggleCompare(id) {
    setCompared(prev =>
      prev.includes(id)  ? prev.filter(x => x !== id)
      : prev.length >= 3 ? prev
      : [...prev, id]
    )
  }

  function scrollDetailToTop() {
    const scroll = () => {
      const main = mainRef.current
      const detailTop = detailTopRef.current
      if (!main || !detailTop) return

      main.scrollTo({
        top: Math.max(0, detailTop.offsetTop - 12),
        behavior: 'smooth',
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    requestAnimationFrame(scroll)
    window.setTimeout(scroll, 0)
  }

  function openBikeDetail(id, options = {}) {
    setSelectedBikeId(id)
    setViewMode('detail')
    if (options.scrollToTop) scrollDetailToTop()
  }

  // ── 제원 표 하이라이트
  const extremes = useMemo(() => {
    const out = {}
    SPECS.forEach(spec => {
      const vals = comparedBikes
        .map(b => getSpecScore(spec, b))
        .filter(v => spec.key === 'priceKRW' ? isKnownPrice(v) : isKnownValue(v))
      out[spec.key] = vals.length
        ? { max: Math.max(...vals), min: Math.min(...vals) }
        : { max: null, min: null }
    })
    return out
  }, [comparedBikes])

  // ── 레이더 데이터
  const radarData = useMemo(() => buildRadarData(comparedBikes), [comparedBikes])
  const selectedRadarData = useMemo(() =>
    selectedBike ? buildRadarData([selectedBike]) : [],
  [selectedBike])

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
    setSelBrands([]); setSelCats([]); setSelLic('전체'); setSelDisp([]); setSelBeginnerTags([])
    setBodyFilterEnabled(true)
    setRiderHeight(170); setLegType('normal')
  }
  function resetCompared() {
    setCompared([])
  }
  const hasFilter = selBrands.length > 0 || selCats.length > 0 || selLic !== '전체' || selDisp.length > 0 || selBeginnerTags.length > 0
    || !bodyFilterEnabled || riderHeight !== 170 || legType !== 'normal'
  const totalCount = filtered.length

  // ─── RENDER ──────────────────────────────────────────────────────────────

  return (
    <div className="aba-root">
      <style>{css}</style>

      {/* ── 사이드바 ──────────────────────────────────────── */}
      <aside className={`sidebar ${mobileFiltersOpen ? 'mobile-open' : ''}`}>

        <div className="sidebar-logo">
          <span className="logo-wordmark">
            오토<span>바이</span>오토
          </span>
          <span className="logo-version"><v0 className="9 0"></v0></span>
        </div>

        {/* 체형 필터 */}
        <section className={`sf-section mobile-filter-panel body-section ${bodyFilterEnabled ? '' : 'off'}`}>
          <div className="sf-heading-row">
            <span className="sf-heading">내 체형</span>
            <label className="filter-toggle">
              <input
                type="checkbox"
                checked={bodyFilterEnabled}
                onChange={e => setBodyFilterEnabled(e.target.checked)}
              />
              <span>적용</span>
            </label>
          </div>

          <div className="sf-label">
            키
            <span className="sf-val">{riderHeight}cm</span>
          </div>
          <input type="range" min={150} max={195} step={1}
            value={riderHeight}
            onChange={e => setRiderHeight(Number(e.target.value))}
            className="aba-slider"
            disabled={!bodyFilterEnabled}
          />
          <div className="slider-ends"><span>150cm</span><span>195cm</span></div>

          <div className="sf-label mt14">다리 길이</div>
          <div className="lic-group">
            {[['short','짧은 편'], ['normal','보통'], ['long','긴 편']].map(([val, label]) => (
              <button
                key={val}
                className={`lic-btn ${legType === val ? 'on' : ''}`}
                onClick={() => setLegType(val)}
                disabled={!bodyFilterEnabled}
              >{label}</button>
            ))}
          </div>

          <div className="height-info">
            {bodyFilterEnabled ? (
              <>
                추정 인심 <strong>{inseam}mm</strong><br />
                권장 시트고 <strong>~{maxSeatHeight}mm 이하</strong>
              </>
            ) : (
              <>체형 조건 없이 전체 모델을 표시합니다</>
            )}
          </div>
        </section>

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

        <div className="mobile-filter-summary">
          <div>
            <strong>{totalCount}종</strong>
            <span>{hasFilter ? '필터 적용 중' : '전체 기종'}</span>
          </div>
          <div className="mobile-filter-actions">
            {hasFilter && (
              <button className="mobile-reset-btn" onClick={resetFilters}>초기화</button>
            )}
            <button
              className={`mobile-filter-btn ${mobileFiltersOpen ? 'on' : ''}`}
              onClick={() => setMobileFiltersOpen(prev => !prev)}
            >
              {mobileFiltersOpen ? '필터 닫기' : '필터 열기'}
            </button>
          </div>
        </div>

        {mobileFiltersOpen && (
          <button
            className="mobile-filter-backdrop"
            aria-label="필터 닫기"
            onClick={() => setMobileFiltersOpen(false)}
          />
        )}

        <div className={`mobile-filter-stack ${mobileFiltersOpen ? 'open' : ''}`}>
          <div className="mobile-sheet-head">
            <div>
              <strong>필터</strong>
              <span>조건을 고르고 바로 결과를 확인하세요</span>
            </div>
            <button className="mobile-sheet-close" onClick={() => setMobileFiltersOpen(false)}>닫기</button>
          </div>

        <section className="sf-section beginner-section">
          <div className="sf-heading-row">
            <span className="sf-heading">쉬운 찾기</span>
          </div>
          <div className="beginner-copy">
            제원표 대신 느낌으로 먼저 골라보세요. 여러 개를 고르면 하나라도 맞는 기종을 보여줍니다.
          </div>
          <div className="beginner-grid">
            {BEGINNER_TAGS.map(tag => (
              <button
                key={tag.id}
                className={`beginner-chip ${selBeginnerTags.includes(tag.id) ? 'on' : ''}`}
                onClick={() => setSelBeginnerTags(prev =>
                  prev.includes(tag.id) ? prev.filter(id => id !== tag.id) : [...prev, tag.id]
                )}
              >
                <span>{tag.label}</span>
                <small>{tag.desc}</small>
              </button>
            ))}
          </div>
        </section>

        {/* 보조 필터 */}
        <section className="sf-section advanced-filter-section">
          <div className="sf-heading-row">
            <span className="sf-heading">필터</span>
            {hasFilter && (
              <button className="reset-btn" onClick={resetFilters}>초기화</button>
            )}
          </div>

          <div className="sf-label">브랜드</div>
          <div className="brand-filter-grid">
            {BRANDS.map(brand => (
              <button
                key={brand.id}
                className={`brand-filter-chip ${selBrands.includes(brand.id) ? 'on' : ''}`}
                onClick={() => setSelBrands(prev =>
                  prev.includes(brand.id) ? prev.filter(id => id !== brand.id) : [...prev, brand.id]
                )}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <div className="sf-label mt14">장르</div>
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
                        const fit    = getFitLabel(bike.seatHeight, inseam)
                        return (
                          <button
                            key={yr}
                            className={`year-row ${isOn ? 'on' : ''} ${selectedBike?.id === bike.id ? 'detail-on' : ''}`}
                            onClick={() => openBikeDetail(bike.id)}
                          >
                            <span className="year-num">{yr}년식</span>
                            <span className={`fit-badge ${fit.cls}`}>{fit.text}</span>
                            <span className="year-price">
                              {formatPrice(bike.priceKRW)}
                            </span>
                            <span className="year-check">{selectedBike?.id === bike.id ? '보기' : isOn ? '✓' : '>'}</span>
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
        </div>
      </aside>

      {/* ── 메인 ──────────────────────────────────────────── */}
      <main className="main" ref={mainRef}>

        <div className="main-header">
          <div className="main-eyebrow">
            AUTO BY AUTO <span>by @4rr.4r4r</span>
          </div>
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
            className={`view-tab ${viewMode === 'detail' ? 'on' : ''}`}
            onClick={() => setViewMode('detail')}
          >
            상세
            {selectedBike && (
              <span className="tab-detail">{selectedBike.model}</span>
            )}
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
          <button
            className="compare-reset"
            onClick={resetCompared}
            disabled={compared.length === 0}
            aria-label="선택된 비교군 초기화"
          >
            초기화
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
                const beginnerTags = getBeginnerTags(bike).slice(0, 3)
                return (
                  <div
                    key={bike.id}
                    className={`bike-card ${isOn ? 'selected' : ''} ${selectedBike?.id === bike.id ? 'detail-selected' : ''}`}
                    onClick={() => openBikeDetail(bike.id)}
                  >
                    {/* 이미지 영역 */}
                    <div
                      className="card-img"
                      style={{
                        background: CAT_GRADIENT[bike.category],
                        '--cat-color': CAT_COLOR[bike.category],
                      }}
                    >
                      <span className="card-cat-label">{bike.category}</span>
                      {bike.image
                        ? <img src={bike.image} alt={bike.model} className="card-photo" />
                        : <span className="card-emoji">🏍</span>
                      }
                    </div>

                    {/* 정보 */}
                    <div className="card-body">
                      <div className="brand-mark" aria-label={`${brand?.name ?? '브랜드'} 로고 자리`}>
                        {brand?.logo
                          ? <img src={brand.logo} alt="" />
                          : <span>{BRAND_MARKS[bike.brand] ?? brand?.name?.slice(0, 2) ?? '?'}</span>
                        }
                      </div>
                      <div className="card-model">{bike.model}</div>
                      <div className="card-meta">{brand?.name} · {bike.year}년식</div>
                      <div className="card-specs">
                        <span>{formatShortSpec('', bike.displacement, 'cc')}</span>
                        <span>{formatShortSpec('', bike.power, 'hp')}</span>
                        <span>{formatShortSpec('시트고 ', bike.seatHeight, 'mm')}</span>
                      </div>
                      {beginnerTags.length > 0 && (
                        <div className="card-beginner-tags">
                          {beginnerTags.map(tag => (
                            <span key={tag.id} className={`tag-${tag.id}`}>{tag.label}</span>
                          ))}
                        </div>
                      )}
                      <div className={`card-price ${isKnownPrice(bike.priceKRW) ? '' : 'unknown'}`}>
                        {formatPrice(bike.priceKRW)}
                      </div>
                    </div>

                    {/* 푸터 */}
                    <div className="card-footer">
                      <span className={`fit-badge ${fit.cls}`}>{fit.text}</span>
                      <button
                        className={`card-btn ${isOn ? 'on' : ''} ${isFull ? 'dim' : ''}`}
                        onClick={e => {
                          e.stopPropagation()
                          if (isFull) return
                          toggleCompare(bike.id)
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

        {/* ── 상세 뷰: 단일 기종 정보 */}
        {viewMode === 'detail' && selectedBike && (
          <>
            <section className="detail-hero" ref={detailTopRef}>
              <div
                className="detail-img"
                style={{
                  background: CAT_GRADIENT[selectedBike.category],
                  '--cat-color': CAT_COLOR[selectedBike.category],
                }}
              >
                <span className="card-cat-label">{selectedBike.category}</span>
                {selectedBike.image
                  ? <img src={selectedBike.image} alt={selectedBike.model} className="card-photo" />
                  : <span className="detail-emoji">🏍</span>
                }
              </div>

              <div className="detail-summary">
                <div className="detail-summary-main">
                  <div className="detail-brand-row">
                    <div className="brand-mark detail-mark" aria-label={`${selectedBrand?.name ?? '브랜드'} 로고 자리`}>
                      {selectedBrand?.logo
                        ? <img src={selectedBrand.logo} alt="" />
                        : <span>{BRAND_MARKS[selectedBike.brand] ?? selectedBrand?.name?.slice(0, 2) ?? '?'}</span>
                      }
                    </div>
                    <div>
                      <div className="detail-brand">{selectedBrand?.name}</div>
                      <h2 className="detail-title">{selectedBike.model}</h2>
                      <div className="detail-meta">{selectedBike.year}년식 · {selectedBike.license}</div>
                    </div>
                  </div>

                  <div className="detail-price">{formatPrice(selectedBike.priceKRW)}</div>

                  <div className="detail-actions">
                    {(() => {
                      const isOn = compared.includes(selectedBike.id)
                      const isFull = compared.length >= 3 && !isOn
                      return (
                        <button
                          className={`detail-action ${isOn ? 'on' : ''}`}
                          disabled={isFull}
                          onClick={() => toggleCompare(selectedBike.id)}
                        >
                          {isOn ? '비교에서 제거' : isFull ? '비교 최대 3개' : '비교에 추가'}
                        </button>
                      )
                    })()}
                    <button className="detail-action ghost" onClick={() => setViewMode('browse')}>
                      탐색으로 돌아가기
                    </button>
                  </div>
                </div>

                <aside className="detail-inline-tools">
                  <div className="detail-tool-block detail-years-block">
                    <div className="panel-label">동일 모델 연식</div>
                    <div className="variant-row detail-variants">
                      {sameModelBikes.map(b => (
                        <button
                          key={b.id}
                          className={`variant-chip ${b.id === selectedBike.id ? 'on' : ''}`}
                          onClick={() => openBikeDetail(b.id)}
                        >
                          {b.year}년식
                          <span>{formatPrice(b.priceKRW)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="detail-tool-block detail-fit-inline">
                    <div className="panel-label">내 체형 기준</div>
                    {(() => {
                      const fit = getFitLabel(selectedBike.seatHeight, inseam)
                      return (
                        <div className="fit-inline-row">
                          <div className={`fit-large fit-mini ${fit.cls}`}>{fit.text}</div>
                          <div className="fit-copy">
                            추정 인심 {inseam}mm · 시트고 {formatShortSpec('', selectedBike.seatHeight, 'mm')}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                </aside>
              </div>
            </section>

            <section className="detail-grid">
              <div className="panel detail-radar">
                <div className="panel-label">해당 모델 제원 그래프</div>
                <ResponsiveContainer width="100%" height={260}>
                  <RadarChart data={selectedRadarData} outerRadius="72%">
                    <PolarGrid stroke="#2a2a2e" />
                    <PolarAngleAxis
                      dataKey="spec"
                      tick={{ fill: '#9a9aa0', fontSize: 11 }}
                    />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name={`${selectedBike.model} '${String(selectedBike.year).slice(2)}`}
                      dataKey="bike0"
                      stroke={COLORS[0]}
                      fill={COLORS[0]}
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="radar-note">전체 등록 모델 기준 0-100 정규화</div>
              </div>

              <div className="panel">
                <div className="panel-label">핵심 제원</div>
                <div className="detail-spec-grid">
                  {SPECS.map(spec => (
                    <div key={spec.key} className="detail-spec">
                      <span>{spec.label}</span>
                      <strong>{fmtVal(spec, selectedBike[spec.key], selectedBike)}</strong>
                      {spec.key !== 'priceKRW' && <em>{spec.unit}</em>}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {similarBikes.length > 0 && (
              <section className="panel">
                <div className="panel-label">비슷한 기종</div>
                <div className="similar-grid">
                  {similarBikes.map(b => {
                    const br = BRANDS.find(item => item.id === b.brand)
                    return (
                      <button key={b.id} className="similar-card" onClick={() => openBikeDetail(b.id, { scrollToTop: true })}>
                        <span className="similar-model">{b.model}</span>
                        <span className="similar-meta">{br?.name} · {b.year}년식</span>
                        <span className="similar-spec">{formatShortSpec('', b.displacement, 'cc')} · {formatPrice(b.priceKRW)}</span>
                      </button>
                    )
                  })}
                </div>
              </section>
            )}
          </>
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
                              const v   = getSpecScore(spec, b)
                              const ext = extremes[spec.key]
                              let cls   = ''
                              const known = spec.key === 'priceKRW' ? isKnownPrice(v) : isKnownValue(v)
                              if (known && spec.higherBetter !== null && ext.max !== null && ext.max !== ext.min) {
                                if (spec.higherBetter ? v === ext.max : v === ext.min) cls = 'best'
                                else if (spec.higherBetter ? v === ext.min : v === ext.max) cls = 'worst'
                              }
                              return (
                                <td key={b.id} className={`td-val ${cls}`}>
                                  {fmtVal(spec, b[spec.key], b)}
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
  font-size: 15px;
  background: var(--bg);
  color: var(--text);
  display: flex;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* ── SIDEBAR ── */
.sidebar {
  width: 292px; min-width: 292px;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--line);
  height: 100vh; position: sticky; top: 0;
  overflow-y: auto; display: flex; flex-direction: column;
}
.sidebar-logo {
  display: flex; align-items: baseline; gap: 8px;
  padding: 24px 20px 20px; border-bottom: 1px solid var(--line);
}
.logo-wordmark {
  font-size: 26px; font-weight: 950; color: var(--text); letter-spacing: 0;
  line-height: 1; white-space: nowrap;
}
.logo-wordmark span { color: var(--orange); }
.logo-version {
  color: var(--muted); font-size: 11px; font-weight: 900;
  letter-spacing: .02em; white-space: nowrap;
}

.search-wrap {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px; border-bottom: 1px solid var(--line);
}
.search-icon { font-size: 13px; flex-shrink: 0; opacity: 0.5; }
.search-input {
  flex: 1; background: transparent; border: none; outline: none;
  font-size: 14px; color: var(--text); font-family: inherit;
}
.search-input::placeholder { color: var(--dim); }
.search-clear {
  background: none; border: none; color: var(--muted);
  font-size: 18px; line-height: 1; cursor: pointer; padding: 0 2px;
}
.search-clear:hover { color: var(--text); }

.mobile-filter-summary,
.mobile-filter-backdrop,
.mobile-sheet-head { display: none; }
.mobile-filter-stack { display: contents; }
.sidebar-logo { order: 1; }
.body-section { order: 2; }
.search-wrap { order: 3; }
.beginner-section { order: 4; }
.advanced-filter-section { order: 5; }
.sf-section.flex1 { order: 6; }

.sf-section { padding: 16px 14px 14px; border-bottom: 1px solid var(--line); }
.sf-section.flex1 { flex: 1; border-bottom: none; }
.sf-heading-row {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;
}
.sf-heading {
  font-size: 12px; letter-spacing: 0; text-transform: uppercase;
  color: var(--muted); font-weight: 700;
}
.reset-btn {
  font-size: 12px; color: var(--orange);
  background: none; border: none; cursor: pointer; padding: 0; font-weight: 600;
}
.reset-btn:hover { opacity: 0.8; }
.result-count { font-size: 12px; color: var(--orange); font-weight: 700; }

.sf-label {
  font-size: 14px; font-weight: 600; color: var(--text);
  margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;
}
.sf-label.mt14 { margin-top: 14px; }
.sf-val { color: var(--orange); font-size: 13px; font-weight: 700; }

.brand-filter-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 5px;
}
.brand-filter-chip {
  min-width: 0; font-size: 12px; padding: 7px 8px; border-radius: 8px;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; font-weight: 600; text-align: left; transition: all .12s;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.brand-filter-chip.on {
  border-color: var(--orange); color: var(--orange); background: rgba(255,92,0,.1);
}
.brand-filter-chip:hover:not(.on) { border-color: #3a3a3f; color: var(--text); }

.cat-grid { display: flex; flex-wrap: wrap; gap: 5px; }
.cat-chip {
  font-size: 12px; padding: 6px 10px; border-radius: 999px;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; font-weight: 500; transition: all .12s;
}
.cat-chip.on { border-color: var(--orange); color: var(--orange); background: rgba(255,92,0,.1); }
.cat-chip:hover:not(.on) { border-color: #3a3a3f; color: var(--text); }

.beginner-copy {
  color: var(--dim); font-size: 12px; line-height: 1.5; margin: -2px 0 10px;
}
.beginner-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px;
}
.beginner-chip {
  min-width: 0; border: 1px solid var(--line); background: rgba(255,255,255,.02);
  color: var(--muted); border-radius: 8px; padding: 8px; cursor: pointer;
  text-align: left; transition: all .12s; display: flex; flex-direction: column; gap: 3px;
}
.beginner-chip span { color: var(--text); font-size: 12px; font-weight: 800; }
.beginner-chip small { color: var(--dim); font-size: 10px; line-height: 1.35; }
.beginner-chip.on {
  border-color: var(--orange); background: rgba(255,92,0,.11);
}
.beginner-chip.on span { color: var(--orange); }
.beginner-chip:hover:not(.on) { border-color: #3a3a3f; }
.lic-group { display: flex; gap: 5px; }
.lic-btn {
  flex: 1; font-size: 12px; padding: 7px 5px; border-radius: 8px;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; font-weight: 500; text-align: center; transition: all .12s;
}
.lic-btn.on { border-color: var(--orange); color: var(--orange); background: rgba(255,92,0,.1); }
.lic-btn:disabled {
  opacity: .45; cursor: not-allowed;
}

.body-section {
  background: rgba(255,92,0,.035);
  border-bottom: 1px solid rgba(255,92,0,.14);
}
.body-section.off {
  background: transparent;
}
.body-section.off .sf-label,
.body-section.off .slider-ends {
  opacity: .55;
}
.filter-toggle {
  display: inline-flex; align-items: center; gap: 6px;
  color: var(--muted); font-size: 12px; font-weight: 800;
  cursor: pointer; user-select: none;
}
.filter-toggle input {
  width: 14px; height: 14px; margin: 0;
  accent-color: var(--orange); cursor: pointer;
}
.filter-toggle span {
  line-height: 1;
}

.aba-slider {
  width: 100%; accent-color: var(--orange); cursor: pointer; margin: 2px 0 4px; display: block;
}
.aba-slider:disabled {
  opacity: .45; cursor: not-allowed;
}
.slider-ends {
  display: flex; justify-content: space-between; font-size: 11px; color: var(--dim); margin-top: 2px;
}

.height-info {
  margin-top: 12px; font-size: 12px; color: var(--muted); line-height: 1.7;
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
.brand-name { flex: 1; font-size: 15px; font-weight: 700; color: var(--text); }
.brand-count { font-size: 12px; color: var(--dim); }
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
.model-name { flex: 1; font-size: 14px; font-weight: 500; color: var(--muted); }
.model-row.open .model-name { color: var(--orange); }

.year-row {
  width: 100%; display: flex; align-items: center; gap: 5px;
  padding: 6px 8px 6px 20px; border-radius: 6px;
  background: transparent; border: 1px solid transparent;
  cursor: pointer; text-align: left; transition: all .12s; margin-bottom: 1px;
}
.year-row:hover:not(.full) { background: rgba(255,255,255,.04); }
.year-row.on { background: rgba(255,92,0,.12); border-color: rgba(255,92,0,.3); }
.year-row.detail-on { border-color: rgba(255,255,255,.18); background: rgba(255,255,255,.05); }
.year-row.full { opacity: 0.3; cursor: not-allowed; }
.year-num { flex: 1; font-size: 13px; color: var(--muted); }
.year-row.on .year-num { color: var(--orange); font-weight: 600; }
.year-price { font-size: 12px; color: var(--dim); }
.year-check { font-size: 11px; color: var(--dim); min-width: 18px; text-align: center; }
.year-row.on .year-check { color: var(--orange); font-weight: 700; }

.fit-badge {
  font-size: 10px; font-weight: 700; padding: 3px 6px;
  border-radius: 4px; flex-shrink: 0;
}
.fit-good { background: rgba(31,182,166,.15); color: #1FB6A6; }
.fit-ok   { background: rgba(255,92,0,.12);  color: var(--orange); }
.fit-tip  { background: rgba(220,180,0,.12); color: #C8A000; }
.fit-high { background: rgba(230,57,70,.16); color: #ff4d5a; }
.fit-unknown { background: rgba(138,138,146,.12); color: var(--muted); }

.empty-msg { font-size: 12px; color: var(--dim); text-align: center; padding: 20px 0; }

/* ── MAIN ── */
.main { flex: 1; padding: 32px 28px 60px; overflow-y: auto; }

.main-header { margin-bottom: 20px; }
.main-eyebrow {
  font-size: 14px; letter-spacing: 0; font-weight: 900;
  color: var(--orange); text-transform: uppercase; margin-bottom: 12px;
}
.main-eyebrow span {
  color: var(--muted); font-size: 12px; letter-spacing: 0; font-weight: 800;
}
.main-title {
  font-size: 40px; font-weight: 800;
  line-height: 1.08; letter-spacing: 0;
}
.main-title .hl { color: var(--orange); }

/* ── 뷰 탭 */
.view-tabs { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: 24px; }
.view-tab {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 19px; border-radius: 999px; font-size: 14px; font-weight: 600;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; transition: all .15s;
}
.view-tab:hover:not(.on) { border-color: #3a3a3f; color: var(--text); }
.view-tab.on { background: var(--orange); border-color: var(--orange); color: #fff; }
.tab-count {
  font-size: 10px; font-weight: 700; opacity: 0.8;
}
.tab-detail {
  max-width: 96px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
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
.compare-reset {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 34px; padding: 8px 12px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.035);
  color: var(--muted); font-size: 13px; font-weight: 700;
  cursor: pointer; transition: all .15s;
}
.compare-reset:hover:not(:disabled) {
  border-color: rgba(255,92,0,.45); color: var(--orange); background: rgba(255,92,0,.08);
}
.compare-reset:disabled {
  opacity: .35; cursor: not-allowed;
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
  display: flex; flex-direction: column; cursor: pointer;
}
.bike-card:hover { border-color: rgba(255,92,0,.25); transform: translateY(-2px); }
.bike-card.selected { border-color: var(--orange); }
.bike-card.detail-selected { box-shadow: 0 0 0 1px rgba(255,255,255,.18) inset; }

.card-img {
  height: 110px; position: relative;
  display: flex; align-items: center; justify-content: center;
}
.card-cat-label {
  position: absolute; top: 8px; left: 10px;
  z-index: 1; max-width: calc(100% - 20px);
  font-size: 10px; font-weight: 800; color: #fff;
  letter-spacing: .08em; text-transform: uppercase;
  padding: 5px 8px 5px 9px; border-radius: 6px;
  background: rgba(8,8,10,.76);
  border: 1px solid color-mix(in srgb, var(--cat-color, #fff) 72%, rgba(255,255,255,.18));
  box-shadow: inset 3px 0 0 var(--cat-color, rgba(255,255,255,.45)), 0 6px 14px rgba(0,0,0,.24);
  backdrop-filter: blur(6px);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.card-emoji { font-size: 38px; filter: drop-shadow(0 2px 8px rgba(0,0,0,.4)); }
.card-photo { width: 100%; height: 100%; object-fit: cover; }

.card-body { padding: 12px 72px 8px 12px; flex: 1; position: relative; }
.brand-mark {
  position: absolute; top: 12px; right: 12px;
  width: 46px; height: 46px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08);
  color: rgba(255,255,255,.78); font-size: 11px; font-weight: 900;
  letter-spacing: 0; overflow: hidden;
}
.brand-mark img { width: 100%; height: 100%; object-fit: contain; padding: 4px; }
.card-model { font-size: 16px; font-weight: 800; color: var(--text); margin-bottom: 2px; }
.card-meta  { font-size: 12px; color: var(--muted); margin-bottom: 8px; }
.card-specs { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 6px; }
.card-specs span {
  font-size: 11px; color: var(--dim); background: rgba(255,255,255,.04);
  padding: 2px 6px; border-radius: 4px; border: 1px solid var(--line);
}
.card-beginner-tags {
  display: flex; flex-wrap: wrap; gap: 4px; margin: -1px 0 7px;
}
.card-beginner-tags span {
  font-size: 10px; font-weight: 800;
  border-radius: 999px; padding: 2px 6px;
}
.card-beginner-tags .tag-easy {
  color: #ff8a3d; background: rgba(255,92,0,.12); border: 1px solid rgba(255,92,0,.28);
}
.card-beginner-tags .tag-comfort {
  color: #1FB6A6; background: rgba(31,182,166,.11); border: 1px solid rgba(31,182,166,.24);
}
.card-beginner-tags .tag-light {
  color: #55b6ff; background: rgba(85,182,255,.11); border: 1px solid rgba(85,182,255,.24);
}
.card-beginner-tags .tag-speedy {
  color: #ff5f6d; background: rgba(255,95,109,.12); border: 1px solid rgba(255,95,109,.26);
}
.card-beginner-tags .tag-solid {
  color: #b66cff; background: rgba(182,108,255,.12); border: 1px solid rgba(182,108,255,.26);
}
.card-beginner-tags .tag-agile {
  color: #d6c84a; background: rgba(214,200,74,.12); border: 1px solid rgba(214,200,74,.26);
}
.card-price { font-size: 14px; font-weight: 700; color: var(--orange); }
.card-price.unknown { color: var(--muted); }

.card-footer {
  padding: 8px 12px 12px;
  display: flex; align-items: center; justify-content: space-between;
}
.card-btn {
  font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 6px;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  cursor: pointer; transition: all .12s; white-space: nowrap;
}
.card-btn:hover:not(.dim) { border-color: var(--orange); color: var(--orange); }
.card-btn.on { background: var(--orange); border-color: var(--orange); color: #fff; }
.card-btn.dim { opacity: 0.3; cursor: not-allowed; }

/* ── 상세 뷰 ── */
.detail-hero {
  display: grid; grid-template-columns: minmax(240px, 42%) 1fr;
  gap: 18px; margin-bottom: 16px; align-items: stretch;
}
.detail-img {
  min-height: 280px; border-radius: 18px; overflow: hidden; position: relative;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--line);
}
.detail-emoji { font-size: 70px; filter: drop-shadow(0 6px 18px rgba(0,0,0,.45)); }
.detail-summary {
  background: var(--panel); border: 1px solid var(--line); border-radius: 18px;
  padding: 22px; display: grid; grid-template-columns: minmax(260px, 1fr) minmax(240px, .62fr);
  gap: 18px; align-items: stretch;
}
.detail-summary-main {
  display: flex; flex-direction: column; justify-content: space-between; gap: 22px; min-width: 0;
}
.detail-brand-row { display: flex; gap: 18px; align-items: flex-start; }
.detail-mark {
  position: static; flex-shrink: 0;
  width: clamp(64px, 7vw, 96px);
  height: clamp(64px, 7vw, 96px);
  border-radius: 14px;
}
.detail-mark img { padding: 6px; }
.detail-brand { font-size: 14px; color: var(--muted); font-weight: 700; margin-bottom: 4px; }
.detail-title { font-size: 42px; line-height: 1; font-weight: 900; letter-spacing: 0; }
.detail-meta { margin-top: 8px; font-size: 14px; color: var(--muted); }
.detail-inline-tools {
  display: flex; flex-direction: column; gap: 12px; min-width: 0; min-height: 0;
}
.detail-tool-block {
  border: 1px solid var(--line); border-radius: 10px; padding: 12px;
  background: rgba(255,255,255,.025); min-height: 0;
}
.detail-years-block {
  flex: 1 1 auto; max-height: 160px; overflow-y: auto;
  scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.22) transparent;
}
.detail-years-block::-webkit-scrollbar { width: 6px; }
.detail-years-block::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,.22); border-radius: 999px;
}
.detail-years-block::-webkit-scrollbar-track { background: transparent; }
.detail-fit-inline {
  flex: 0 0 auto; min-width: 0;
}
.detail-variants { gap: 6px; }
.detail-variants .variant-chip {
  min-width: 92px; padding: 8px 10px; font-size: 13px;
}
.fit-inline-row { display: flex; align-items: center; gap: 10px; min-width: 0; }
.fit-mini { margin-bottom: 0; padding: 7px 10px; font-size: 18px; flex-shrink: 0; }
.detail-price { font-size: 26px; font-weight: 900; color: var(--orange); }
.detail-actions { display: flex; flex-wrap: wrap; gap: 8px; }
.detail-action {
  border: 1px solid var(--orange); background: var(--orange); color: #fff;
  border-radius: 8px; padding: 10px 15px; font-size: 14px; font-weight: 800;
  cursor: pointer; transition: all .12s;
}
.detail-action:hover:not(:disabled) { filter: brightness(1.08); }
.detail-action:disabled { opacity: .4; cursor: not-allowed; }
.detail-action.on { background: transparent; color: var(--orange); }
.detail-action.ghost { background: transparent; border-color: var(--line); color: var(--muted); }
.detail-action.ghost:hover { border-color: #3a3a3f; color: var(--text); }

.detail-grid {
  display: grid; grid-template-columns: minmax(260px, .9fr) 2fr;
  gap: 16px; align-items: stretch;
}
.detail-fit { display: flex; flex-direction: column; justify-content: center; }
.detail-radar { min-height: 340px; }
.fit-large {
  width: max-content; max-width: 100%; border-radius: 8px;
  padding: 8px 12px; font-size: 22px; font-weight: 900; margin-bottom: 12px;
}
.fit-copy { color: var(--muted); font-size: 14px; line-height: 1.7; }
.detail-spec-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px;
}
.detail-spec {
  border: 1px solid var(--line); border-radius: 8px; padding: 10px;
  background: rgba(255,255,255,.025); min-height: 78px;
}
.detail-spec span { display: block; font-size: 12px; color: var(--muted); font-weight: 700; margin-bottom: 8px; }
.detail-spec strong { display: inline; font-size: 20px; font-weight: 900; color: var(--text); }
.detail-spec em { font-style: normal; color: var(--dim); font-size: 12px; margin-left: 4px; }

.variant-row { display: flex; flex-wrap: wrap; gap: 8px; }
.variant-chip {
  border: 1px solid var(--line); background: transparent; color: var(--text);
  border-radius: 8px; padding: 8px 10px; cursor: pointer; text-align: left;
  font-size: 14px; font-weight: 800; min-width: 112px;
}
.variant-chip span { display: block; color: var(--muted); font-size: 12px; margin-top: 4px; font-weight: 600; }
.variant-chip.on { border-color: var(--orange); color: var(--orange); background: rgba(255,92,0,.1); }
.variant-chip:hover:not(.on) { border-color: #3a3a3f; }

.similar-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 8px;
}
.similar-card {
  border: 1px solid var(--line); background: rgba(255,255,255,.025); color: var(--text);
  border-radius: 8px; padding: 12px; text-align: left; cursor: pointer;
}
.similar-card:hover { border-color: rgba(255,92,0,.35); }
.similar-model { display: block; font-size: 15px; font-weight: 900; margin-bottom: 5px; }
.similar-meta, .similar-spec { display: block; color: var(--muted); font-size: 12px; line-height: 1.5; }

/* ── 비교 뷰 */
.chips-bar {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: 8px; margin-bottom: 20px; min-height: 36px;
}
.chips-hint { font-size: 14px; color: var(--muted); }
.chips-more { font-size: 13px; color: var(--dim); }

.chip {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 999px; padding: 6px 8px 6px 12px;
  font-size: 14px; font-weight: 600;
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
  font-size: 12px; letter-spacing: 0; text-transform: uppercase;
  color: var(--muted); font-weight: 700; margin-bottom: 14px;
}
.radar-note { font-size: 12px; color: var(--dim); text-align: center; margin-top: 6px; }

.table-scroll { overflow-x: auto; margin: 0 -4px; }
.spec-table { width: 100%; border-collapse: collapse; font-size: 15px; }
.spec-table th, .spec-table td {
  padding: 10px; text-align: right; border-bottom: 1px solid var(--line); white-space: nowrap;
}
.th-spec, .td-spec { text-align: left; }
.th-model { display: block; font-weight: 800; font-size: 16px; color: var(--c); }
.th-year  { display: block; font-size: 12px; color: var(--muted); }
.td-spec  { color: var(--muted); font-weight: 600; }
.td-unit  { display: block; font-size: 12px; color: var(--dim); font-weight: 400; }
.td-val   { font-variant-numeric: tabular-nums; font-weight: 600; }
.td-val.best  { color: var(--orange); font-weight: 800; }
.td-val.worst { color: var(--dim); }
.badge { font-size: 9px; margin-left: 4px; }

.legend-row { display: flex; gap: 16px; margin-top: 12px; font-size: 11px; }
.lg      { color: var(--muted); }
.lg.best { color: var(--orange); }

.foot { text-align: center; color: var(--dim); font-size: 11px; margin-top: 28px; }

@media (max-width: 860px) {
  .aba-root { display: block; min-height: 100vh; }
  .sidebar {
    width: 100%; min-width: 0; height: auto; position: relative;
    border-right: none; border-bottom: 1px solid var(--line);
    overflow: visible;
  }
  .sidebar-logo { padding: 18px 18px 16px; }
  .logo-wordmark { font-size: 24px; }
  .mobile-filter-summary {
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
    padding: 10px 16px 12px; border-bottom: 1px solid var(--line);
    background: var(--sidebar-bg);
  }
  .mobile-filter-summary strong {
    display: block; color: var(--text); font-size: 14px; font-weight: 900;
  }
  .mobile-filter-summary span {
    display: block; color: var(--muted); font-size: 11px; margin-top: 2px;
  }
  .sidebar-logo { order: 1; }
  .search-wrap { order: 2; }
  .mobile-filter-summary { order: 3; }
  .mobile-filter-stack { order: 4; }
  .mobile-filter-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
  .mobile-filter-btn,
  .mobile-reset-btn,
  .mobile-sheet-close {
    border: 1px solid var(--line); background: rgba(255,255,255,.03); color: var(--text);
    border-radius: 999px; padding: 7px 10px; font-size: 12px; font-weight: 800;
    cursor: pointer;
  }
  .mobile-filter-btn.on,
  .mobile-reset-btn,
  .mobile-sheet-close {
    border-color: rgba(255,92,0,.35); color: var(--orange); background: rgba(255,92,0,.09);
  }
  .mobile-filter-backdrop {
    display: block; position: fixed; inset: 0; z-index: 18;
    border: 0; padding: 0; background: rgba(0,0,0,.52);
    backdrop-filter: blur(2px); cursor: pointer;
  }
  .mobile-filter-stack {
    display: none; position: fixed; left: 0; right: 0; bottom: 0; z-index: 19;
    max-height: min(82vh, 720px); overflow-y: auto; overscroll-behavior: contain;
    background: var(--sidebar-bg); border-top: 1px solid rgba(255,255,255,.12);
    border-radius: 18px 18px 0 0; box-shadow: 0 -24px 60px rgba(0,0,0,.5);
    padding-bottom: max(14px, env(safe-area-inset-bottom));
  }
  .sidebar.mobile-open .mobile-filter-stack { display: block; }
  .mobile-sheet-head {
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    position: sticky; top: 0; z-index: 1; padding: 14px 16px 12px;
    background: rgba(13,13,15,.96); border-bottom: 1px solid var(--line);
  }
  .mobile-sheet-head strong { display: block; color: var(--text); font-size: 16px; font-weight: 900; }
  .mobile-sheet-head span { display: block; color: var(--muted); font-size: 11px; margin-top: 3px; }
  .sf-section { padding: 14px 16px; }
  .sf-section.flex1 {
    max-height: 280px; overflow-y: auto;
    border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  }
  .main { padding: 24px 16px 44px; }
  .main-title { font-size: 34px; }
  .card-grid { grid-template-columns: repeat(auto-fill, minmax(168px, 1fr)); gap: 10px; }
  .detail-hero, .detail-grid { grid-template-columns: 1fr; }
  .detail-summary { grid-template-columns: 1fr; }
  .detail-inline-tools { flex-direction: column; }
  .detail-img { min-height: 220px; }
  .panel { padding: 16px; border-radius: 14px; }
  .spec-table { font-size: 13px; }
  .spec-table th, .spec-table td { padding: 9px 8px; }
}

@media (max-width: 520px) {
  .search-wrap { padding: 10px 16px; }
  .lic-group { flex-wrap: wrap; }
  .lic-btn { min-width: 78px; }
  .main { padding: 20px 12px 36px; }
  .main-header { margin-bottom: 16px; }
  .main-eyebrow { margin-bottom: 10px; }
  .logo-wordmark { font-size: 22px; }
  .main-title { font-size: 30px; }
  .view-tabs { position: sticky; top: 0; z-index: 5; background: var(--bg); padding: 8px 0; margin-bottom: 16px; }
  .view-tab { flex: 1; justify-content: center; padding: 8px 12px; }
  .tab-detail { display: none; }
  .card-grid { grid-template-columns: 1fr; }
  .bike-card { border-radius: 12px; }
  .card-img { height: 128px; }
  .card-body { padding-right: 76px; }
  .brand-mark { width: 48px; height: 48px; }
  .card-footer { gap: 12px; }
  .card-btn { min-width: 76px; }
  .detail-summary { padding: 16px; border-radius: 14px; }
  .detail-brand-row { gap: 12px; }
  .detail-mark { width: 58px; height: 58px; border-radius: 12px; }
  .detail-mark img { padding: 5px; }
  .detail-title { font-size: 30px; }
  .detail-inline-tools { gap: 8px; }
  .detail-tool-block { padding: 10px; }
  .detail-variants .variant-chip { flex: 1 1 96px; min-width: 0; }
  .fit-inline-row { align-items: flex-start; flex-direction: column; gap: 8px; }
  .detail-price { font-size: 22px; }
  .detail-actions { flex-direction: column; }
  .detail-action { width: 100%; }
  .detail-spec-grid, .similar-grid { grid-template-columns: 1fr; }
  .chips-bar { gap: 6px; }
  .chip { max-width: 100%; }
  .chip-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .legend-row { flex-direction: column; gap: 6px; }
}
`
