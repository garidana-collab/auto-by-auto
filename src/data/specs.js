// ─── 제원 항목 정의 ───────────────────────────────────────────────────────────
//
// higherBetter:
//   true  — 높을수록 좋음 (출력, 토크, 연비, 최고속도)
//   false — 낮을수록 좋음 (무게, 가격)
//   null  — 우열 없음 (배기량, 시트고)

export const SPECS = [
  { key: 'displacement', label: '배기량',   unit: 'cc',   higherBetter: null  },
  { key: 'power',        label: '최고출력', unit: 'hp',   higherBetter: true  },
  { key: 'torque',       label: '토크',     unit: 'Nm',   higherBetter: true  },
  { key: 'weight',       label: '공차중량', unit: 'kg',   higherBetter: false },
  { key: 'seatHeight',   label: '시트고',   unit: 'mm',   higherBetter: null  },
  { key: 'fuelEconomy',  label: '연비',     unit: 'km/L', higherBetter: true  },
  { key: 'tankCapacity', label: '연료탱크', unit: 'L',    higherBetter: true  },
  { key: 'topSpeed',     label: '최고속도', unit: 'km/h', higherBetter: true  },
  { key: 'priceKRW',     label: '중고시세', unit: '만원', higherBetter: false },
]

// 레이더 차트에 표시할 항목 키
export const RADAR_KEYS = ['power', 'torque', 'fuelEconomy', 'topSpeed', 'weight']

// 비교 시리즈 색상 (최대 3개)
export const COLORS = ['#FF5C00', '#1FB6A6', '#7C5CFF']

// 제원 값 포맷터
export function fmtVal(spec, v) {
  if (v === null || v === undefined || Number.isNaN(v)) return '정보 없음'
  if (spec.key === 'priceKRW' && v <= 0) return '정보 없음'
  if (spec.key === 'priceKRW') return Math.round(v / 10000).toLocaleString() + '만'
  return v.toLocaleString()
}
