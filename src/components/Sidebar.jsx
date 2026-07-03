import { BRANDS, BIKES, ALL_CATEGORIES } from '../data/bikes'
import {
  BEGINNER_TAGS,
  MAX_RIDER_HEIGHT,
  MIN_RIDER_HEIGHT,
  formatPrice,
  getFitLabel,
} from '../lib/bikeDisplay'

export default function Sidebar({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  bodyFilterEnabled,
  setBodyFilterEnabled,
  heightDraft,
  riderHeight,
  legType,
  setLegType,
  inseam,
  maxSeatHeight,
  handleHeightInputChange,
  commitRiderHeight,
  searchQuery,
  setSearchQuery,
  totalCount,
  hasFilter,
  resetFilters,
  selBeginnerTags,
  setSelBeginnerTags,
  selBrands,
  setSelBrands,
  selCats,
  setSelCats,
  selLic,
  setSelLic,
  selDisp,
  setSelDisp,
  dispCats,
  brandList,
  modelList,
  openBrand,
  openModel,
  handleBrandClick,
  handleModelClick,
  compared,
  selectedBike,
  openBikeDetail,
}) {
  return (
    <aside className={`sidebar ${mobileFiltersOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-logo">
        <span className="logo-wordmark">
          오토<span>바이</span>오토
        </span>
        <span className="logo-version">v0.9.2</span>
      </div>

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
          <span className="height-control">
            <input
              type="number"
              inputMode="numeric"
              min={MIN_RIDER_HEIGHT}
              max={MAX_RIDER_HEIGHT}
              step={1}
              value={heightDraft}
              onChange={handleHeightInputChange}
              onBlur={e => commitRiderHeight(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') e.currentTarget.blur()
              }}
              onFocus={e => e.currentTarget.select()}
              className="sf-height-input"
              disabled={!bodyFilterEnabled}
              aria-label="키 입력"
            />
            <span className="sf-val">cm</span>
          </span>
        </div>
        <input
          type="range"
          min={MIN_RIDER_HEIGHT}
          max={MAX_RIDER_HEIGHT}
          step={1}
          value={riderHeight}
          onChange={e => commitRiderHeight(e.target.value)}
          className="aba-slider"
          disabled={!bodyFilterEnabled}
        />
        <div className="slider-ends"><span>{MIN_RIDER_HEIGHT}cm</span><span>{MAX_RIDER_HEIGHT}cm</span></div>

        <div className="sf-label mt14">다리 길이</div>
        <div className="lic-group">
          {[['short', '짧은 편'], ['normal', '보통'], ['long', '긴 편']].map(([val, label]) => (
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
            {[['전체', '전체'], ['원동기', '원동기 이하'], ['소형이륜', '소형이륜']].map(([val, label]) => (
              <button
                key={val}
                className={`lic-btn ${selLic === val ? 'on' : ''}`}
                onClick={() => setSelLic(val)}
              >{label}</button>
            ))}
          </div>

          <div className="sf-label mt14">배기량</div>
          <div className="cat-grid">
            {dispCats.map(cat => (
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
                        const isOn = compared.includes(bike.id)
                        const fit = getFitLabel(bike.seatHeight, inseam)
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
  )
}
