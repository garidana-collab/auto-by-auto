import { useState, useMemo, useRef } from 'react'

import BrowseView from './components/BrowseView'
import CompareView from './components/CompareView'
import DetailView from './components/DetailView'
import Sidebar from './components/Sidebar'
import { BRANDS, BIKES } from './data/bikes'
import { SPECS, getSpecScore } from './data/specs'
import {
  DEFAULT_RIDER_HEIGHT,
  LEG_FACTOR,
  MAX_RIDER_HEIGHT,
  MIN_RIDER_HEIGHT,
  buildRadarData,
  clampRiderHeight,
  getBeginnerTags,
  isKnownPrice,
  isKnownValue,
} from './lib/bikeDisplay'
import './App.css'

// ─── 상수 ─────────────────────────────────────────────────────────────────────

const DISP_CATS = [
  { id: '125이하',   label: '125cc',    min: 0,    max: 125     },
  { id: '쿼터',     label: '쿼터급',   min: 126,  max: 400     },
  { id: '미들',     label: '미들급',   min: 401,  max: 700     },
  { id: '리터',     label: '리터급',   min: 701,  max: 1000    },
  { id: '오버리터', label: '오버리터', min: 1001, max: Infinity },
]

const CATEGORY_ORDER = ['미니/입문', '스쿠터', '네이키드', '스포츠', '클래식', '어드벤처', '크루저', '투어러']



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
  const [riderHeight, setRiderHeight] = useState(DEFAULT_RIDER_HEIGHT)
  const [heightDraft, setHeightDraft] = useState(String(DEFAULT_RIDER_HEIGHT))
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
  function commitRiderHeight(value) {
    const next = clampRiderHeight(Number(value))
    setRiderHeight(next)
    setHeightDraft(String(next))
  }
  function handleHeightInputChange(e) {
    const next = e.target.value.replace(/[^\d]/g, '').slice(0, 3)
    const numeric = Number(next)
    setHeightDraft(next)
    if (next !== '' && Number.isFinite(numeric) && numeric >= MIN_RIDER_HEIGHT && numeric <= MAX_RIDER_HEIGHT) {
      setRiderHeight(numeric)
    }
  }

  // ── 필터 초기화
  function resetFilters() {
    setSelBrands([]); setSelCats([]); setSelLic('전체'); setSelDisp([]); setSelBeginnerTags([])
    setBodyFilterEnabled(true)
    commitRiderHeight(DEFAULT_RIDER_HEIGHT); setLegType('normal')
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
      {/* ── 사이드바 ──────────────────────────────────────── */}
      <Sidebar
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        bodyFilterEnabled={bodyFilterEnabled}
        setBodyFilterEnabled={setBodyFilterEnabled}
        heightDraft={heightDraft}
        riderHeight={riderHeight}
        legType={legType}
        setLegType={setLegType}
        inseam={inseam}
        maxSeatHeight={maxSeatHeight}
        handleHeightInputChange={handleHeightInputChange}
        commitRiderHeight={commitRiderHeight}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={totalCount}
        hasFilter={hasFilter}
        resetFilters={resetFilters}
        selBeginnerTags={selBeginnerTags}
        setSelBeginnerTags={setSelBeginnerTags}
        selBrands={selBrands}
        setSelBrands={setSelBrands}
        selCats={selCats}
        setSelCats={setSelCats}
        selLic={selLic}
        setSelLic={setSelLic}
        selDisp={selDisp}
        setSelDisp={setSelDisp}
        dispCats={DISP_CATS}
        brandList={brandList}
        modelList={modelList}
        openBrand={openBrand}
        openModel={openModel}
        handleBrandClick={handleBrandClick}
        handleModelClick={handleModelClick}
        compared={compared}
        selectedBike={selectedBike}
        openBikeDetail={openBikeDetail}
      />
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
          <BrowseView
            bikes={sortedFiltered}
            brands={BRANDS}
            compared={compared}
            inseam={inseam}
            selectedBikeId={selectedBike?.id}
            onOpenDetail={openBikeDetail}
            onToggleCompare={toggleCompare}
          />
        )}
        {/* ── 상세 뷰: 단일 기종 정보 */}
        {viewMode === 'detail' && selectedBike && (
          <DetailView
            selectedBike={selectedBike}
            selectedBrand={selectedBrand}
            compared={compared}
            sameModelBikes={sameModelBikes}
            similarBikes={similarBikes}
            inseam={inseam}
            selectedRadarData={selectedRadarData}
            detailTopRef={detailTopRef}
            onOpenDetail={openBikeDetail}
            onToggleCompare={toggleCompare}
            onBackToBrowse={() => setViewMode('browse')}
          />
        )}
        {/* ── 비교 뷰 */}
        {viewMode === 'compare' && (
          <CompareView
            comparedBikes={comparedBikes}
            radarData={radarData}
            extremes={extremes}
            onToggleCompare={toggleCompare}
          />
        )}

        <footer className="foot">
          프로토타입 · 데이터는 예시이며 실제 제원과 다를 수 있습니다
        </footer>
      </main>
    </div>
  )
}
