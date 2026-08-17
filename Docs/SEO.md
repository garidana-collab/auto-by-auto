# AUTObyAUTO SEO Guide

> 마지막 업데이트: 2026년 8월 17일
> 현재 배포 URL: `https://auto-by-auto.vercel.app/`

---

## 목표

Google에서 `오토바이오토`, `AUTObyAUTO`, `오토바이 기종 비교`, `바이크 제원 비교` 같은 검색어로 사이트를 발견할 수 있게 하는 것이 목표입니다.

SEO는 한 번 설정한다고 즉시 1위에 뜨는 작업이 아니라, 검색엔진이 사이트를 크롤링하고 색인할 수 있게 만들고, 페이지 제목/설명/콘텐츠 신호를 꾸준히 명확하게 쌓는 작업입니다.

---

## 지금 실질적으로 진행할 작업

현재 기본 메타태그, `robots.txt`, 홈페이지 sitemap, Search Console 인증까지는 적용되어 있습니다. 다음 우선순위는 **484개 바이크 상세 화면을 검색엔진이 각각 발견하고 색인할 수 있는 독립 페이지로 만드는 것**입니다.

단순히 브라우저 주소만 변경해서는 충분하지 않습니다. 고유 URL, 직접 접속, 실제 링크, 페이지별 메타데이터, sitemap을 한 묶음으로 구현해야 합니다.

### 우선순위 1. 바이크별 고유 URL 만들기

> **완료 · 2026년 7월 16일**

완료 결과:

| 작업 | 적용 내용 | 구현 위치 |
| --- | --- | --- |
| URL 규칙 | `/bikes/{brand}/{id}` 형식으로 주소 생성 | `src/lib/bikeRoutes.js` |
| 상세 경로 판별 | URL의 브랜드와 ID가 `BIKES`의 실제 항목과 일치하는지 검사 | `src/lib/bikeRoutes.js` |
| 상세 화면 진입 | 바이크를 선택하면 주소와 상세 화면 상태를 함께 변경 | `src/App.jsx` |
| 직접 접속·새로고침 | 현재 URL을 읽어 해당 바이크 상세 화면으로 시작 | `src/App.jsx` |
| 브라우저 탐색 | 뒤로 가기와 앞으로 가기 시 URL에 맞춰 화면 복원 | `src/App.jsx` |
| 잘못된 경로 | 존재하지 않거나 브랜드가 불일치하면 404 안내 표시 | `src/App.jsx` |
| 배포 경로 | Vercel이 상세 URL에도 앱 진입 파일을 제공하도록 rewrite 적용 | `vercel.json` |

검증 완료:

- 정상 상세 URL, 존재하지 않는 ID, 브랜드 불일치 URL 판별
- 상세 URL과 잘못된 URL의 로컬 서버 응답 확인
- `npm run build` 성공
- `git diff --check` 통과

`src/data/bikes.js`의 `brand`와 `id`를 사용해 다음 URL 규칙을 적용합니다.

```txt
/bikes/{brand}/{id}
```

예시:

```txt
/bikes/honda/cbr650r-2024
/bikes/yamaha/mt03-2023
/bikes/ducati/panigalev4-2025
```

구현 범위:

1. React Router 등으로 상세 페이지 경로를 등록합니다.
2. URL의 바이크 ID로 `BIKES`에서 해당 모델을 조회합니다.
3. 존재하지 않는 브랜드 또는 ID에는 오류 안내나 404 페이지를 표시합니다.
4. 상세 페이지에서 새로고침하거나 주소를 직접 입력해도 같은 모델이 열리게 합니다.
5. Vercel에서 상세 경로 요청을 앱 진입점으로 전달하도록 rewrite를 설정합니다.

완료 기준:

- 상세 화면을 열면 주소가 해당 모델 URL로 변경됩니다.
- 해당 주소를 새 탭에 붙여 넣거나 새로고침해도 같은 바이크가 표시됩니다.
- 브라우저 뒤로 가기와 앞으로 가기가 정상 작동합니다.
- 잘못된 ID를 입력했을 때 기본 바이크로 조용히 대체하지 않고 오류 상태를 보여줍니다.

### 우선순위 2. 클릭 요소를 검색 가능한 링크로 변경하기

> **완료 · 2026년 7월 16일**

완료 결과:

| 대상 | 변경 내용 |
| --- | --- |
| 메인 바이크 카드 | 카드의 이미지와 정보 영역을 상세 URL `<a>` 링크로 변경 |
| 사이드바 연식 | 각 연식 항목을 해당 바이크 상세 URL 링크로 변경 |
| 동일 모델 연식 | 상세 화면의 연식 칩을 상세 URL 링크로 변경 |
| 비슷한 기종 | 유사 바이크 카드를 상세 URL 링크로 변경 |
| 탐색으로 돌아가기 | 상세 화면의 복귀 동작을 `/` 링크로 변경 |

일반 클릭은 페이지를 새로 불러오지 않고 기존 React 화면 전환을 사용합니다. 새 탭 열기, `Ctrl`/`Command` 클릭, `Shift` 클릭 등은 브라우저의 기본 링크 동작을 유지합니다. 비교 추가 버튼은 상세 링크와 분리해 기존 기능을 유지합니다.

검증 완료:

- 링크 대상이 모두 `getBikePath()`의 동일한 URL 규칙을 사용하는지 확인
- 이동 대상에 실제 `href`가 포함되도록 JSX 구조 확인
- 링크 안에 비교 버튼이 중첩되지 않도록 카드 구조 분리
- `npm run build` 성공
- `git diff --check` 통과

남은 조건:

- 현재 기본 필터 때문에 첫 화면에 렌더링되지 않는 바이크는 우선순위 4의 sitemap으로 검색엔진에 전달합니다. 2026년 8월 17일 기준 484개 상세 URL이 모두 sitemap에 포함되어 있습니다.
- 초기 HTML 자체에 링크를 포함하려면 우선순위 6의 프리렌더링이 필요합니다.

현재 바이크 카드, 사이드바 연식, 연관 모델은 `onClick`으로 화면 상태만 바꿉니다. 검색봇이 상세 페이지를 발견할 수 있도록 실제 `href`를 가진 링크로 변경합니다.

```jsx
<a href={`/bikes/${bike.brand}/${bike.id}`}>
  {bike.model}
</a>
```

클라이언트 라우터를 사용하더라도 최종 HTML에는 `<a href="...">`가 있어야 합니다.

적용 대상:

- 메인 바이크 카드
- 사이드바의 연식별 모델 항목
- 상세 화면의 다른 연식 목록
- 유사 바이크 목록
- 홈 또는 탐색 화면으로 돌아가는 내비게이션

완료 기준:

- 마우스 오른쪽 버튼으로 상세 페이지를 새 탭에서 열 수 있습니다.
- 브라우저에서 렌더링된 HTML에 실제 `href`가 존재합니다.
- 모든 상세 URL이 홈페이지에서 링크를 따라 도달 가능합니다.

### 우선순위 3. 페이지별 SEO 메타데이터 만들기

> **완료 · 2026년 7월 16일**

완료 결과:

| 항목 | 적용 내용 |
| --- | --- |
| 상세 title | 연식·브랜드·모델명과 `제원·시트고·가격` 검색어 조합으로 자동 생성 |
| 상세 description | 실제 모델 데이터에 맞춰 배기량·출력·시트고·중량·가격 비교 안내 생성 |
| canonical | 각 상세 URL을 해당 페이지의 대표 주소로 지정 |
| Open Graph | 상세 URL, 제목, 설명, 바이크 이미지를 모델별로 변경 |
| Twitter Card | 제목, 설명, 바이크 이미지를 모델별로 변경 |
| 이미지 URL | 상대 이미지 경로를 배포 도메인의 전체 URL로 변환 |
| H1 | 상세 화면의 모델명을 페이지 대표 H1으로 사용 |
| 404 처리 | 잘못된 경로에는 `noindex, follow`를 적용하고 canonical 제거 |
| 홈 복원 | 탐색·비교 화면으로 돌아오면 홈페이지 메타데이터로 복원 |

구현 위치:

- 메타데이터 생성 및 `<head>` 반영: `src/lib/seo.js`
- 화면 상태에 따른 메타데이터 선택: `src/App.jsx`
- 상세 모델 H1: `src/components/DetailView.jsx`

검증 완료:

- CBR650R 샘플의 title, canonical, 전체 이미지 URL 생성 확인
- 404 메타데이터의 `noindex, follow` 확인
- `npm run build` 성공
- `git diff --check` 통과

현재 메타데이터는 React 실행 후 브라우저 `<head>`에 반영됩니다. 검색봇이 JavaScript를 실행하기 전 초기 HTML에도 모델별 값을 제공하는 작업은 우선순위 6의 프리렌더링에서 진행합니다.

상세 URL마다 모델 데이터에 맞춰 다음 정보를 변경합니다.

- `<title>`
- `meta description`
- canonical URL
- `og:url`, `og:title`, `og:description`, `og:image`
- Twitter Card 제목, 설명, 이미지
- 화면의 대표 제목(H1)

예시:

```txt
title: 2024 혼다 CBR650R 제원·시트고·가격 | 오토바이오토
description: 2024 혼다 CBR650R의 배기량, 출력, 시트고, 중량과 가격을 확인하고 비슷한 바이크와 비교해보세요.
canonical: https://auto-by-auto.vercel.app/bikes/honda/cbr650r-2024
```

주의사항:

- 모든 상세 페이지의 canonical을 홈페이지로 지정하면 안 됩니다.
- `og:image`와 `twitter:image`는 상대 경로보다 전체 URL을 사용합니다.
- 모델명, 브랜드명, 연식, 실제 표시 제원과 메타데이터가 일치해야 합니다.

### 우선순위 4. sitemap 자동 생성하기

> **완료 · 2026년 8월 17일**

완료 결과:

| 작업 | 적용 내용 | 구현 위치 |
| --- | --- | --- |
| 생성 스크립트 | `BIKES` 목록에서 상세 URL을 만들어 sitemap 작성 | `scripts/generate-sitemap.mjs` |
| URL 규칙 재사용 | 화면 링크와 같은 `getBikePath()`를 그대로 사용해 주소 불일치 차단 | `scripts/generate-sitemap.mjs` |
| 데이터 검증 | 중복 URL, `BRANDS`에 없는 브랜드, 빈 `id` 검사 | `scripts/generate-sitemap.mjs` |
| 라우터 역검증 | 생성한 URL을 `resolveAppRoute()`에 되돌려 넣어 실제로 열리는지 확인 | `scripts/generate-sitemap.mjs` |
| 빌드 중단 | 검증 실패 시 파일을 쓰지 않고 종료 코드 1로 빌드 중단 | `scripts/generate-sitemap.mjs` |
| 빌드 연결 | `prebuild` 훅으로 `vite build` 이전에 자동 실행 | `package.json` |
| 도메인 상수 단일화 | 배포 도메인을 한 파일에서 정의하고 SEO 코드와 스크립트가 공유 | `src/lib/siteConfig.js` |
| 생성 결과 | 홈 1개 + 바이크 상세 484개, 총 485개 URL | `public/sitemap.xml` |
| 줄바꿈 고정 | 생성 파일을 항상 LF로 기록하도록 지정 | `.gitattributes` |

출력 형식:

- 경로 기준으로 정렬해 출력하므로, `src/data/bikes.js`의 항목 순서가 바뀌어도 결과 파일은 그대로입니다. 커밋 diff에는 실제로 추가·삭제된 URL만 남습니다.
- `changefreq`와 `priority`는 넣지 않습니다. Google이 이 두 항목을 사용하지 않는다고 밝혔기 때문에 485줄을 채워도 얻는 것이 없습니다.
- `lastmod`는 홈에만 넣고 스크립트 상수로 관리합니다. 빌드 시각을 자동으로 넣으면 내용이 바뀌지 않았는데도 매번 수정됐다고 신고하게 되고, 커밋 diff도 계속 오염됩니다.
- URL이 45,000개를 넘으면 경고하고, 규격 상한인 50,000개를 넘으면 빌드를 중단합니다. 그때는 sitemap을 나누고 sitemap 색인 파일을 만들어야 합니다.

검증 완료:

- 불량 데이터 3종(중복 바이크, 미등록 브랜드, 빈 `id`)을 주입해 3건 모두 검출되고 종료 코드 1이 반환되는지 확인
- 검증 실패 시 기존 `public/sitemap.xml`을 덮어쓰지 않는지 확인
- 검증 실패 상태에서 `npm run build` 실행 시 `vite build`가 시작되지 않고 `dist`가 생성되지 않는지 확인
- 두 번 연속 실행 시 파일 해시가 동일한지 확인(결정적 출력)
- XML 파싱 성공 및 고유 `<loc>` 485개 확인
- `npm run preview`에서 `/sitemap.xml` 응답 200, `dist/sitemap.xml`과 `public/sitemap.xml` 일치 확인
- sitemap에서 무작위로 뽑은 상세 URL 10개의 로컬 응답 200 확인
- `public/robots.txt`의 `Sitemap:` 주소와 실제 생성 주소 일치 확인
- `npm run build` 성공, `git diff --check` 통과

남은 조건:

- 배포 후 Search Console에 sitemap을 다시 제출해야 실제 색인 대상이 됩니다.
- 상세 URL의 초기 HTML은 아직 비어 있습니다. 색인 확실성을 높이려면 우선순위 6의 프리렌더링이 필요합니다.

수동으로 484개 URL을 작성하지 말고 `src/data/bikes.js`를 기준으로 빌드 전에 sitemap을 생성하는 스크립트를 추가합니다.

포함 대상:

- 홈페이지 1개
- 바이크 상세 URL 484개
- 향후 브랜드 페이지나 가이드 페이지를 추가하면 해당 URL

완료 기준:

- `npm run build` 전후에 최신 `BIKES` 목록으로 sitemap이 생성됩니다.
- 모든 `<loc>`가 실제로 열리는 URL입니다.
- 중복 URL이 없습니다.
- 새 바이크를 추가하면 별도 수작업 없이 sitemap에도 반영됩니다.
- 배포 후 Search Console에 sitemap을 다시 제출합니다.

### 우선순위 5. 홈페이지 브랜드 신호 보강하기

> **완료 · 2026년 8월 17일**

완료 결과:

| 작업 | 적용 내용 | 구현 위치 |
| --- | --- | --- |
| `WebSite` 구조화 데이터 | 사이트 이름과 별칭을 정적 HTML에 삽입 | `index.html` |
| 홈 브랜드명 노출 | 홈 대표 영역 문구를 `오토바이오토 AUTObyAUTO`로 변경해 본문 텍스트로 포함 | `src/App.jsx` |
| 브랜드 표기 통일 | `text-transform: uppercase`를 제거해 `AUTObyAUTO` 대소문자 표기 보존 | `src/App.css` |
| 전용 파비콘 | 오렌지 바탕 + `A` 형태. SVG 원본과 PNG 3종 | `public/favicon.svg` 외 |
| 파비콘 연결 | `icon`, `apple-touch-icon` 링크 추가 | `index.html` |
| 앱 아이콘 | `icons` 배열 신규 추가 (기존에 없었음) | `public/site.webmanifest` |
| OG 대표 이미지 | 1200×630 브랜드 이미지 제작 및 교체 | `public/og-image.png` |
| OG 이미지 메타 | `og:image:width`, `height`, `alt` 추가 | `index.html` |
| 기본 공유 이미지 | 홈 및 이미지 없는 바이크의 폴백 이미지를 OG 대표 이미지로 변경 | `src/lib/seo.js` |

파비콘 구성:

| 파일 | 크기 | 용도 |
| --- | --- | --- |
| `favicon.svg` | 벡터 | 기본. 모던 브라우저와 검색 결과 |
| `favicon-192.png` | 192×192 | PNG 폴백, manifest |
| `favicon-512.png` | 512×512 | manifest 고해상도 |
| `apple-touch-icon.png` | 180×180 | iOS 홈 화면 |

- `favicon.svg`가 원본이고 PNG는 같은 좌표 규격(64 기준: 라운드 반경 14, 획 두께 7, 꼭지점 32,17)으로 렌더링한 파생물입니다.
- SVG의 `A`는 폰트 대신 도형(path)으로 그렸습니다. 텍스트로 두면 사용자 환경에 해당 폰트가 없을 때 다르게 렌더링됩니다.
- `apple-touch-icon.png`만 모서리를 깎지 않았습니다. iOS가 자체적으로 마스킹하므로 미리 둥글리면 모서리가 이중으로 깎입니다.
- OG 이미지의 원본 템플릿은 `scripts/og-image.html`입니다. 빌드에 포함되지 않으며, 문구나 색을 바꿀 때 참고용으로 둡니다.

검증 완료:

- JSON-LD 파싱 성공 및 `@type`, `name`, `alternateName`, `url` 확인
- 파비콘을 16px로 축소해 확대 확인 — `A` 형태 판독 가능
- `site.webmanifest` JSON 파싱 및 `icons` 2개 확인
- `npm run build` 후 `dist`에 아이콘 4종과 OG 이미지 복사 확인
- `dist/index.html`에 JSON-LD 1개, icon 링크 3개, OG 이미지 메타 반영 확인
- 브라우저에서 탭 파비콘, 홈 문구 대소문자, 상세 진입 시 title 변경, 뒤로 가기 동작 확인
- `npm run build` 성공, `git diff --check` 통과

`potentialAction` 검색창(sitelinks searchbox)은 넣지 않았습니다. Google이 2024년에 지원을 중단한 기능입니다.

아래는 작업 전 계획 내용입니다.

홈페이지에 `WebSite` JSON-LD를 추가해 검색엔진에 사이트 이름을 명확히 전달합니다.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "오토바이오토",
  "alternateName": ["AUTObyAUTO", "오토바이 오토"],
  "url": "https://auto-by-auto.vercel.app/"
}
</script>
```

함께 진행할 항목:

- 홈페이지 H1 또는 대표 소개 영역에 `오토바이오토`를 자연스럽게 포함
- 전용 favicon 추가
- 사이트 전용 OG 대표 이미지 제작
- `title`, H1, 로고 문구, `og:site_name`, 구조화 데이터의 브랜드 표기 통일

### 우선순위 6. 정적 HTML 또는 프리렌더링 적용하기

라우팅만 적용해도 URL 구조는 개선되지만, 현재 Vite SPA의 초기 HTML에는 바이크 상세 내용이 들어 있지 않습니다. 검색 안정성을 높이려면 각 상세 URL의 초기 HTML에 모델명과 핵심 제원이 포함되도록 정적 생성 또는 프리렌더링을 적용합니다.

이 작업은 URL 라우팅 이후 별도 단계로 진행합니다.

검증 방법:

- `view-source:`에서 모델명과 핵심 설명을 확인합니다.
- Google Search Console의 실제 URL 테스트에서 렌더링된 콘텐츠를 확인합니다.
- 상세 URL별 title, canonical, 본문이 서로 다른지 확인합니다.

### 권장 구현 순서

```txt
1. 상세 URL 규칙 확정
2. 라우터 및 Vercel rewrite 적용
3. 카드와 내부 이동을 실제 링크로 변경
4. 페이지별 title/description/canonical/공유 메타 적용
5. WebSite 구조화 데이터와 브랜드 신호 보강
6. sitemap 자동 생성
7. 빌드 및 직접 URL 접속 검증
8. 배포 후 Search Console sitemap 제출과 색인 요청
9. 정적 생성 또는 프리렌더링 적용
```

### 1차 작업에서 변경될 가능성이 높은 파일

```txt
package.json
src/main.jsx
src/App.jsx
src/components/BikeCard.jsx
src/components/Sidebar.jsx
src/components/DetailView.jsx
index.html
vercel.json
public/sitemap.xml
scripts/generate-sitemap.mjs
```

실제 구현 방식에 따라 파일명은 달라질 수 있습니다. `public/sitemap.xml`은 생성 결과물로 관리하고, URL 생성 규칙은 한 곳에서 재사용하는 것이 좋습니다.

### 지금 하지 않아도 되는 작업

다음 작업은 개별 URL과 색인 구조를 완성한 뒤 진행해도 됩니다.

- 모든 모델에 긴 소개 글 작성
- 브랜드별 랜딩 페이지 제작
- 비교 조합별 URL 생성
- 커스텀 도메인 구매 및 이전
- 대규모 디자인 개편
- 광고 또는 백링크 구매

현재는 검색엔진이 484개 모델을 각각 발견할 수 있게 만드는 것이 콘텐츠를 더 추가하는 것보다 우선입니다.

---

## 현재 적용한 SEO 작업

### 1. 기본 메타태그

`index.html`에 다음 검색 노출 기본값을 추가했습니다.

- `title`: `오토바이오토 AUTObyAUTO - 오토바이 기종 비교`
- `description`: 브랜드, 배기량, 시트고, 가격대, 제원 기준 비교 서비스라는 설명
- `keywords`: `오토바이오토`, `AUTObyAUTO`, `오토바이 비교`, `바이크 비교`, `바이크 제원` 등
- `robots`: `index, follow`
- `theme-color`: 사이트 다크 테마 색상

주의: `keywords` 메타태그는 현대 Google 랭킹에 큰 영향은 없지만, 문서 의도를 명확히 남기는 보조 정보로 유지합니다.

### 2. Canonical URL

현재 대표 URL을 아래로 지정했습니다.

```html
<link rel="canonical" href="https://auto-by-auto.vercel.app/" />
```

이 설정은 같은 콘텐츠가 여러 URL로 접근될 때 Google이 대표 주소를 판단하는 데 도움을 줍니다.

### 3. Open Graph / Twitter Card

SNS, 메신저, 검색 미리보기 품질을 위해 다음 항목을 추가했습니다.

- `og:type`
- `og:url`
- `og:locale`
- `og:site_name`
- `og:title`
- `og:description`
- `og:image`
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`

홈페이지 공유 이미지는 브랜드 전용 `og-image.png`(1200×630)를 사용합니다. `og:image:width`, `og:image:height`, `og:image:alt`도 함께 지정했습니다. 크기를 명시하면 크롤러가 이미지를 내려받기 전에 미리보기 레이아웃을 잡을 수 있습니다.

바이크 상세 페이지는 해당 모델 이미지를 사용하고, 이미지가 없는 기종은 `og-image.png`로 대체합니다.

### 4. robots.txt

`public/robots.txt`를 추가했습니다.

```txt
User-agent: *
Allow: /

Sitemap: https://auto-by-auto.vercel.app/sitemap.xml
```

의미:

- 모든 검색엔진 크롤러 접근 허용
- sitemap 위치 안내

### 5. sitemap.xml

`public/sitemap.xml`은 `scripts/generate-sitemap.mjs`가 생성합니다. 직접 편집하지 말고 스크립트를 수정하세요.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://auto-by-auto.vercel.app/</loc>
    <lastmod>2026-08-17</lastmod>
  </url>
  <url>
    <loc>https://auto-by-auto.vercel.app/bikes/aprilia/rs125-2006</loc>
  </url>
  ...
</urlset>
```

`npm run build` 시 `prebuild` 훅으로 자동 실행되므로, 새 바이크를 추가하면 별도 작업 없이 sitemap에 반영됩니다. 데이터만 고치고 결과를 확인하려면 `npm run sitemap`으로 생성 단계만 실행할 수 있습니다.

2026년 8월 17일 기준 홈 1개 + 바이크 상세 484개, 총 485개 URL이 등록되어 있습니다. 자세한 동작과 검증 내용은 위의 `우선순위 4` 항목을 참고하세요.

### 6. Web Manifest

`public/site.webmanifest`를 추가했습니다.

- 사이트 이름: `오토바이오토 AUTObyAUTO`
- 짧은 이름: `오토바이오토`
- 언어: `ko-KR`
- 테마/배경 색상: `#0d0d0f`

이 파일은 SEO 핵심 요소는 아니지만, 브라우저와 모바일 설치형 표시에서 사이트 정체성을 보강합니다.

### 7. Google Search Console 인증

Search Console에서 URL 접두어 속성으로 아래 URL을 등록했습니다.

```txt
https://auto-by-auto.vercel.app/
```

`vercel.app` 도메인은 사용자가 DNS TXT 레코드를 직접 설정할 수 없으므로, DNS 인증 대신 HTML 파일 인증 방식을 사용했습니다.

인증 파일:

```txt
public/googlec0e1744f23d9c3c1.html
```

배포 후 확인 URL:

```txt
https://auto-by-auto.vercel.app/googlec0e1744f23d9c3c1.html
```

---

## Search Console에서 해야 하는 일

### 1. Sitemap 제출

Search Console 왼쪽 메뉴에서 `Sitemaps`로 이동한 뒤 새 sitemap에 아래 값을 입력합니다.

```txt
sitemap.xml
```

제출 후 바로 `가져올 수 없음`이 뜰 수 있습니다. 브라우저에서 아래 주소가 정상 표시된다면 파일 자체는 정상입니다.

```txt
https://auto-by-auto.vercel.app/sitemap.xml
```

이 경우 몇 시간 뒤 다시 확인하거나 삭제 후 재제출합니다.

### 2. URL 검사 및 색인 요청

Search Console 상단 URL 검사창에 아래 주소를 입력합니다.

```txt
https://auto-by-auto.vercel.app/
```

진행 순서:

1. URL 검사
2. 실제 URL 테스트
3. 색인 생성 요청

색인 요청은 Google에 크롤링을 요청하는 것이며, 검색 결과 노출을 보장하지는 않습니다.

### 3. 색인 여부 확인

며칠 뒤 Google에서 아래 검색어로 확인합니다.

```txt
site:auto-by-auto.vercel.app
```

브랜드 검색 확인:

```txt
오토바이오토
AUTObyAUTO
```

새 사이트는 반영까지 며칠에서 몇 주까지 걸릴 수 있습니다.

---

## 운영 가이드라인

### 페이지 제목과 설명

현재는 단일 페이지 앱이라 전체 사이트 제목 하나만 Google에 강하게 전달됩니다.

향후 모델별 상세 페이지를 URL로 분리하면 다음처럼 페이지별 title/description을 만들어야 합니다.

```txt
혼다 CBR650R 2024 제원 비교 - 오토바이오토
야마하 MT-03 2023 입문용 바이크 제원 - 오토바이오토
```

페이지별 검색 의도가 분리되면 `오토바이오토` 브랜드 검색뿐 아니라 개별 모델 검색에서도 유입될 가능성이 커집니다.

### 콘텐츠 품질

Google은 단순 메타태그보다 실제 페이지 콘텐츠를 더 중요하게 봅니다.

강화하면 좋은 콘텐츠:

- 모델별 소개 문장
- 입문자 추천 이유
- 시트고/체형 적합도 설명
- 연식별 차이
- 제원 데이터 출처와 업데이트 날짜
- 가격대 산정 기준

### 구조화 데이터

향후 적용 후보:

- `WebSite`
- `Organization`
- `BreadcrumbList`
- 모델 상세 페이지가 생기면 `Product` 또는 `Vehicle` 성격의 구조화 데이터 검토

단, 구조화 데이터는 실제 페이지 콘텐츠와 일치해야 합니다.

### 이미지 SEO

현재 바이크 이미지는 앱 데이터에서 렌더링됩니다. 향후 개선할 점:

- 대표 OG 이미지 별도 제작
- 이미지 파일명과 모델 ID 일관성 유지
- `img` 태그에 모델명 기반 `alt` 텍스트 제공
- 이미지 용량 최적화

### 성능

현재 빌드 시 Vite에서 번들 크기 경고가 발생합니다.

```txt
Some chunks are larger than 500 kB after minification.
```

검색 등록을 막는 문제는 아니지만, 장기적으로 Core Web Vitals와 사용자 경험에 영향을 줄 수 있습니다.

개선 후보:

- 차트 라이브러리 지연 로딩
- 상세/비교 뷰 코드 분리
- 이미지 lazy loading
- 대량 데이터 로딩 방식 개선

### 커스텀 도메인 전환 시 체크리스트

예를 들어 `https://autobyauto.com/` 같은 커스텀 도메인을 연결하면 다음을 반드시 수정해야 합니다.

- `src/lib/siteConfig.js`의 `SITE_URL` — 상세 페이지 canonical, Open Graph, sitemap의 `<loc>`가 모두 이 값을 따라갑니다
- `index.html`의 canonical URL
- `index.html`의 `og:url`
- `public/robots.txt`의 `Sitemap:` URL
- Search Console 새 도메인 또는 URL 접두어 속성 등록
- 기존 Vercel URL에서 커스텀 도메인으로 리다이렉트 확인

`public/sitemap.xml`은 생성 파일이므로 직접 고치지 않습니다. `SITE_URL`을 바꾼 뒤 `npm run sitemap`을 실행하면 485개 URL이 한 번에 갱신됩니다.

---

## SEO 체크리스트

- [x] 사이트 title에 `오토바이오토` 포함
- [x] description 추가
- [x] robots meta `index, follow` 추가
- [x] canonical URL 추가
- [x] Open Graph/Twitter meta 추가
- [x] `robots.txt` 추가
- [x] `sitemap.xml` 추가
- [x] Search Console URL 접두어 인증 완료
- [ ] Search Console sitemap 제출 상태 `성공` 확인
- [ ] URL 검사에서 홈페이지 색인 생성 요청
- [ ] Google `site:` 검색으로 색인 여부 확인
- [x] `/bikes/{brand}/{id}` 상세 URL 라우팅 구현
- [x] 상세 URL 직접 접속 및 새로고침 지원
- [x] 바이크 카드와 내부 이동을 실제 링크로 변경
- [x] 모델별 title/description/canonical 자동 생성
- [x] 모델별 Open Graph/Twitter Card 자동 생성
- [x] `WebSite` JSON-LD 추가
- [x] `BIKES` 기반 sitemap 자동 생성
- [x] 상세 URL 484개 sitemap 등록
- [ ] 배포 후 Search Console에 갱신된 sitemap 재제출
- [x] Vercel 상세 경로 rewrite 적용
- [ ] 상세 페이지 초기 HTML 프리렌더링
- [x] 대표 OG 이미지 제작
- [x] 전용 파비콘 추가 (SVG + PNG 3종)
- [x] `site.webmanifest` 앱 아이콘 등록
- [x] 홈 본문에 브랜드명 `오토바이오토` 노출
- [ ] 이미지 alt 텍스트 품질 개선
- [ ] 번들 크기 및 이미지 성능 최적화

---

## 참고 URL

- 사이트: `https://auto-by-auto.vercel.app/`
- robots.txt: `https://auto-by-auto.vercel.app/robots.txt`
- sitemap.xml: `https://auto-by-auto.vercel.app/sitemap.xml`
- Google Search Console: `https://search.google.com/search-console`
