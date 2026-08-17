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
- 출처가 모호하거나 공식 제원에서 빠진 최고속도, 연비, 한국 중고시세 등은 `null` 유지(당시 기준)
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
  - 공식 확인이 어려운 한국 중고시세 및 일부 최고속도는 `null` 유지(당시 기준)

## version 0.8.0 — 가격 표시 기준 변경 및 신규 브랜드 확장
> 2026-06-18 | 파일: `src/App.jsx`, `src/data/bikes.js`, `package.json`, `package-lock.json`

- 가격 기준 변경:
  - 매물 기반 중고시세 대신 제원 기반 참조 가격대를 사용
  - `priceKRW`가 비어 있는 모델은 배기량, 출력, 카테고리, 브랜드, 연식으로 참조값 자동 추정
  - UI 표기는 정확한 금액이 아니라 500만원 단위 눈금의 넓은 `a - b만원대` 형식으로 통일
- 신규 브랜드 4개 추가:
  - Indian Motorcycle, Aprilia, Husqvarna, MV Agusta
- 신규 대표 기종 17개 추가:
  - Indian Motorcycle: Scout Bobber, FTR 1200, Chief Dark Horse, Challenger Dark Horse
  - Aprilia: RS 457, RS 660, Tuono 660, Tuareg 660, RSV4 Factory
  - Husqvarna: Svartpilen 401, Vitpilen 401, Norden 901, 701 Supermoto
  - MV Agusta: Brutale 800 RR, Dragster 800 RR, Superveloce 800, Turismo Veloce 800
- 신규 브랜드 로고/이미지는 아직 미연결:
  - `logo: null`, `image: null` 상태로 두고 기존 fallback UI 사용
  - `src/App.jsx`의 `BRAND_MARKS`에 텍스트 마크 추가
- 버전 동기화:
  - 화면 표시 버전 `v0.8.0`
  - `package.json`, `package-lock.json` 버전 `0.8.0`
- 검증:
  - `npm.cmd run build` 성공
  - Vite 번들 크기 경고만 발생, 빌드 실패 없음

## version 0.8.1 — 이미지 에셋 연결 및 데이터 보강
> 2026-06-19 | 파일: `src/App.jsx`, `src/data/bikes.js`, `public/bikes/*`, `public/logos/*`, `package.json`, `package-lock.json`

- 신규 브랜드 이미지/로고 연결:
  - Indian Motorcycle 4개, Aprilia 5개, Husqvarna 4개, MV Agusta 4개 대표 기종 이미지 연결 완료
  - `public/logos/`에 Indian, Aprilia, Husqvarna, MV Agusta 로고 에셋 추가
  - `BRANDS`의 신규 브랜드 `logo` 필드를 실제 에셋 경로로 변경
- Yamaha 이미지 보강:
  - XT225 Serow, XT250, XT660Z Tenere 이미지 연결
  - Yamaha 이미지 연결 상태를 58/62개에서 69/70개로 개선
  - 남은 미연결 항목은 XMAX 250 Tech MAX 1개
- Yamaha Virago 계열 추가:
  - Virago 125, 250, 535, 700, 750, 920, 1000, 1100 주요 연식 데이터 추가
  - 각 Virago 항목 이미지 에셋 연결
- Honda 650 계열 보강:
  - CB650R 2019/2024, CBR650R 2019/2021/2024 데이터 추가
  - CB650R/CBR650R 이미지 에셋 연결 완료
- 상세 탭 UI 보완:
  - 비슷한 기종 카드 클릭 시 상세 화면 상단으로 스크롤
  - 카드/상세 화면 브랜드 마크 크기와 여백 조정
- Firebase 의존성 추가:
  - `firebase` 패키지를 dependencies에 추가

## version 0.8.2 — 초심자 탐색 태그 및 모바일 필터 UX 개선
> 2026-06-22 | 파일: `src/App.jsx`, `package.json`, `package-lock.json`, `Docs/progress.md`, `Docs/Dev Note.md`

- 쉬운 찾기 태그 추가:
  - `입문 친화`, `편안함`, `가벼움`, `속도감`, `묵직함`, `날렵함`
  - 배기량, 시트고, 중량, 출력, 카테고리 기준으로 태그를 파생 계산
  - `bikes.js` 원본 데이터에는 태그 필드를 직접 추가하지 않아 데이터 관리 부담을 늘리지 않음
- 초심자용 필터 추가:
  - 기존 브랜드/장르/면허/배기량/체형 필터를 유지
  - 쉬운 찾기 태그는 여러 개 선택 시 하나라도 맞는 기종을 보여주는 OR 방식으로 동작
- 카드 태그 표시 개선:
  - 카드에 쉬운 찾기 태그를 최대 3개 표시
  - 태그별 고정 색상 적용: 입문 친화(오렌지), 편안함(민트), 가벼움(하늘색), 속도감(코랄), 묵직함(보라), 날렵함(노랑)
- 모바일 필터 UX 개선:
  - 모바일 첫 화면에서 긴 필터 영역이 목록을 밀어내지 않도록 필터 영역을 기본 접힘 처리
  - `쉬운 찾기`, 상세 필터, 브랜드/모델/연식 드릴다운을 하단 시트형 팝업으로 전환
  - 사이트 핵심 요소인 `내 체형`/키 필터는 모바일에서도 팝업 밖에 기본 노출
  - 하단 시트는 닫기 버튼과 배경 클릭으로 닫을 수 있음
- 버전 동기화:
  - 화면 표시 버전 `v0.8.2`
  - `package.json`, `package-lock.json` 버전 `0.8.2`
- 검증:
  - `npm.cmd run build` 성공
  - 390×844 모바일 뷰포트에서 필터 닫힘/열림/닫기 동작 확인
  - 브라우저 콘솔 에러 없음

## version 0.8.3 — Vercel 배포 및 Google Search Console SEO 기본 설정
> 2026-06-22 | 파일: `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `public/googlec0e1744f23d9c3c1.html`, `Docs/SEO.md`, `Docs/progress.md`, `Docs/Dev Note.md`

- Vercel 배포 주소 확인:
  - 현재 운영 URL: `https://auto-by-auto.vercel.app/`
- Google Search Console URL 접두어 속성 인증:
  - 속성: `https://auto-by-auto.vercel.app/`
  - `vercel.app` 기본 도메인은 DNS TXT 레코드 설정이 불가하므로 HTML 파일 인증 방식 사용
  - 인증 파일 `public/googlec0e1744f23d9c3c1.html` 추가
- 기본 SEO 메타태그 추가:
  - title: `오토바이오토 AUTObyAUTO - 오토바이 기종 비교`
  - description, keywords, robots, theme-color 추가
- 공유 미리보기 메타태그 추가:
  - Open Graph: type, url, locale, site_name, title, description, image
  - Twitter card: card, title, description, image
- 대표 URL 설정:
  - canonical URL을 `https://auto-by-auto.vercel.app/`로 설정
- 크롤링/색인 파일 추가:
  - `public/robots.txt`에 전체 크롤링 허용 및 sitemap 위치 추가
  - `public/sitemap.xml`에 홈페이지 URL 등록
  - `public/site.webmanifest`에 사이트 이름, 짧은 이름, 언어, 테마 색상 등록
- Search Console 운영 상태:
  - 소유권 인증 완료
  - `/robots.txt`, `/sitemap.xml` 배포 주소에서 브라우저 확인 완료
  - sitemap 제출 후 `가져올 수 없음` 상태가 잠시 표시될 수 있으며, 파일이 브라우저에서 열리면 Google 처리 지연 가능성이 높음
- 문서화:
  - `Docs/SEO.md` 추가
  - 현재 적용 내역, Search Console 절차, 커스텀 도메인 전환 체크리스트, 향후 SEO 개선 방향 정리
- 검증:
  - `npm.cmd run build` 성공
  - Vite 번들 크기 경고만 발생, 빌드 실패 없음

## version 0.9.1 — 체형 입력 UX 및 연비 데이터 보강
> 2026-06-22 | 파일: `src/App.jsx`, `src/data/bikes.js`, `package.json`, `package-lock.json`, `Docs/progress.md`, `Docs/Dev Note.md`

- 체형 기반 시트고 필터 보정:
  - 인심 추정 비율을 `짧은 편 0.42 / 보통 0.45 / 긴 편 0.48`로 조정
  - 기존 대비 170cm 보통 기준 추정 인심을 약 34mm 낮춰 대중적인 체감에 맞춤
- 키 입력 UX 개선:
  - 키 슬라이더 유지
  - 키 표시 영역을 숫자 입력창으로 전환해 키보드 직접 입력 지원
  - 입력값은 150~195cm 범위로 보정
- 연비 데이터 보강:
  - `fuelEconomy: null`이던 51개 기종에 유사 제원 기반 추정 연비 주입
  - 연비 6단계 등급 계산에서 정보 없음으로 빠지는 기종 제거
- 버전 동기화:
  - 화면 표시 버전 `v0.9.1`
  - `package.json`, `package-lock.json` 버전 `0.9.1`
- 검증:
  - `fuelEconomy` 누락 0개 확인
  - `npm.cmd run build` 성공
  - Vite 번들 크기 경고만 발생, 빌드 실패 없음

## version 0.9.2 — Harley-Davidson 대표/세대 변화 기종 확장 및 이미지 연결
> 2026-06-24 | 파일: `src/data/bikes.js`, `public/bikes/harley/*`, `Docs/progress.md`, `Docs/Dev Note.md`, `Docs/bike-image-checklist.md`, `src/App.jsx`, `package.json`, `package-lock.json`

- Harley-Davidson 데이터 확장:
  - 기존 Iron 883, Sportster S 포함 Harley-Davidson 총 23개 등록
  - 최신 대표 기종 추가: Nightster Special, Street Bob, Low Rider S, Low Rider ST, Heritage Classic, Fat Boy, Breakout, Street Glide, Road Glide, Road King Special, Pan America 1250 Special
  - 주요 변화 연식 추가: 2018 Softail 통합 플랫폼, 2021 Revolution Max 계열, 2022 Low Rider 117ci/ST 전환, 2024 Street/Road Glide 대개편
- Harley-Davidson 이미지 연결:
  - 등록 기종 23/23개 `image` 필드 연결 완료
  - 실제 파일 확장자와 불일치하던 `fatboy-2018`, `breakout-2018`, `lowriderst-2022`, `streetglide-2024`, `roadkingspecial-2025`, `panamerica1250special-2026` 경로 정리
  - `nightsterspeical-2026.jpg`는 현재 파일명 오타를 그대로 따라 연결
- BMW Adventure/XR 계열 보강 반영:
  - F 900 XR, S 1000 XR, F 900 GS, F 900 GS Adventure, R 1300 GS 추가
  - F 900 XR/S 1000 XR은 1년 단위 중복 대신 유의미한 변화 연식만 유지
- 데이터 현황 갱신:
  - 전체 등록 기종 372개 기준으로 브랜드별 대수와 이미지 연결 현황 재정리
- 버전 동기화:
  - 화면 표시 버전 `v0.9.2`
  - `package.json`, `package-lock.json` 버전 `0.9.2`
- 검증:
  - Harley-Davidson 이미지 경로 누락 0개 확인
  - `npm.cmd run build` 성공
  - Vite 번들 크기 경고만 발생, 빌드 실패 없음

## version 0.9.3 — sitemap 자동 생성 및 사이트 도메인 상수 단일화
> 2026-08-17 | 브랜치: `feature/seo` | 파일: `scripts/generate-sitemap.mjs`, `src/lib/siteConfig.js`, `src/lib/seo.js`, `package.json`, `package-lock.json`, `src/components/Sidebar.jsx`, `public/sitemap.xml`, `.gitattributes`, `Docs/SEO.md`, `Docs/Dev Note.md`

- 사이트 도메인 상수 단일화:
  - `src/lib/siteConfig.js` 신설, `SITE_URL`과 `toAbsoluteUrl()`을 한 곳에서 정의
  - `src/lib/seo.js`의 도메인 하드코딩 제거, `siteConfig`에서 가져다 사용
  - 이미지 없는 바이크의 기본 공유 이미지 대체 로직을 `toShareImageUrl()`로 분리 (동작 변화 없음)
  - 커스텀 도메인 이전 시 canonical과 sitemap이 서로 다른 주소를 가리키는 사고를 구조적으로 차단
- sitemap 생성 스크립트 추가:
  - `scripts/generate-sitemap.mjs` 신설, `BIKES` 목록에서 상세 URL 484개 생성
  - 화면 링크와 동일한 `getBikePath()`를 재사용해 sitemap 주소와 앱 링크의 불일치 차단
  - 홈 1개 포함 총 485개 URL을 `public/sitemap.xml`에 기록
  - 경로 기준 정렬 출력으로 `bikes.js` 항목 순서가 바뀌어도 결과 파일은 동일 (결정적 출력)
  - `changefreq`/`priority` 제외, `lastmod`는 홈에만 상수로 관리
  - URL 45,000개 초과 시 경고, 규격 상한 50,000개 초과 시 빌드 중단
- 검증 게이트 적용:
  - 중복 URL, `BRANDS`에 없는 브랜드, 빈 `id` 검사
  - 생성한 URL을 `resolveAppRoute()`에 되돌려 넣어 실제로 열리는지 역검증
  - 오류를 첫 건에서 멈추지 않고 전부 모아 출력, `BIKES` 순번(`#0` 형식) 표기
  - 검증 실패 시 파일을 쓰지 않고 종료 코드 1 반환 → 기존 sitemap 보존
- 빌드 파이프라인 연결:
  - `npm run sitemap` 스크립트 추가 (생성 단계만 단독 실행용)
  - `prebuild` 훅으로 `vite build` 이전에 자동 실행
  - 생성 실패 시 `vite build`가 시작되지 않아 잘못된 sitemap이 배포될 경로 차단
- 줄바꿈 처리:
  - `.gitattributes`에 `public/sitemap.xml text eol=lf` 추가
  - `core.autocrlf=true` 환경에서 생성할 때마다 뜨던 줄바꿈 경고 제거
- 검증:
  - 불량 데이터 3종 주입 시 3건 모두 검출, 종료 코드 1, 기존 sitemap 보존 확인
  - 불량 상태에서 `npm run build` 시 `dist` 미생성 확인
  - 두 번 연속 실행 시 파일 해시 동일 확인
  - XML 파싱 성공, 고유 `<loc>` 485개 확인
  - `npm run preview`에서 `/sitemap.xml` 200 응답, 무작위 상세 URL 10개 전부 200 확인
  - `dist/sitemap.xml`과 `public/sitemap.xml` 해시 일치, `robots.txt`의 Sitemap 주소 일치 확인
  - `npm.cmd run build` 성공, `git diff --check` 통과
- 버전 동기화:
  - 화면 표시 버전 `v0.9.3`
  - `package.json`, `package-lock.json` 버전 `0.9.3`
- 남은 작업:
  - main 머지 및 배포 후 Search Console에 sitemap 재제출
  - 상세 페이지 초기 HTML 프리렌더링 (SEO 우선순위 6)

## version 0.9.4 — 브랜드 신호 보강 (JSON-LD, 파비콘, OG 대표 이미지)
> 2026-08-17 | 브랜치: `feature/seo` | 파일: `index.html`, `public/favicon.svg`, `public/favicon-192.png`, `public/favicon-512.png`, `public/apple-touch-icon.png`, `public/og-image.png`, `public/site.webmanifest`, `scripts/og-image.html`, `src/App.jsx`, `src/App.css`, `src/lib/seo.js`, `package.json`, `package-lock.json`, `src/components/Sidebar.jsx`, `Docs/SEO.md`, `Docs/progress.md`, `Docs/Dev Note.md`

- `WebSite` 구조화 데이터 추가:
  - `index.html`에 사이트 이름과 별칭(`AUTObyAUTO`, `오토바이 오토`)을 JSON-LD로 삽입
  - 정적 HTML에 두어 JavaScript 실행 없이도 크롤러가 읽을 수 있게 처리
  - `potentialAction` 검색창은 제외 (Google이 2024년 지원 중단)
- 브랜드 표기 정리:
  - 홈 대표 영역 문구를 `AUTO BY AUTO` → `오토바이오토 AUTObyAUTO`로 변경해 브랜드명을 본문 텍스트로 노출
  - `.main-eyebrow`의 `text-transform: uppercase` 제거 — 그대로 두면 `AUTObyAUTO`가 `AUTOBYAUTO`로 렌더링됨
  - H1 자체는 기존 카피를 유지
- 전용 파비콘 추가 (기존에는 아이콘이 아예 없었음):
  - `favicon.svg` 원본 신설. 오렌지(`#FF5C00`) 라운드 사각 + 흰 `A`
  - `A`를 폰트 대신 도형(path)으로 그려 환경별 렌더링 차이 제거
  - `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png`(180×180) 생성
  - `apple-touch-icon`만 모서리를 깎지 않음 — iOS가 자체 마스킹하므로 이중으로 깎이는 것을 방지
  - `index.html`에 `icon`, `apple-touch-icon` 링크 추가
  - `site.webmanifest`에 `icons` 배열 신규 추가
- OG 대표 이미지 제작:
  - `og-image.png`(1200×630) 신설. 다크 배경 + 워드마크 + 태그라인 + 제원 칩 + 도메인
  - 원본 템플릿을 `scripts/og-image.html`로 보관 (빌드 미포함)
  - `index.html`의 `og:image`/`twitter:image`를 CBR650R 사진에서 대표 이미지로 교체
  - `og:image:width`, `og:image:height`, `og:image:alt` 추가
  - `src/lib/seo.js`의 기본 공유 이미지를 교체 — 이미지 없는 바이크 3개의 폴백도 함께 정정
- 버전 동기화:
  - 화면 표시 버전 `v0.9.4`
  - `package.json`, `package-lock.json` 버전 `0.9.4`
- 검증:
  - JSON-LD 파싱 및 `site.webmanifest` JSON 파싱 확인
  - 파비콘 16px 축소 후 확대 확인 — `A` 형태 판독 가능
  - `dist`에 아이콘 4종과 OG 이미지 복사, `dist/index.html`에 메타 반영 확인
  - 브라우저에서 탭 파비콘, 홈 문구 대소문자, 상세 진입 시 title 변경, 뒤로 가기 동작 확인
  - `npm.cmd run build` 성공, `git diff --check` 통과

## version 0.9.5 — 예정
- [ ] Yamaha/BMW/Ducati/Harley-Davidson/신규 브랜드 확장 데이터 공식 스펙시트 기준 2차 검수
- [ ] Suzuki, KTM, Triumph, Royal Enfield, Vespa 등 남은 브랜드도 연식별/계열별 확장
- [ ] Search Console sitemap 제출 상태 `성공` 확인 및 URL 색인 요청
- [ ] 커스텀 도메인 구입 및 연결
- [ ] 모바일 UI 세부 QA 및 터치 동선 추가 개선
- [ ] 쉬운 찾기 태그 기준 및 색상 사용자 테스트
- [ ] 상세 탭 추천 기준 고도화

