# DEV NOTE

## version 0.1.0 — 1차 UI 프로토타입
> 파일: `ABA prototype 1.jsx`

- 다크 테마 UI 설계 (배경 #121214, 포인트 #FF5C00)
- 최대 3대 동시 비교 기능
- 레이더 차트 (성능 균형 시각화, 0~100 정규화)
- 제원 비교 표 9항목 (항목별 우위·열위 하이라이트)
- 샘플 데이터 8개 기종 (단일 파일)

## version 0.2.0 — 탐색 구조 개편
> 파일: `ABA prototype 2.jsx`
****
- 브랜드 → 모델 → 연식 드릴다운 탐색 구조 도입
- 좌측 사이드바 + 우측 비교 영역 2컬럼 레이아웃
- 보조 필터 4종 (장르, 면허, 배기량 슬라이더, 시트고 슬라이더)
- 데이터 18개 기종으로 확장 (브랜드 5개)

## version 0.3.0 — Vite 프로젝트 구조화
> 1차 DEV 세션 | 파일: `src/App.jsx`, `src/data/bikes.js`, `src/data/specs.js`

- Vite + React 개발 환경 구축 (npm run dev → localhost:5173)
- 데이터/로직 단일 파일에서 분리 (bikes.js, specs.js)
- .gitignore 설정, GitHub public repository 연동

## version 0.4.0 — 기능 고도화
> 2차 DEV 세션 | 2026-06-15

- 기종 데이터: 18개 → 49개, 브랜드 5개 → 11개 (Suzuki, KTM, Ducati, Triumph, Royal Enfield, Vespa 추가)
- 검색 기능: 사이드바 실시간 검색창 (브랜드명·모델명)
- 배기량 필터: 슬라이더 → 카테고리 칩 (125cc / 쿼터급 / 미들급 / 리터급 / 오버리터급)
- 체형 기반 시트고 필터: 키 슬라이더 + 다리 길이 선택 → 인심 자동 계산 → 적합 기종 필터링
- 탐색/비교 탭 분리: 카드 그리드 탐색 뷰 + 레이더 차트·제원 표 비교 뷰
- fit 뱃지: 편안 / 적합 / 발끝 등급 표시 (카드 및 사이드바 연식 행)
- 이미지 플레이스홀더: 카테고리별 색상 그라디언트 + 🏍, image 필드 추가 시 실제 이미지 표시

## version 0.5.0 — 단일 기종 상세 탭
> 3차 DEV 세션 | 2026-06-16 | 파일: `src/App.jsx`

- 뷰 구조 확장: `탐색 / 비교` 2탭 → `탐색 / 상세 / 비교` 3탭
- 단일 기종 선택 상태 추가: `selectedBikeId`, `selectedBike`, `selectedBrand`
- 탐색 카드 클릭 시 해당 기종의 상세 탭으로 이동
- 카드 내부 `+ 비교` 버튼은 `event.stopPropagation()`으로 상세 이동과 분리
- 사이드바 브랜드 → 모델 → 연식 목록에서 연식 클릭 시 상세 탭으로 이동
- 상세 화면 추가:
  - 브랜드/모델/연식/면허/가격 요약
  - 체형 기준 적합도 표시
  - 9개 핵심 제원 카드
  - 동일 모델 다른 연식 선택
  - 같은 카테고리 내 비슷한 배기량 기종 추천
- 상세 화면에서 `비교에 추가 / 비교에서 제거` 가능
- 상세 탭 모바일 반응형 CSS 추가
- 검증:
  - `npm.cmd run build` 성공
  - 로컬 브라우저에서 상세 탭 전환 확인
  - 카드의 `+ 비교` 버튼이 상세 탭으로 이동하지 않고 비교 목록만 갱신하는지 확인

## version 0.6.0 — Yamaha 데이터 확장
> 2026-06-17 | 파일: `src/data/bikes.js`, `public/bikes/yamaha/*`

- Yamaha 데이터 집중 확장:
  - 스포츠: YZF-R125, YZF-R3, YZF-R6, YZF-R7, YZF-R1, YZF-R1M
  - 네이키드: MT-01, MT-03, MT-07, MT-09, MT-10, MT-125, MT-15, MT-25
  - 스쿠터: NMAX, XMAX, TMAX, Aerox, Tricity
  - 클래식: XSR125, XSR700, XSR900, XSR900 GP
  - 어드벤처: XT225, XT250, XT660Z Tenere, Tenere 700, Super Tenere ES
  - 투어러: Tracer 700, Tracer 9 GT, Niken GT, FJR1300A
  - 크루저: Bolt, V Star 950, V Star 1300, VMAX
- R1/R1M은 주요 세대별 연식 데이터를 추가:
  - YZF-R1: 1998, 2002, 2004, 2007, 2009, 2012, 2015, 2020, 2025
  - YZF-R1M: 2015, 2020, 2025
- 공개 스펙 기준으로 배기량, 출력, 토크, 공차중량, 시트고, 탱크 용량을 우선 입력
- 출처가 모호하거나 공식 제원에서 빠진 최고속도, 연비, 한국 중고시세 등은 `null` 유지
- R1/R1M 및 MT 계열 일부 이미지 에셋 추가
- 검증:
  - `npm.cmd run build` 성공
  - Vite 번들 크기 경고만 발생, 빌드 실패 없음

## version 0.7.0 — BMW/Ducati 데이터 확장 및 이미지 연결
> 2026-06-17 | 파일: `src/data/bikes.js`, `public/bikes/bmw/*`, `public/bikes/ducati/*`, `public/bikes/yamaha/*`

- BMW Motorrad 데이터 확장:
  - 스포츠: G 310 RR, S 1000 RR, M 1000 RR
  - 네이키드: G 310 R, F 900 R, S 1000 R, M 1000 R, R 12 nineT, R 1300 R
  - 기존 R1250GS 포함 BMW 총 28개 등록
- BMW 주요 모델은 연식별 데이터를 추가:
  - S 1000 RR: 2010, 2012, 2015, 2019, 2023, 2025
  - M 1000 RR: 2021, 2023, 2025
  - S 1000 R: 2014, 2017, 2021, 2023, 2025
- Ducati 데이터 확장:
  - Hypermotard 698 Mono
  - Panigale V2 / V2 S / V4 / V4 S / V4 R / V4 Tricolore
  - Streetfighter V4, Multistrada V2, Multistrada V4, Diavel V4
  - 기존 Scrambler Icon, Monster 937 포함 Ducati 총 13개 등록
- 이미지 연결:
  - BMW 등록 기종 28/28개 `image` 필드 연결 완료
  - Ducati 등록 기종 13/13개 `image` 필드 연결 완료
  - Yamaha는 추가 이미지 파일 반영으로 58/62개 연결 상태
- Yamaha 일부 제원 보강:
  - 다수 모델의 연비, 중량, 이미지 경로를 `null`에서 실제 값/에셋 경로로 보강
  - 공식 확인이 어려운 한국 중고시세 및 일부 최고속도는 `null` 유지

## version 0.8.0 — 예정
- [ ] Yamaha 미연결 이미지 4종 수집 및 `image` 필드 연결
- [ ] Yamaha/BMW/Ducati 확장 데이터 공식 스펙시트 기준 2차 검수
- [ ] Suzuki, KTM, Triumph 등 남은 브랜드도 Yamaha/BMW/Ducati와 같은 방식으로 연식별/계열별 확장
- [ ] Vercel 배포 및 도메인 연결
- [ ] 모바일 UI 세부 QA 및 터치 동선 개선
- [ ] 상세 탭 추천 기준 고도화
