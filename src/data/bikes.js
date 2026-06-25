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
  { id: 'indian',       name: 'Indian Motorcycle', logo: '/logos/indian.png'   },
  { id: 'aprilia',      name: 'Aprilia',         logo: '/logos/aprilia.png'    },
  { id: 'husqvarna',    name: 'Husqvarna',       logo: '/logos/husqvarna.png'  },
  { id: 'mvagusta',     name: 'MV Agusta',       logo: '/logos/agusta.png'     },
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
//       topSpeed(km/h), priceKRW(원, 가격대 산정용 참조값)

const RAW_BIKES = [

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
    id: 'cb650r-2019', brand: 'honda', model: 'CB650R', year: 2019,
    category: '네이키드', license: '소형이륜',
    displacement: 649,  power: 95,   torque: 64,   weight: 202,
    seatHeight: 810,  fuelEconomy: 20.4, tankCapacity: 15.4,
    topSpeed: 210,  priceKRW: null, image: '/bikes/honda/cb650r-2019.jpg'
  },
  {
    id: 'cb650r-2023', brand: 'honda', model: 'CB650R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 649,  power: 95,   torque: 64,   weight: 202,
    seatHeight: 810,  fuelEconomy: 22, tankCapacity: 15.4,
    topSpeed: 210,  priceKRW: 9800000,  image: '/bikes/honda/cb650r-2023.jpg'
  },
  {
    id: 'cb650r-2024', brand: 'honda', model: 'CB650R', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 649,  power: 95,   torque: 63,   weight: 205,
    seatHeight: 810,  fuelEconomy: 20.4, tankCapacity: 15.4,
    topSpeed: 210,  priceKRW: null, image: '/bikes/honda/cb650r-2024.jpg'
  },
  {
    id: 'cbr650r-2019', brand: 'honda', model: 'CBR650R', year: 2019,
    category: '스포츠', license: '소형이륜',
    displacement: 649,  power: 95,   torque: 64,   weight: 207,
    seatHeight: 810,  fuelEconomy: 20.4, tankCapacity: 15.4,
    topSpeed: 220,  priceKRW: null, image: '/bikes/honda/cbr650r-2019.jpg'
  },
  {
    id: 'cbr650r-2021', brand: 'honda', model: 'CBR650R', year: 2021,
    category: '스포츠', license: '소형이륜',
    displacement: 649,  power: 95,   torque: 63,   weight: 208,
    seatHeight: 810,  fuelEconomy: 20.4, tankCapacity: 15.4,
    topSpeed: 220,  priceKRW: null, image: '/bikes/honda/cbr650r-2021.webp'
  },
  {
    id: 'cbr650r-2024', brand: 'honda', model: 'CBR650R', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 649,  power: 95,   torque: 63,   weight: 209,
    seatHeight: 810,  fuelEconomy: 20.4, tankCapacity: 15.4,
    topSpeed: 220,  priceKRW: null, image: '/bikes/honda/cbr650r-2024.webp'
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
  {
    id: 'supercubc125-2019', brand: 'honda', model: 'Super Cub C125', year: 2019,
    category: '미니/입문', license: '원동기',
    displacement: 125,  power: 9.7,  torque: 10.4, weight: 110,
    seatHeight: 780,  fuelEconomy: 65, tankCapacity: 3.7,
    topSpeed: 95,   priceKRW: 2800000, image: '/bikes/honda/supercubc125-2019.jpg'
  },
  {
    id: 'supercubc125-2023', brand: 'honda', model: 'Super Cub C125', year: 2023,
    category: '미니/입문', license: '원동기',
    displacement: 125,  power: 9.7,  torque: 10.4, weight: 110,
    seatHeight: 780,  fuelEconomy: 65, tankCapacity: 3.7,
    topSpeed: 95,   priceKRW: 4200000, image: '/bikes/honda/supercubc125-2023.webp'
  },
  {
    id: 'monkey125-2019', brand: 'honda', model: 'Monkey 125', year: 2019,
    category: '미니/입문', license: '원동기',
    displacement: 125,  power: 9.2,  torque: 11.0, weight: 107,
    seatHeight: 776,  fuelEconomy: 60, tankCapacity: 5.6,
    topSpeed: 90,   priceKRW: 3000000, image: '/bikes/honda/monkey125-2023.webp'
  },
  {
    id: 'monkey125-2023', brand: 'honda', model: 'Monkey 125', year: 2023,
    category: '미니/입문', license: '원동기',
    displacement: 124,  power: 9.3,  torque: 11.0, weight: 104,
    seatHeight: 776,  fuelEconomy: 60, tankCapacity: 5.6,
    topSpeed: 90,   priceKRW: 4500000, image: '/bikes/honda/monkey125-2023.webp'
  },
  {
    id: 'dax125-2023', brand: 'honda', model: 'Dax 125', year: 2023,
    category: '미니/입문', license: '원동기',
    displacement: 124,  power: 9.3,  torque: 10.8, weight: 107,
    seatHeight: 775,  fuelEconomy: 60, tankCapacity: 3.8,
    topSpeed: 90,   priceKRW: 4500000, image: '/bikes/honda/dax125-2023.jpg'
  },
  {
    id: 'cb125r-2023', brand: 'honda', model: 'CB125R', year: 2023,
    category: '네이키드', license: '원동기',
    displacement: 125,  power: 15.0, torque: 11.6, weight: 130,
    seatHeight: 816,  fuelEconomy: 45, tankCapacity: 10.1,
    topSpeed: 110,  priceKRW: 5200000, image: '/bikes/honda/cb125r-2023.jpg'
  },
  {
    id: 'adv160-2023', brand: 'honda', model: 'ADV160', year: 2023,
    category: '스쿠터', license: '소형이륜',
    displacement: 157,  power: 15.8, torque: 14.7, weight: 133,
    seatHeight: 780,  fuelEconomy: 45, tankCapacity: 8.1,
    topSpeed: 115,  priceKRW: 4500000, image: '/bikes/honda/adv160-2023.jpg'
  },
  {
    id: 'forza350-2023', brand: 'honda', model: 'Forza 350', year: 2023,
    category: '스쿠터', license: '소형이륜',
    displacement: 330,  power: 29.0, torque: 31.5, weight: 184,
    seatHeight: 780,  fuelEconomy: 30, tankCapacity: 11.7,
    topSpeed: 137,  priceKRW: 8500000, image: '/bikes/honda/forza350-2023.jpg'
  },
  {
    id: 'forza750-2021', brand: 'honda', model: 'Forza 750', year: 2021,
    category: '스쿠터', license: '소형이륜',
    displacement: 745,  power: 58,   torque: 69,   weight: 235,
    seatHeight: 790,  fuelEconomy: 27, tankCapacity: 13.2,
    topSpeed: 170,  priceKRW: 13000000, image: '/bikes/honda/forza750-2021.webp'
  },
  {
    id: 'xadv750-2021', brand: 'honda', model: 'X-ADV 750', year: 2021,
    category: '어드벤처', license: '소형이륜',
    displacement: 745,  power: 58,   torque: 69,   weight: 236,
    seatHeight: 820,  fuelEconomy: 27, tankCapacity: 13.2,
    topSpeed: 170,  priceKRW: 14000000, image: '/bikes/honda/xadv750-2021.png'
  },
  {
    id: 'xadv750-2025', brand: 'honda', model: 'X-ADV 750', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 745,  power: 58,   torque: 69,   weight: 237,
    seatHeight: 820,  fuelEconomy: 27, tankCapacity: 13.2,
    topSpeed: 170,  priceKRW: 19000000, image: '/bikes/honda/xadv750-2025.jpg'
  },
  {
    id: 'crf250l-2012', brand: 'honda', model: 'CRF250L', year: 2012,
    category: '어드벤처', license: '소형이륜',
    displacement: 249,  power: 23,   torque: 22,   weight: 144,
    seatHeight: 875,  fuelEconomy: 32, tankCapacity: 7.7,
    topSpeed: 130,  priceKRW: 3500000, image: '/bikes/honda/crf250l-2012.jpg'
  },
  {
    id: 'crf250l-2021', brand: 'honda', model: 'CRF250L', year: 2021,
    category: '어드벤처', license: '소형이륜',
    displacement: 249,  power: 24,   torque: 23,   weight: 140,
    seatHeight: 880,  fuelEconomy: 34, tankCapacity: 7.8,
    topSpeed: 130,  priceKRW: 5200000, image: '/bikes/honda/crf250l-2021.jpg'
  },
  {
    id: 'crf300l-2021', brand: 'honda', model: 'CRF300L', year: 2021,
    category: '어드벤처', license: '소형이륜',
    displacement: 286,  power: 27,   torque: 26.6, weight: 142,
    seatHeight: 880,  fuelEconomy: 33, tankCapacity: 7.8,
    topSpeed: 132,  priceKRW: 6500000, image: '/bikes/honda/crf300l-2021.jpg'
  },
  {
    id: 'crf300l-2025', brand: 'honda', model: 'CRF300L', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 286,  power: 27,   torque: 26.6, weight: 142,
    seatHeight: 880,  fuelEconomy: 33, tankCapacity: 7.8,
    topSpeed: 132,  priceKRW: 7800000, image: '/bikes/honda/crf300l-2025.jpg'
  },
  {
    id: 'cbr250rr-1990', brand: 'honda', model: 'CBR250RR', year: 1990,
    category: '스포츠', license: '소형이륜',
    displacement: 249,  power: 45,   torque: 24.5, weight: 158,
    seatHeight: 725,  fuelEconomy: 22, tankCapacity: 13.0,
    topSpeed: 190,  priceKRW: 4500000, image: '/bikes/honda/cbr250rr-1990.jpg'
  },
  {
    id: 'cbr250rr-2017', brand: 'honda', model: 'CBR250RR', year: 2017,
    category: '스포츠', license: '소형이륜',
    displacement: 249,  power: 38.7, torque: 23.3, weight: 165,
    seatHeight: 790,  fuelEconomy: 27, tankCapacity: 14.5,
    topSpeed: 180,  priceKRW: 6500000, image: '/bikes/honda/cbr250rr-2017.png'
  },
  {
    id: 'cbr250rr-2023', brand: 'honda', model: 'CBR250RR', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 249,  power: 42,   torque: 25,   weight: 168,
    seatHeight: 790,  fuelEconomy: 27, tankCapacity: 14.5,
    topSpeed: 185,  priceKRW: 8500000, image: '/bikes/honda/cbr250rr-2023.webp'
  },
  {
    id: 'cbr400rr-1990', brand: 'honda', model: 'CBR400RR', year: 1990,
    category: '스포츠', license: '소형이륜',
    displacement: 399,  power: 59,   torque: 39,   weight: 179,
    seatHeight: 765,  fuelEconomy: 18, tankCapacity: 15.0,
    topSpeed: 220,  priceKRW: 5500000, image: '/bikes/honda/cbr400rr-1990.webp'
  },
  {
    id: 'vfr400r-1989', brand: 'honda', model: 'VFR400R', year: 1989,
    category: '스포츠', license: '소형이륜',
    displacement: 399,  power: 59,   torque: 39,   weight: 182,
    seatHeight: 755,  fuelEconomy: 18, tankCapacity: 15.0,
    topSpeed: 210,  priceKRW: 6500000, image: '/bikes/honda/vfr400r-1989.jpg'
  },
  {
    id: 'cbr500r-2024', brand: 'honda', model: 'CBR500R', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 471,  power: 47,   torque: 43,   weight: 192,
    seatHeight: 785,  fuelEconomy: 28, tankCapacity: 17.1,
    topSpeed: 180,  priceKRW: 9500000, image: '/bikes/honda/cbr500r-2024.jpg'
  },
  {
    id: 'cbr600rr-2003', brand: 'honda', model: 'CBR600RR', year: 2003,
    category: '스포츠', license: '소형이륜',
    displacement: 599,  power: 117,  torque: 66,   weight: 199,
    seatHeight: 820,  fuelEconomy: 17, tankCapacity: 18.0,
    topSpeed: 255,  priceKRW: 5500000, image: '/bikes/honda/cbr600rr-2003.jpg'
  },
  {
    id: 'cbr600rr-2007', brand: 'honda', model: 'CBR600RR', year: 2007,
    category: '스포츠', license: '소형이륜',
    displacement: 599,  power: 118,  torque: 66,   weight: 184,
    seatHeight: 820,  fuelEconomy: 17, tankCapacity: 18.0,
    topSpeed: 260,  priceKRW: 6500000, image: '/bikes/honda/cbr600rr-2007.jpg'
  },
  {
    id: 'cbr600rr-2013', brand: 'honda', model: 'CBR600RR', year: 2013,
    category: '스포츠', license: '소형이륜',
    displacement: 599,  power: 118,  torque: 66,   weight: 186,
    seatHeight: 820,  fuelEconomy: 17, tankCapacity: 18.1,
    topSpeed: 260,  priceKRW: 8000000, image: '/bikes/honda/cbr600rr-2013.jpg'
  },
  {
    id: 'cbr600rr-2024', brand: 'honda', model: 'CBR600RR', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 599,  power: 121,  torque: 63,   weight: 193,
    seatHeight: 820,  fuelEconomy: 17, tankCapacity: 18.0,
    topSpeed: 260,  priceKRW: 18000000, image: '/bikes/honda/cbr600rr-2024.webp'
  },
  {
    id: 'cbr900rr-1992', brand: 'honda', model: 'CBR900RR FireBlade', year: 1992,
    category: '스포츠', license: '소형이륜',
    displacement: 893,  power: 122,  torque: 88,   weight: 206,
    seatHeight: 800,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 260,  priceKRW: 6000000, image: '/bikes/honda/cbr900rrfireblade-1992.jpg'
  },
  {
    id: 'cbr954rr-2002', brand: 'honda', model: 'CBR954RR FireBlade', year: 2002,
    category: '스포츠', license: '소형이륜',
    displacement: 954,  power: 154,  torque: 105,  weight: 195,
    seatHeight: 815,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 280,  priceKRW: 6500000, image: '/bikes/honda/cbr954rrfireblade-2002.jpg'
  },
  {
    id: 'cbr1000rr-2004', brand: 'honda', model: 'CBR1000RR Fireblade', year: 2004,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 172,  torque: 115,  weight: 205,
    seatHeight: 831,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 286,  priceKRW: 7000000, image: '/bikes/honda/cbr1000rrfireblade-2004.jpg'
  },
  {
    id: 'cbr1000rr-2008', brand: 'honda', model: 'CBR1000RR Fireblade', year: 2008,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 178,  torque: 112,  weight: 199,
    seatHeight: 820,  fuelEconomy: 15, tankCapacity: 17.7,
    topSpeed: 286,  priceKRW: 8500000, image: '/bikes/honda/cbr1000rrfireblade-2008.jpg'
  },
  {
    id: 'cbr1000rr-2017', brand: 'honda', model: 'CBR1000RR Fireblade', year: 2017,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 189,  torque: 114,  weight: 196,
    seatHeight: 820,  fuelEconomy: 16, tankCapacity: 16.0,
    topSpeed: 299,  priceKRW: 14000000, image: '/bikes/honda/cbr1000rrfireblade-2017.jpg'
  },
  {
    id: 'cbr1000rrr-2020', brand: 'honda', model: 'CBR1000RR-R Fireblade SP', year: 2020,
    category: '스포츠', license: '소형이륜',
    displacement: 1000, power: 214,  torque: 113,  weight: 201,
    seatHeight: 830,  fuelEconomy: 14, tankCapacity: 16.1,
    topSpeed: 299,  priceKRW: 28000000, image: '/bikes/honda/cbr1000rrrfirebladesp-2020.jpg'
  },
  {
    id: 'cbr1000rrr-2024', brand: 'honda', model: 'CBR1000RR-R Fireblade SP', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 1000, power: 215,  torque: 113,  weight: 201,
    seatHeight: 830,  fuelEconomy: 14, tankCapacity: 16.1,
    topSpeed: 299,  priceKRW: 42000000, image: '/bikes/honda/cbr1000rrrfirebladesp-2024.jpg'
  },
  {
    id: 'cb400sf-1999', brand: 'honda', model: 'CB400 Super Four', year: 1999,
    category: '네이키드', license: '소형이륜',
    displacement: 399,  power: 53,   torque: 38,   weight: 188,
    seatHeight: 760,  fuelEconomy: 22, tankCapacity: 18.0,
    topSpeed: 185,  priceKRW: 4500000, image: '/bikes/honda/cb400superfour-1999.jpg'
  },
  {
    id: 'cb400sf-2008', brand: 'honda', model: 'CB400 Super Four', year: 2008,
    category: '네이키드', license: '소형이륜',
    displacement: 399,  power: 53,   torque: 38,   weight: 194,
    seatHeight: 755,  fuelEconomy: 24, tankCapacity: 18.0,
    topSpeed: 185,  priceKRW: 6500000, image: '/bikes/honda/cb400superfour-2008.jpg'
  },
  {
    id: 'cb400sf-2018', brand: 'honda', model: 'CB400 Super Four', year: 2018,
    category: '네이키드', license: '소형이륜',
    displacement: 399,  power: 56,   torque: 39,   weight: 201,
    seatHeight: 755,  fuelEconomy: 24, tankCapacity: 18.0,
    topSpeed: 185,  priceKRW: 9000000, image: '/bikes/honda/cb400superfour-2018.jpg'
  },
  {
    id: 'hornet600-1998', brand: 'honda', model: 'CB600F Hornet', year: 1998,
    category: '네이키드', license: '소형이륜',
    displacement: 599,  power: 95,   torque: 65,   weight: 198,
    seatHeight: 790,  fuelEconomy: 18, tankCapacity: 16.0,
    topSpeed: 225,  priceKRW: 3500000, image: '/bikes/honda/cb600fhornet-2007.webp'
  },
  {
    id: 'hornet600-2007', brand: 'honda', model: 'CB600F Hornet', year: 2007,
    category: '네이키드', license: '소형이륜',
    displacement: 599,  power: 102,  torque: 64,   weight: 198,
    seatHeight: 800,  fuelEconomy: 18, tankCapacity: 19.0,
    topSpeed: 225,  priceKRW: 4500000, image: '/bikes/honda/cb600fhornet-2007.webp'
  },
  {
    id: 'cb750hornet-2023', brand: 'honda', model: 'CB750 Hornet', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 755,  power: 90.5, torque: 75,   weight: 190,
    seatHeight: 795,  fuelEconomy: 23, tankCapacity: 15.2,
    topSpeed: 205,  priceKRW: 11000000, image: '/bikes/honda/cb750hornet-2023.jpg'
  },
  {
    id: 'cb750hornet-2025', brand: 'honda', model: 'CB750 Hornet', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 755,  power: 90.5, torque: 75,   weight: 192,
    seatHeight: 795,  fuelEconomy: 23, tankCapacity: 15.2,
    topSpeed: 205,  priceKRW: 12500000, image: '/bikes/honda/cb750hornet-2025.jpg'
  },
  {
    id: 'cb1000r-2008', brand: 'honda', model: 'CB1000R', year: 2008,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 123,  torque: 100,  weight: 217,
    seatHeight: 825,  fuelEconomy: 16, tankCapacity: 17.0,
    topSpeed: 230,  priceKRW: 6500000, image: '/bikes/honda/cb1000r-2008.jpg'
  },
  {
    id: 'cb1000r-2018', brand: 'honda', model: 'CB1000R', year: 2018,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 143,  torque: 104,  weight: 212,
    seatHeight: 830,  fuelEconomy: 17, tankCapacity: 16.2,
    topSpeed: 240,  priceKRW: 13000000, image: '/bikes/honda/cb1000r-2018.jpg'
  },
  {
    id: 'cb1000r-2021', brand: 'honda', model: 'CB1000R', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 143,  torque: 104,  weight: 213,
    seatHeight: 830,  fuelEconomy: 17, tankCapacity: 16.2,
    topSpeed: 240,  priceKRW: 15000000, image: '/bikes/honda/cb1000r-2021.jpg'
  },
  {
    id: 'cb1000hornetsp-2025', brand: 'honda', model: 'CB1000 Hornet SP', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 1000, power: 155,  torque: 107,  weight: 212,
    seatHeight: 809,  fuelEconomy: 17, tankCapacity: 17.0,
    topSpeed: 250,  priceKRW: 18000000, image: '/bikes/honda/cb1000hornetsp-2025.jpg'
  },
  {
    id: 'xrv750-1990', brand: 'honda', model: 'XRV750 Africa Twin', year: 1990,
    category: '어드벤처', license: '소형이륜',
    displacement: 742,  power: 61,   torque: 63,   weight: 220,
    seatHeight: 860,  fuelEconomy: 18, tankCapacity: 23.0,
    topSpeed: 180,  priceKRW: 6000000, image: '/bikes/honda/xrv750africatwin-1990.jpg'
  },
  {
    id: 'xrv750-1996', brand: 'honda', model: 'XRV750 Africa Twin', year: 1996,
    category: '어드벤처', license: '소형이륜',
    displacement: 742,  power: 61,   torque: 63,   weight: 230,
    seatHeight: 860,  fuelEconomy: 18, tankCapacity: 23.0,
    topSpeed: 180,  priceKRW: 6500000, image: '/bikes/honda/xrv750africatwin-1996.jpg'
  },
  {
    id: 'crf1000l-2016', brand: 'honda', model: 'CRF1000L Africa Twin', year: 2016,
    category: '어드벤처', license: '소형이륜',
    displacement: 998,  power: 94,   torque: 98,   weight: 232,
    seatHeight: 850,  fuelEconomy: 20, tankCapacity: 18.8,
    topSpeed: 200,  priceKRW: 11000000, image: '/bikes/honda/crf1000lafricatwin-2016.png'
  },
  {
    id: 'crf1100l-2020', brand: 'honda', model: 'CRF1100L Africa Twin', year: 2020,
    category: '어드벤처', license: '소형이륜',
    displacement: 1084, power: 101,  torque: 105,  weight: 226,
    seatHeight: 850,  fuelEconomy: 21, tankCapacity: 18.8,
    topSpeed: 200,  priceKRW: 15000000, image: '/bikes/honda/crf1100lafricatwin-2020.jpg'
  },
  {
    id: 'crf1100ladv-2024', brand: 'honda', model: 'Africa Twin Adventure Sports', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 1084, power: 101,  torque: 112,  weight: 243,
    seatHeight: 835,  fuelEconomy: 21, tankCapacity: 24.8,
    topSpeed: 200,  priceKRW: 24000000, image: '/bikes/honda/africatwin-2024.jpg'
  },
  {
    id: 'crf1100ladv-2025', brand: 'honda', model: 'Africa Twin Adventure Sports', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 1084, power: 101,  torque: 112,  weight: 243,
    seatHeight: 835,  fuelEconomy: 21, tankCapacity: 24.8,
    topSpeed: 200,  priceKRW: 26000000, image: '/bikes/honda/africatwin-2025.jpg'
  },
  {
    id: 'xl750transalp-2023', brand: 'honda', model: 'XL750 Transalp', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 755,  power: 90.5, torque: 75,   weight: 208,
    seatHeight: 850,  fuelEconomy: 23, tankCapacity: 16.9,
    topSpeed: 195,  priceKRW: 14000000, image: '/bikes/honda/xl750transalp-2023.jpg'
  },
  {
    id: 'xl750transalp-2025', brand: 'honda', model: 'XL750 Transalp', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 755,  power: 90.5, torque: 75,   weight: 208,
    seatHeight: 850,  fuelEconomy: 23, tankCapacity: 16.9,
    topSpeed: 195,  priceKRW: 16000000, image: '/bikes/honda/xl750translap-2025.jpg'
  },
  {
    id: 'rebel250-2017', brand: 'honda', model: 'Rebel 250', year: 2017,
    category: '크루저', license: '소형이륜',
    displacement: 234,  power: 26,   torque: 22,   weight: 170,
    seatHeight: 690,  fuelEconomy: 32, tankCapacity: 11.2,
    topSpeed: 130,  priceKRW: 4200000, image: '/bikes/honda/rebel250-2017.jpg'
  },
  {
    id: 'rebel1100-2021', brand: 'honda', model: 'Rebel 1100', year: 2021,
    category: '크루저', license: '소형이륜',
    displacement: 1084, power: 86,   torque: 98,   weight: 223,
    seatHeight: 700,  fuelEconomy: 20, tankCapacity: 13.6,
    topSpeed: 180,  priceKRW: 14000000, image: '/bikes/honda/rebel1100-2021.jpg'
  },
  {
    id: 'rebel1100-2024', brand: 'honda', model: 'Rebel 1100', year: 2024,
    category: '크루저', license: '소형이륜',
    displacement: 1084, power: 86,   torque: 98,   weight: 223,
    seatHeight: 700,  fuelEconomy: 20, tankCapacity: 13.6,
    topSpeed: 180,  priceKRW: 16500000, image: '/bikes/honda/rebel1100-2024.jpg'
  },
  {
    id: 'rebel1100t-2025', brand: 'honda', model: 'Rebel 1100T', year: 2025,
    category: '크루저', license: '소형이륜',
    displacement: 1084, power: 86,   torque: 98,   weight: 238,
    seatHeight: 710,  fuelEconomy: 20, tankCapacity: 13.6,
    topSpeed: 180,  priceKRW: 19000000, image: '/bikes/honda/rebel1100t-2025.jpg'
  },
  {
    id: 'nc750x-2016', brand: 'honda', model: 'NC750X', year: 2016,
    category: '어드벤처', license: '소형이륜',
    displacement: 745,  power: 54,   torque: 68,   weight: 220,
    seatHeight: 830,  fuelEconomy: 28, tankCapacity: 14.1,
    topSpeed: 180,  priceKRW: 6500000, image: '/bikes/honda/cn750x-2016.jpg'
  },
  {
    id: 'nc750x-2025', brand: 'honda', model: 'NC750X', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 745,  power: 58,   torque: 69,   weight: 214,
    seatHeight: 802,  fuelEconomy: 28, tankCapacity: 14.1,
    topSpeed: 185,  priceKRW: 13000000, image: '/bikes/honda/nc750x-2025.jpg'
  },
  {
    id: 'vfr800-1998', brand: 'honda', model: 'VFR800F', year: 1998,
    category: '투어러', license: '소형이륜',
    displacement: 782,  power: 109,  torque: 80,   weight: 213,
    seatHeight: 805,  fuelEconomy: 18, tankCapacity: 21.5,
    topSpeed: 240,  priceKRW: 4500000, image: '/bikes/honda/vfr800f-1998.jpg'
  },
  {
    id: 'vfr800-2014', brand: 'honda', model: 'VFR800F', year: 2014,
    category: '투어러', license: '소형이륜',
    displacement: 782,  power: 104,  torque: 75,   weight: 242,
    seatHeight: 789,  fuelEconomy: 19, tankCapacity: 21.5,
    topSpeed: 235,  priceKRW: 8500000, image: '/bikes/honda/vfr800f-2014.jpg'
  },
  {
    id: 'vfr1200f-2010', brand: 'honda', model: 'VFR1200F', year: 2010,
    category: '투어러', license: '소형이륜',
    displacement: 1237, power: 170,  torque: 129,  weight: 267,
    seatHeight: 815,  fuelEconomy: 15, tankCapacity: 18.5,
    topSpeed: 250,  priceKRW: 8000000, image: '/bikes/honda/vfr1200f-2010.jpg'
  },
  {
    id: 'goldwing-1975', brand: 'honda', model: 'Gold Wing GL1000', year: 1975,
    category: '투어러', license: '소형이륜',
    displacement: 999,  power: 78,   torque: 85,   weight: 295,
    seatHeight: 810,  fuelEconomy: 15, tankCapacity: 19.0,
    topSpeed: 193,  priceKRW: 7000000, image: '/bikes/honda/goldwinggl1000-1975.jpg'
  },
  {
    id: 'goldwing-1988', brand: 'honda', model: 'Gold Wing GL1500', year: 1988,
    category: '투어러', license: '소형이륜',
    displacement: 1520, power: 100,  torque: 150,  weight: 360,
    seatHeight: 740,  fuelEconomy: 14, tankCapacity: 23.0,
    topSpeed: 180,  priceKRW: 8000000, image: '/bikes/honda/goldwinggl1500-1988.png'
  },
  {
    id: 'goldwing-2001', brand: 'honda', model: 'Gold Wing GL1800', year: 2001,
    category: '투어러', license: '소형이륜',
    displacement: 1832, power: 118,  torque: 167,  weight: 363,
    seatHeight: 740,  fuelEconomy: 15, tankCapacity: 25.0,
    topSpeed: 200,  priceKRW: 11000000, image: '/bikes/honda/goldwinggl1800-2001.png'
  },
  {
    id: 'goldwing-2018', brand: 'honda', model: 'Gold Wing', year: 2018,
    category: '투어러', license: '소형이륜',
    displacement: 1833, power: 124,  torque: 170,  weight: 365,
    seatHeight: 745,  fuelEconomy: 16, tankCapacity: 21.1,
    topSpeed: 200,  priceKRW: 23000000, image: '/bikes/honda/goldwing-2018.jpg'
  },
  {
    id: 'goldwing-2025', brand: 'honda', model: 'Gold Wing Tour', year: 2025,
    category: '투어러', license: '소형이륜',
    displacement: 1833, power: 126,  torque: 170,  weight: 390,
    seatHeight: 745,  fuelEconomy: 16, tankCapacity: 21.1,
    topSpeed: 200,  priceKRW: 42000000, image: '/bikes/honda/goldwingtour-2025.jpg'
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
    id: 'nmax155-2021', brand: 'yamaha', model: 'NMAX 155', year: 2021,
    category: '스쿠터', license: '소형이륜',
    displacement: 155,  power: 15.3, torque: 14.0, weight: 131,
    seatHeight: 765,  fuelEconomy: 43.5, tankCapacity: 7.1,
    topSpeed: null, priceKRW: 2000000 , image: '/bikes/yamaha/nmax155-2021.png'
  },
  {
    id: 'xmax125-2021', brand: 'yamaha', model: 'XMAX 125', year: 2021,
    category: '스쿠터', license: '원동기',
    displacement: 125,  power: 14.1, torque: 12.0, weight: 175,
    seatHeight: 795,  fuelEconomy: 37.0, tankCapacity: 13.0,
    topSpeed: null, priceKRW: 1500000 , image: '/bikes/yamaha/xmax125-2021.webp'
  },
  {
    id: 'xmax250-2020', brand: 'yamaha', model: 'XMAX 250 Tech MAX', year: 2020,
    category: '스쿠터', license: '소형이륜',
    displacement: 249,  power: 22.5, torque: 24.3, weight: 179,
    seatHeight: 800,  fuelEconomy: 32.3, tankCapacity: 13.0,
    topSpeed: null, priceKRW: 2000000 , image: null
  },
  {
    id: 'xmax400-2020', brand: 'yamaha', model: 'XMAX 400', year: 2020,
    category: '스쿠터', license: '소형이륜',
    displacement: 395,  power: 32.9, torque: 36.0, weight: 210,
    seatHeight: 800,  fuelEconomy: 23.9, tankCapacity: 13.0,
    topSpeed: null, priceKRW: 3000000 , image: '/bikes/yamaha/xmax400-2020.webp'
  },
  {
    id: 'tmax530-2017', brand: 'yamaha', model: 'TMAX 530', year: 2017,
    category: '스쿠터', license: '소형이륜',
    displacement: 530,  power: 45.3, torque: 53.0, weight: 213,
    seatHeight: 800,  fuelEconomy: 13, tankCapacity: 15.0,
    topSpeed: 160,  priceKRW: 4000000, image: '/bikes/yamaha/tmax530-2017.jpg'
  },
  {
    id: 'tmax560-2022', brand: 'yamaha', model: 'TMAX 560 Tech MAX', year: 2022,
    category: '스쿠터', license: '소형이륜',
    displacement: 562,  power: 47.6, torque: 55.7, weight: 220,
    seatHeight: 800,  fuelEconomy: 20, tankCapacity: 15.0,
    topSpeed: null, priceKRW: 6000000, image: '/bikes/yamaha/tmax560techmax-2022.jpeg'
  },
  {
    id: 'aerox155-2022', brand: 'yamaha', model: 'Aerox 155', year: 2022,
    category: '스쿠터', license: '소형이륜',
    displacement: 155,  power: 15.1, torque: 13.9, weight: 126,
    seatHeight: 790,  fuelEconomy: 35, tankCapacity: 5.5,
    topSpeed: null, priceKRW: 2000000, image: '/bikes/yamaha/aerox155-2022.png'
  },
  {
    id: 'tricity300-2020', brand: 'yamaha', model: 'Tricity 300', year: 2020,
    category: '스쿠터', license: '소형이륜',
    displacement: 292,  power: 27.1, torque: 29.0, weight: 239,
    seatHeight: 795,  fuelEconomy: 30, tankCapacity: 13.0,
    topSpeed: null, priceKRW: 3000000, image: '/bikes/yamaha/tricity300-2020.jpeg'
  },
  {
    id: 'r125-2023', brand: 'yamaha', model: 'YZF-R125', year: 2023,
    category: '스포츠', license: '원동기',
    displacement: 125,  power: 15.0, torque: 11.5, weight: 144,
    seatHeight: 820,  fuelEconomy: 33.3, tankCapacity: 11.0,
    topSpeed: null, priceKRW: 2500000, image: '/bikes/yamaha/r125-2023.jpeg'
  },
  {
    id: 'r7-2022', brand: 'yamaha', model: 'YZF-R7', year: 2022,
    category: '스포츠', license: '소형이륜',
    displacement: 689,  power: 73.4, torque: 67.0, weight: 188,
    seatHeight: 835,  fuelEconomy: 23, tankCapacity: 13.0,
    topSpeed: 224,  priceKRW: 7000000, image: '/bikes/yamaha/r7-2022.jpg'
  },
  {
    id: 'r3-2023', brand: 'yamaha', model: 'YZF-R3', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 321,  power: 42,   torque: 29.6, weight: 169,
    seatHeight: 780,  fuelEconomy: 30, tankCapacity: 14.0,
    topSpeed: 182,  priceKRW: 5700000, image: '/bikes/yamaha/r3-2023.jpg'
  },
  {
    id: 'r6-2020', brand: 'yamaha', model: 'YZF-R6', year: 2020,
    category: '스포츠', license: '소형이륜',
    displacement: 599,  power: 117,  torque: 61.7, weight: 190,
    seatHeight: 851,  fuelEconomy: 18, tankCapacity: 17.0,
    topSpeed: 257,  priceKRW: 8000000, image: '/bikes/yamaha/r6-2020.webp'
  },
  {
    id: 'r1-1998', brand: 'yamaha', model: 'YZF-R1', year: 1998,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 150,  torque: 108, weight: 193,
    seatHeight: 815,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 270,  priceKRW: 4000000, image: '/bikes/yamaha/r1-1998.webp'
  },
  {
    id: 'r1-2002', brand: 'yamaha', model: 'YZF-R1', year: 2002,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 152,  torque: 105, weight: 193,
    seatHeight: 820,  fuelEconomy: 15, tankCapacity: 17.0,
    topSpeed: 275,  priceKRW: 5000000, image: '/bikes/yamaha/r1-2002.jpg'
  },
  {
    id: 'r1-2004', brand: 'yamaha', model: 'YZF-R1', year: 2004,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 172,  torque: 107, weight: 190,
    seatHeight: 835,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 288,  priceKRW: 5000000, image: '/bikes/yamaha/r1-2004.jpg'
  },
  {
    id: 'r1-2007', brand: 'yamaha', model: 'YZF-R1', year: 2007,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 180,  torque: 113, weight: 200,
    seatHeight: 835,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 285,  priceKRW: 7000000, image: '/bikes/yamaha/r1-2007.jpg'
  },
  {
    id: 'r1-2009', brand: 'yamaha', model: 'YZF-R1', year: 2009,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 182,  torque: 116, weight: 206,
    seatHeight: 835,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 285,  priceKRW: 7000000, image: '/bikes/yamaha/r1-2009.jpg'
  },
  {
    id: 'r1-2012', brand: 'yamaha', model: 'YZF-R1', year: 2012,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 182,  torque: 116, weight: 206,
    seatHeight: 835,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 285,  priceKRW: 10000000, image: '/bikes/yamaha/r1-2012.jpg'
  },
  {
    id: 'r1-2015', brand: 'yamaha', model: 'YZF-R1', year: 2015,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 199,  torque: 112, weight: 199,
    seatHeight: 855,  fuelEconomy: 16, tankCapacity: 17.0,
    topSpeed: 299,  priceKRW: 13000000, image: '/bikes/yamaha/r1-2015.jpg'
  },
  {
    id: 'r1m-2015', brand: 'yamaha', model: 'YZF-R1M', year: 2015,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 199,  torque: 112, weight: 200,
    seatHeight: 855,  fuelEconomy: 15, tankCapacity: 17.0,
    topSpeed: 299,  priceKRW: 13000000, image: '/bikes/yamaha/r1m-2015.jpg'
  },
  {
    id: 'r1-2020', brand: 'yamaha', model: 'YZF-R1', year: 2020,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 199,  torque: 113, weight: 201,
    seatHeight: 855,  fuelEconomy: 13, tankCapacity: 17.0,
    topSpeed: 299,  priceKRW: 16000000, image: '/bikes/yamaha/r1-2020.webp'
  },
  {
    id: 'r1m-2020', brand: 'yamaha', model: 'YZF-R1M', year: 2020,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 199,  torque: 113, weight: 202,
    seatHeight: 855,  fuelEconomy: 13, tankCapacity: 17.0,
    topSpeed: 299,  priceKRW: 16000000, image: '/bikes/yamaha/r1m-2020.webp'
  },
  {
    id: 'r1-2025', brand: 'yamaha', model: 'YZF-R1', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 199,  torque: 113, weight: 203,
    seatHeight: 856,  fuelEconomy: 13, tankCapacity: 17.0,
    topSpeed: 299,  priceKRW: 30000000, image: '/bikes/yamaha/r1-2025.jpg'
  },
  {
    id: 'r1m-2025', brand: 'yamaha', model: 'YZF-R1M', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 199,  torque: 113, weight: 204,
    seatHeight: 856,  fuelEconomy: 13, tankCapacity: 17.0,
    topSpeed: 299,  priceKRW: 30000000, image: '/bikes/yamaha/r1m-2025.jpg'
  },
  {
    id: 'mt01-2005', brand: 'yamaha', model: 'MT-01', year: 2005,
    category: '네이키드', license: '소형이륜',
    displacement: 1670, power: 89,   torque: 150.3, weight: 265,
    seatHeight: 825,  fuelEconomy: 15.4, tankCapacity: 15.0,
    topSpeed: 210,  priceKRW: 5000000, image: '/bikes/yamaha/mt01-2005.jpg'
  },
  {
    id: 'mt125-2023', brand: 'yamaha', model: 'MT-125', year: 2023,
    category: '네이키드', license: '원동기',
    displacement: 125,  power: 15,   torque: 11.5, weight: 142,
    seatHeight: 810,  fuelEconomy: 47.6, tankCapacity: 10.0,
    topSpeed: null, priceKRW: 2500000, image: '/bikes/yamaha/mt125-2023.jpg'
  },
  {
    id: 'mt15-2023', brand: 'yamaha', model: 'MT-15', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 155,  power: 18.4, torque: 14.1, weight: 141,
    seatHeight: 810,  fuelEconomy: 45.5, tankCapacity: 10.0,
    topSpeed: null, priceKRW: 3000000, image: '/bikes/yamaha/mt15-2023.jpg'
  },
  {
    id: 'mt25-2023', brand: 'yamaha', model: 'MT-25', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 250,  power: 35.5, torque: 23.6, weight: 165,
    seatHeight: 780,  fuelEconomy: 27.0, tankCapacity: 14.3,
    topSpeed: null, priceKRW: 3000000, image: '/bikes/yamaha/mt25-2023.jpg'
  },
  {
    id: 'mt03-2006', brand: 'yamaha', model: 'MT-03', year: 2006,
    category: '네이키드', license: '소형이륜',
    displacement: 659,  power: 48,   torque: 58.4, weight: 192,
    seatHeight: null, fuelEconomy: 20.0, tankCapacity: 15.0,
    topSpeed: 163,  priceKRW: 3000000, image: '/bikes/yamaha/mt03-2006.jpeg'
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
    id: 'mt03-2025', brand: 'yamaha', model: 'MT-03', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 321,  power: 42,   torque: 29.5, weight: 168,
    seatHeight: 780,  fuelEconomy: 26.3, tankCapacity: 14.0,
    topSpeed: null, priceKRW: 6000000, image: '/bikes/yamaha/mt03-2025.jpg'
  },
  {
    id: 'mt07-2014', brand: 'yamaha', model: 'MT-07', year: 2014,
    category: '네이키드', license: '소형이륜',
    displacement: 689,  power: 74,   torque: 68,   weight: 179,
    seatHeight: 805,  fuelEconomy: 24.2, tankCapacity: 14.0,
    topSpeed: 229,  priceKRW: 4000000, image: '/bikes/yamaha/mt07-2014.jpg'
  },
  {
    id: 'mt07-2021', brand: 'yamaha', model: 'MT-07', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 689,  power: 73.4, torque: 67,   weight: 184,
    seatHeight: 805,  fuelEconomy: 24.2, tankCapacity: 14.0,
    topSpeed: 229,  priceKRW: 7000000, image: '/bikes/yamaha/mt07-2021.webp'
  },
  {
    id: 'mt07-2025', brand: 'yamaha', model: 'MT-07', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 689,  power: 73.4, torque: 67,   weight: 183,
    seatHeight: 805,  fuelEconomy: 24.2, tankCapacity: 14.0,
    topSpeed: 229,  priceKRW: 10000000, image: '/bikes/yamaha/mt07-2025.jpg'
  },
  {
    id: 'mt09-2014', brand: 'yamaha', model: 'MT-09', year: 2014,
    category: '네이키드', license: '소형이륜',
    displacement: 847,  power: 115,  torque: 87.5, weight: 188,
    seatHeight: 815,  fuelEconomy: 20.0, tankCapacity: 14.0,
    topSpeed: null, priceKRW: 7000000, image: '/bikes/yamaha/mt09-2014.png'
  },
  {
    id: 'mt09-2021', brand: 'yamaha', model: 'MT-09', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 890,  power: 119,  torque: 93,   weight: 189,
    seatHeight: 825,  fuelEconomy: 20.0, tankCapacity: 14.0,
    topSpeed: null, priceKRW: 11000000, image: '/bikes/yamaha/mt09-2021.png'
  },
  {
    id: 'mt09-2024', brand: 'yamaha', model: 'MT-09', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 890,  power: 119,  torque: 93,   weight: 193,
    seatHeight: 825,  fuelEconomy: 20.0, tankCapacity: 14.0,
    topSpeed: null, priceKRW: 14000000, image: '/bikes/yamaha/mt09-2024.webp'
  },
  {
    id: 'mt10-2016', brand: 'yamaha', model: 'MT-10', year: 2016,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 158,  torque: 111,  weight: 210,
    seatHeight: 825,  fuelEconomy: 14.6, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 10000000, image: '/bikes/yamaha/mt10-2016.jpg'
  },
  {
    id: 'mt10-2022', brand: 'yamaha', model: 'MT-10', year: 2022,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 166,  torque: 112,  weight: 212,
    seatHeight: 835,  fuelEconomy: 14.6, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 17000000, image: '/bikes/yamaha/mt10-2022.jpg'
  },
  {
    id: 'mt10-2025', brand: 'yamaha', model: 'MT-10', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 166,  torque: 112,  weight: 212,
    seatHeight: 835,  fuelEconomy: 14.6, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 24000000, image: '/bikes/yamaha/mt10-2025.jpg'
  },
  {
    id: 'xsr700-2022', brand: 'yamaha', model: 'XSR700', year: 2022,
    category: '클래식', license: '소형이륜',
    displacement: 689,  power: 75,   torque: 68,   weight: 193,
    seatHeight: 835,  fuelEconomy: 25, tankCapacity: 13.0,
    topSpeed: 200,  priceKRW: 9200000, image: '/bikes/yamaha/xsr700-2022.jpg'
  },
  {
    id: 'xsr125-2023', brand: 'yamaha', model: 'XSR125', year: 2023,
    category: '클래식', license: '원동기',
    displacement: 125,  power: 15.0, torque: 11.5, weight: 140,
    seatHeight: 815,  fuelEconomy: 47.6, tankCapacity: 10.0,
    topSpeed: null, priceKRW: 3500000, image: '/bikes/yamaha/xsr125-2023.jpg'
  },
  {
    id: 'xsr900-2022', brand: 'yamaha', model: 'XSR900', year: 2022,
    category: '클래식', license: '소형이륜',
    displacement: 890,  power: 117,  torque: 94,   weight: 193,
    seatHeight: 810,  fuelEconomy: 20.0, tankCapacity: 14.0,
    topSpeed: null, priceKRW: 12000000, image: '/bikes/yamaha/xsr900-2022.webp'
  },
  {
    id: 'xsr900gp-2024', brand: 'yamaha', model: 'XSR900 GP', year: 2024,
    category: '클래식', license: '소형이륜',
    displacement: 890,  power: 119,  torque: 93,   weight: 200,
    seatHeight: 835,  fuelEconomy: 20.0, tankCapacity: 14.0,
    topSpeed: null, priceKRW: 14000000, image: '/bikes/yamaha/xsr900gp-2024.webp'
  },
  {
    id: 'xt225-2007', brand: 'yamaha', model: 'XT225 Serow', year: 2007,
    category: '어드벤처', license: '소형이륜',
    displacement: 223,  power: 20,   torque: 19,   weight: 121,
    seatHeight: 810,  fuelEconomy: 34.0, tankCapacity: 8.7,
    topSpeed: null, priceKRW: 2000000, image: '/bikes/yamaha/xt225serow-2007.jpg'
  },
  {
    id: 'xt250-2023', brand: 'yamaha', model: 'XT250', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 249,  power: null, torque: null, weight: 132,
    seatHeight: 830,  fuelEconomy: 32.3, tankCapacity: 9.8,
    topSpeed: null, priceKRW: 5000000, image: '/bikes/yamaha/xt250-2023.jpg'
  },
  {
    id: 'xt660z-2016', brand: 'yamaha', model: 'XT660Z Tenere', year: 2016,
    category: '어드벤처', license: '소형이륜',
    displacement: 660,  power: 47,   torque: 58,   weight: 206,
    seatHeight: 895,  fuelEconomy: 22.2, tankCapacity: 23.0,
    topSpeed: null, priceKRW: 5000000, image: '/bikes/yamaha/xt660ztenere.jpg'
  },
  {
    id: 'tenere700-2023', brand: 'yamaha', model: 'Tenere 700', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 689,  power: 72,   torque: 68,   weight: 204,
    seatHeight: 875,  fuelEconomy: 25, tankCapacity: 16.0,
    topSpeed: 200,  priceKRW: 12000000, image: '/bikes/yamaha/tenere700-2023.jpg'
  },
  {
    id: 'tenere700-2025', brand: 'yamaha', model: 'Tenere 700', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 689,  power: 72,   torque: 68,   weight: 205,
    seatHeight: 875,  fuelEconomy: 23.8, tankCapacity: 16.0,
    topSpeed: null, priceKRW: 12000000, image: '/bikes/yamaha/tenere700-2025.jpeg'
  },
  {
    id: 'supertenere-2024', brand: 'yamaha', model: 'Super Tenere ES', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 1199, power: 108.5, torque: 114.1, weight: 261,
    seatHeight: 845,  fuelEconomy: 17.9, tankCapacity: 23.0,
    topSpeed: null, priceKRW: 24000000, image: '/bikes/yamaha/supertenerees-2024.jpg'
  },
  {
    id: 'tracer700-2020', brand: 'yamaha', model: 'Tracer 700', year: 2020,
    category: '투어러', license: '소형이륜',
    displacement: 689,  power: 73.8, torque: 68,   weight: 196,
    seatHeight: 840,  fuelEconomy: 27.0, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 7000000, image: '/bikes/yamaha/tracer700-2020.jpeg'
  },
  {
    id: 'tracer9gt-2022', brand: 'yamaha', model: 'Tracer 9 GT', year: 2022,
    category: '투어러', license: '소형이륜',
    displacement: 890,  power: 119,  torque: 93,   weight: 220,
    seatHeight: 820,  fuelEconomy: 21, tankCapacity: 18.0,
    topSpeed: 225,  priceKRW: 18000000, image: '/bikes/yamaha/tracer9gt-2022.webp'
  },
  {
    id: 'tracer9gt-2025', brand: 'yamaha', model: 'Tracer 9 GT', year: 2025,
    category: '투어러', license: '소형이륜',
    displacement: 890,  power: 119,  torque: 93,   weight: 223,
    seatHeight: 845,  fuelEconomy: 20.0, tankCapacity: 19.0,
    topSpeed: null, priceKRW: 18000000, image: '/bikes/yamaha/tracer9gt-2025.jpeg'
  },
  {
    id: 'nikengt-2019', brand: 'yamaha', model: 'Niken GT', year: 2019,
    category: '투어러', license: '소형이륜',
    displacement: 847,  power: 115,  torque: 87.5, weight: 267,
    seatHeight: 820,  fuelEconomy: 17.2, tankCapacity: 18.0,
    topSpeed: null, priceKRW: 10000000, image: '/bikes/yamaha/nikengt-2019.jpeg'
  },
  {
    id: 'fjr1300a-2016', brand: 'yamaha', model: 'FJR1300A', year: 2016,
    category: '투어러', license: '소형이륜',
    displacement: 1298, power: 141.5, torque: 134.4, weight: 291,
    seatHeight: 805,  fuelEconomy: 16.1, tankCapacity: 25.0,
    topSpeed: null, priceKRW: 14000000, image: '/bikes/yamaha/fjr1300a-2016.jpg'
  },
  {
    id: 'virago125-1998', brand: 'yamaha', model: 'Virago 125', year: 1998,
    category: '크루저', license: '원동기',
    displacement: 124,  power: 11.4, torque: 9.4,  weight: 139,
    seatHeight: 685,  fuelEconomy: 35.6, tankCapacity: 9.5,
    topSpeed: 107,  priceKRW: null, image: '/bikes/yamaha/virago125-1998.jpg'
  },
  {
    id: 'virago250-1988', brand: 'yamaha', model: 'Virago 250', year: 1988,
    category: '크루저', license: '소형이륜',
    displacement: 249,  power: 21,   torque: 20.6, weight: 147,
    seatHeight: 685,  fuelEconomy: 34, tankCapacity: 9.5,
    topSpeed: 121,  priceKRW: null, image: '/bikes/yamaha/virago250-1988.jpg'
  },
  {
    id: 'virago535-1989', brand: 'yamaha', model: 'Virago 535', year: 1989,
    category: '크루저', license: '소형이륜',
    displacement: 535,  power: 41.7, torque: 46,   weight: 182,
    seatHeight: 720,  fuelEconomy: 28.3, tankCapacity: 13.5,
    topSpeed: 160,  priceKRW: null, image: '/bikes/yamaha/virago535-1989.webp'
  },
  {
    id: 'virago750-1981', brand: 'yamaha', model: 'Virago 750', year: 1981,
    category: '크루저', license: '소형이륜',
    displacement: 748,  power: 55,   torque: null, weight: null,
    seatHeight: null, fuelEconomy: 23.1, tankCapacity: null,
    topSpeed: null, priceKRW: null, image: '/bikes/yamaha/virago750-1981.jpg'
  },
  {
    id: 'virago920-1982', brand: 'yamaha', model: 'Virago 920', year: 1982,
    category: '크루저', license: '소형이륜',
    displacement: 920,  power: 65,   torque: null, weight: null,
    seatHeight: null, fuelEconomy: 21.2, tankCapacity: null,
    topSpeed: null, priceKRW: null, image: '/bikes/yamaha/virago920-1982.jpg'
  },
  {
    id: 'virago700-1984', brand: 'yamaha', model: 'Virago 700', year: 1984,
    category: '크루저', license: '소형이륜',
    displacement: 699,  power: null, torque: null, weight: null,
    seatHeight: null, fuelEconomy: 23.9, tankCapacity: null,
    topSpeed: null, priceKRW: null, image: '/bikes/yamaha/virago700-1984.jpg'
  },
  {
    id: 'virago1000-1984', brand: 'yamaha', model: 'Virago 1000', year: 1984,
    category: '크루저', license: '소형이륜',
    displacement: 981,  power: null, torque: null, weight: null,
    seatHeight: null, fuelEconomy: 20.4, tankCapacity: null,
    topSpeed: null, priceKRW: null, image: '/bikes/yamaha/virago1000-1984.jpg'
  },
  {
    id: 'virago1100-1986', brand: 'yamaha', model: 'Virago 1100', year: 1986,
    category: '크루저', license: '소형이륜',
    displacement: 1063, power: 62,   torque: 85,   weight: 239,
    seatHeight: 715,  fuelEconomy: 20.6, tankCapacity: 16.8,
    topSpeed: 180,  priceKRW: null, image: '/bikes/yamaha/virago1100-1986.jpg'
  },
  {
    id: 'bolt-2014', brand: 'yamaha', model: 'Bolt', year: 2014,
    category: '크루저', license: '소형이륜',
    displacement: 942,  power: null, torque: null, weight: 245,
    seatHeight: 691,  fuelEconomy: 21.7, tankCapacity: 12.1,
    topSpeed: null, priceKRW: 9000000, image: '/bikes/yamaha/bolt-2014.jpeg'
  },
  {
    id: 'vstar950-2009', brand: 'yamaha', model: 'V Star 950', year: 2009,
    category: '크루저', license: '소형이륜',
    displacement: 942,  power: 50,   torque: 78.9, weight: 278,
    seatHeight: 673,  fuelEconomy: 20.0, tankCapacity: 16.7,
    topSpeed: 145,  priceKRW: 5000000, image: '/bikes/yamaha/vstar950-2009.jpeg'
  },
  {
    id: 'vstar1300-2007', brand: 'yamaha', model: 'V Star 1300', year: 2007,
    category: '크루저', license: '소형이륜',
    displacement: 1304, power: 72.5, torque: 110.9, weight: 303,
    seatHeight: 715,  fuelEconomy: 17.9, tankCapacity: 18.5,
    topSpeed: 203,  priceKRW: 7000000, image: '/bikes/yamaha/vstar1300-2007.jpeg'
  },
  {
    id: 'vmax-2009', brand: 'yamaha', model: 'VMAX', year: 2009,
    category: '크루저', license: '소형이륜',
    displacement: 1679, power: 197,  torque: 166.8, weight: 310,
    seatHeight: 775,  fuelEconomy: 11.5, tankCapacity: 15.0,
    topSpeed: 220,  priceKRW: 9000000, image: '/bikes/yamaha/vmax-2009.jpeg'
  },

  // ── Kawasaki ──────────────────────────────────────────────────────────────
  {
   id: 'z125pro-2023', brand: 'kawasaki', model: 'Z125 PRO', year: 2023,
   category: '미니/입문', license: '원동기',
   displacement: 125, power: 9.9, torque: 9.6, weight: 102,
   seatHeight: 785, fuelEconomy: 55, tankCapacity: 7.4,
   topSpeed: 92, priceKRW: 3950000, image: '/bikes/kawasaki/z125pro-2023.jpg'
  },
  {
   id: 'ninja500-2025', brand: 'kawasaki', model: 'Ninja 500', year: 2025,
   category: '스포츠', license: '소형이륜',
   displacement: 451, power: 45, torque: 42.6, weight: 171,
   seatHeight: 785, fuelEconomy: 22, tankCapacity: 14,
   topSpeed: 198, priceKRW: 9350000, image: '/bikes/kawasaki/ninja500-2025.jpg'
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
    id: 'gpz900r-1984', brand: 'kawasaki', model: 'GPZ900R Ninja', year: 1984,
    category: '스포츠', license: '소형이륜',
    displacement: 908, power: 115, torque: 85, weight: 228,
    seatHeight: 780, fuelEconomy: 16, tankCapacity: 22.0,
    topSpeed: 243, priceKRW: 5500000, image: '/bikes/kawasaki/gpz900r-1984.jpg'
  },
  {
    id: 'gpz1000rx-1986', brand: 'kawasaki', model: 'GPZ1000RX', year: 1986,
    category: '스포츠', license: '소형이륜',
    displacement: 997, power: 125, torque: 99, weight: 238,
    seatHeight: 790, fuelEconomy: 15, tankCapacity: 21.0,
    topSpeed: 260, priceKRW: 5000000, image: '/bikes/kawasaki/gpz1000rx-1986.jpg'
  },
  {
    id: 'zx10tomcat-1988', brand: 'kawasaki', model: 'ZX-10 Tomcat', year: 1988,
    category: '스포츠', license: '소형이륜',
    displacement: 997, power: 135, torque: 102, weight: 245,
    seatHeight: 790, fuelEconomy: 17, tankCapacity: 20.8,
    topSpeed: 269, priceKRW: 5500000, image: '/bikes/kawasaki/zx10tomcat-1988.jpg'
  },
  {
    id: 'zzr600-1990', brand: 'kawasaki', model: 'ZZR600 / ZX-6', year: 1990,
    category: '스포츠', license: '소형이륜',
    displacement: 599, power: 99, torque: 64, weight: 195,
    seatHeight: 780, fuelEconomy: 18, tankCapacity: 18.0,
    topSpeed: 246, priceKRW: 3500000, image: '/bikes/kawasaki/zzr600-1990.webp'
  },
  {
    id: 'zzr1100-1990', brand: 'kawasaki', model: 'ZZR1100 / ZX-11', year: 1990,
    category: '스포츠', license: '소형이륜',
    displacement: 1052, power: 147, torque: 110, weight: 257,
    seatHeight: 780, fuelEconomy: 14, tankCapacity: 24.0,
    topSpeed: 283, priceKRW: 6500000, image: '/bikes/kawasaki/zzr1100-1990.jpg'
  },
  {
    id: 'zxr400-1991', brand: 'kawasaki', model: 'ZXR400', year: 1991,
    category: '스포츠', license: '소형이륜',
    displacement: 398, power: 64, torque: 36.3, weight: 159,
    seatHeight: 760, fuelEconomy: 20, tankCapacity: 16.0,
    topSpeed: 225, priceKRW: 4500000, image: '/bikes/kawasaki/zxr400-1991.jpg'
  },
  {
    id: 'zxr750-1991', brand: 'kawasaki', model: 'ZXR750', year: 1991,
    category: '스포츠', license: '소형이륜',
    displacement: 749, power: 121, torque: 76, weight: 205,
    seatHeight: 780, fuelEconomy: 16, tankCapacity: 19.0,
    topSpeed: 260, priceKRW: 5500000, image: '/bikes/kawasaki/zxr750-1991.jpg'
  },
  {
    id: 'zx6r-1995', brand: 'kawasaki', model: 'Ninja ZX-6R', year: 1995,
    category: '스포츠', license: '소형이륜',
    displacement: 599, power: 100, torque: 60, weight: 206,
    seatHeight: 810, fuelEconomy: 17, tankCapacity: 18.0,
    topSpeed: 248, priceKRW: 3500000, image: '/bikes/kawasaki/ninjazx6r-1995.jpg'
  },
  {
    id: 'zx7r-1996', brand: 'kawasaki', model: 'Ninja ZX-7R', year: 1996,
    category: '스포츠', license: '소형이륜',
    displacement: 748, power: 122, torque: 76, weight: 203,
    seatHeight: 790, fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 260, priceKRW: 6500000, image: '/bikes/kawasaki/zx7r-1996.jpg'
  },
  {
    id: 'zx6r-1998', brand: 'kawasaki', model: 'Ninja ZX-6R', year: 1998,
    category: '스포츠', license: '소형이륜',
    displacement: 599, power: 108, torque: 60, weight: 202,
    seatHeight: 813, fuelEconomy: 17, tankCapacity: 18.0,
    topSpeed: 251, priceKRW: 4000000, image: '/bikes/kawasaki/ninjazx6r-1998.webp'
  },
  {
    id: 'zx9r-1998', brand: 'kawasaki', model: 'Ninja ZX-9R', year: 1998,
    category: '스포츠', license: '소형이륜',
    displacement: 899, power: 143, torque: 100, weight: 215,
    seatHeight: 810, fuelEconomy: 15, tankCapacity: 19.0,
    topSpeed: 270, priceKRW: 5500000, image: '/bikes/kawasaki/zx9r-1998.jpg'
  },
  {
    id: 'zx6r-2000', brand: 'kawasaki', model: 'Ninja ZX-6R', year: 2000,
    category: '스포츠', license: '소형이륜',
    displacement: 599, power: 112, torque: 59, weight: 195,
    seatHeight: 790, fuelEconomy: 17, tankCapacity: 18.0,
    topSpeed: 255, priceKRW: 4500000, image: '/bikes/kawasaki/ninjazx6r-2000.webp'
  },
  {
    id: 'zx12r-2000', brand: 'kawasaki', model: 'Ninja ZX-12R', year: 2000,
    category: '스포츠', license: '소형이륜',
    displacement: 1199, power: 178, torque: 134, weight: 247,
    seatHeight: 820, fuelEconomy: 13, tankCapacity: 20.0,
    topSpeed: 300, priceKRW: 8000000, image: '/bikes/kawasaki/ninjazx12r-2000.jpg'
  },
  {
    id: 'zzr1200-2002', brand: 'kawasaki', model: 'ZZR1200', year: 2002,
    category: '스포츠', license: '소형이륜',
    displacement: 1164, power: 160, torque: 125, weight: 270,
    seatHeight: 800, fuelEconomy: 14, tankCapacity: 23.0,
    topSpeed: 280, priceKRW: 6500000, image: '/bikes/kawasaki/zzr1200-2002.jpg'
  },
  {
    id: 'zzr1400-2006', brand: 'kawasaki', model: 'ZZR1400 / Ninja ZX-14', year: 2006,
    category: '스포츠', license: '소형이륜',
    displacement: 1352, power: 190, torque: 154, weight: 257,
    seatHeight: 800, fuelEconomy: 14, tankCapacity: 22.0,
    topSpeed: 299, priceKRW: 8500000, image: '/bikes/kawasaki/zzr1400-2006.jpg'
  },
  {
    id: 'zx6r-2009', brand: 'kawasaki', model: 'Ninja ZX-6R', year: 2009,
    category: '스포츠', license: '소형이륜',
    displacement: 599, power: 128, torque: 66, weight: 191,
    seatHeight: 815, fuelEconomy: 17, tankCapacity: 17.0,
    topSpeed: 260, priceKRW: 6000000, image: '/bikes/kawasaki/ninjazx6r-2009.jpg'
  },
  {
    id: 'zx14r-2012', brand: 'kawasaki', model: 'Ninja ZX-14R', year: 2012,
    category: '스포츠', license: '소형이륜',
    displacement: 1441, power: 200, torque: 158, weight: 268,
    seatHeight: 800, fuelEconomy: 14, tankCapacity: 22.0,
    topSpeed: 299, priceKRW: 12000000, image: '/bikes/kawasaki/ninjazx14r-2012.webp'
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
    displacement: 451, power: 51, torque: 42.6, weight: 167,
    seatHeight: 784, fuelEconomy: 24, tankCapacity: 14,
    topSpeed: 195, priceKRW: 8475000, image: '/bikes/kawasaki/z500-2025.png'
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
  seatHeight: 815, fuelEconomy: 18, tankCapacity: 17,
  topSpeed: 254, priceKRW: 16940000, image: '/bikes/kawasaki/z1100-2025.jpeg'
},
{
  id: 'ninja1100sx-2025', brand: 'kawasaki', model: 'Ninja 1100SX', year: 2025,
  category: '투어러', license: '소형이륜',
  displacement: 1099, power: 134, torque: 112, weight: 200,
  seatHeight: 815, fuelEconomy: 18.6, tankCapacity: 17,
  topSpeed: 254, priceKRW: 22716000, image: '/bikes/kawasaki/ninja1100sx-2025.webp'
},
{
  id: 'klr650-2026', brand: 'kawasaki', model: 'KLR650', year: 2026,
  category: '어드벤처', license: '소형이륜',
  displacement: 652, power: 40, torque: 53, weight: 209,
  seatHeight: 871, fuelEconomy: 22, tankCapacity: 23.0,
    topSpeed: 160, priceKRW: 9500000, image: '/bikes/kawasaki/klr650-2026.png'
},
{
  id: 'klx230sm-2025', brand: 'kawasaki', model: 'KLX230SM', year: 2025,
  category: '슈퍼모토', license: '소형이륜',
  displacement: 233, power: 18, torque: 19, weight: 137,
  seatHeight: 843, fuelEconomy: 35, tankCapacity: 7.6,
  topSpeed: 120, priceKRW: 6500000, image: '/bikes/kawasaki/klx230sm-2025.jpg'
},
{
  id: 'ninja7hybrid-2024', brand: 'kawasaki', model: 'Ninja 7 Hybrid', year: 2024,
  category: '스포츠', license: '소형이륜',
  displacement: 451, power: 69, torque: 60, weight: 227,
  seatHeight: 795, fuelEconomy: 27, tankCapacity: 14.0,
    topSpeed: 190, priceKRW: 16000000, image: '/bikes/kawasaki/ninja7hybrid-2024.png'
},
{
  id: 'z7hybrid-2024', brand: 'kawasaki', model: 'Z7 Hybrid', year: 2024,
  category: '네이키드', license: '소형이륜',
  displacement: 451, power: 69, torque: 60, weight: 226,
  seatHeight: 795, fuelEconomy: 27, tankCapacity: 14.0,
    topSpeed: 190, priceKRW: 15000000, image: '/bikes/kawasaki/z7hybrid-2024.png'
},
{
  id: 'zh2-2025', brand: 'kawasaki', model: 'Z H2', year: 2025,
  category: '네이키드', license: '소형이륜',
  displacement: 998, power: 197, torque: 137, weight: 239,
  seatHeight: 830, fuelEconomy: 15, tankCapacity: 19.0,
  topSpeed: 280, priceKRW: 28000000, image: '/bikes/kawasaki/zh2-2025.jpg'
},
{
  id: 'ninjah2-2025', brand: 'kawasaki', model: 'Ninja H2', year: 2025,
  category: '스포츠', license: '소형이륜',
  displacement: 998, power: 231, torque: 141.7, weight: 238,
  seatHeight: 825, fuelEconomy: 14, tankCapacity: 17.0,
    topSpeed: 299, priceKRW: 50000000, image: '/bikes/kawasaki/ninjah2-2025.png'
},
{
  id: 'w230-2025', brand: 'kawasaki', model: 'W230', year: 2025,
  category: '클래식', license: '소형이륜',
  displacement: 233, power: 17, torque: 19, weight: 143,
  seatHeight: 745, fuelEconomy: 35, tankCapacity: 12.0,
  topSpeed: 125, priceKRW: 8000000, image: '/bikes/kawasaki/w230-2025.jpg'
},

  // ── BMW ───────────────────────────────────────────────────────────────────
  {
    id: 'g310rr-2022', brand: 'bmw', model: 'G 310 RR', year: 2022,
    category: '스포츠', license: '소형이륜',
    displacement: 312,  power: 34,   torque: 27.3, weight: 174,
    seatHeight: 811,  fuelEconomy: 30.3, tankCapacity: 11.0,
    topSpeed: 160,  priceKRW: 6000000, image: '/bikes/bmw/g310rr-2022.png'
  },
  {
    id: 'g310rr-2024', brand: 'bmw', model: 'G 310 RR', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 312,  power: 34,   torque: 27.3, weight: 174,
    seatHeight: 810,  fuelEconomy: 30.3, tankCapacity: 11.0,
    topSpeed: 164,  priceKRW: 8000000, image: '/bikes/bmw/g310rr-2024.jpeg'
  },
  {
    id: 's1000rr-2010', brand: 'bmw', model: 'S 1000 RR', year: 2010,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 193,  torque: 112,  weight: 204,
    seatHeight: 820,  fuelEconomy: 17, tankCapacity: 17.5,
    topSpeed: 299,  priceKRW: 11000000, image: '/bikes/bmw/s1000rr-2010.jpeg'
  },
  {
    id: 's1000rr-2012', brand: 'bmw', model: 'S 1000 RR', year: 2012,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 193,  torque: 112,  weight: 204,
    seatHeight: 820,  fuelEconomy: 17, tankCapacity: 17.5,
    topSpeed: 299,  priceKRW: 11000000, image: '/bikes/bmw/s1000rr-2012.jpeg'
  },
  {
    id: 's1000rr-2015', brand: 'bmw', model: 'S 1000 RR', year: 2015,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 199,  torque: 113,  weight: 204,
    seatHeight: 815,  fuelEconomy: 17, tankCapacity: 17.5,
    topSpeed: 299,  priceKRW: 14000000, image: '/bikes/bmw/s1000rr-2015.jpeg'
  },
  {
    id: 's1000rr-2019', brand: 'bmw', model: 'S 1000 RR', year: 2019,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 207,  torque: 113,  weight: 197,
    seatHeight: 824,  fuelEconomy: 15.6, tankCapacity: 16.5,
    topSpeed: 299,  priceKRW: 18000000, image: '/bikes/bmw/s1000rr-2019.jpeg'
  },
  {
    id: 's1000rr-2023', brand: 'bmw', model: 'S 1000 RR', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 210,  torque: 113,  weight: 197,
    seatHeight: 824,  fuelEconomy: 15.6, tankCapacity: 16.5,
    topSpeed: 299,  priceKRW: 35000000, image: '/bikes/bmw/s1000rr-2023.jpeg'
  },
  {
    id: 's1000rr-2025', brand: 'bmw', model: 'S 1000 RR', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 210,  torque: 113,  weight: 198,
    seatHeight: 832,  fuelEconomy: 15.6, tankCapacity: 16.5,
    topSpeed: 299,  priceKRW: 41000000, image: '/bikes/bmw/s1000rr-2025.jpeg'
  },
  {
    id: 'm1000rr-2021', brand: 'bmw', model: 'M 1000 RR', year: 2021,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 212,  torque: 113,  weight: 192,
    seatHeight: 832,  fuelEconomy: 15.6, tankCapacity: 16.5,
    topSpeed: 306,  priceKRW: 29000000, image: '/bikes/bmw/m1000rr-2021.jpeg'
  },
  {
    id: 'm1000rr-2023', brand: 'bmw', model: 'M 1000 RR', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 212,  torque: 113,  weight: 193,
    seatHeight: 832,  fuelEconomy: 15.6, tankCapacity: 16.5,
    topSpeed: 314,  priceKRW: 35000000, image: '/bikes/bmw/m1000rr-2023.jpeg'
  },
  {
    id: 'm1000rr-2025', brand: 'bmw', model: 'M 1000 RR', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 218,  torque: 113,  weight: 194,
    seatHeight: 832,  fuelEconomy: 15.4, tankCapacity: 16.5,
    topSpeed: 314,  priceKRW: 41000000, image: '/bikes/bmw/m1000rr-2025.jpeg'
  },
  {
    id: 'g310r-2017', brand: 'bmw', model: 'G 310 R', year: 2017,
    category: '네이키드', license: '소형이륜',
    displacement: 313,  power: 34,   torque: 28,   weight: 158.5,
    seatHeight: 785,  fuelEconomy: 25, tankCapacity: 11.0,
    topSpeed: 143,  priceKRW: 4000000, image: '/bikes/bmw/g310r-2017.jpg'
  },
  {
    id: 'g310r-2022', brand: 'bmw', model: 'G310R', year: 2022,
    category: '네이키드', license: '소형이륜',
    displacement: 313,  power: 34,   torque: 28,   weight: 158,
    seatHeight: 785,  fuelEconomy: 32, tankCapacity: 11.0,
    topSpeed: 160,  priceKRW: 5900000, image: '/bikes/bmw/g310r-2022.jpg'
  },
  {
    id: 'g310r-2024', brand: 'bmw', model: 'G 310 R', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 313,  power: 34,   torque: 28,   weight: 158.5,
    seatHeight: 785,  fuelEconomy: 30.3, tankCapacity: 11.0,
    topSpeed: 144,  priceKRW: 8000000, image: '/bikes/bmw/g310r-2024.jpeg'
  },
  {
    id: 'f900r-2020', brand: 'bmw', model: 'F 900 R', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 92,   weight: 211,
    seatHeight: 815,  fuelEconomy: 23.8, tankCapacity: 13.0,
    topSpeed: 216,  priceKRW: 10000000, image: '/bikes/bmw/f900r-2020.jpg'
  },
  {
    id: 'f900r-2023', brand: 'bmw', model: 'F900R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 92,   weight: 210,
    seatHeight: 815,  fuelEconomy: 20, tankCapacity: 13.0,
    topSpeed: 215,  priceKRW: 15500000, image: '/bikes/bmw/f900r-2023.jpg'
  },
  {
    id: 'f900r-2025', brand: 'bmw', model: 'F 900 R', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 93,   weight: 208,
    seatHeight: 815,  fuelEconomy: 23.8, tankCapacity: 13.0,
    topSpeed: 216,  priceKRW: 19000000, image: '/bikes/bmw/f900r-2025.webp'
  },
  {
    id: 'r1250gs-2022', brand: 'bmw', model: 'R1250GS', year: 2022,
    category: '어드벤처', license: '소형이륜',
    displacement: 1254, power: 136,  torque: 143,  weight: 249,
    seatHeight: 850,  fuelEconomy: 20, tankCapacity: 20.0,
    topSpeed: 220,  priceKRW: 19500000, image: '/bikes/bmw/r1250gs-2022.webp'
  },
  {
    id: 's1000r-2014', brand: 'bmw', model: 'S 1000 R', year: 2014,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 160,  torque: 112,  weight: 207,
    seatHeight: 814,  fuelEconomy: 15.9, tankCapacity: 17.5,
    topSpeed: 261,  priceKRW: 11000000, image: '/bikes/bmw/s1000r-2014.jpeg'
  },
  {
    id: 's1000r-2017', brand: 'bmw', model: 'S 1000 R', year: 2017,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 165,  torque: 114,  weight: 205,
    seatHeight: 814,  fuelEconomy: 15.9, tankCapacity: 17.5,
    topSpeed: 261,  priceKRW: 11000000, image: '/bikes/bmw/s1000r-2017.jpeg'
  },
  {
    id: 's1000r-2021', brand: 'bmw', model: 'S 1000 R', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 165,  torque: 114,  weight: 199,
    seatHeight: 830,  fuelEconomy: 16.1, tankCapacity: 16.5,
    topSpeed: 250,  priceKRW: 19000000, image: '/bikes/bmw/s1000r-2021.webp'
  },
  {
    id: 's1000r-2023', brand: 'bmw', model: 'S1000R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 165,  torque: 114,  weight: 199,
    seatHeight: 820,  fuelEconomy: 18, tankCapacity: 16.5,
    topSpeed: 250,  priceKRW: 26000000, image: '/bikes/bmw/s1000r-2023.webp'
  },
  {
    id: 's1000r-2025', brand: 'bmw', model: 'S 1000 R', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 170,  torque: 114,  weight: 199,
    seatHeight: 830,  fuelEconomy: 16.1, tankCapacity: 16.5,
    topSpeed: 250,  priceKRW: 31000000, image: '/bikes/bmw/s1000r-2025.jpeg'
  },
  {
    id: 'm1000r-2023', brand: 'bmw', model: 'M 1000 R', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 210,  torque: 113,  weight: 199,
    seatHeight: 840,  fuelEconomy: 15.6, tankCapacity: 16.5,
    topSpeed: 280,  priceKRW: 33000000, image: '/bikes/bmw/m1000r-2023.jpeg'
  },
  {
    id: 'm1000r-2025', brand: 'bmw', model: 'M 1000 R', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 210,  torque: 113,  weight: 199,
    seatHeight: 840,  fuelEconomy: 15.6, tankCapacity: 16.5,
    topSpeed: 280,  priceKRW: 39000000, image: '/bikes/bmw/m1000r-2025.jpeg'
  },
  {
    id: 'r12ninet-2024', brand: 'bmw', model: 'R 12 nineT', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 1170, power: 109,  torque: 115,  weight: 220,
    seatHeight: 795,  fuelEconomy: 19.6, tankCapacity: 16.0,
    topSpeed: 215,  priceKRW: 25000000, image: '/bikes/bmw/r12ninet-2024.jpeg'
  },
  {
    id: 'r12ninet-2025', brand: 'bmw', model: 'R 12 nineT', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 1170, power: 109,  torque: 115,  weight: 220,
    seatHeight: 795,  fuelEconomy: 19.6, tankCapacity: 16.0,
    topSpeed: 215,  priceKRW: 29000000, image: '/bikes/bmw/r12ninet-2025.jpeg'
  },
  {
    id: 'r1300r-2025', brand: 'bmw', model: 'R 1300 R', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 1300, power: 145,  torque: 149,  weight: 239,
    seatHeight: 810,  fuelEconomy: 20.8, tankCapacity: 17.0,
    topSpeed: 225,  priceKRW: 35000000, image: '/bikes/bmw/r1300r-2025.jpeg'
  },
  {
    id: 'f900xr-2020', brand: 'bmw', model: 'F 900 XR', year: 2020,
    category: '어드벤처', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 92,   weight: 216,
    seatHeight: 825,  fuelEconomy: 23.8, tankCapacity: 15.5,
    topSpeed: 200,  priceKRW: 6500000, image: '/bikes/bmw/f900xr-2020.jpg'
  },
  {
    id: 'f900xr-2025', brand: 'bmw', model: 'F 900 XR', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 93,   weight: 216,
    seatHeight: 825,  fuelEconomy: 23.8, tankCapacity: 15.5,
    topSpeed: 200,  priceKRW: 13200000, image: '/bikes/bmw/f900xr-2025.jpg'
  },
  {
    id: 's1000xr-2019', brand: 'bmw', model: 'S 1000 XR', year: 2019,
    category: '어드벤처', license: '소형이륜',
    displacement: 999,  power: 165,  torque: 112,  weight: 228,
    seatHeight: 840,  fuelEconomy: 17.2, tankCapacity: 20.0,
    topSpeed: 250,  priceKRW: 7200000, image: '/bikes/bmw/s1000xr-2019.webp'
  },
  {
    id: 's1000xr-2020', brand: 'bmw', model: 'S 1000 XR', year: 2020,
    category: '어드벤처', license: '소형이륜',
    displacement: 999,  power: 165,  torque: 114,  weight: 226,
    seatHeight: 814,  fuelEconomy: 16.1, tankCapacity: 20.0,
    topSpeed: 257,  priceKRW: 8000000, image: '/bikes/bmw/s1000xr-2020.jpg'
  },
  {
    id: 'f900gs-2024', brand: 'bmw', model: 'F 900 GS', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 93,   weight: 219,
    seatHeight: 850,  fuelEconomy: 23.8, tankCapacity: 14.5,
    topSpeed: 210,  priceKRW: 17500000, image: '/bikes/bmw/f900gs-2024.jpg'
  },
  {
    id: 'f900gsa-2024', brand: 'bmw', model: 'F 900 GS Adventure', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 895,  power: 105,  torque: 93,   weight: 246,
    seatHeight: 870,  fuelEconomy: 23.8, tankCapacity: 23.0,
    topSpeed: 210,  priceKRW: 20000000, image: '/bikes/bmw/f900gsadventure-2024.jpg'
  },
  {
    id: 'r1300gs-2024', brand: 'bmw', model: 'R 1300 GS', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 1300, power: 145,  torque: 149,  weight: 237,
    seatHeight: 890,  fuelEconomy: 20.8, tankCapacity: 19.0,
    topSpeed: 225,  priceKRW: 35700000, image: '/bikes/bmw/r1300gs-2024.jpg'
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

  {
    id: 'nightsterspecial-2026', brand: 'harley', model: 'Nightster Special', year: 2026,
    category: '크루저', license: '소형이륜',
    displacement: 975,  power: 91,   torque: 98,   weight: 219,
    seatHeight: 688,  fuelEconomy: 22.1, tankCapacity: 11.7,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/nightsterspeical-2026.jpg'
  },
  {
    id: 'streetbob-2026', brand: 'harley', model: 'Street Bob', year: 2026,
    category: '크루저', license: '소형이륜',
    displacement: 1923, power: 98,   torque: 163,  weight: 293,
    seatHeight: 655,  fuelEconomy: 20.0, tankCapacity: 13.2,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/streetbob-2026.jpg'
  },
  {
    id: 'lowriders-2026', brand: 'harley', model: 'Low Rider S', year: 2026,
    category: '크루저', license: '소형이륜',
    displacement: 1923, power: 114,  torque: 174,  weight: 304,
    seatHeight: 686,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/lowriders-2026.jpg'
  },
  {
    id: 'lowriderst-2026', brand: 'harley', model: 'Low Rider ST', year: 2026,
    category: '투어러', license: '소형이륜',
    displacement: 1923, power: 114,  torque: 174,  weight: 323,
    seatHeight: 686,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/lowriderst-2026.jpg'
  },
  {
    id: 'heritageclassic-2026', brand: 'harley', model: 'Heritage Classic', year: 2026,
    category: '투어러', license: '소형이륜',
    displacement: 1923, power: 98,   torque: 163,  weight: 326,
    seatHeight: 668,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/heritageclassic-2026.jpg'
  },
  {
    id: 'fatboy-2026', brand: 'harley', model: 'Fat Boy', year: 2026,
    category: '크루저', license: '소형이륜',
    displacement: 1923, power: 103,  torque: 171,  weight: 315,
    seatHeight: 658,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/fatboy-2026.jpg'
  },
  {
    id: 'breakout-2026', brand: 'harley', model: 'Breakout', year: 2026,
    category: '크루저', license: '소형이륜',
    displacement: 1923, power: 103,  torque: 171,  weight: 309,
    seatHeight: 650,  fuelEconomy: 20.8, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/breakout-2026.jpg'
  },
  {
    id: 'streetglide-2026', brand: 'harley', model: 'Street Glide', year: 2026,
    category: '투어러', license: '소형이륜',
    displacement: 1923, power: 105,  torque: 176,  weight: 368,
    seatHeight: 671,  fuelEconomy: 18.7, tankCapacity: 22.7,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/streetglide-2026.jpg'
  },
  {
    id: 'roadglide-2026', brand: 'harley', model: 'Road Glide', year: 2026,
    category: '투어러', license: '소형이륜',
    displacement: 1923, power: 105,  torque: 176,  weight: 380,
    seatHeight: 676,  fuelEconomy: 18.7, tankCapacity: 22.7,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/roadglide-2026.jpg'
  },
  {
    id: 'roadkingspecial-2025', brand: 'harley', model: 'Road King Special', year: 2025,
    category: '투어러', license: '소형이륜',
    displacement: 1868, power: 95,   torque: 165,  weight: 366,
    seatHeight: 671,  fuelEconomy: 18.3, tankCapacity: 22.7,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/roadkingspecial-2025.webp'
  },
  {
    id: 'panamerica1250special-2026', brand: 'harley', model: 'Pan America 1250 Special', year: 2026,
    category: '어드벤처', license: '소형이륜',
    displacement: 1252, power: 150,  torque: 127,  weight: 262,
    seatHeight: 790,  fuelEconomy: 19.6, tankCapacity: 21.2,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/panamerica1250special-2026.webp'
  },
  {
    id: 'streetbob-2018', brand: 'harley', model: 'Street Bob', year: 2018,
    category: '크루저', license: '소형이륜',
    displacement: 1746, power: null, torque: 149,  weight: 286,
    seatHeight: 680,  fuelEconomy: 20.0, tankCapacity: 13.2,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/streetbob-2018.jpg'
  },
  {
    id: 'fatboy-2018', brand: 'harley', model: 'Fat Boy', year: 2018,
    category: '크루저', license: '소형이륜',
    displacement: 1868, power: null, torque: 161,  weight: 317,
    seatHeight: 675,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/fatboy-2018.png'
  },
  {
    id: 'breakout-2018', brand: 'harley', model: 'Breakout', year: 2018,
    category: '크루저', license: '소형이륜',
    displacement: 1868, power: null, torque: 161,  weight: 305,
    seatHeight: 665,  fuelEconomy: 20.0, tankCapacity: 13.2,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/breakout-2018.webp'
  },
  {
    id: 'heritageclassic-2018', brand: 'harley', model: 'Heritage Classic', year: 2018,
    category: '투어러', license: '소형이륜',
    displacement: 1868, power: null, torque: 161,  weight: 330,
    seatHeight: 680,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/heritageclassic-2018.jpg'
  },
  {
    id: 'sportsters-2021', brand: 'harley', model: 'Sportster S', year: 2021,
    category: '크루저', license: '소형이륜',
    displacement: 1252, power: 121,  torque: 127,  weight: 228,
    seatHeight: 755,  fuelEconomy: 20.0, tankCapacity: 11.8,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/sportsters-2021.jpg'
  },
  {
    id: 'panamerica1250special-2021', brand: 'harley', model: 'Pan America 1250 Special', year: 2021,
    category: '어드벤처', license: '소형이륜',
    displacement: 1252, power: 150,  torque: 127,  weight: 258,
    seatHeight: 813,  fuelEconomy: 19.6, tankCapacity: 21.2,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/panamerica1250special-2021.jpg'
  },
  {
    id: 'lowriders-2022', brand: 'harley', model: 'Low Rider S', year: 2022,
    category: '크루저', license: '소형이륜',
    displacement: 1923, power: 103,  torque: 169,  weight: 308,
    seatHeight: 710,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/lowriders-2022.jpg'
  },
  {
    id: 'lowriderst-2022', brand: 'harley', model: 'Low Rider ST', year: 2022,
    category: '투어러', license: '소형이륜',
    displacement: 1923, power: 103,  torque: 169,  weight: 327,
    seatHeight: 720,  fuelEconomy: 20.0, tankCapacity: 18.9,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/lowriderst-2022.png'
  },
  {
    id: 'streetglide-2024', brand: 'harley', model: 'Street Glide', year: 2024,
    category: '투어러', license: '소형이륜',
    displacement: 1923, power: 105,  torque: 176,  weight: 368,
    seatHeight: 671,  fuelEconomy: 18.7, tankCapacity: 22.7,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/streetglide-2024.webp'
  },
  {
    id: 'roadglide-2024', brand: 'harley', model: 'Road Glide', year: 2024,
    category: '투어러', license: '소형이륜',
    displacement: 1923, power: 105,  torque: 176,  weight: 380,
    seatHeight: 676,  fuelEconomy: 18.7, tankCapacity: 22.7,
    topSpeed: null, priceKRW: null, image: '/bikes/harley/roadglide-2024.jpg'
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
  {
    id: 'gsxr125-2023', brand: 'suzuki', model: 'GSX-R125', year: 2023,
    category: '스포츠', license: '원동기',
    displacement: 125,  power: 15,   torque: 11.5, weight: 134,
    seatHeight: 785,  fuelEconomy: 43, tankCapacity: 11.0,
    topSpeed: 120,  priceKRW: 3600000, image: '/bikes/suzuki/gsxr125-2023.jpg'
  },
  {
    id: 'gsx250r-2023', brand: 'suzuki', model: 'GSX250R', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 248,  power: 24.7, torque: 23.4, weight: 181,
    seatHeight: 790,  fuelEconomy: 32, tankCapacity: 15.0,
    topSpeed: 145,  priceKRW: 4700000, image: '/bikes/suzuki/gsx250r-2023.jpg'
  },
  {
    id: 'gsxr600-2011', brand: 'suzuki', model: 'GSX-R600', year: 2011,
    category: '스포츠', license: '소형이륜',
    displacement: 599,  power: 124,  torque: 69.6, weight: 187,
    seatHeight: 810,  fuelEconomy: 16, tankCapacity: 17.0,
    topSpeed: 253,  priceKRW: 6500000, image: '/bikes/suzuki/gsxr600-2011.jpg'
  },
  {
    id: 'gsxr750-1985', brand: 'suzuki', model: 'GSX-R750', year: 1985,
    category: '스포츠', license: '소형이륜',
    displacement: 749,  power: 106,  torque: 73,   weight: 201,
    seatHeight: 765,  fuelEconomy: 16, tankCapacity: 18.0,
    topSpeed: 235,  priceKRW: 7000000, image: '/bikes/suzuki/gsxr750-1985.jpg'
  },
  {
    id: 'gsxr750-2011', brand: 'suzuki', model: 'GSX-R750', year: 2011,
    category: '스포츠', license: '소형이륜',
    displacement: 750,  power: 148,  torque: 86,   weight: 190,
    seatHeight: 810,  fuelEconomy: 16, tankCapacity: 17.0,
    topSpeed: 270,  priceKRW: 7500000, image: '/bikes/suzuki/gsxr750-2011.jpg'
  },
  {
    id: 'gsxr1000-2005', brand: 'suzuki', model: 'GSX-R1000', year: 2005,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 178,  torque: 102,  weight: 201,
    seatHeight: 810,  fuelEconomy: 15, tankCapacity: 18.0,
    topSpeed: 286,  priceKRW: 6500000, image: '/bikes/suzuki/gsxr1000-2005.jpg'
  },
  {
    id: 'gsxr1000r-2017', brand: 'suzuki', model: 'GSX-R1000R', year: 2017,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 202,  torque: 118,  weight: 203,
    seatHeight: 825,  fuelEconomy: 15, tankCapacity: 16.0,
    topSpeed: 299,  priceKRW: 14500000, image: '/bikes/suzuki/gsxr1000r-2017.webp'
  },
  {
    id: 'gsxr1000r-2023', brand: 'suzuki', model: 'GSX-R1000R', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 999,  power: 202,  torque: 118,  weight: 203,
    seatHeight: 825,  fuelEconomy: 15, tankCapacity: 16.0,
    topSpeed: 299,  priceKRW: 22000000, image: '/bikes/suzuki/gsxr1000r-2023.jpg'
  },
  {
    id: 'hayabusa-1999', brand: 'suzuki', model: 'Hayabusa', year: 1999,
    category: '스포츠', license: '소형이륜',
    displacement: 1299, power: 173,  torque: 138,  weight: 250,
    seatHeight: 805,  fuelEconomy: 14, tankCapacity: 21.0,
    topSpeed: 312,  priceKRW: 8000000, image: '/bikes/suzuki/hayabusa-1999.jpg'
  },
  {
    id: 'hayabusa-2008', brand: 'suzuki', model: 'Hayabusa', year: 2008,
    category: '스포츠', license: '소형이륜',
    displacement: 1340, power: 197,  torque: 155,  weight: 260,
    seatHeight: 805,  fuelEconomy: 15, tankCapacity: 21.0,
    topSpeed: 299,  priceKRW: 10000000, image: '/bikes/suzuki/hayabusa-2008.jpg'
  },
  {
    id: 'hayabusa-2022', brand: 'suzuki', model: 'Hayabusa', year: 2022,
    category: '스포츠', license: '소형이륜',
    displacement: 1340, power: 187,  torque: 150,  weight: 264,
    seatHeight: 800,  fuelEconomy: 15, tankCapacity: 20.0,
    topSpeed: 299,  priceKRW: 23000000, image: '/bikes/suzuki/hayabusa-2022.webp'
  },
  {
    id: 'katana-2020', brand: 'suzuki', model: 'Katana', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 150,  torque: 108,  weight: 215,
    seatHeight: 825,  fuelEconomy: 18, tankCapacity: 12.0,
    topSpeed: 240,  priceKRW: 12500000, image: '/bikes/suzuki/katana-2020.jpg'
  },
  {
    id: 'gsxs1000-2016', brand: 'suzuki', model: 'GSX-S1000', year: 2016,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 145,  torque: 106,  weight: 209,
    seatHeight: 810,  fuelEconomy: 18, tankCapacity: 17.0,
    topSpeed: 240,  priceKRW: 8500000, image: '/bikes/suzuki/gsxs1000-2016.jpg'
  },
  {
    id: 'gsxs1000-2022', brand: 'suzuki', model: 'GSX-S1000', year: 2022,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 150,  torque: 106,  weight: 214,
    seatHeight: 810,  fuelEconomy: 17, tankCapacity: 19.0,
    topSpeed: 240,  priceKRW: 14000000, image: '/bikes/suzuki/gsxs1000-2022.jpg'
  },
  {
    id: 'gsx8r-2024', brand: 'suzuki', model: 'GSX-8R', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 776,  power: 83,   torque: 78,   weight: 205,
    seatHeight: 810,  fuelEconomy: 22, tankCapacity: 14.0,
    topSpeed: 215,  priceKRW: 13000000, image: '/bikes/suzuki/gsx8r-2024.png'
  },
  {
    id: 'vstrom800de-2023', brand: 'suzuki', model: 'V-Strom 800DE', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 776,  power: 83,   torque: 78,   weight: 230,
    seatHeight: 855,  fuelEconomy: 22.7, tankCapacity: 20.0,
    topSpeed: 200,  priceKRW: 15000000, image: '/bikes/suzuki/vstrom800de-2023.png'
  },
  {
    id: 'vstrom1050-2023', brand: 'suzuki', model: 'V-Strom 1050', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 1037, power: 106,  torque: 100,  weight: 242,
    seatHeight: 850,  fuelEconomy: 20, tankCapacity: 20.0,
    topSpeed: 210,  priceKRW: 17000000, image: '/bikes/suzuki/vstrom1050-2023.jpg'
  },
  {
    id: 'burgman650-2018', brand: 'suzuki', model: 'Burgman 650', year: 2018,
    category: '스쿠터', license: '소형이륜',
    displacement: 638,  power: 54,   torque: 62,   weight: 277,
    seatHeight: 755,  fuelEconomy: 20, tankCapacity: 15.0,
    topSpeed: 175,  priceKRW: 7500000, image: '/bikes/suzuki/burgman650-2018.jpg'
  },
  {
    id: 'drz400sm-2023', brand: 'suzuki', model: 'DR-Z400SM', year: 2023,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 398,  power: 39,   torque: 39,   weight: 146,
    seatHeight: 890,  fuelEconomy: 28, tankCapacity: 10.0,
    topSpeed: 151,  priceKRW: 8500000, image: '/bikes/suzuki/drz400sm-2023.jpg'
  },
  {
    id: 'boulevardm109r-2019', brand: 'suzuki', model: 'Boulevard M109R', year: 2019,
    category: '크루저', license: '소형이륜',
    displacement: 1783, power: 125,  torque: 160,  weight: 347,
    seatHeight: 705,  fuelEconomy: 16, tankCapacity: 19.5,
    topSpeed: 200,  priceKRW: 13500000, image: '/bikes/suzuki/boulevardm109r-2019.jpg'
  },

  // ── KTM ───────────────────────────────────────────────────────────────────
  {
    id: 'duke125-2011', brand: 'ktm', model: 'Duke 125', year: 2011,
    category: '네이키드', license: '원동기',
    displacement: 125,  power: 15,   torque: 12,   weight: 137,
    seatHeight: 800,  fuelEconomy: 35, tankCapacity: 11.0,
    topSpeed: 120,  priceKRW: null, image: '/bikes/ktm/duke125-2011.jpg'
  },
  {
    id: 'duke200-2012', brand: 'ktm', model: 'Duke 200', year: 2012,
    category: '네이키드', license: '소형이륜',
    displacement: 199.5, power: 25.5, torque: 19.3, weight: 150,
    seatHeight: 810,  fuelEconomy: 30, tankCapacity: 10.2,
    topSpeed: 136,  priceKRW: null, image: '/bikes/ktm/duke200-2012.jpg'
  },
  {
    id: 'duke390-2013', brand: 'ktm', model: 'Duke 390', year: 2013,
    category: '네이키드', license: '소형이륜',
    displacement: 373,  power: 44,   torque: 35,   weight: 150,
    seatHeight: 800,  fuelEconomy: 29, tankCapacity: 11.0,
    topSpeed: 170,  priceKRW: null, image: '/bikes/ktm/duke390-2013.webp'
  },
  {
    id: 'duke250-2015', brand: 'ktm', model: 'Duke 250', year: 2015,
    category: '네이키드', license: '소형이륜',
    displacement: 248.8, power: 31,   torque: 24,   weight: 146,
    seatHeight: 830,  fuelEconomy: 30, tankCapacity: 13.4,
    topSpeed: 148,  priceKRW: null, image: '/bikes/ktm/duke250-2015.webp'
  },
  {
    id: 'duke390-2017', brand: 'ktm', model: 'Duke 390', year: 2017,
    category: '네이키드', license: '소형이륜',
    displacement: 373,  power: 44,   torque: 37,   weight: 163,
    seatHeight: 830,  fuelEconomy: 29, tankCapacity: 13.4,
    topSpeed: 170,  priceKRW: null, image: '/bikes/ktm/duke390-2017.jpg'
  },
  {
    id: 'duke390-2023', brand: 'ktm', model: 'Duke 390', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 373,  power: 43,   torque: 37,   weight: 163,
    seatHeight: 830,  fuelEconomy: 28, tankCapacity: 13.4,
    topSpeed: 167,  priceKRW: 6700000, image: '/bikes/ktm/duke390-2023.jpg'
  },
  {
    id: 'duke390-2024', brand: 'ktm', model: 'Duke 390', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 399,  power: 45.3, torque: 39,   weight: 165,
    seatHeight: 800,  fuelEconomy: 28, tankCapacity: 15.0,
    topSpeed: 167,  priceKRW: null, image: '/bikes/ktm/duke390-2024.jpg'
  },
  {
    id: 'duke690-2008', brand: 'ktm', model: 'Duke 690', year: 2008,
    category: '네이키드', license: '소형이륜',
    displacement: 654,  power: 65,   torque: 67,   weight: 160,
    seatHeight: 865,  fuelEconomy: 23, tankCapacity: 13.5,
    topSpeed: 200,  priceKRW: null, image: '/bikes/ktm/duk690-2008.webp'
  },
  {
    id: 'duke690-2012', brand: 'ktm', model: 'Duke 690', year: 2012,
    category: '네이키드', license: '소형이륜',
    displacement: 690,  power: 67,   torque: 70,   weight: 160,
    seatHeight: 835,  fuelEconomy: 23, tankCapacity: 14.0,
    topSpeed: 200,  priceKRW: null, image: '/bikes/ktm/duke690-2012.jpg'
  },
  {
    id: 'duke690r-2016', brand: 'ktm', model: 'Duke 690 R', year: 2016,
    category: '네이키드', license: '소형이륜',
    displacement: 690,  power: 73,   torque: 74,   weight: 160,
    seatHeight: 865,  fuelEconomy: 23, tankCapacity: 14.0,
    topSpeed: 205,  priceKRW: null, image: null
  },
  {
    id: 'duke790-2018', brand: 'ktm', model: 'Duke 790', year: 2018,
    category: '네이키드', license: '소형이륜',
    displacement: 799,  power: 105,  torque: 87,   weight: 189,
    seatHeight: 825,  fuelEconomy: 22, tankCapacity: 14.0,
    topSpeed: 220,  priceKRW: null, image: '/bikes/ktm/duke790-2018.jpg'
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
  {
    id: 'duke890r-2020', brand: 'ktm', model: 'Duke 890 R', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 890,  power: 121,  torque: 99,   weight: 186,
    seatHeight: 834,  fuelEconomy: 22, tankCapacity: 14.0,
    topSpeed: 240,  priceKRW: null, image: '/bikes/ktm/duke890r-2020.jpg'
  },
  {
    id: 'superduke990-2005', brand: 'ktm', model: '990 Super Duke', year: 2005,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 120,  torque: 100,  weight: 199,
    seatHeight: 855,  fuelEconomy: 18, tankCapacity: 18.5,
    topSpeed: 240,  priceKRW: null, image: '/bikes/ktm/990superduke-2005.jpg'
  },
  {
    id: 'superduke990r-2012', brand: 'ktm', model: '990 Super Duke R', year: 2012,
    category: '네이키드', license: '소형이륜',
    displacement: 999,  power: 123,  torque: 100,  weight: 190,
    seatHeight: 850,  fuelEconomy: 17, tankCapacity: 18.5,
    topSpeed: 240,  priceKRW: null, image: '/bikes/ktm/990superduker-2012.jpg'
  },
  {
    id: 'superduke1290r-2014', brand: 'ktm', model: '1290 Super Duke R', year: 2014,
    category: '네이키드', license: '소형이륜',
    displacement: 1301, power: 177,  torque: 144,  weight: 213,
    seatHeight: 835,  fuelEconomy: 16, tankCapacity: 18.0,
    topSpeed: 289,  priceKRW: null, image: '/bikes/ktm/1290superduker-2014.jpg'
  },
  {
    id: 'superduke1290r-2020', brand: 'ktm', model: '1290 Super Duke R', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 1301, power: 180,  torque: 140,  weight: 209,
    seatHeight: 835,  fuelEconomy: 16, tankCapacity: 16.0,
    topSpeed: 289,  priceKRW: null, image: '/bikes/ktm/1290superduker-2020.jpg'
  },
  {
    id: 'superduke1390r-2024', brand: 'ktm', model: '1390 Super Duke R', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 1350, power: 190,  torque: 145,  weight: 212,
    seatHeight: 834,  fuelEconomy: 15, tankCapacity: 17.5,
    topSpeed: 290,  priceKRW: null, image: '/bikes/ktm/1390superduker-2024.webp'
  },
  {
    id: 'rc390-2014', brand: 'ktm', model: 'RC 390', year: 2014,
    category: '스포츠', license: '소형이륜',
    displacement: 373,  power: 44,   torque: 35,   weight: 166,
    seatHeight: 820,  fuelEconomy: 29, tankCapacity: 10.0,
    topSpeed: 179,  priceKRW: null, image: '/bikes/ktm/rc390-2014.jpg'
  },
  {
    id: 'rc390-2022', brand: 'ktm', model: 'RC 390', year: 2022,
    category: '스포츠', license: '소형이륜',
    displacement: 373,  power: 44,   torque: 37,   weight: 172,
    seatHeight: 824,  fuelEconomy: 29, tankCapacity: 13.7,
    topSpeed: 179,  priceKRW: null, image: '/bikes/ktm/rc390-2022.jpg'
  },
  {
    id: 'rc8-2008', brand: 'ktm', model: '1190 RC8', year: 2008,
    category: '스포츠', license: '소형이륜',
    displacement: 1148, power: 152,  torque: 120,  weight: 200,
    seatHeight: 805,  fuelEconomy: 15, tankCapacity: 16.5,
    topSpeed: 280,  priceKRW: null, image: '/bikes/ktm/1190rc8-2008.jpg'
  },
  {
    id: 'rc8r-2011', brand: 'ktm', model: '1190 RC8 R', year: 2011,
    category: '스포츠', license: '소형이륜',
    displacement: 1195, power: 173,  torque: 122,  weight: 200,
    seatHeight: 805,  fuelEconomy: 14.5, tankCapacity: 16.5,
    topSpeed: 285,  priceKRW: null, image: '/bikes/ktm/1190rc8r-2011.webp'
  },
  {
    id: 'adventure950-2003', brand: 'ktm', model: '950 Adventure', year: 2003,
    category: '어드벤처', license: '소형이륜',
    displacement: 942,  power: 102,  torque: 97,   weight: 206,
    seatHeight: 880,  fuelEconomy: 15.6, tankCapacity: 22.0,
    topSpeed: 215,  priceKRW: null, image: '/bikes/ktm/950adventure-2003.jpg'
  },
  {
    id: 'adventure990-2006', brand: 'ktm', model: '990 Adventure', year: 2006,
    category: '어드벤처', license: '소형이륜',
    displacement: 999.9, power: 105, torque: 100,  weight: 209,
    seatHeight: 860,  fuelEconomy: 17, tankCapacity: 19.5,
    topSpeed: 198,  priceKRW: null, image: '/bikes/ktm/990adventure-2006.webp'
  },
  {
    id: 'adventure1190-2013', brand: 'ktm', model: '1190 Adventure', year: 2013,
    category: '어드벤처', license: '소형이륜',
    displacement: 1195, power: 150,  torque: 125,  weight: 230,
    seatHeight: 860,  fuelEconomy: 18, tankCapacity: 23.0,
    topSpeed: 230,  priceKRW: null, image: '/bikes/ktm/1190adventure-2013.jpg'
  },
  {
    id: 'superadventure1290-2015', brand: 'ktm', model: '1290 Super Adventure', year: 2015,
    category: '어드벤처', license: '소형이륜',
    displacement: 1301, power: 160,  torque: 140,  weight: 249,
    seatHeight: 860,  fuelEconomy: 17, tankCapacity: 30.0,
    topSpeed: 250,  priceKRW: null, image: '/bikes/ktm/1290superadventure-2015.webp'
  },
  {
    id: 'adventure790-2019', brand: 'ktm', model: '790 Adventure', year: 2019,
    category: '어드벤처', license: '소형이륜',
    displacement: 799,  power: 95,   torque: 88,   weight: 210,
    seatHeight: 850,  fuelEconomy: 22, tankCapacity: 20.0,
    topSpeed: 200,  priceKRW: null, image: '/bikes/ktm/790adventure-2019.webp'
  },
  {
    id: 'adventure390-2020', brand: 'ktm', model: 'Adventure 390', year: 2020,
    category: '어드벤처', license: '소형이륜',
    displacement: 373,  power: 43,   torque: 37,   weight: 172,
    seatHeight: 855,  fuelEconomy: 27, tankCapacity: 14.5,
    topSpeed: 155,  priceKRW: null, image: '/bikes/ktm/adventure390-2020.jpg'
  },
  {
    id: 'adventure890r-2021', brand: 'ktm', model: '890 Adventure R', year: 2021,
    category: '어드벤처', license: '소형이륜',
    displacement: 889,  power: 105,  torque: 100,  weight: 215,
    seatHeight: 880,  fuelEconomy: 22, tankCapacity: 20.0,
    topSpeed: 200,  priceKRW: null, image: '/bikes/ktm/890adventurer-2021.webp'
  },
  {
    id: 'superadventure1290s-2021', brand: 'ktm', model: '1290 Super Adventure S', year: 2021,
    category: '어드벤처', license: '소형이륜',
    displacement: 1301, power: 160,  torque: 138,  weight: 245,
    seatHeight: 849,  fuelEconomy: 18, tankCapacity: 23.0,
    topSpeed: 250,  priceKRW: null, image: '/bikes/ktm/1290superadventures-2021.jpg'
  },
  {
    id: 'smcr690-2019', brand: 'ktm', model: '690 SMC R', year: 2019,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 693,  power: 74,   torque: 73.5, weight: 158,
    seatHeight: 890,  fuelEconomy: 24, tankCapacity: 13.5,
    topSpeed: 190,  priceKRW: null, image: '/bikes/ktm/690smcr-2019.jpg'
  },
  {
    id: 'enduro690r-2019', brand: 'ktm', model: '690 Enduro R', year: 2019,
    category: '어드벤처', license: '소형이륜',
    displacement: 693,  power: 74,   torque: 73.5, weight: 160,
    seatHeight: 910,  fuelEconomy: 24, tankCapacity: 13.5,
    topSpeed: 170,  priceKRW: null, image: '/bikes/ktm/690enduror-2019.webp'
  },
  {
    id: 'smcr390-2025', brand: 'ktm', model: '390 SMC R', year: 2025,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 399,  power: 45,   torque: 39,   weight: 154,
    seatHeight: 860,  fuelEconomy: 30, tankCapacity: 9.0,
    topSpeed: 160,  priceKRW: null, image: '/bikes/ktm/390smcr-2025.png'
  },

  // ── Ducati ────────────────────────────────────────────────────────────────
  {
    id: 'multistrada1000ds-2003', brand: 'ducati', model: 'Multistrada 1000 DS', year: 2003,
    category: '어드벤처', license: '소형이륜',
    displacement: 992,  power: 84,   torque: 84,   weight: 220,
    seatHeight: 850,  fuelEconomy: 18, tankCapacity: 20.0,
    topSpeed: 210,  priceKRW: null, image: '/bikes/ducati/multistrada1000ds-2003.webp'
  },
  {
    id: 'superbike999-2003', brand: 'ducati', model: '999', year: 2003,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 124,  torque: 102,  weight: 199,
    seatHeight: 780,  fuelEconomy: 16, tankCapacity: 15.5,
    topSpeed: 270,  priceKRW: null, image: '/bikes/ducati/999-2003.webp'
  },
  {
    id: 'hypermotard1100-2007', brand: 'ducati', model: 'Hypermotard 1100', year: 2007,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 1078, power: 90,   torque: 103,  weight: 179,
    seatHeight: 845,  fuelEconomy: 18, tankCapacity: 12.4,
    topSpeed: 220,  priceKRW: null, image: '/bikes/ducati/hypermotard1100-2007.jpg'
  },
  {
    id: 'superbike1098-2007', brand: 'ducati', model: '1098', year: 2007,
    category: '스포츠', license: '소형이륜',
    displacement: 1099, power: 160,  torque: 122.6, weight: 199,
    seatHeight: 820,  fuelEconomy: 15, tankCapacity: 15.5,
    topSpeed: 278,  priceKRW: null, image: '/bikes/ducati/1098-2007.jpg'
  },
  {
    id: 'monster696-2008', brand: 'ducati', model: 'Monster 696', year: 2008,
    category: '네이키드', license: '소형이륜',
    displacement: 696,  power: 80,   torque: 69,   weight: 185,
    seatHeight: 770,  fuelEconomy: 23, tankCapacity: 15.0,
    topSpeed: 210,  priceKRW: null, image: '/bikes/ducati/monster696-2008.jpg'
  },
  {
    id: 'superbike848-2008', brand: 'ducati', model: '848', year: 2008,
    category: '스포츠', license: '소형이륜',
    displacement: 849,  power: 134,  torque: 96,   weight: 194,
    seatHeight: 830,  fuelEconomy: 17, tankCapacity: 15.5,
    topSpeed: 260,  priceKRW: null, image: '/bikes/ducati/848-2008.jpg'
  },
  {
    id: 'streetfighter1098-2009', brand: 'ducati', model: 'Streetfighter 1098', year: 2009,
    category: '네이키드', license: '소형이륜',
    displacement: 1099, power: 155,  torque: 115,  weight: 199,
    seatHeight: 840,  fuelEconomy: 15, tankCapacity: 16.5,
    topSpeed: 255,  priceKRW: null, image: '/bikes/ducati/streetfighter1098-2009.jpg'
  },
  {
    id: 'superbike1198-2009', brand: 'ducati', model: '1198', year: 2009,
    category: '스포츠', license: '소형이륜',
    displacement: 1198, power: 170,  torque: 131,  weight: 199,
    seatHeight: 820,  fuelEconomy: 14.5, tankCapacity: 15.5,
    topSpeed: 285,  priceKRW: null, image: '/bikes/ducati/1198-2009.jpg'
  },
  {
    id: 'hypermotard796-2010', brand: 'ducati', model: 'Hypermotard 796', year: 2010,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 803,  power: 81,   torque: 75.5, weight: 187,
    seatHeight: 825,  fuelEconomy: 21, tankCapacity: 12.4,
    topSpeed: 200,  priceKRW: null, image: '/bikes/ducati/hypermotard796-2010.jpg'
  },
  {
    id: 'monster796-2010', brand: 'ducati', model: 'Monster 796', year: 2010,
    category: '네이키드', license: '소형이륜',
    displacement: 803,  power: 87,   torque: 78,   weight: 187,
    seatHeight: 800,  fuelEconomy: 21, tankCapacity: 15.0,
    topSpeed: 220,  priceKRW: null, image: '/bikes/ducati/monster796-2010.webp'
  },
  {
    id: 'multistrada1200-2010', brand: 'ducati', model: 'Multistrada 1200', year: 2010,
    category: '어드벤처', license: '소형이륜',
    displacement: 1198, power: 150,  torque: 118.7, weight: 217,
    seatHeight: 850,  fuelEconomy: 17, tankCapacity: 20.0,
    topSpeed: 233,  priceKRW: null, image: '/bikes/ducati/multistrada1200-2010.webp'
  },
  {
    id: 'diavel-2011', brand: 'ducati', model: 'Diavel', year: 2011,
    category: '크루저', license: '소형이륜',
    displacement: 1198, power: 162,  torque: 130.5, weight: 234,
    seatHeight: 770,  fuelEconomy: 15, tankCapacity: 17.0,
    topSpeed: 272,  priceKRW: null, image: '/bikes/ducati/diavel-2011.jpg'
  },
  {
    id: 'streetfighter848-2012', brand: 'ducati', model: 'Streetfighter 848', year: 2012,
    category: '네이키드', license: '소형이륜',
    displacement: 849,  power: 132,  torque: 94,   weight: 199,
    seatHeight: 840,  fuelEconomy: 17, tankCapacity: 16.5,
    topSpeed: 245,  priceKRW: null, image: '/bikes/ducati/streetfighter84802912.webp'
  },
  {
    id: 'panigale1199-2012', brand: 'ducati', model: '1199 Panigale', year: 2012,
    category: '스포츠', license: '소형이륜',
    displacement: 1198, power: 195,  torque: 133,  weight: 188,
    seatHeight: 825,  fuelEconomy: 14, tankCapacity: 17.0,
    topSpeed: 286,  priceKRW: null, image: '/bikes/ducati/1198panigale-2012.jpg'
  },
  {
    id: 'hypermotard821-2013', brand: 'ducati', model: 'Hypermotard 821', year: 2013,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 821,  power: 110,  torque: 89,   weight: 198,
    seatHeight: 870,  fuelEconomy: 19, tankCapacity: 16.0,
    topSpeed: 220,  priceKRW: null, image: '/bikes/ducati/hypermotard821-2013.webp'
  },
  {
    id: 'panigale899-2014', brand: 'ducati', model: '899 Panigale', year: 2014,
    category: '스포츠', license: '소형이륜',
    displacement: 898,  power: 148,  torque: 99,   weight: 193,
    seatHeight: 830,  fuelEconomy: 17, tankCapacity: 17.0,
    topSpeed: 260,  priceKRW: null, image: '/bikes/ducati/899panigale-2014.jpg'
  },
  {
    id: 'monster1200-2014', brand: 'ducati', model: 'Monster 1200', year: 2014,
    category: '네이키드', license: '소형이륜',
    displacement: 1198, power: 135,  torque: 118,  weight: 209,
    seatHeight: 810,  fuelEconomy: 17, tankCapacity: 17.5,
    topSpeed: 240,  priceKRW: null, image: '/bikes/ducati/monster1200-2014.jpg'
  },
  {
    id: 'monster821-2015', brand: 'ducati', model: 'Monster 821', year: 2015,
    category: '네이키드', license: '소형이륜',
    displacement: 821,  power: 112,  torque: 89.4, weight: 205,
    seatHeight: 785,  fuelEconomy: 19, tankCapacity: 17.5,
    topSpeed: 230,  priceKRW: null, image: '/bikes/ducati/monster821-2015.jpg'
  },
  {
    id: 'panigale1299-2015', brand: 'ducati', model: '1299 Panigale', year: 2015,
    category: '스포츠', license: '소형이륜',
    displacement: 1285, power: 205,  torque: 144.6, weight: 190,
    seatHeight: 830,  fuelEconomy: 13.5, tankCapacity: 17.0,
    topSpeed: 299,  priceKRW: null, image: '/bikes/ducati/1299panigale-2015.webp'
  },
  {
    id: 'scramblericon-2015', brand: 'ducati', model: 'Scrambler Icon', year: 2015,
    category: '클래식', license: '소형이륜',
    displacement: 803,  power: 75,   torque: 68,   weight: 186,
    seatHeight: 790,  fuelEconomy: 21, tankCapacity: 13.5,
    topSpeed: 190,  priceKRW: null, image: '/bikes/ducati/scramblericon-2015.jpg'
  },
  {
    id: 'hypermotard939-2016', brand: 'ducati', model: 'Hypermotard 939', year: 2016,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 937,  power: 113,  torque: 97.9, weight: 204,
    seatHeight: 870,  fuelEconomy: 18, tankCapacity: 16.0,
    topSpeed: 225,  priceKRW: null, image: '/bikes/ducati/hypermotard939-2016.webp'
  },
  {
    id: 'panigale959-2016', brand: 'ducati', model: '959 Panigale', year: 2016,
    category: '스포츠', license: '소형이륜',
    displacement: 955,  power: 157,  torque: 107.4, weight: 200,
    seatHeight: 830,  fuelEconomy: 16.5, tankCapacity: 17.0,
    topSpeed: 270,  priceKRW: null, image: '/bikes/ducati/959panigale-2016.webp'
  },
  {
    id: 'scramblersixty2-2016', brand: 'ducati', model: 'Scrambler Sixty2', year: 2016,
    category: '클래식', license: '소형이륜',
    displacement: 399,  power: 40,   torque: 34.3, weight: 183,
    seatHeight: 790,  fuelEconomy: 24, tankCapacity: 14.0,
    topSpeed: 160,  priceKRW: null, image: '/bikes/ducati/scramblersixty2-2016.jpg'
  },
  {
    id: 'xdiavel-2016', brand: 'ducati', model: 'XDiavel', year: 2016,
    category: '크루저', license: '소형이륜',
    displacement: 1262, power: 156,  torque: 128.9, weight: 247,
    seatHeight: 755,  fuelEconomy: 16, tankCapacity: 18.0,
    topSpeed: 250,  priceKRW: null, image: '/bikes/ducati/xdiavel-2016.webp'
  },
  {
    id: 'monster797-2017', brand: 'ducati', model: 'Monster 797', year: 2017,
    category: '네이키드', license: '소형이륜',
    displacement: 803,  power: 75,   torque: 68.9, weight: 193,
    seatHeight: 805,  fuelEconomy: 22, tankCapacity: 16.5,
    topSpeed: 210,  priceKRW: null, image: '/bikes/ducati/monster797-2017.webp'
  },
  {
    id: 'multistrada950-2017', brand: 'ducati', model: 'Multistrada 950', year: 2017,
    category: '어드벤처', license: '소형이륜',
    displacement: 937,  power: 113,  torque: 96.2, weight: 229,
    seatHeight: 840,  fuelEconomy: 19, tankCapacity: 20.0,
    topSpeed: 210,  priceKRW: null, image: '/bikes/ducati/multistrada950-2017.jpg'
  },
  {
    id: 'scramblerdesertsled-2017', brand: 'ducati', model: 'Scrambler Desert Sled', year: 2017,
    category: '클래식', license: '소형이륜',
    displacement: 803,  power: 75,   torque: 68,   weight: 207,
    seatHeight: 860,  fuelEconomy: 21, tankCapacity: 13.5,
    topSpeed: 185,  priceKRW: null, image: '/bikes/ducati/scramblerdesertsled-2017.webp'
  },
  {
    id: 'multistrada1260-2018', brand: 'ducati', model: 'Multistrada 1260', year: 2018,
    category: '어드벤처', license: '소형이륜',
    displacement: 1262, power: 156,  torque: 136,  weight: 232,
    seatHeight: 825,  fuelEconomy: 16, tankCapacity: 20.0,
    topSpeed: 240,  priceKRW: null, image: '/bikes/ducati/multistrada1260-2018.jpg'
  },
  {
    id: 'panigalev4-2018', brand: 'ducati', model: 'Panigale V4', year: 2018,
    category: '스포츠', license: '소형이륜',
    displacement: 1103, power: 214,  torque: 124,  weight: 198,
    seatHeight: 830,  fuelEconomy: 14.5, tankCapacity: 16.0,
    topSpeed: 299,  priceKRW: null, image: '/bikes/ducati/panigalev4-2018.webp'
  },
  {
    id: 'scrambler1100-2018', brand: 'ducati', model: 'Scrambler 1100', year: 2018,
    category: '클래식', license: '소형이륜',
    displacement: 1079, power: 86,   torque: 88.9, weight: 206,
    seatHeight: 810,  fuelEconomy: 19, tankCapacity: 15.0,
    topSpeed: 200,  priceKRW: null, image: '/bikes/ducati/scrambler1100-2018.jpg'
  },
  {
    id: 'diavel1260-2019', brand: 'ducati', model: 'Diavel 1260', year: 2019,
    category: '크루저', license: '소형이륜',
    displacement: 1262, power: 159,  torque: 129,  weight: 244,
    seatHeight: 780,  fuelEconomy: 15.5, tankCapacity: 17.0,
    topSpeed: 270,  priceKRW: null, image: '/bikes/ducati/diavel1260-2019.jpg'
  },
  {
    id: 'hypermotard950-2019', brand: 'ducati', model: 'Hypermotard 950', year: 2019,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 937,  power: 114,  torque: 96,   weight: 200,
    seatHeight: 870,  fuelEconomy: 18.5, tankCapacity: 14.5,
    topSpeed: 225,  priceKRW: null, image: '/bikes/ducati/hypermotard950-2019.jpg'
  },
  {
    id: 'panigalev4r-2019', brand: 'ducati', model: 'Panigale V4 R', year: 2019,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 221,  torque: 112,  weight: 193,
    seatHeight: 830,  fuelEconomy: 13.6, tankCapacity: 16.0,
    topSpeed: 299,  priceKRW: null, image: '/bikes/ducati/panigalev4r-2019.jpg'
  },
  {
    id: 'streetfighterv4-2020', brand: 'ducati', model: 'Streetfighter V4', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 1103, power: 208,  torque: 123,  weight: 201,
    seatHeight: 845,  fuelEconomy: 14.5, tankCapacity: 16.0,
    topSpeed: 270,  priceKRW: null, image: '/bikes/ducati/streetfighterv4-2020.jpg'
  },
  {
    id: 'monster937-2021', brand: 'ducati', model: 'Monster 937', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 937,  power: 111,  torque: 93,   weight: 188,
    seatHeight: 820,  fuelEconomy: 20, tankCapacity: 14.0,
    topSpeed: 240,  priceKRW: null, image: '/bikes/ducati/monster937-2021.webp'
  },
  {
    id: 'multistradav4-2021', brand: 'ducati', model: 'Multistrada V4', year: 2021,
    category: '어드벤처', license: '소형이륜',
    displacement: 1158, power: 170,  torque: 125,  weight: 240,
    seatHeight: 840,  fuelEconomy: 15.5, tankCapacity: 22.0,
    topSpeed: 250,  priceKRW: null, image: '/bikes/ducati/multistradav4-2021.webp'
  },
  {
    id: 'supersport950-2021', brand: 'ducati', model: 'SuperSport 950', year: 2021,
    category: '스포츠', license: '소형이륜',
    displacement: 937,  power: 110,  torque: 93,   weight: 210,
    seatHeight: 810,  fuelEconomy: 18.5, tankCapacity: 16.0,
    topSpeed: 240,  priceKRW: null, image: '/bikes/ducati/supersport950-2021.jpg'
  },
  {
    id: 'desertx-2022', brand: 'ducati', model: 'DesertX', year: 2022,
    category: '어드벤처', license: '소형이륜',
    displacement: 937,  power: 110,  torque: 92,   weight: 223,
    seatHeight: 875,  fuelEconomy: 18.5, tankCapacity: 21.0,
    topSpeed: 210,  priceKRW: null, image: '/bikes/ducati/desertx-2022.webp'
  },
  {
    id: 'streetfighterv2-2022', brand: 'ducati', model: 'Streetfighter V2', year: 2022,
    category: '네이키드', license: '소형이륜',
    displacement: 955,  power: 153,  torque: 101.4, weight: 200,
    seatHeight: 845,  fuelEconomy: 16.5, tankCapacity: 17.0,
    topSpeed: 260,  priceKRW: null, image: '/bikes/ducati/streetfighterv2-2022.jpg'
  },
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
  {
    id: 'hypermotard698mono-2025', brand: 'ducati', model: 'Hypermotard 698 Mono', year: 2025,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 659,  power: 77.5, torque: 63,   weight: 151,
    seatHeight: 904,  fuelEconomy: 20.8, tankCapacity: 12.0,
    topSpeed: null, priceKRW: 14000000, image: '/bikes/ducati/hypermotard698mono-2025.jpeg'
  },
  {
    id: 'panigalev2-2025', brand: 'ducati', model: 'Panigale V2', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 890,  power: 120,  torque: 93.3, weight: 179,
    seatHeight: 837,  fuelEconomy: 18.9, tankCapacity: 15.0,
    topSpeed: null, priceKRW: 22000000, image: '/bikes/ducati/panigalev2-2025.jpeg'
  },
  {
    id: 'panigalev2s-2025', brand: 'ducati', model: 'Panigale V2 S', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 890,  power: 120,  torque: 93.3, weight: 176,
    seatHeight: 837,  fuelEconomy: 18.9, tankCapacity: 15.0,
    topSpeed: null, priceKRW: 22000000, image: '/bikes/ducati/panigalev2s-2025.jpg'
  },
  {
    id: 'panigalev4-2025', brand: 'ducati', model: 'Panigale V4', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 1103, power: 216,  torque: 120.9, weight: 191,
    seatHeight: 850,  fuelEconomy: 15.4, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 46000000, image: '/bikes/ducati/panigalev4-2025.jpeg'
  },
  {
    id: 'panigalev4s-2025', brand: 'ducati', model: 'Panigale V4 S', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 1103, power: 216,  torque: 120.9, weight: 187,
    seatHeight: 850,  fuelEconomy: 15.4, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 46000000, image: '/bikes/ducati/panigalev4s-2025.webp'
  },
  {
    id: 'panigalev4r-2025', brand: 'ducati', model: 'Panigale V4 R', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 218,  torque: 114.5, weight: 186.5,
    seatHeight: 855,  fuelEconomy: 13.9, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 42000000, image: '/bikes/ducati/panigalev4r-2025.jpeg'
  },
  {
    id: 'panigalev4tricolore-2025', brand: 'ducati', model: 'Panigale V4 Tricolore', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 1103, power: 216,  torque: 120.9, weight: 188,
    seatHeight: 850,  fuelEconomy: 15.4, tankCapacity: 17.0,
    topSpeed: null, priceKRW: 46000000, image: '/bikes/ducati/panigalev4tricolore-2025.jpg'
  },
  {
    id: 'streetfighterv4-2025', brand: 'ducati', model: 'Streetfighter V4', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 1103, power: 214,  torque: 120.0, weight: 191,
    seatHeight: 845,  fuelEconomy: 14.1, tankCapacity: 16.0,
    topSpeed: null, priceKRW: 44000000, image: '/bikes/ducati/streetfighterv4-2025.jpeg'
  },
  {
    id: 'multistradav2-2025', brand: 'ducati', model: 'Multistrada V2', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 890,  power: 115.6, torque: 92.1, weight: 199,
    seatHeight: 830,  fuelEconomy: 18.2, tankCapacity: 19.0,
    topSpeed: null, priceKRW: 22000000, image: '/bikes/ducati/multistradav2-2025.jpg'
  },
  {
    id: 'multistradav4-2025', brand: 'ducati', model: 'Multistrada V4', year: 2025,
    category: '어드벤처', license: '소형이륜',
    displacement: 1158, power: 170,  torque: 124,  weight: 229,
    seatHeight: 840,  fuelEconomy: 15.2, tankCapacity: 22.0,
    topSpeed: null, priceKRW: 38000000, image: '/bikes/ducati/multistradav4-2025.webp'
  },
  {
    id: 'diavelv4-2025', brand: 'ducati', model: 'Diavel V4', year: 2025,
    category: '크루저', license: '소형이륜',
    displacement: 1158, power: 168,  torque: 126,  weight: 223,
    seatHeight: 790,  fuelEconomy: 15.2, tankCapacity: 20.0,
    topSpeed: null, priceKRW: 33000000, image: '/bikes/ducati/diavelv4-2025.jpg'
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
  {
    id: 'speed400-2024', brand: 'triumph', model: 'Speed 400', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 398,  power: 40,   torque: 37.5, weight: 170,
    seatHeight: 790,  fuelEconomy: 28.6, tankCapacity: 13.0,
    topSpeed: 160,  priceKRW: null, image: '/bikes/triumph/speed400-2024.jpg'
  },
  {
    id: 'scrambler400x-2024', brand: 'triumph', model: 'Scrambler 400 X', year: 2024,
    category: '클래식', license: '소형이륜',
    displacement: 398,  power: 40,   torque: 37.5, weight: 179,
    seatHeight: 835,  fuelEconomy: 28.6, tankCapacity: 13.0,
    topSpeed: 145,  priceKRW: null, image: '/bikes/triumph/scrambler400x-2024.jpg'
  },
  {
    id: 'daytona660-2024', brand: 'triumph', model: 'Daytona 660', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 660,  power: 95,   torque: 69,   weight: 201,
    seatHeight: 810,  fuelEconomy: 20.4, tankCapacity: 14.0,
    topSpeed: 220,  priceKRW: null, image: '/bikes/triumph/daytona660-2024.jpg'
  },
  {
    id: 'tigersport660-2022', brand: 'triumph', model: 'Tiger Sport 660', year: 2022,
    category: '투어러', license: '소형이륜',
    displacement: 660,  power: 81,   torque: 64,   weight: 206,
    seatHeight: 835,  fuelEconomy: 22, tankCapacity: 17.2,
    topSpeed: 200,  priceKRW: null, image: '/bikes/triumph/tigersport660-2022.jpg'
  },
  {
    id: 'streettriple675-2007', brand: 'triumph', model: 'Street Triple 675', year: 2007,
    category: '네이키드', license: '소형이륜',
    displacement: 675,  power: 106,  torque: 68,   weight: 189,
    seatHeight: 800,  fuelEconomy: 18, tankCapacity: 17.4,
    topSpeed: 225,  priceKRW: null, image: '/bikes/triumph/streettriple675-2007.webp'
  },
  {
    id: 'streettriple765rs-2023', brand: 'triumph', model: 'Street Triple 765 RS', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 765,  power: 128,  torque: 80,   weight: 188,
    seatHeight: 836,  fuelEconomy: 18.5, tankCapacity: 15.0,
    topSpeed: 250,  priceKRW: null, image: '/bikes/triumph/streettriple765rs-2023.webp'
  },
  {
    id: 'speedtriple1050-2005', brand: 'triumph', model: 'Speed Triple 1050', year: 2005,
    category: '네이키드', license: '소형이륜',
    displacement: 1050, power: 131,  torque: 105,  weight: 214,
    seatHeight: 815,  fuelEconomy: 16.5, tankCapacity: 18.0,
    topSpeed: 250,  priceKRW: null, image: '/bikes/triumph/speedtriple1050-2005.jpg'
  },
  {
    id: 'speedtriple1050r-2016', brand: 'triumph', model: 'Speed Triple 1050 R', year: 2016,
    category: '네이키드', license: '소형이륜',
    displacement: 1050, power: 138,  torque: 112,  weight: 212,
    seatHeight: 825,  fuelEconomy: 16.5, tankCapacity: 15.5,
    topSpeed: 250,  priceKRW: null, image: '/bikes/triumph/speedtriple1050r-2016.webp'
  },
  {
    id: 'speedtriple1200rs-2021', brand: 'triumph', model: 'Speed Triple 1200 RS', year: 2021,
    category: '네이키드', license: '소형이륜',
    displacement: 1160, power: 177,  torque: 125,  weight: 198,
    seatHeight: 830,  fuelEconomy: 15.5, tankCapacity: 15.5,
    topSpeed: 270,  priceKRW: null, image: '/bikes/triumph/speedtriple1200rs-2021.webp'
  },
  {
    id: 'speedtriple1200rr-2022', brand: 'triumph', model: 'Speed Triple 1200 RR', year: 2022,
    category: '스포츠', license: '소형이륜',
    displacement: 1160, power: 177,  torque: 125,  weight: 199,
    seatHeight: 830,  fuelEconomy: 15.5, tankCapacity: 15.5,
    topSpeed: 270,  priceKRW: null, image: '/bikes/triumph/speedtriple1200rr-2022.jpg'
  },
  {
    id: 'bonnevillet100-2023', brand: 'triumph', model: 'Bonneville T100', year: 2023,
    category: '클래식', license: '소형이륜',
    displacement: 900,  power: 64.1, torque: 80,   weight: 228,
    seatHeight: 790,  fuelEconomy: 24, tankCapacity: 14.5,
    topSpeed: 180,  priceKRW: null, image: '/bikes/triumph/bonnevillet100-2023.jpg'
  },
  {
    id: 'bonnevillet120-2023', brand: 'triumph', model: 'Bonneville T120', year: 2023,
    category: '클래식', license: '소형이륜',
    displacement: 1200, power: 79,   torque: 105,  weight: 236,
    seatHeight: 790,  fuelEconomy: 22, tankCapacity: 14.5,
    topSpeed: 190,  priceKRW: null, image: '/bikes/triumph/bonnevillet120-2023.jpg'
  },
  {
    id: 'speedtwin900-2023', brand: 'triumph', model: 'Speed Twin 900', year: 2023,
    category: '클래식', license: '소형이륜',
    displacement: 900,  power: 64.1, torque: 80,   weight: 216,
    seatHeight: 765,  fuelEconomy: 24, tankCapacity: 12.0,
    topSpeed: 180,  priceKRW: null, image: '/bikes/triumph/speedtwin900-2023.jpg'
  },
  {
    id: 'speedtwin1200-2023', brand: 'triumph', model: 'Speed Twin 1200', year: 2023,
    category: '클래식', license: '소형이륜',
    displacement: 1200, power: 99,   torque: 112,  weight: 216,
    seatHeight: 809,  fuelEconomy: 20, tankCapacity: 14.5,
    topSpeed: 210,  priceKRW: null, image: '/bikes/triumph/speedtwin1200-2023.jpg'
  },
  {
    id: 'bonnevillebobber-2023', brand: 'triumph', model: 'Bonneville Bobber', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 1200, power: 77,   torque: 106,  weight: 251,
    seatHeight: 690,  fuelEconomy: 20, tankCapacity: 12.0,
    topSpeed: 185,  priceKRW: null, image: '/bikes/triumph/bonnevilllebobber-2023.jpg'
  },
  {
    id: 'thruxtonrs-2020', brand: 'triumph', model: 'Thruxton RS', year: 2020,
    category: '스포츠', license: '소형이륜',
    displacement: 1200, power: 103,  torque: 112,  weight: 217,
    seatHeight: 810,  fuelEconomy: 19, tankCapacity: 14.5,
    topSpeed: 220,  priceKRW: null, image: '/bikes/triumph/thruxtonrs-2020.webp'
  },
  {
    id: 'scrambler900-2023', brand: 'triumph', model: 'Scrambler 900', year: 2023,
    category: '클래식', license: '소형이륜',
    displacement: 900,  power: 65,   torque: 80,   weight: 223,
    seatHeight: 790,  fuelEconomy: 22, tankCapacity: 12.0,
    topSpeed: 175,  priceKRW: null, image: '/bikes/triumph/scrambler900-2023.jpg'
  },
  {
    id: 'scrambler1200xe-2024', brand: 'triumph', model: 'Scrambler 1200 XE', year: 2024,
    category: '클래식', license: '소형이륜',
    displacement: 1200, power: 89,   torque: 110,  weight: 230,
    seatHeight: 870,  fuelEconomy: 20, tankCapacity: 15.0,
    topSpeed: 200,  priceKRW: null, image: '/bikes/triumph/scrambler1200xe-2024.webp'
  },
  {
    id: 'tiger900rallypro-2024', brand: 'triumph', model: 'Tiger 900 Rally Pro', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 888,  power: 108,  torque: 90,   weight: 228,
    seatHeight: 860,  fuelEconomy: 20, tankCapacity: 20.0,
    topSpeed: 205,  priceKRW: null, image: '/bikes/triumph/tiger900rallypro-2024.jpg'
  },
  {
    id: 'tiger1200rallypro-2024', brand: 'triumph', model: 'Tiger 1200 Rally Pro', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 1160, power: 150,  torque: 130,  weight: 249,
    seatHeight: 875,  fuelEconomy: 18, tankCapacity: 20.0,
    topSpeed: 220,  priceKRW: null, image: '/bikes/triumph/tiger1200rallypro-2024.jpg'
  },
  {
    id: 'rocket3r-2020', brand: 'triumph', model: 'Rocket 3 R', year: 2020,
    category: '크루저', license: '소형이륜',
    displacement: 2458, power: 165,  torque: 221,  weight: 291,
    seatHeight: 773,  fuelEconomy: 14, tankCapacity: 18.0,
    topSpeed: 225,  priceKRW: null, image: '/bikes/triumph/rocket3r-2020.jpg'
  },
  {
    id: 'rocket3stormr-2024', brand: 'triumph', model: 'Rocket 3 Storm R', year: 2024,
    category: '크루저', license: '소형이륜',
    displacement: 2458, power: 180,  torque: 225,  weight: 317,
    seatHeight: 773,  fuelEconomy: 14, tankCapacity: 18.0,
    topSpeed: 225,  priceKRW: null, image: '/bikes/triumph/rocket3stormr-2024.jpg'
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
    id: 'classic350-2024', brand: 'royalenfield', model: 'Classic 350', year: 2024,
    category: '클래식', license: '소형이륜',
    displacement: 349,  power: 20.2, torque: 27,   weight: 195,
    seatHeight: 805,  fuelEconomy: 35, tankCapacity: 13.0,
    topSpeed: 115,  priceKRW: null, image: '/bikes/royal/classic350-2024.webp'
  },
  {
    id: 'bullet350-2024', brand: 'royalenfield', model: 'Bullet 350', year: 2024,
    category: '클래식', license: '소형이륜',
    displacement: 349,  power: 20.2, torque: 27,   weight: 195,
    seatHeight: 805,  fuelEconomy: 35, tankCapacity: 13.0,
    topSpeed: 110,  priceKRW: null, image: '/bikes/royal/bullet350-2024.jpg'
  },
  {
    id: 'hunter350-2023', brand: 'royalenfield', model: 'Hunter 350', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 349,  power: 20.2, torque: 27,   weight: 181,
    seatHeight: 790,  fuelEconomy: 36, tankCapacity: 13.0,
    topSpeed: 120,  priceKRW: null, image: '/bikes/royal/hunter350-2023.png'
  },
  {
    id: 'himalayan-2023', brand: 'royalenfield', model: 'Himalayan 411', year: 2023,
    category: '어드벤처', license: '소형이륜',
    displacement: 411,  power: 24,   torque: 32,   weight: 199,
    seatHeight: 800,  fuelEconomy: 30, tankCapacity: 15.0,
    topSpeed: 140,  priceKRW: 6500000, image: '/bikes/royal/himalayan411-2023.webp'
  },
  {
    id: 'scram411-2022', brand: 'royalenfield', model: 'Scram 411', year: 2022,
    category: '클래식', license: '소형이륜',
    displacement: 411,  power: 24.3, torque: 32,   weight: 185,
    seatHeight: 795,  fuelEconomy: 30, tankCapacity: 15.0,
    topSpeed: 140,  priceKRW: null, image: '/bikes/royal/scram411-2022.jpg'
  },
  {
    id: 'himalayan450-2024', brand: 'royalenfield', model: 'Himalayan 450', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 452,  power: 40,   torque: 40,   weight: 198,
    seatHeight: 825,  fuelEconomy: 28, tankCapacity: 17.0,
    topSpeed: 150,  priceKRW: null, image: '/bikes/royal/himalayan450-2024.jpg'
  },
  {
    id: 'guerrilla450-2024', brand: 'royalenfield', model: 'Guerrilla 450', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 452,  power: 40,   torque: 40,   weight: 185,
    seatHeight: 780,  fuelEconomy: 29.5, tankCapacity: 11.0,
    topSpeed: 170,  priceKRW: null, image: '/bikes/royal/guerrilla450-2024.webp'
  },
  {
    id: 'scram440-2025', brand: 'royalenfield', model: 'Scram 440', year: 2025,
    category: '클래식', license: '소형이륜',
    displacement: 443,  power: 25.4, torque: 34,   weight: 196,
    seatHeight: 795,  fuelEconomy: 30, tankCapacity: 15.0,
    topSpeed: 140,  priceKRW: null, image: '/bikes/royal/scram440-2025.webp'
  },
  {
    id: 'interceptor650-2023', brand: 'royalenfield', model: 'Interceptor 650', year: 2023,
    category: '클래식', license: '소형이륜',
    displacement: 648,  power: 46.8, torque: 52,   weight: 218,
    seatHeight: 804,  fuelEconomy: 23, tankCapacity: 13.7,
    topSpeed: 170,  priceKRW: null, image: '/bikes/royal/interceptor650-2023.webp'
  },
  {
    id: 'continentalgt650-2023', brand: 'royalenfield', model: 'Continental GT 650', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 648,  power: 47,   torque: 52,   weight: 214,
    seatHeight: 804,  fuelEconomy: 23, tankCapacity: 12.5,
    topSpeed: 170,  priceKRW: null, image: '/bikes/royal/continentalgt650-2023.jpg'
  },
  {
    id: 'supermeteor650-2023', brand: 'royalenfield', model: 'Super Meteor 650', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 648,  power: 46.4, torque: 52.3, weight: 241,
    seatHeight: 740,  fuelEconomy: 22, tankCapacity: 15.7,
    topSpeed: 170,  priceKRW: null, image: '/bikes/royal/supermeteor650-2023.webp'
  },
  {
    id: 'shotgun650-2024', brand: 'royalenfield', model: 'Shotgun 650', year: 2024,
    category: '크루저', license: '소형이륜',
    displacement: 648,  power: 46.4, torque: 52.3, weight: 240,
    seatHeight: 795,  fuelEconomy: 22, tankCapacity: 13.8,
    topSpeed: 170,  priceKRW: null, image: '/bikes/royal/shotgun650-2024.jpg'
  },
  {
    id: 'bear650-2025', brand: 'royalenfield', model: 'Bear 650', year: 2025,
    category: '클래식', license: '소형이륜',
    displacement: 648,  power: 46.8, torque: 57,   weight: 216,
    seatHeight: 830,  fuelEconomy: 23, tankCapacity: 13.7,
    topSpeed: 170,  priceKRW: null, image: '/bikes/royal/bear650-2025.jpg'
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

  // ── Indian Motorcycle ─────────────────────────────────────────────────────
  {
    id: 'chiefclassic-2014', brand: 'indian', model: 'Chief Classic', year: 2014,
    category: '크루저', license: '소형이륜',
    displacement: 1811, power: null, torque: 139,  weight: 357,
    seatHeight: 660,  fuelEconomy: 16.2, tankCapacity: 20.8,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/cheifclassic-2014.jpg'
  },
  {
    id: 'scout-2015', brand: 'indian', model: 'Scout', year: 2015,
    category: '크루저', license: '소형이륜',
    displacement: 1133, power: 100,  torque: 98,   weight: 253,
    seatHeight: 643,  fuelEconomy: 18.6, tankCapacity: 12.5,
    topSpeed: 190,  priceKRW: null, image: '/bikes/indian/scout-2015.jpg'
  },
  {
    id: 'roadmaster-2015', brand: 'indian', model: 'Roadmaster', year: 2015,
    category: '투어러', license: '소형이륜',
    displacement: 1811, power: null, torque: 139,  weight: 421,
    seatHeight: 660,  fuelEconomy: 15.3, tankCapacity: 20.8,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/roadmaster-2015.webp'
  },
  {
    id: 'chiefdarkhorse-2016', brand: 'indian', model: 'Chief Dark Horse', year: 2016,
    category: '크루저', license: '소형이륜',
    displacement: 1811, power: null, torque: 139,  weight: 341,
    seatHeight: 660,  fuelEconomy: 15.8, tankCapacity: 20.8,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/chiefdarkhorse-2016.jpg'
  },
  {
    id: 'scoutsixty-2016', brand: 'indian', model: 'Scout Sixty', year: 2016,
    category: '크루저', license: '소형이륜',
    displacement: 999,  power: 78,   torque: 88.8, weight: 249,
    seatHeight: 643,  fuelEconomy: 20.3, tankCapacity: 12.5,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/scoutsixty-2016.webp'
  },
  {
    id: 'chieftain-2017', brand: 'indian', model: 'Chieftain Limited', year: 2017,
    category: '투어러', license: '소형이륜',
    displacement: 1811, power: null, torque: 139,  weight: 385,
    seatHeight: 660,  fuelEconomy: 15.5, tankCapacity: 20.8,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/chieftainlimited-2017.jpg'
  },
  {
    id: 'springfield-2018', brand: 'indian', model: 'Springfield Dark Horse', year: 2018,
    category: '투어러', license: '소형이륜',
    displacement: 1811, power: null, torque: 139,  weight: 364,
    seatHeight: 660,  fuelEconomy: 15.5, tankCapacity: 20.8,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/springfielddarkhorse-2018.webp'
  },
  {
    id: 'ftr1200s-2019', brand: 'indian', model: 'FTR 1200 S', year: 2019,
    category: '네이키드', license: '소형이륜',
    displacement: 1203, power: 120,  torque: 115,  weight: 231,
    seatHeight: 840,  fuelEconomy: 13.6, tankCapacity: 12.9,
    topSpeed: 200,  priceKRW: null, image: '/bikes/indian/ftr1200s-2019.jpg'
  },
  {
    id: 'challenger-2020', brand: 'indian', model: 'Challenger', year: 2020,
    category: '투어러', license: '소형이륜',
    displacement: 1768, power: 122,  torque: 178,  weight: 381,
    seatHeight: 672,  fuelEconomy: 15.9, tankCapacity: 22.7,
    topSpeed: 190,  priceKRW: null, image: '/bikes/indian/challenger-2020.jpg'
  },
  {
    id: 'superchief-2022', brand: 'indian', model: 'Super Chief Limited', year: 2022,
    category: '크루저', license: '소형이륜',
    displacement: 1890, power: null, torque: 162,  weight: 335,
    seatHeight: 665,  fuelEconomy: 15.8, tankCapacity: 15.1,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/superchieflimited-2022.webp'
  },
  {
    id: 'scoutbobber-2023', brand: 'indian', model: 'Scout Bobber', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 1133, power: 100,  torque: 98,   weight: 251,
    seatHeight: 649,  fuelEconomy: 18, tankCapacity: 12.5,
    topSpeed: 190,  priceKRW: null, image: '/bikes/indian/scoutbobber-2023.webp'
  },
  {
    id: 'ftr1200-2023', brand: 'indian', model: 'FTR 1200', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 1203, power: 120,  torque: 118,  weight: 233,
    seatHeight: 780,  fuelEconomy: 18, tankCapacity: 13.0,
    topSpeed: 210,  priceKRW: null, image: '/bikes/indian/ftr1200-2023.jpg'
  },
  {
    id: 'sportchief-2023', brand: 'indian', model: 'Sport Chief', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 1890, power: null, torque: 162,  weight: 311,
    seatHeight: 686,  fuelEconomy: 16.4, tankCapacity: 15.1,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/sportchief-2023.webp'
  },
  {
    id: 'chiefdarkhorse-2023', brand: 'indian', model: 'Chief Dark Horse', year: 2023,
    category: '크루저', license: '소형이륜',
    displacement: 1890, power: null, torque: 162,  weight: 304,
    seatHeight: 662,  fuelEconomy: 17, tankCapacity: 15.1,
    topSpeed: 180,  priceKRW: null, image: '/bikes/indian/chiefdarkhorse-2023.jpg'
  },
  {
    id: 'challengerdarkhorse-2023', brand: 'indian', model: 'Challenger Dark Horse', year: 2023,
    category: '투어러', license: '소형이륜',
    displacement: 1768, power: 122,  torque: 178,  weight: 381,
    seatHeight: 672,  fuelEconomy: 16, tankCapacity: 22.7,
    topSpeed: 190,  priceKRW: null, image: '/bikes/indian/challengerdarkhorse-2023.webp'
  },
  {
    id: 'pursuitdarkhorse-2023', brand: 'indian', model: 'Pursuit Dark Horse', year: 2023,
    category: '투어러', license: '소형이륜',
    displacement: 1768, power: 122,  torque: 178,  weight: 416,
    seatHeight: 672,  fuelEconomy: 15.7, tankCapacity: 22.7,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/pursuitdarkhorse-2023.jpg'
  },
  {
    id: 'scoutbobber-2025', brand: 'indian', model: 'Scout Bobber', year: 2025,
    category: '크루저', license: '소형이륜',
    displacement: 1250, power: 105,  torque: 109,  weight: 246,
    seatHeight: 649,  fuelEconomy: 18.7, tankCapacity: 13.0,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/scoutbobber-2025.jpg'
  },
  {
    id: '101scout-2025', brand: 'indian', model: '101 Scout', year: 2025,
    category: '크루저', license: '소형이륜',
    displacement: 1250, power: 111,  torque: 109,  weight: 249,
    seatHeight: 654,  fuelEconomy: 18.7, tankCapacity: 13.0,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/101scout-2025.jpg'
  },
  {
    id: 'chieftainpowerplus-2025', brand: 'indian', model: 'Chieftain PowerPlus Limited', year: 2025,
    category: '투어러', license: '소형이륜',
    displacement: 1834, power: 126,  torque: 180,  weight: 383,
    seatHeight: 673,  fuelEconomy: 15.8, tankCapacity: 22.7,
    topSpeed: null, priceKRW: null, image: '/bikes/indian/chieftainpowerpluslimited-2025.webp'
  },

  // ── Aprilia ───────────────────────────────────────────────────────────────
  {
    id: 'rs125-2006', brand: 'aprilia', model: 'RS 125', year: 2006,
    category: '스포츠', license: '원동기',
    displacement: 125,  power: 28.2, torque: 19.0, weight: 137,
    seatHeight: 805,  fuelEconomy: 17.0, tankCapacity: 14.0,
    topSpeed: 160,  priceKRW: null, image: '/bikes/aprilia/rs125-2006.jpg'
  },
  {
    id: 'rs125-2025', brand: 'aprilia', model: 'RS 125', year: 2025,
    category: '스포츠', license: '원동기',
    displacement: 124.2, power: 15,   torque: 11.2, weight: 144,
    seatHeight: 820,  fuelEconomy: 36.9, tankCapacity: 14.5,
    topSpeed: null, priceKRW: null, image: '/bikes/aprilia/rs125-2025.jpg'
  },
  {
    id: 'rs250-1998', brand: 'aprilia', model: 'RS 250', year: 1998,
    category: '스포츠', license: '소형이륜',
    displacement: 249,  power: 72,   torque: 39,   weight: 162,
    seatHeight: 810,  fuelEconomy: 22.8, tankCapacity: 19.5,
    topSpeed: 209,  priceKRW: null, image: '/bikes/aprilia/rs250-1998.webp'
  },
  {
    id: 'rsvmille-1998', brand: 'aprilia', model: 'RSV Mille', year: 1998,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 128,  torque: 103,  weight: 210,
    seatHeight: 825,  fuelEconomy: 15.4, tankCapacity: 21.0,
    topSpeed: 286,  priceKRW: null, image: '/bikes/aprilia/rsvmille-1998.jpg'
  },
  {
    id: 'rsvmille-2001', brand: 'aprilia', model: 'RSV Mille', year: 2001,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 130,  torque: 103,  weight: 210,
    seatHeight: 825,  fuelEconomy: 15.4, tankCapacity: 20.0,
    topSpeed: 286,  priceKRW: null, image: '/bikes/aprilia/rsvmille-2001.jpg'
  },
  {
    id: 'rsv1000r-2004', brand: 'aprilia', model: 'RSV 1000 R', year: 2004,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 139,  torque: 90.3, weight: 214,
    seatHeight: 810,  fuelEconomy: 15.5, tankCapacity: 18.0,
    topSpeed: 280,  priceKRW: null, image: '/bikes/aprilia/rs1000r-2004.jpg'
  },
  {
    id: 'rsv4factory-2009', brand: 'aprilia', model: 'RSV4 Factory', year: 2009,
    category: '스포츠', license: '소형이륜',
    displacement: 999.6, power: 180,  torque: 115,  weight: 208,
    seatHeight: 845,  fuelEconomy: 15.5, tankCapacity: 18.5,
    topSpeed: 286,  priceKRW: null, image: '/bikes/aprilia/rsv4factory-2009.jpg'
  },
  {
    id: 'rsv4rf-2015', brand: 'aprilia', model: 'RSV4 RF', year: 2015,
    category: '스포츠', license: '소형이륜',
    displacement: 999.6, power: 201,  torque: 115,  weight: 208,
    seatHeight: 845,  fuelEconomy: 14.7, tankCapacity: 18.5,
    topSpeed: 286,  priceKRW: null, image: '/bikes/aprilia/rsv4rf-2015.jpg'
  },
  {
    id: 'rsv4factory-2021', brand: 'aprilia', model: 'RSV4 Factory', year: 2021,
    category: '스포츠', license: '소형이륜',
    displacement: 1099, power: 217,  torque: 125,  weight: 202,
    seatHeight: 845,  fuelEconomy: 14.6, tankCapacity: 18.5,
    topSpeed: 286,  priceKRW: null, image: '/bikes/aprilia/rsv4factory-2021.jpg'
  },
  {
    id: 'rs660-2021', brand: 'aprilia', model: 'RS 660', year: 2021,
    category: '스포츠', license: '소형이륜',
    displacement: 659,  power: 100,  torque: 67,   weight: 183,
    seatHeight: 820,  fuelEconomy: 20, tankCapacity: 15.0,
    topSpeed: 240,  priceKRW: null, image: '/bikes/aprilia/rs660-2021.jpg'
  },
  {
    id: 'rs457-2025', brand: 'aprilia', model: 'RS 457', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 457,  power: 47,   torque: 43.5, weight: 175,
    seatHeight: 800,  fuelEconomy: 25, tankCapacity: 13.0,
    topSpeed: 190,  priceKRW: null, image: '/bikes/aprilia/rs457-2025.png'
  },
  {
    id: 'rs660-2025', brand: 'aprilia', model: 'RS 660', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 659,  power: 105,  torque: 70,   weight: 183,
    seatHeight: 820,  fuelEconomy: 20, tankCapacity: 15.0,
    topSpeed: 240,  priceKRW: null, image: '/bikes/aprilia/rs660-2025.jpg'
  },
  {
    id: 'tuono660-2025', brand: 'aprilia', model: 'Tuono 660', year: 2025,
    category: '네이키드', license: '소형이륜',
    displacement: 659,  power: 100,  torque: 67,   weight: 183,
    seatHeight: 820,  fuelEconomy: 20, tankCapacity: 15.0,
    topSpeed: 225,  priceKRW: null, image: '/bikes/aprilia/tuono660-2025.jpg'
  },
  {
    id: 'tuareg660-2024', brand: 'aprilia', model: 'Tuareg 660', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 659,  power: 80,   torque: 70,   weight: 204,
    seatHeight: 860,  fuelEconomy: 22, tankCapacity: 18.0,
    topSpeed: 190,  priceKRW: null, image: '/bikes/aprilia/tuareg660-2024.jpg'
  },
  {
    id: 'rsv4factory-2025', brand: 'aprilia', model: 'RSV4 Factory', year: 2025,
    category: '스포츠', license: '소형이륜',
    displacement: 1099, power: 220,  torque: 125,  weight: 202,
    seatHeight: 845,  fuelEconomy: 14, tankCapacity: 17.9,
    topSpeed: 305,  priceKRW: null, image: '/bikes/aprilia/rsv4factory-2025.jpg'
  },

  // ── Husqvarna ─────────────────────────────────────────────────────────────
  {
    id: 'svartpilen401-2024', brand: 'husqvarna', model: 'Svartpilen 401', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 398.6, power: 44,   torque: 39,   weight: 172,
    seatHeight: 820,  fuelEconomy: 29, tankCapacity: 13.0,
    topSpeed: 160,  priceKRW: null, image: '/bikes/husqvarna/svartpilen401.webp'
  },
  {
    id: 'vitpilen401-2024', brand: 'husqvarna', model: 'Vitpilen 401', year: 2024,
    category: '네이키드', license: '소형이륜',
    displacement: 398.6, power: 44,   torque: 39,   weight: 171,
    seatHeight: 820,  fuelEconomy: 29, tankCapacity: 13.0,
    topSpeed: 165,  priceKRW: null, image: '/bikes/husqvarna/vitpilen401-2024.png'
  },
  {
    id: 'norden901-2024', brand: 'husqvarna', model: 'Norden 901', year: 2024,
    category: '어드벤처', license: '소형이륜',
    displacement: 889,  power: 105,  torque: 100,  weight: 220,
    seatHeight: 854,  fuelEconomy: 22, tankCapacity: 19.0,
    topSpeed: 200,  priceKRW: null, image: '/bikes/husqvarna/norden901-2024.jpg'
  },
  {
    id: '701supermoto-2024', brand: 'husqvarna', model: '701 Supermoto', year: 2024,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 692.7, power: 74,   torque: 73.5, weight: 160,
    seatHeight: 890,  fuelEconomy: 24, tankCapacity: 13.0,
    topSpeed: 190,  priceKRW: null, image: '/bikes/husqvarna/701supermoto-2024.png'
  },

  // ── MV Agusta ─────────────────────────────────────────────────────────────
  {
    id: 'f4-750s-1999', brand: 'mvagusta', model: 'F4 750 S', year: 1999,
    category: '스포츠', license: '소형이륜',
    displacement: 749,  power: 126,  torque: 74,   weight: 218,
    seatHeight: 810,  fuelEconomy: 16, tankCapacity: 21.0,
    topSpeed: 260,  priceKRW: null, image: '/bikes/agusta/f4750s-1999.jpg'
  },
  {
    id: 'f4-750evo3-2003', brand: 'mvagusta', model: 'F4 750 S Evo 03', year: 2003,
    category: '스포츠', license: '소형이륜',
    displacement: 749,  power: 136,  torque: 81,   weight: 218,
    seatHeight: 810,  fuelEconomy: 15.6, tankCapacity: 21.0,
    topSpeed: 275,  priceKRW: null, image: '/bikes/agusta/f4750sevo03-2003.jpg'
  },
  {
    id: 'f4-1000s-2005', brand: 'mvagusta', model: 'F4 1000 S', year: 2005,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 166,  torque: 109,  weight: 220,
    seatHeight: 810,  fuelEconomy: 15, tankCapacity: 21.0,
    topSpeed: 295,  priceKRW: null, image: '/bikes/agusta/f41000s-2005.jpg'
  },
  {
    id: 'f4-r312-2008', brand: 'mvagusta', model: 'F4 R 312', year: 2008,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 183,  torque: 115,  weight: 220,
    seatHeight: 810,  fuelEconomy: 15.5, tankCapacity: 21.0,
    topSpeed: 312,  priceKRW: null, image: '/bikes/agusta/f4r312-2008.jpg'
  },
  {
    id: 'f4-2010', brand: 'mvagusta', model: 'F4', year: 2010,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 186,  torque: 114,  weight: 192,
    seatHeight: 830,  fuelEconomy: 15.8, tankCapacity: 17.0,
    topSpeed: 305,  priceKRW: null, image: '/bikes/agusta/f4-2010.jpg'
  },
  {
    id: 'f4rr-2011', brand: 'mvagusta', model: 'F4 RR', year: 2011,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 201,  torque: 111,  weight: 192,
    seatHeight: 830,  fuelEconomy: 14.4, tankCapacity: 17.0,
    topSpeed: 297,  priceKRW: null, image: '/bikes/agusta/f4rr-2011.webp'
  },
  {
    id: 'f4rc-2015', brand: 'mvagusta', model: 'F4 RC', year: 2015,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 205,  torque: 115,  weight: 193,
    seatHeight: 830,  fuelEconomy: 15.3, tankCapacity: 17.0,
    topSpeed: 302,  priceKRW: null, image: '/bikes/agusta/f4rc-2015.webp'
  },
  {
    id: 'f3-675-2012', brand: 'mvagusta', model: 'F3 675', year: 2012,
    category: '스포츠', license: '소형이륜',
    displacement: 675,  power: 126,  torque: 71,   weight: 173,
    seatHeight: 812,  fuelEconomy: 17.1, tankCapacity: 16.5,
    topSpeed: 260,  priceKRW: null, image: '/bikes/agusta/f3675-2012.jpg'
  },
  {
    id: 'f3-800-2013', brand: 'mvagusta', model: 'F3 800', year: 2013,
    category: '스포츠', license: '소형이륜',
    displacement: 798,  power: 148,  torque: 88,   weight: 173,
    seatHeight: 812,  fuelEconomy: 16.4, tankCapacity: 16.5,
    topSpeed: 269,  priceKRW: null, image: '/bikes/agusta/f3800-2013.webp'
  },
  {
    id: 'f3-675rc-2018', brand: 'mvagusta', model: 'F3 675 RC', year: 2018,
    category: '스포츠', license: '소형이륜',
    displacement: 675,  power: 133,  torque: 71,   weight: 173,
    seatHeight: 812,  fuelEconomy: 17, tankCapacity: 16.5,
    topSpeed: 260,  priceKRW: null, image: '/bikes/agusta/f3675rc-2018.webp'
  },
  {
    id: 'f3-800rc-2018', brand: 'mvagusta', model: 'F3 800 RC', year: 2018,
    category: '스포츠', license: '소형이륜',
    displacement: 798,  power: 153,  torque: 88,   weight: 173,
    seatHeight: 812,  fuelEconomy: 16, tankCapacity: 16.5,
    topSpeed: 269,  priceKRW: null, image: '/bikes/agusta/f3800rc-2018.jpg'
  },
  {
    id: 'brutale750s-2003', brand: 'mvagusta', model: 'Brutale 750 S', year: 2003,
    category: '네이키드', license: '소형이륜',
    displacement: 749,  power: 127,  torque: 75,   weight: 211,
    seatHeight: 805,  fuelEconomy: 17.3, tankCapacity: 19.0,
    topSpeed: 250,  priceKRW: null, image: '/bikes/agusta/brutale750s-2003.webp'
  },
  {
    id: 'brutale910s-2005', brand: 'mvagusta', model: 'Brutale 910 S', year: 2005,
    category: '네이키드', license: '소형이륜',
    displacement: 909,  power: 136,  torque: 96,   weight: 210,
    seatHeight: 805,  fuelEconomy: 17.2, tankCapacity: 19.0,
    topSpeed: 260,  priceKRW: null, image: '/bikes/agusta/brutale910s-2005.jpg'
  },
  {
    id: 'brutale1090rr-2010', brand: 'mvagusta', model: 'Brutale 1090 RR', year: 2010,
    category: '네이키드', license: '소형이륜',
    displacement: 1078, power: 144,  torque: 112,  weight: 190,
    seatHeight: 830,  fuelEconomy: 17, tankCapacity: 23.0,
    topSpeed: 265,  priceKRW: null, image: '/bikes/agusta/brutale1090-2010.webp'
  },
  {
    id: 'brutale675-2012', brand: 'mvagusta', model: 'Brutale 675', year: 2012,
    category: '네이키드', license: '소형이륜',
    displacement: 675,  power: 108,  torque: 65,   weight: 183,
    seatHeight: 810,  fuelEconomy: 19.1, tankCapacity: 16.6,
    topSpeed: 225,  priceKRW: null, image: '/bikes/agusta/brutale675-2012.webp'
  },
  {
    id: 'brutale800-2013', brand: 'mvagusta', model: 'Brutale 800', year: 2013,
    category: '네이키드', license: '소형이륜',
    displacement: 798,  power: 125,  torque: 81,   weight: 183,
    seatHeight: 810,  fuelEconomy: 18.3, tankCapacity: 16.6,
    topSpeed: 245,  priceKRW: null, image: '/bikes/agusta/brutale800-2013.webp'
  },
  {
    id: 'brutale800rr-2023', brand: 'mvagusta', model: 'Brutale 800 RR', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 798,  power: 140,  torque: 87,   weight: 175,
    seatHeight: 830,  fuelEconomy: 17, tankCapacity: 16.5,
    topSpeed: 244,  priceKRW: null, image: '/bikes/agusta/brutale800rr-2023.jpg'
  },
  {
    id: 'brutale1000rr-2020', brand: 'mvagusta', model: 'Brutale 1000 RR', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 208,  torque: 116.5, weight: 186,
    seatHeight: 845,  fuelEconomy: 15.5, tankCapacity: 16.0,
    topSpeed: 300,  priceKRW: null, image: '/bikes/agusta/brutale1000rr-2020.jpg'
  },
  {
    id: 'rush1000-2020', brand: 'mvagusta', model: 'Rush 1000', year: 2020,
    category: '네이키드', license: '소형이륜',
    displacement: 998,  power: 205,  torque: 116.5, weight: 184,
    seatHeight: 845,  fuelEconomy: 15.5, tankCapacity: 16.0,
    topSpeed: 300,  priceKRW: null, image: '/bikes/agusta/rush1000-2020.jpg'
  },
  {
    id: 'dragster800-2014', brand: 'mvagusta', model: 'Dragster 800', year: 2014,
    category: '네이키드', license: '소형이륜',
    displacement: 798,  power: 125,  torque: 81,   weight: 167,
    seatHeight: 811,  fuelEconomy: 18.3, tankCapacity: 16.6,
    topSpeed: 245,  priceKRW: null, image: '/bikes/agusta/dragster800-2014.jpg'
  },
  {
    id: 'dragster800rr-2023', brand: 'mvagusta', model: 'Dragster 800 RR', year: 2023,
    category: '네이키드', license: '소형이륜',
    displacement: 798,  power: 140,  torque: 87,   weight: 175,
    seatHeight: 845,  fuelEconomy: 17, tankCapacity: 16.5,
    topSpeed: 244,  priceKRW: null, image: '/bikes/agusta/dragster800rr-2023.webp'
  },
  {
    id: 'rivale800-2013', brand: 'mvagusta', model: 'Rivale 800', year: 2013,
    category: '슈퍼모토', license: '소형이륜',
    displacement: 798,  power: 125,  torque: 84,   weight: 178,
    seatHeight: 881,  fuelEconomy: 19.6, tankCapacity: 13.0,
    topSpeed: 245,  priceKRW: null, image: '/bikes/agusta/rivale800-2013.jpg'
  },
  {
    id: 'stradale800-2015', brand: 'mvagusta', model: 'Stradale 800', year: 2015,
    category: '투어러', license: '소형이륜',
    displacement: 798,  power: 115,  torque: 78.5, weight: 181,
    seatHeight: 870,  fuelEconomy: 19.9, tankCapacity: 16.0,
    topSpeed: 214,  priceKRW: null, image: '/bikes/agusta/stradale800-2015.jpg'
  },
  {
    id: 'turismoveloce800-2015', brand: 'mvagusta', model: 'Turismo Veloce 800', year: 2015,
    category: '투어러', license: '소형이륜',
    displacement: 798,  power: 110,  torque: 80,   weight: 192,
    seatHeight: 850,  fuelEconomy: 19, tankCapacity: 22.0,
    topSpeed: 230,  priceKRW: null, image: '/bikes/agusta/turismoveloce800-2015.jpg'
  },
  {
    id: 'superveloce800-2020', brand: 'mvagusta', model: 'Superveloce 800', year: 2020,
    category: '스포츠', license: '소형이륜',
    displacement: 798,  power: 148,  torque: 88,   weight: 173,
    seatHeight: 830,  fuelEconomy: 16.4, tankCapacity: 16.5,
    topSpeed: 240,  priceKRW: null, image: '/bikes/agusta/superveloce800-2020.webp'
  },
  {
    id: 'superveloce800-2023', brand: 'mvagusta', model: 'Superveloce 800', year: 2023,
    category: '스포츠', license: '소형이륜',
    displacement: 798,  power: 147,  torque: 88,   weight: 197,
    seatHeight: 830,  fuelEconomy: 16, tankCapacity: 16.5,
    topSpeed: 240,  priceKRW: null, image: '/bikes/agusta/superveloce800-2023.webp'
  },
  {
    id: 'superveloce1000-2024', brand: 'mvagusta', model: 'Superveloce 1000 Serie Oro', year: 2024,
    category: '스포츠', license: '소형이륜',
    displacement: 998,  power: 208,  torque: 116.5, weight: 194,
    seatHeight: 845,  fuelEconomy: 15.3, tankCapacity: 16.0,
    topSpeed: 300,  priceKRW: null, image: '/bikes/agusta/superveloce1000serieoro-2024.webp'
  },
  {
    id: 'turismoveloce800-2023', brand: 'mvagusta', model: 'Turismo Veloce 800', year: 2023,
    category: '투어러', license: '소형이륜',
    displacement: 798,  power: 110,  torque: 84,   weight: 211,
    seatHeight: 850,  fuelEconomy: 18, tankCapacity: 21.5,
    topSpeed: 230,  priceKRW: null, image: '/bikes/agusta/turismoveloce-2023.jpg'
  },
]

function isKnownNumber(value) {
  return value !== null && value !== undefined && Number.isFinite(value)
}

function estimateReferencePriceKRW(bike) {
  const cc = isKnownNumber(bike.displacement) ? bike.displacement : 0
  const power = isKnownNumber(bike.power) ? bike.power : 0

  let baseMillion =
    cc <= 125 ? 3 :
    cc <= 250 ? 4 :
    cc <= 400 ? 6 :
    cc <= 700 ? 10 :
    cc <= 900 ? 14 :
    cc <= 1000 ? 20 :
    cc <= 1200 ? 24 :
    28

  if (power >= 210) baseMillion += 16
  else if (power >= 170) baseMillion += 8
  else if (power >= 130) baseMillion += 4
  else if (power >= 100) baseMillion += 2

  if (bike.category === '스포츠' && power >= 80) baseMillion += 2
  if (bike.category === '투어러' || bike.category === '어드벤처') baseMillion += 2
  if (bike.category === '스쿠터') baseMillion -= 1
  if (bike.category === '크루저' || bike.category === '클래식') baseMillion += 1

  const brandPremium = {
    bmw: 3,
    ducati: 4,
    harley: 2,
    triumph: 1,
    kawasaki: 0.5,
    ktm: 0.5,
    vespa: 1,
    indian: 2,
    aprilia: 2,
    husqvarna: 1,
    mvagusta: 4,
  }
  baseMillion += brandPremium[bike.brand] ?? 0

  const age = 2026 - bike.year
  const ageFactor =
    age <= 1 ? 1.00 :
    age <= 3 ? 0.85 :
    age <= 5 ? 0.70 :
    age <= 8 ? 0.55 :
    age <= 12 ? 0.42 :
    age <= 16 ? 0.32 :
    age <= 20 ? 0.24 :
    age <= 25 ? 0.18 :
    0.15

  const floorMillion =
    cc <= 125 ? 1.5 :
    cc <= 400 ? 2 :
    cc <= 700 ? 3 :
    cc <= 1000 ? 4 :
    5

  const priceMillion = Math.max(floorMillion, baseMillion * ageFactor)
  return Math.round((priceMillion * 1000000) / 500000) * 500000
}

export const BIKES = RAW_BIKES.map(bike => ({
  ...bike,
  priceKRW: isKnownNumber(bike.priceKRW) && bike.priceKRW > 0
    ? bike.priceKRW
    : estimateReferencePriceKRW(bike),
}))

export const ALL_CATEGORIES = [
  '미니/입문', '스쿠터', '네이키드', '스포츠',
  '클래식', '어드벤처', '크루저', '투어러', '슈퍼모토',
]




