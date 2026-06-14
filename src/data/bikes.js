// ─── 브랜드 ───────────────────────────────────────────────────────────────────

export const BRANDS = [
  { id: 'honda',    name: 'Honda'           },
  { id: 'yamaha',   name: 'Yamaha'          },
  { id: 'kawasaki', name: 'Kawasaki'        },
  { id: 'bmw',      name: 'BMW Motorrad'    },
  { id: 'harley',   name: 'Harley-Davidson' },
]

// ─── 바이크 제원 ──────────────────────────────────────────────────────────────
//
// license:
//   "원동기"  — 125cc 이하, 원동기면허로 운행 가능
//   "소형이륜" — 125cc 초과, 이륜자동차(소형) 면허 필요
//
// 항목: id, brand, model, year, category, license,
//       displacement(cc), power(hp), torque(Nm), weight(kg),
//       seatHeight(mm), fuelEconomy(km/L), tankCapacity(L),
//       topSpeed(km/h), priceKRW(원)

export const BIKES = [
  // ── Honda ─────────────────────────────────────────────────────────────────
  {
    id: 'grom-2022', brand: 'honda', model: 'GROM', year: 2022,
    category: '미니/입문', license: '원동기',
    displacement: 124, power: 9.7,  torque: 10.8, weight: 102,
    seatHeight: 761, fuelEconomy: 62, tankCapacity: 6.0,
    topSpeed: 90,  priceKRW: 3200000,
  },
  {
    id: 'grom-2017', brand: 'honda', model: 'GROM', year: 2017,
    category: '미니/입문', license: '원동기',
    displacement: 125, power: 9.6,  torque: 11.0, weight: 104,
    seatHeight: 760, fuelEconomy: 60, tankCapacity: 5.5,
    topSpeed: 88,  priceKRW: 2500000,
  },
  {
    id: 'pcx125-2023', brand: 'honda', model: 'PCX 125', year: 2023,
    category: '스쿠터', license: '원동기',
    displacement: 125, power: 12.3, torque: 11.8, weight: 132,
    seatHeight: 764, fuelEconomy: 48, tankCapacity: 8.1,
    topSpeed: 105, priceKRW: 2900000,
  },
  {
    id: 'pcx125-2021', brand: 'honda', model: 'PCX 125', year: 2021,
    category: '스쿠터', license: '원동기',
    displacement: 125, power: 12.0, torque: 11.5, weight: 131,
    seatHeight: 764, fuelEconomy: 47, tankCapacity: 8.1,
    topSpeed: 102, priceKRW: 2500000,
  },
  {
    id: 'cb650r-2023', brand: 'honda', model: 'CB650R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 649, power: 95,   torque: 64,   weight: 202,
    seatHeight: 810, fuelEconomy: 22, tankCapacity: 15.4,
    topSpeed: 210, priceKRW: 9800000,
  },
  {
    id: 'goldwing-2021', brand: 'honda', model: 'Gold Wing', year: 2021,
    category: '투어러', license: '소형이륜',
    displacement: 1833, power: 126, torque: 170,  weight: 365,
    seatHeight: 745, fuelEconomy: 16, tankCapacity: 21.1,
    topSpeed: 200, priceKRW: 28000000,
  },

  // ── Yamaha ────────────────────────────────────────────────────────────────
  {
    id: 'mt03-2023', brand: 'yamaha', model: 'MT-03', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 321, power: 42,   torque: 29.6, weight: 168,
    seatHeight: 780, fuelEconomy: 30, tankCapacity: 14.0,
    topSpeed: 180, priceKRW: 5200000,
  },
  {
    id: 'mt03-2020', brand: 'yamaha', model: 'MT-03', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 321, power: 42,   torque: 29.6, weight: 167,
    seatHeight: 780, fuelEconomy: 29, tankCapacity: 14.0,
    topSpeed: 178, priceKRW: 4200000,
  },
  {
    id: 'xsr700-2022', brand: 'yamaha', model: 'XSR700', year: 2022,
    category: '클래식', license: '소형이륜',
    displacement: 689, power: 75,   torque: 68,   weight: 193,
    seatHeight: 835, fuelEconomy: 25, tankCapacity: 13.0,
    topSpeed: 200, priceKRW: 9200000,
  },
  {
    id: 'nmax125-2023', brand: 'yamaha', model: 'NMAX 125', year: 2023,
    category: '스쿠터', license: '원동기',
    displacement: 125, power: 11.5, torque: 11.7, weight: 131,
    seatHeight: 765, fuelEconomy: 50, tankCapacity: 7.1,
    topSpeed: 100, priceKRW: 3100000,
  },

  // ── Kawasaki ──────────────────────────────────────────────────────────────
  {
    id: 'z900-2021', brand: 'kawasaki', model: 'Z900', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 948, power: 125,  torque: 98.6, weight: 212,
    seatHeight: 820, fuelEconomy: 18, tankCapacity: 17.0,
    topSpeed: 240, priceKRW: 9800000,
  },
  {
    id: 'z900-2019', brand: 'kawasaki', model: 'Z900', year: 2019,
    category: '네이키드', license: '소형이륜',
    displacement: 948, power: 125,  torque: 98.6, weight: 210,
    seatHeight: 820, fuelEconomy: 17, tankCapacity: 17.0,
    topSpeed: 238, priceKRW: 7500000,
  },
  {
    id: 'ninja400-2023', brand: 'kawasaki', model: 'Ninja 400', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 399, power: 45,   torque: 38,   weight: 168,
    seatHeight: 785, fuelEconomy: 27, tankCapacity: 14.0,
    topSpeed: 193, priceKRW: 6800000,
  },
  {
    id: 'z125-2022', brand: 'kawasaki', model: 'Z125 PRO', year: 2022,
    category: '미니/입문', license: '원동기',
    displacement: 125, power: 9.9,  torque: 9.6,  weight: 102,
    seatHeight: 785, fuelEconomy: 55, tankCapacity: 7.4,
    topSpeed: 92,  priceKRW: 2800000,
  },

  // ── BMW ───────────────────────────────────────────────────────────────────
  {
    id: 'r1250gs-2022', brand: 'bmw', model: 'R1250GS', year: 2022,
    category: '어드벤처', license: '소형이륜',
    displacement: 1254, power: 136, torque: 143,  weight: 249,
    seatHeight: 850, fuelEconomy: 20, tankCapacity: 20.0,
    topSpeed: 220, priceKRW: 19500000,
  },
  {
    id: 'g310r-2022', brand: 'bmw', model: 'G310R', year: 2022,
    category: '네이키드', license: '소형이륜',
    displacement: 313, power: 34,   torque: 28,   weight: 158,
    seatHeight: 785, fuelEconomy: 32, tankCapacity: 11.0,
    topSpeed: 160, priceKRW: 5900000,
  },

  // ── Harley-Davidson ───────────────────────────────────────────────────────
  {
    id: 'iron883-2020', brand: 'harley', model: 'Iron 883', year: 2020,
    category: '크루저', license: '소형이륜',
    displacement: 883, power: 50,   torque: 70,   weight: 256,
    seatHeight: 760, fuelEconomy: 22, tankCapacity: 12.5,
    topSpeed: 170, priceKRW: 9500000,
  },
  {
    id: 'sportster-2022', brand: 'harley', model: 'Sportster S', year: 2022,
    category: '크루저', license: '소형이륜',
    displacement: 1252, power: 121, torque: 127,  weight: 228,
    seatHeight: 755, fuelEconomy: 18, tankCapacity: 11.8,
    topSpeed: 200, priceKRW: 18000000,
  },
]

export const ALL_CATEGORIES = [
  '미니/입문', '스쿠터', '네이키드', '스포츠',
  '클래식', '어드벤처', '크루저', '투어러',
]
