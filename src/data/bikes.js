// ─── 브랜드 ───────────────────────────────────────────────────────────────────

export const BRANDS = [
  { id: 'honda',        name: 'Honda',           logo: '/logos/honda.png'       },
  { id: 'yamaha',       name: 'Yamaha',          logo: '/logos/yamaha.png'      },
  { id: 'kawasaki',     name: 'Kawasaki',        logo: '/logos/kawasaki.png'    },
  { id: 'bmw',          name: 'BMW Motorrad',    logo: '/logos/bmw.svg'         },
  { id: 'harley',       name: 'Harley-Davidson', logo: '/logos/harley.png'      },
  { id: 'suzuki',       name: 'Suzuki',          logo: '/logos/suzuki.png'      },
  { id: 'ktm',          name: 'KTM',             logo: '/logos/ktm.png'         },
  { id: 'ducati',       name: 'Ducati',          logo: '/logos/ducati.png'      },
  { id: 'triumph',      name: 'Triumph',         logo: '/logos/triumph.png'    },
  { id: 'royalenfield', name: 'Royal Enfield',   logo: '/logos/royal.png'      },
  { id: 'vespa',        name: 'Vespa',           logo: '/logos/vespa.png'      },
]

// ─── 바이크 제원 ──────────────────────────────────────────────────────────────
//
// license:
//   "원동기"   — 125cc 이하, 원동기면허로 운행 가능
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
    displacement: 124,  power: 9.7,  torque: 10.8, weight: 102,
    seatHeight: 761,  fuelEconomy: 62, tankCapacity: 6.0,
    topSpeed: 90,   priceKRW: 3200000, image: '/bikes/honda/grom-2022.webp'
  },
  {
    id: 'grom-2017', brand: 'honda', model: 'GROM', year: 2017,
    category: '미니/입문', license: '원동기',
    displacement: 125,  power: 9.6,  torque: 11.0, weight: 104,
    seatHeight: 760,  fuelEconomy: 60, tankCapacity: 5.5,
    topSpeed: 88,   priceKRW: 2500000, image: '/bikes/honda/grom-2017.jpg'
  },
  {
    id: 'pcx125-2023', brand: 'honda', model: 'PCX 125', year: 2023,
    category: '스쿠터', license: '원동기',
    displacement: 125,  power: 12.3, torque: 11.8, weight: 132,
    seatHeight: 764,  fuelEconomy: 48, tankCapacity: 8.1,
    topSpeed: 105,  priceKRW: 2900000, image: '/bikes/honda/pcx125-2023.webp'
  },
  {
    id: 'pcx125-2021', brand: 'honda', model: 'PCX 125', year: 2021,
    category: '스쿠터', license: '원동기',
    displacement: 125,  power: 12.0, torque: 11.5, weight: 131,
    seatHeight: 764,  fuelEconomy: 47, tankCapacity: 8.1,
    topSpeed: 102,  priceKRW: 2500000, image: '/bikes/honda/pcx125-2021.webp'
  },
  {
    id: 'cbr300r-2022', brand: 'honda', model: 'CBR300R', year: 2022,
    category: '스포츠', license: '소형이륜',
    displacement: 286,  power: 30,   torque: 27,   weight: 163,
    seatHeight: 785,  fuelEconomy: 30, tankCapacity: 13.0,
    topSpeed: 160,  priceKRW: 4800000, image: '/bikes/honda/cbr300r-2022.webp'
  },
  {
    id: 'cb500x-2023', brand: 'honda', model: 'CB500X', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 471,  power: 47,   torque: 43,   weight: 197,
    seatHeight: 830,  fuelEconomy: 24, tankCapacity: 17.5,
    topSpeed: 170,  priceKRW: 8500000,  image: '/bikes/honda/cb500x-2023.jpg'
  },
  {
    id: 'rebel500-2023', brand: 'honda', model: 'Rebel 500', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 471,  power: 46,   torque: 43,   weight: 191,
    seatHeight: 738,  fuelEconomy: 25, tankCapacity: 11.1,
    topSpeed: 165,  priceKRW: 7800000,  image: '/bikes/honda/rebel500-2023.webp'
  },
  {
    id: 'cb650r-2023', brand: 'honda', model: 'CB650R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 649,  power: 95,   torque: 64,   weight: 202,
    seatHeight: 810,  fuelEconomy: 22, tankCapacity: 15.4,
    topSpeed: 210,  priceKRW: 9800000,  image: '/bikes/honda/cb650r-2023.jpg'
  },
  {
    id: 'nc750x-2023', brand: 'honda', model: 'NC750X', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 745,  power: 58,   torque: 69,   weight: 214,
    seatHeight: 800,  fuelEconomy: 28, tankCapacity: 14.1,
    topSpeed: 185,  priceKRW: 10500000,  image: '/bikes/honda/nc750x-2023.webp'
  },
  {
    id: 'goldwing-2021', brand: 'honda', model: 'Gold Wing', year: 2021,
    category: '투어러', license: '소형이륜',
    displacement: 1833, power: 126,  torque: 170,  weight: 365,
    seatHeight: 745,  fuelEconomy: 16, tankCapacity: 21.1,
    topSpeed: 200,  priceKRW: 28000000,  image: '/bikes/honda/goldwing-2021.jpg'
  },

  // ── Yamaha ────────────────────────────────────────────────────────────────
  {
    id: 'nmax125-2023', brand: 'yamaha', model: 'NMAX 125', year: 2023,
    category: '스쿠터', license: '원동기',
    displacement: 125,  power: 11.5, torque: 11.7, weight: 131,
    seatHeight: 765,  fuelEconomy: 50, tankCapacity: 7.1,
    topSpeed: 100,  priceKRW: 3100000, image: '/bikes/yamaha/nmax125-2023.jpg'
  },
  {
    id: 'xmax300-2023', brand: 'yamaha', model: 'XMAX 300', year: 2023,
    category: '스쿠터', license: '소형이륜',
    displacement: 292,  power: 28,   torque: 29,   weight: 177,
    seatHeight: 795,  fuelEconomy: 32, tankCapacity: 13.0,
    topSpeed: 145,  priceKRW: 6200000, image: '/bikes/yamaha/xmax300-2023.webp'
  },
  {
    id: 'r3-2023', brand: 'yamaha', model: 'YZF-R3', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 321,  power: 42,   torque: 29.6, weight: 169,
    seatHeight: 780,  fuelEconomy: 30, tankCapacity: 14.0,
    topSpeed: 182,  priceKRW: 5700000, image: '/bikes/yamaha/r3-2023.jpg'
  },
  {
    id: 'mt03-2023', brand: 'yamaha', model: 'MT-03', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 321,  power: 42,   torque: 29.6, weight: 168,
    seatHeight: 780,  fuelEconomy: 30, tankCapacity: 14.0,
    topSpeed: 180,  priceKRW: 5200000, image: '/bikes/yamaha/mt03-2023.webp'
  },
  {
    id: 'mt03-2020', brand: 'yamaha', model: 'MT-03', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 321,  power: 42,   torque: 29.6, weight: 167,
    seatHeight: 780,  fuelEconomy: 29, tankCapacity: 14.0,
    topSpeed: 178,  priceKRW: 4200000, image: '/bikes/yamaha/mt03-2020.jpg'
  },
  {
    id: 'xsr700-2022', brand: 'yamaha', model: 'XSR700', year: 2022,
    category: '클래식', license: '소형이륜',
    displacement: 689,  power: 75,   torque: 68,   weight: 193,
    seatHeight: 835,  fuelEconomy: 25, tankCapacity: 13.0,
    topSpeed: 200,  priceKRW: 9200000, image: '/bikes/yamaha/xsr700-2022.jpg'
  },
  {
    id: 'tenere700-2023', brand: 'yamaha', model: 'Tenere 700', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 689,  power: 72,   torque: 68,   weight: 204,
    seatHeight: 875,  fuelEconomy: 25, tankCapacity: 16.0,
    topSpeed: 200,  priceKRW: 12000000, image: '/bikes/yamaha/tenere700-2023.jpg'
  },
  {
    id: 'tracer9gt-2022', brand: 'yamaha', model: 'Tracer 9 GT', year: 2022,
    category: '투어러', license: '소형이륜',
    displacement: 890,  power: 119,  torque: 93,   weight: 220,
    seatHeight: 820,  fuelEconomy: 21, tankCapacity: 18.0,
    topSpeed: 225,  priceKRW: 18000000, image: '/bikes/yamaha/tracer9gt-2022.webp'
  },

  // ── Kawasaki ──────────────────────────────────────────────────────────────
  {
   id: 'z125pro-2023', brand: 'kawasaki', model: 'Z125 PRO', year: 2023,
   category: '미니/입문', license: '원동기',
   displacement: 125, power: 9.9, torque: 9.6, weight: 102,
   seatHeight: 785, fuelEconomy: 55, tankCapacity: 7.4,
   topSpeed: 92, priceKRW: 0, image: '/bikes/kawasaki/z125pro-2023.jpg'
  },
  {
   id: 'ninja500-2025', brand: 'kawasaki', model: 'Ninja 500', year: 2025,
   category: '스포츠', license: '소형이륜',
   displacement: 451, power: null, torque: null, weight: null,
   seatHeight: null, fuelEconomy: null, tankCapacity: null,
   topSpeed: null, priceKRW: 9350000, image: '/bikes/kawasaki/ninja500-2025.jpg'
  },
  {
   id: 'ninja650-2022', brand: 'kawasaki', model: 'Ninja 650', year: 2022,
   category: '스포츠', license: '소형이륜',
   displacement: 649, power: 68, torque: 64, weight: 193,
   seatHeight: 790, fuelEconomy: 24, tankCapacity: 15.0,
   topSpeed: 200, priceKRW: 11550000, image: '/bikes/kawasaki/ninja650-2022.jpg'
  },
  {
    id: 'z125-2022', brand: 'kawasaki', model: 'Z125 PRO', year: 2022,
    category: '미니/입문', license: '원동기',
    displacement: 125,  power: 9.9,  torque: 9.6,  weight: 102,
    seatHeight: 785,  fuelEconomy: 55, tankCapacity: 7.4,
    topSpeed: 92,   priceKRW: 2800000, image: '/bikes/kawasaki/z125pro-2022.jpg'
  },
  {
    id: 'eliminator500-2023', brand: 'kawasaki', model: 'Eliminator 500', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 451,  power: 45,   torque: 42,   weight: 177,
    seatHeight: 705,  fuelEconomy: 26, tankCapacity: 11.5,
    topSpeed: 160,  priceKRW: 7500000, image: '/bikes/kawasaki/eliminator500-2023.webp'
  },
  {
    id: 'ninja400-2023', brand: 'kawasaki', model: 'Ninja 400', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 399,  power: 45,   torque: 38,   weight: 168,
    seatHeight: 785,  fuelEconomy: 27, tankCapacity: 14.0,
    topSpeed: 193,  priceKRW: 6800000, image: '/bikes/kawasaki/ninja400-2023.jpg'
  },
  {
   id: 'zx4rr-2023', brand: 'kawasaki', model: 'Ninja ZX-4RR', year: 2023,
   category: '스포츠', license: '소형이륜',
   displacement: 399, power: 77, torque: 39, weight: 189,
   seatHeight: 800, fuelEconomy: 22, tankCapacity: 15.0,
   topSpeed: 220, priceKRW: 16500000, image: '/bikes/kawasaki/zx4rr-2023.webp'
  },
  {
    id: 'z650-2023', brand: 'kawasaki', model: 'Z650', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 649,  power: 68,   torque: 64,   weight: 187,
    seatHeight: 790,  fuelEconomy: 23, tankCapacity: 15.0,
    topSpeed: 195,  priceKRW: 8800000, image: '/bikes/kawasaki/z650-2023.jpg'
  },
  {
    id: 'z900-2021', brand: 'kawasaki', model: 'Z900', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 948,  power: 125,  torque: 98.6, weight: 212,
    seatHeight: 820,  fuelEconomy: 18, tankCapacity: 17.0,
    topSpeed: 240,  priceKRW: 9800000, image: '/bikes/kawasaki/z900-2021.jpg'
  },
  {
    id: 'z900-2019', brand: 'kawasaki', model: 'Z900', year: 2019,
    category: '네이키드', license: '소형이륜',
    displacement: 948,  power: 125,  torque: 98.6, weight: 210,
    seatHeight: 820,  fuelEconomy: 17, tankCapacity: 17.0,
    topSpeed: 238,  priceKRW: 7500000, image: '/bikes/kawasaki/z900-2019.jpg'
  },
  {
    id: 'versys650-2023', brand: 'kawasaki', model: 'Versys 650', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 649, power: 69, torque: 61, weight: 219,
    seatHeight: 845, fuelEconomy: 22, tankCapacity: 21.0,
    topSpeed: 200, priceKRW: 13970000, image: '/bikes/kawasaki/versys650-2023.jpg'
  },
  {
    id: 'zx6r-2023', brand: 'kawasaki', model: 'Ninja ZX-6R', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 636,  power: 130,  torque: 70.8, weight: 193,
    seatHeight: 830,  fuelEconomy: 18, tankCapacity: 17.0,
    topSpeed: 255,  priceKRW: 13500000, image: '/bikes/kawasaki/zx6r-2023.jpg'
  },
  {
    id: 'zx6r-2025', brand: 'kawasaki', model: 'Ninja ZX-6R', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 636, power: 124, torque: 69, weight: 198,
    seatHeight: 830, fuelEconomy: 18, tankCapacity: 17.0,
    topSpeed: 250, priceKRW: 19910000, image: '/bikes/kawasaki/zx6r-2025.png'
  },
  {
    id: 'zx10r-2025', brand: 'kawasaki', model: 'Ninja ZX-10R', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 998, power: 203, torque: 114.9, weight: 207,
    seatHeight: 835, fuelEconomy: 14, tankCapacity: 17.0,
    topSpeed: 300, priceKRW: 31900000, image: '/bikes/kawasaki/zx10r-2025.png'
  },
  {
    id: 'h2sxse-2022', brand: 'kawasaki', model: 'Ninja H2 SX SE', year: 2022,
    category: '투어러', license: '소형이륜',
    displacement: 998, power: 200, torque: 137, weight: 266,
    seatHeight: 820, fuelEconomy: 15, tankCapacity: 19.0,
    topSpeed: 300, priceKRW: 45100000, image: '/bikes/kawasaki/ninjah2sxse-2022.jpg'
  },
  {
    id: 'versys1000se-2023', brand: 'kawasaki', model: 'Versys 1000 SE', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 1043, power: 120, torque: 102, weight: 255,
    seatHeight: 840, fuelEconomy: 18, tankCapacity: 21.0,
    topSpeed: 220, priceKRW: 24200000, image: '/bikes/kawasaki/versys1000se-2023.jpg'
  },
  {
    id: 'vulcans-2023', brand: 'kawasaki', model: 'Vulcan S', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 649, power: 61, torque: 63, weight: 229,
    seatHeight: 705, fuelEconomy: 25, tankCapacity: 14.0,
    topSpeed: 180, priceKRW: 12100000, image: '/bikes/kawasaki/vulcans-2023.jpg'
  },
  {
    id: 'eliminator-2024', brand: 'kawasaki', model: 'Eliminator', year: 2024,
    category: '크루저', license: '소형이륜',
    displacement: 451, power: 45, torque: 42.6, weight: 176,
    seatHeight: 735, fuelEconomy: 30, tankCapacity: 13.0,
    topSpeed: 170, priceKRW: 8900000, image: '/bikes/kawasaki/eliminator-2024.jpg'
  },
  {
    id: 'w800-2022', brand: 'kawasaki', model: 'W800', year: 2022,
    category: '클래식', license: '소형이륜',
    displacement: 773, power: 48, torque: 62.9, weight: 225,
    seatHeight: 790, fuelEconomy: 20, tankCapacity: 14.0,
    topSpeed: 170, priceKRW: 15400000, image: '/bikes/kawasaki/w800-2022.webp'
  },
  {
    id: 'z500-2025', brand: 'kawasaki', model: 'Z500', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 451, power: null, torque: null, weight: null,
    seatHeight: null, fuelEconomy: null, tankCapacity: null,
    topSpeed: null, priceKRW: 0, image: '/bikes/kawasaki/z500-2025.png'
  },
  {
  id: 'z650rs-2022', brand: 'kawasaki', model: 'Z650RS', year: 2022,
  category: '클래식', license: '소형이륜',
  displacement: 649, power: 68, torque: 64, weight: 187,
  seatHeight: 820, fuelEconomy: 23, tankCapacity: 12.0,
  topSpeed: 188, priceKRW: 13200000, image: '/bikes/kawasaki/z650rs-2022.jpg'
},
{
  id: 'z900-2025', brand: 'kawasaki', model: 'Z900', year: 2025,
  category: '네이키드', license: '소형이륜',
  displacement: 948, power: 125, torque: 98.6, weight: 212,
  seatHeight: 830, fuelEconomy: 18, tankCapacity: 17.0,
  topSpeed: 240, priceKRW: 17450000, image: '/bikes/kawasaki/z900-2025.png'
},
{
  id: 'z900rs-2022', brand: 'kawasaki', model: 'Z900RS', year: 2022,
  category: '클래식', license: '소형이륜',
  displacement: 948, power: 111, torque: 98.5, weight: 215,
  seatHeight: 800, fuelEconomy: 20, tankCapacity: 17.0,
  topSpeed: 220, priceKRW: 18590000, image: '/bikes/kawasaki/z900rs-2022.jpeg'
},
{
  id: 'z900rsse-2025', brand: 'kawasaki', model: 'Z900RS SE', year: 2025,
  category: '클래식', license: '소형이륜',
  displacement: 948, power: 111, torque: 98.5, weight: 215,
  seatHeight: 800, fuelEconomy: 20, tankCapacity: 17.0,
  topSpeed: 220, priceKRW: 25960000, image: '/bikes/kawasaki/z900rsse-2025.png'
},
{
  id: 'meguros1-2025', brand: 'kawasaki', model: 'MEGURO S1', year: 2025,
  category: '클래식', license: '소형이륜',
  displacement: 232, power: 18, torque: 19, weight: 143,
  seatHeight: 740, fuelEconomy: 35, tankCapacity: 12.0,
  topSpeed: 120, priceKRW: 9900000, image: '/bikes/kawasaki/meguros1-2025.webp'
},
{
  id: 'z1100-2025', brand: 'kawasaki', model: 'Z1100', year: 2025,
  category: '네이키드', license: '소형이륜',
  displacement: 1099, power: 134, torque: 112, weight: 200,
  seatHeight: 815, fuelEconomy: null, tankCapacity: 17,
  topSpeed: 254, priceKRW: 0, image: '/bikes/kawasaki/z1100-2025.jpeg'
},
{
  id: 'ninja1100sx-2025', brand: 'kawasaki', model: 'Ninja 1100SX', year: 2025,
  category: '투어러', license: '소형이륜',
  displacement: 1099, power: 134, torque: 112, weight: 200,
  seatHeight: 815, fuelEconomy: null, tankCapacity: 17,
  topSpeed: 254, priceKRW: 22716000, image: '/bikes/kawasaki/ninja1100sx-2025.webp'
},

  // ── BMW ───────────────────────────────────────────────────────────────────
  {
    id: 'g310r-2022', brand: 'bmw', model: 'G310R', year: 2022,
    category: '네이키드', license: '소형이륜',
    displacement: 313,  power: 34,   torque: 28,   weight: 158,
    seatHeight: 785,  fuelEconomy: 32, tankCapacity: 11.0,
    topSpeed: 160,  priceKRW: 5900000, image: '/bikes/bmw/g310r-2022.jpg'
  },
  {
    id: 'f900r-2023', brand: 'bmw', model: 'F900R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 92,   weight: 210,
    seatHeight: 815,  fuelEconomy: 20, tankCapacity: 13.0,
    topSpeed: 215,  priceKRW: 15500000, image: '/bikes/bmw/f900r-2023.jpg'
  },
  {
    id: 'r1250gs-2022', brand: 'bmw', model: 'R1250GS', year: 2022,
    category: '어드벤처', license: '소형이륜',
    displacement: 1254, power: 136,  torque: 143,  weight: 249,
    seatHeight: 850,  fuelEconomy: 20, tankCapacity: 20.0,
    topSpeed: 220,  priceKRW: 19500000, image: '/bikes/bmw/r1250gs-2022.webp'
  },
  {
    id: 's1000r-2023', brand: 'bmw', model: 'S1000R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 165,  torque: 114,  weight: 199,
    seatHeight: 820,  fuelEconomy: 18, tankCapacity: 16.5,
    topSpeed: 250,  priceKRW: 26000000, image: '/bikes/bmw/s1000r-2023.webp'
  },

  // ── Harley-Davidson ───────────────────────────────────────────────────────
  {
    id: 'iron883-2020', brand: 'harley', model: 'Iron 883', year: 2020,
    category: '크루저', license: '소형이륜',
    displacement: 883,  power: 50,   torque: 70,   weight: 256,
    seatHeight: 760,  fuelEconomy: 22, tankCapacity: 12.5,
    topSpeed: 170,  priceKRW: 9500000, image: '/bikes/harley/iron883-2020.jpg'
  },
  {
    id: 'sportster-2022', brand: 'harley', model: 'Sportster S', year: 2022,
    category: '크루저', license: '소형이륜',
    displacement: 1252, power: 121,  torque: 127,  weight: 228,
    seatHeight: 755,  fuelEconomy: 18, tankCapacity: 11.8,
    topSpeed: 200,  priceKRW: 18000000, image: '/bikes/harley/sportsters-2022.webp'
  },

  // ── Suzuki ────────────────────────────────────────────────────────────────
  {
    id: 'gsxs125-2023', brand: 'suzuki', model: 'GSX-S125', year: 2023,
    category: '미니/입문', license: '원동기',
    displacement: 125,  power: 15,   torque: 11.2, weight: 134,
    seatHeight: 800,  fuelEconomy: 40, tankCapacity: 11.0,
    topSpeed: 110,  priceKRW: 3200000, image: '/bikes/suzuki/gsxs125-2023.jpg'
  },
  {
    id: 'sv650-2023', brand: 'suzuki', model: 'SV650', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 645,  power: 73,   torque: 64,   weight: 197,
    seatHeight: 785,  fuelEconomy: 24, tankCapacity: 14.5,
    topSpeed: 195,  priceKRW: 8200000, image: '/bikes/suzuki/sv650-2023.jpg'
  },
  {
    id: 'vstrom650-2023', brand: 'suzuki', model: 'V-Strom 650', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 645,  power: 69,   torque: 62,   weight: 216,
    seatHeight: 850,  fuelEconomy: 22, tankCapacity: 20.0,
    topSpeed: 200,  priceKRW: 10500000, image: '/bikes/suzuki/vstrom650-2023.webp'
  },
  {
    id: 'burgman400-2023', brand: 'suzuki', model: 'Burgman 400', year: 2023,
    category: '스쿠터', license: '소형이륜',
    displacement: 400,  power: 35,   torque: 35,   weight: 220,
    seatHeight: 775,  fuelEconomy: 28, tankCapacity: 13.5,
    topSpeed: 145,  priceKRW: 8500000, image: '/bikes/suzuki/burgman400-2023.jpg'
  },
  {
    id: 'gsx8s-2023', brand: 'suzuki', model: 'GSX-8S', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 776,  power: 83,   torque: 78,   weight: 202,
    seatHeight: 810,  fuelEconomy: 22, tankCapacity: 14.5,
    topSpeed: 210,  priceKRW: 12000000, image: '/bikes/suzuki/gsx8s-2023.webp'
  },

  // ── KTM ───────────────────────────────────────────────────────────────────
  {
    id: 'duke390-2023', brand: 'ktm', model: 'Duke 390', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 373,  power: 43,   torque: 37,   weight: 163,
    seatHeight: 830,  fuelEconomy: 28, tankCapacity: 13.4,
    topSpeed: 167,  priceKRW: 6700000, image: '/bikes/ktm/duke390-2023.jpg'
  },
  {
    id: 'adventure390-2023', brand: 'ktm', model: 'Adventure 390', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 373,  power: 43,   torque: 37,   weight: 178,
    seatHeight: 855,  fuelEconomy: 27, tankCapacity: 14.5,
    topSpeed: 155,  priceKRW: 7800000, image: '/bikes/ktm/adventure390-2023.jpg'
  },
  {
    id: 'duke790-2023', brand: 'ktm', model: 'Duke 790', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 799,  power: 105,  torque: 87,   weight: 189,
    seatHeight: 825,  fuelEconomy: 22, tankCapacity: 14.0,
    topSpeed: 220,  priceKRW: 13500000, image: '/bikes/ktm/duke790-2023.png'
  },

  // ── Ducati ────────────────────────────────────────────────────────────────
  {
    id: 'scrambler803-2023', brand: 'ducati', model: 'Scrambler Icon', year: 2023,
    category: '클래식', license: '소형이륜',
    displacement: 803,  power: 73,   torque: 67,   weight: 189,
    seatHeight: 790,  fuelEconomy: 22, tankCapacity: 15.0,
    topSpeed: 190,  priceKRW: 13500000, image: '/bikes/ducati/scramblericon-2023.jpeg'
  },
  {
    id: 'monster937-2023', brand: 'ducati', model: 'Monster 937', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 937,  power: 111,  torque: 93,   weight: 188,
    seatHeight: 820,  fuelEconomy: 20, tankCapacity: 14.5,
    topSpeed: 240,  priceKRW: 19000000, image: '/bikes/ducati/monster937.jpeg'
  },

  // ── Triumph ───────────────────────────────────────────────────────────────
  {
    id: 'trident660-2023', brand: 'triumph', model: 'Trident 660', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 660,  power: 81,   torque: 64,   weight: 189,
    seatHeight: 805,  fuelEconomy: 23, tankCapacity: 14.5,
    topSpeed: 200,  priceKRW: 12500000, image: '/bikes/triumph/trident660-2023.jpg'
  },
  {
    id: 'streetscrambler-2022', brand: 'triumph', model: 'Street Scrambler', year: 2022,
    category: '클래식', license: '소형이륜',
    displacement: 900,  power: 65,   torque: 80,   weight: 213,
    seatHeight: 760,  fuelEconomy: 20, tankCapacity: 15.0,
    topSpeed: 175,  priceKRW: 15000000, image: '/bikes/triumph/streetscrambler-2022.webp'
  },

  // ── Royal Enfield ─────────────────────────────────────────────────────────
  {
    id: 'meteor350-2023', brand: 'royalenfield', model: 'Meteor 350', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 349,  power: 20,   torque: 27,   weight: 191,
    seatHeight: 765,  fuelEconomy: 32, tankCapacity: 15.0,
    topSpeed: 130,  priceKRW: 5800000, image: '/bikes/royal/meteor350-2023.jpg'
  },
  {
    id: 'himalayan-2023', brand: 'royalenfield', model: 'Himalayan 411', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 411,  power: 24,   torque: 32,   weight: 199,
    seatHeight: 800,  fuelEconomy: 30, tankCapacity: 15.0,
    topSpeed: 140,  priceKRW: 6500000, image: '/bikes/royal/himalayan411-2023.webp'
  },

  // ── Vespa ─────────────────────────────────────────────────────────────────
  {
    id: 'primavera125-2023', brand: 'vespa', model: 'Primavera 125', year: 2023,
    category: '스쿠터', license: '원동기',
    displacement: 125,  power: 9.6,  torque: 10.4, weight: 115,
    seatHeight: 790,  fuelEconomy: 45, tankCapacity: 7.5,
    topSpeed: 95,   priceKRW: 4200000, image: '/bikes/vespa/primavera125-2023.webp'
  },
  {
    id: 'gts300-2023', brand: 'vespa', model: 'GTS 300 HPE', year: 2023,
    category: '스쿠터', license: '소형이륜',
    displacement: 278,  power: 24,   torque: 26,   weight: 160,
    seatHeight: 800,  fuelEconomy: 35, tankCapacity: 8.5,
    topSpeed: 135,  priceKRW: 7800000, image: '/bikes/vespa/gts300hpe-2023.jpg'
  },
]

export const ALL_CATEGORIES = [
  '미니/입문', '스쿠터', '네이키드', '스포츠',
  '클래식', '어드벤처', '크루저', '투어러',
]
