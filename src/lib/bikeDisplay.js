import { BIKES } from '../data/bikes'
import { SPECS, RADAR_KEYS, getSpecScore, formatPriceBandKRW } from '../data/specs'

export const MIN_RIDER_HEIGHT = 150
export const MAX_RIDER_HEIGHT = 195
export const DEFAULT_RIDER_HEIGHT = 170
export const LEG_FACTOR = { short: 0.42, normal: 0.45, long: 0.48 }

export const BEGINNER_TAGS = [
  { id: 'easy', label: '입문 친화', desc: '배기량과 무게 부담이 낮은 편' },
  { id: 'comfort', label: '편안함', desc: '시트고가 낮거나 자세 부담이 적은 편' },
  { id: 'light', label: '가벼움', desc: '차체가 가볍고 다루기 쉬운 편' },
  { id: 'speedy', label: '속도감', desc: '출력이나 배기량이 높은 편' },
  { id: 'solid', label: '묵직함', desc: '차체가 크고 안정감이 큰 편' },
  { id: 'agile', label: '날렵함', desc: '무게 대비 출력이 좋은 편' },
]

export function clampRiderHeight(value) {
  if (!Number.isFinite(value)) return DEFAULT_RIDER_HEIGHT
  return Math.min(MAX_RIDER_HEIGHT, Math.max(MIN_RIDER_HEIGHT, Math.round(value)))
}

export function isKnownValue(v) {
  return v !== null && v !== undefined && Number.isFinite(v)
}

export function isKnownPrice(v) {
  return isKnownValue(v) && v > 0
}

export function formatShortSpec(label, value, unit = '') {
  if (!isKnownValue(value)) return label ? `${label}정보 없음` : '정보 없음'
  return `${label}${value}${unit}`
}

export function formatPrice(value) {
  return formatPriceBandKRW(value)
}

export function getFitLabel(seatHeight, inseam) {
  if (!isKnownValue(seatHeight)) return { text: '정보 없음', cls: 'fit-unknown' }
  if (seatHeight <= inseam * 0.95) return { text: '편안', cls: 'fit-good' }
  if (seatHeight <= inseam) return { text: '적합', cls: 'fit-ok' }
  if (seatHeight > inseam * 1.05) return { text: '높음', cls: 'fit-high' }
  return { text: '발끝', cls: 'fit-tip' }
}

export function getBeginnerTags(bike) {
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

export function buildRadarData(targetBikes) {
  return RADAR_KEYS.map(key => {
    const spec = SPECS.find(s => s.key === key)
    const all = BIKES.map(b => getSpecScore(spec, b)).filter(isKnownValue)
    const mn = Math.min(...all)
    const mx = Math.max(...all)
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
