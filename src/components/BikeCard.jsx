import {
  formatPrice,
  formatShortSpec,
  getBeginnerTags,
  getFitLabel,
  isKnownPrice,
} from '../lib/bikeDisplay'
import { BRAND_MARKS, CAT_COLOR, CAT_GRADIENT } from '../lib/bikeTheme'

export default function BikeCard({
  bike,
  brand,
  compared,
  inseam,
  selectedBikeId,
  onOpenDetail,
  onToggleCompare,
}) {
  const isOn = compared.includes(bike.id)
  const isFull = compared.length >= 3 && !isOn
  const fit = getFitLabel(bike.seatHeight, inseam)
  const beginnerTags = getBeginnerTags(bike).slice(0, 3)

  return (
    <div
      className={`bike-card ${isOn ? 'selected' : ''} ${selectedBikeId === bike.id ? 'detail-selected' : ''}`}
      onClick={() => onOpenDetail(bike.id)}
    >
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

      <div className="card-footer">
        <span className={`fit-badge ${fit.cls}`}>{fit.text}</span>
        <button
          className={`card-btn ${isOn ? 'on' : ''} ${isFull ? 'dim' : ''}`}
          onClick={e => {
            e.stopPropagation()
            if (isFull) return
            onToggleCompare(bike.id)
          }}
        >
          {isOn ? '✓ 비교 중' : '+ 비교'}
        </button>
      </div>
    </div>
  )
}
