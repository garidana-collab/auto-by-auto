import BikeCard from './BikeCard'

export default function BrowseView({
  bikes,
  brands,
  compared,
  inseam,
  selectedBikeId,
  onOpenDetail,
  onToggleCompare,
}) {
  if (bikes.length === 0) {
    return (
      <div className="main-empty">
        <div className="empty-icon">🔍</div>
        <div className="empty-text">조건에 맞는 기종이 없습니다</div>
        <div className="empty-sub">필터를 조정해 보세요</div>
      </div>
    )
  }

  return (
    <div className="card-grid">
      {bikes.map(bike => (
        <BikeCard
          key={bike.id}
          bike={bike}
          brand={brands.find(br => br.id === bike.brand)}
          compared={compared}
          inseam={inseam}
          selectedBikeId={selectedBikeId}
          onOpenDetail={onOpenDetail}
          onToggleCompare={onToggleCompare}
        />
      ))}
    </div>
  )
}
