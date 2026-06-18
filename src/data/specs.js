// ─── 제원 항목 정의 ───────────────────────────────────────────────────────────
//
// higherBetter:
//   true  — 높을수록 좋음 (출력, 토크, 연비 등급, 최고속도 등급)
//   false — 낮을수록 좋음 (무게, 가격대)
//   null  — 우열 없음 (배기량, 시트고)

export const SPECS = [
  { key: 'displacement', label: '배기량',   unit: 'cc',   higherBetter: null  },
  { key: 'power',        label: '최고출력', unit: 'hp',   higherBetter: true  },
  { key: 'torque',       label: '토크',     unit: 'Nm',   higherBetter: true  },
  { key: 'weight',       label: '공차중량', unit: 'kg',   higherBetter: false },
  { key: 'seatHeight',   label: '시트고',   unit: 'mm',   higherBetter: null  },
  { key: 'fuelEconomy',  label: '연비',     unit: '',     higherBetter: true  },
  { key: 'tankCapacity', label: '연료탱크', unit: 'L',    higherBetter: true  },
  { key: 'topSpeed',     label: '최고속도', unit: '',     higherBetter: true  },
  { key: 'priceKRW',     label: '가격대',   unit: '만원', higherBetter: false },
]

// 레이더 차트에 표시할 항목 키
export const RADAR_KEYS = ['power', 'torque', 'fuelEconomy', 'topSpeed', 'weight']

// 비교 시리즈 색상 (최대 3개)
export const COLORS = ['#FF5C00', '#1FB6A6', '#7C5CFF']

const GRADE_LABELS = ['하', '중하', '중', '중상', '상', '최상']

function isKnownNumber(v) {
  return v !== null && v !== undefined && Number.isFinite(v)
}

function gradeLabel(score) {
  if (!isKnownNumber(score)) return '정보 없음'
  return GRADE_LABELS[Math.max(1, Math.min(6, Math.round(score))) - 1]
}

export function formatPriceBandKRW(value) {
  if (!isKnownNumber(value) || value <= 0) return '정보 없음'

  const priceManwon = Math.round(value / 10000)
  if (priceManwon <= 500) return '100 - 500만원대'

  const padding =
    priceManwon <= 1000 ? 250 :
    priceManwon <= 2000 ? 500 :
    750
  const lower = Math.max(100, Math.floor((priceManwon - padding) / 500) * 500)
  const upper = Math.max(500, Math.ceil((priceManwon + padding) / 500) * 500)

  return `${lower.toLocaleString()} - ${upper.toLocaleString()}만원대`
}

function fuelEconomyGrade(value) {
  if (!isKnownNumber(value)) return null
  if (value < 16) return 1
  if (value < 20) return 2
  if (value < 25) return 3
  if (value < 30) return 4
  if (value < 40) return 5
  return 6
}

function topSpeedGrade(value) {
  if (!isKnownNumber(value)) return null
  if (value < 120) return 1
  if (value < 160) return 2
  if (value < 200) return 3
  if (value < 240) return 4
  if (value < 280) return 5
  return 6
}

function estimateTopSpeed(bike) {
  if (!bike) return null
  if (isKnownNumber(bike.topSpeed)) return bike.topSpeed

  const power = bike.power
  if (!isKnownNumber(power)) {
    const displacement = bike.displacement
    if (!isKnownNumber(displacement)) return null
    if (bike.category === '크루저') {
      if (displacement < 500) return 130
      if (displacement < 1000) return 165
      return 195
    }
    if (bike.category === '스쿠터') {
      if (displacement <= 125) return 95
      if (displacement <= 250) return 125
      if (displacement <= 400) return 145
      return 165
    }
    if (bike.category === '어드벤처') {
      if (displacement <= 250) return 130
      if (displacement <= 500) return 160
      if (displacement <= 800) return 195
      return 215
    }
    if (displacement <= 125) return 105
    if (displacement <= 250) return 140
    if (displacement <= 400) return 165
    if (displacement <= 700) return 195
    if (displacement <= 1000) return 230
    return 260
  }

  let estimated =
    power <= 15 ? 105 :
    power <= 25 ? 135 :
    power <= 45 ? 165 :
    power <= 75 ? 195 :
    power <= 120 ? 225 :
    power <= 170 ? 260 :
    295

  if (bike.category === '스쿠터') estimated -= 10
  if (bike.category === '어드벤처' || bike.category === '투어러') estimated -= 5
  if (bike.category === '스포츠' && power > 100) estimated += 10

  return estimated
}

export function getSpecScore(spec, bike) {
  if (!spec || !bike) return null
  if (spec.key === 'fuelEconomy') return fuelEconomyGrade(bike.fuelEconomy)
  if (spec.key === 'topSpeed') return topSpeedGrade(estimateTopSpeed(bike))
  return bike[spec.key]
}

// 제원 값 포맷터
export function fmtVal(spec, v, bike = null) {
  if (spec.key === 'fuelEconomy') return gradeLabel(fuelEconomyGrade(v))
  if (spec.key === 'topSpeed') return gradeLabel(topSpeedGrade(estimateTopSpeed(bike ?? { topSpeed: v })))
  if (v === null || v === undefined || Number.isNaN(v)) return '정보 없음'
  if (spec.key === 'priceKRW' && v <= 0) return '정보 없음'
  if (spec.key === 'priceKRW') return formatPriceBandKRW(v)
  return v.toLocaleString()
}
