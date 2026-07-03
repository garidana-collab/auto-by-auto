import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

import { BRANDS } from '../data/bikes'
import { SPECS, COLORS, fmtVal } from '../data/specs'
import { formatPrice, formatShortSpec, getFitLabel } from '../lib/bikeDisplay'
import { BRAND_MARKS, CAT_COLOR, CAT_GRADIENT } from '../lib/bikeTheme'

export default function DetailView({
  selectedBike,
  selectedBrand,
  compared,
  sameModelBikes,
  similarBikes,
  inseam,
  selectedRadarData,
  detailTopRef,
  onOpenDetail,
  onToggleCompare,
  onBackToBrowse,
}) {
  const isCompared = compared.includes(selectedBike.id)
  const isCompareFull = compared.length >= 3 && !isCompared
  const fit = getFitLabel(selectedBike.seatHeight, inseam)

  return (
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
              <button
                className={`detail-action ${isCompared ? 'on' : ''}`}
                disabled={isCompareFull}
                onClick={() => onToggleCompare(selectedBike.id)}
              >
                {isCompared ? '비교에서 제거' : isCompareFull ? '비교 최대 3개' : '비교에 추가'}
              </button>
              <button className="detail-action ghost" onClick={onBackToBrowse}>
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
                    onClick={() => onOpenDetail(b.id)}
                  >
                    {b.year}년식
                    <span>{formatPrice(b.priceKRW)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="detail-tool-block detail-fit-inline">
              <div className="panel-label">내 체형 기준</div>
              <div className="fit-inline-row">
                <div className={`fit-large fit-mini ${fit.cls}`}>{fit.text}</div>
                <div className="fit-copy">
                  추정 인심 {inseam}mm · 시트고 {formatShortSpec('', selectedBike.seatHeight, 'mm')}
                </div>
              </div>
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
                <button key={b.id} className="similar-card" onClick={() => onOpenDetail(b.id, { scrollToTop: true })}>
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
  )
}
