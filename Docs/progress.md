# AUTObyAUTO 개발 진행 현황

> 마지막 업데이트: 2026년 6월 16일 (3차 DEV 세션)

---

## 프로젝트 개요

오토바이 기종 변경·구매를 고민하는 사람들을 위한 **모델별 상세 정보 비교 웹 서비스**.  
중고 매물 검색이 아닌, 바이크 모델 자체의 제원과 특성을 알기 쉽게 보여주는 것이 목표.

### 타깃 사용자
- 처음 오토바이를 사려는 입문자 (어떤 기종이 내 조건에 맞는지 모름)
- 기종 변경을 고민하는 라이더 (현재 차와 후보 차를 비교)
- 중고 매물을 보며 연식별 차이가 궁금한 구매자

---

## 기술 스택

| 항목 | 선택 |
|------|------|
| 프레임워크 | React 18 |
| 빌드 도구 | Vite 5 |
| 차트 | Recharts 2 |
| 스타일 | CSS-in-JS (인라인 CSS 문자열) |
| 언어 | JavaScript (JSX) |
| 버전 관리 | Git / GitHub (public repository) |

---

## 파일 구조

```
auto-by-auto/
├── Docs/
│   ├── progress.md          ← 이 파일
│   └── Dev Note.md          ← 버전별 변경 이력
├── src/
│   ├── main.jsx             ← React 진입점
│   ├── App.jsx              ← 메인 UI 컴포넌트 (필터, 카드 뷰, 상세 뷰, 비교 뷰)
│   └── data/
│       ├── bikes.js         ← 바이크 제원 데이터 (BRANDS, BIKES, ALL_CATEGORIES)
│       └── specs.js         ← 제원 항목 정의, 색상, 포맷터
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── ABA prototype 1.jsx      ← 1차 프로토타입 (보관용)
└── ABA prototype 2.jsx      ← 2차 프로토타입 (보관용)
```

---

## 개발 단계별 진행 현황

### ✅ 완료

#### 1단계 — UI 프로토타입 (ABA prototype 1.jsx)
- 다크 테마 UI 설계 (배경 #121214, 포인트 #FF5C00)
- 최대 3대 동시 비교 기능
- 레이더 차트 (성능 균형 시각화, 0~100 정규화)
- 제원 비교 표 9항목 (항목별 우위·열위 하이라이트)
- 샘플 데이터 8개 기종

#### 2단계 — 탐색 구조 개편 (ABA prototype 2.jsx)
- 브랜드 → 모델 → 연식 드릴다운 탐색 구조
- 좌측 사이드바 + 우측 비교 영역 2컬럼 레이아웃
- 보조 필터 4종 (장르, 면허, 배기량 슬라이더, 시트고 슬라이더)
- 샘플 데이터 18개 기종 (브랜드 5개)

#### 3단계 — 프로젝트 구조화 (1차 DEV 세션)
- Vite + React 개발 환경 구축
- 데이터 분리: `src/data/bikes.js`, `src/data/specs.js`
- `.gitignore` 설정, GitHub public repository 연동

#### 4단계 — 기능 고도화 (2차 DEV 세션)
- **기종 데이터 확대**: 18개 → 49개, 브랜드 5개 → 11개 (Suzuki, KTM, Ducati, Triumph, Royal Enfield, Vespa 추가)
- **검색 기능**: 사이드바 상단 실시간 검색창 (브랜드명·모델명)
- **배기량 필터 개선**: 슬라이더 → 카테고리 칩 (125cc / 쿼터급 / 미들급 / 리터급 / 오버리터급)
- **체형 기반 시트고 필터**: 키 슬라이더(150~195cm) + 다리 길이 버튼(짧은편/보통/긴편) → 인심 자동 계산 → 권장 시트고 필터 적용
- **탐색/비교 탭 분리**: 메인 영역을 탐색 탭(카드 그리드)과 비교 탭(차트+표)으로 분리
- **카드 뷰**: 카테고리별 색상 그라디언트, 편안/적합/발끝 적합 뱃지, `+ 비교` 버튼
- **fit 뱃지**: 사이드바 연식 행과 카드 모두에 적합 등급 표시

#### 5단계 — 단일 기종 상세 탭 추가 (3차 DEV 세션)
- **상세 탭 추가**: 메인 뷰 모드를 `탐색 / 상세 / 비교` 3개 탭 구조로 확장
- **단일 기종 선택 상태 추가**: `selectedBikeId` 기반으로 현재 상세 표시 대상을 관리
- **탐색 → 상세 흐름**: 탐색 카드 클릭 시 선택한 기종의 상세 탭으로 이동
- **비교 기능 분리 유지**: 카드 내부 `+ 비교` 버튼은 상세 이동 없이 비교 목록만 갱신하도록 이벤트 분리
- **사이드바 연식 선택 개선**: 브랜드 → 모델 → 연식 목록에서 연식을 누르면 해당 기종 상세 화면으로 이동
- **상세 화면 구성**: 브랜드/모델/연식/면허/가격, 체형 기준 적합도, 9개 핵심 제원, 동일 모델 연식, 비슷한 기종 추천 표시
- **상세 화면 비교 연동**: 상세 탭에서도 `비교에 추가 / 비교에서 제거` 가능
- **반응형 보완**: 상세 탭의 히어로 영역, 제원 그리드, 액션 버튼이 모바일에서 1열로 정리되도록 CSS 추가
- **검증 완료**: `npm.cmd run build` 성공, 로컬 브라우저에서 상세 탭 전환 및 비교 버튼 동작 확인

---

## 현재 데이터 현황

> ⚠️ 현재 데이터는 AI 학습 데이터 기반 추정값으로, 실제 제조사 공식 스펙과 다를 수 있음.  
> 프로토타입 단계이며, 서비스화 시 공식 스펙시트 기반 검증 필요.

### 등록된 브랜드 (11개)
Honda / Yamaha / Kawasaki / BMW Motorrad / Harley-Davidson / Suzuki / KTM / Ducati / Triumph / Royal Enfield / Vespa

### 등록된 기종 (66개)

| 브랜드 | 모델 | 연식 | 카테고리 |
|--------|------|------|----------|
| Honda | GROM | 2017, 2022 | 미니/입문 |
| Honda | PCX 125 | 2021, 2023 | 스쿠터 |
| Honda | CBR300R | 2022 | 스포츠 |
| Honda | Rebel 500 | 2023 | 크루저 |
| Honda | CB500X | 2023 | 어드벤처 |
| Honda | CB650R | 2023 | 네이키드 |
| Honda | NC750X | 2023 | 어드벤처 |
| Honda | Gold Wing | 2021 | 투어러 |
| Yamaha | NMAX 125 | 2023 | 스쿠터 |
| Yamaha | XMAX 300 | 2023 | 스쿠터 |
| Yamaha | YZF-R3 | 2023 | 스포츠 |
| Yamaha | MT-03 | 2020, 2023 | 네이키드 |
| Yamaha | XSR700 | 2022 | 클래식 |
| Yamaha | Tenere 700 | 2023 | 어드벤처 |
| Yamaha | Tracer 9 GT | 2022 | 투어러 |
| Kawasaki | Z125 PRO | 2022, 2023 | 미니/입문 |
| Kawasaki | Ninja 500 | 2025 | 스포츠 |
| Kawasaki | Ninja 650 | 2022 | 스포츠 |
| Kawasaki | Eliminator 500 | 2023 | 크루저 |
| Kawasaki | Ninja 400 | 2023 | 스포츠 |
| Kawasaki | Ninja ZX-4RR | 2023 | 스포츠 |
| Kawasaki | Z650 | 2023 | 네이키드 |
| Kawasaki | Z650RS | 2022 | 클래식 |
| Kawasaki | Z900 | 2019, 2021, 2025 | 네이키드 |
| Kawasaki | Z900RS | 2022 | 클래식 |
| Kawasaki | Z900RS SE | 2025 | 클래식 |
| Kawasaki | Z500 | 2025 | 네이키드 |
| Kawasaki | Z1100 | 2025 | 네이키드 |
| Kawasaki | Versys 650 | 2023 | 어드벤처 |
| Kawasaki | Versys 1000 SE | 2023 | 어드벤처 |
| Kawasaki | Ninja ZX-6R | 2023, 2025 | 스포츠 |
| Kawasaki | Ninja ZX-10R | 2025 | 스포츠 |
| Kawasaki | Ninja H2 SX SE | 2022 | 투어러 |
| Kawasaki | Ninja 1100SX | 2025 | 투어러 |
| Kawasaki | Vulcan S | 2023 | 크루저 |
| Kawasaki | Eliminator | 2024 | 크루저 |
| Kawasaki | W800 | 2022 | 클래식 |
| Kawasaki | MEGURO S1 | 2025 | 클래식 |
| BMW | G310R | 2022 | 네이키드 |
| BMW | F900R | 2023 | 네이키드 |
| BMW | R1250GS | 2022 | 어드벤처 |
| BMW | S1000R | 2023 | 네이키드 |
| Harley-Davidson | Iron 883 | 2020 | 크루저 |
| Harley-Davidson | Sportster S | 2022 | 크루저 |
| Suzuki | GSX-S125 | 2023 | 미니/입문 |
| Suzuki | SV650 | 2023 | 네이키드 |
| Suzuki | V-Strom 650 | 2023 | 어드벤처 |
| Suzuki | Burgman 400 | 2023 | 스쿠터 |
| Suzuki | GSX-8S | 2023 | 네이키드 |
| KTM | Duke 390 | 2023 | 네이키드 |
| KTM | Adventure 390 | 2023 | 어드벤처 |
| KTM | Duke 790 | 2023 | 네이키드 |
| Ducati | Scrambler Icon | 2023 | 클래식 |
| Ducati | Monster 937 | 2023 | 네이키드 |
| Triumph | Trident 660 | 2023 | 네이키드 |
| Triumph | Street Scrambler | 2022 | 클래식 |
| Royal Enfield | Meteor 350 | 2023 | 크루저 |
| Royal Enfield | Himalayan 411 | 2023 | 어드벤처 |
| Vespa | Primavera 125 | 2023 | 스쿠터 |
| Vespa | GTS 300 HPE | 2023 | 스쿠터 |

### 제원 항목 (9종)
배기량 / 최고출력 / 토크 / 공차중량 / 시트고 / 연비 / 연료탱크 / 최고속도 / 중고시세

---

## 다음 단계 계획

### 단기 (바로 가능)
- [ ] 실제 바이크 이미지 URL 수집 및 bikes.js에 추가
- [ ] Vercel 배포 (GitHub 연동으로 빠르게 가능)
- [ ] 상세 탭 문구/정보 우선순위 사용자 테스트

### 중기
- [ ] 데이터 정확성 검증 (제조사 공식 스펙시트 대조)
- [ ] 기종 수 추가 확대 (국내 인기 모델 위주)
- [ ] 모바일 UI 세부 QA 및 터치 동선 개선
- [ ] 상세 탭에서 같은 카테고리/비슷한 배기량 추천 기준 고도화

### 장기 (서비스화)
- [ ] 백엔드 / 데이터베이스 연동
- [ ] 도메인 구입 및 연결
- [ ] 제원 데이터 확보 전략 결정 (직접 입력 vs 사용자 기여)

---

## 핵심 과제

서비스 성패를 가르는 핵심은 **제원 데이터를 어떻게 채우고 신뢰성을 확보하느냐**입니다.  
기능 구현보다 데이터 확보와 정확성이 더 큰 과제이며, 별도 전략 수립이 필요합니다.

---

## 로컬 개발 환경 실행

```bash
cd ~/Documents/Github/auto-by-auto
npm run dev
# → http://localhost:5173
```
