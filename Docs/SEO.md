# AUTObyAUTO SEO Guide

> 마지막 업데이트: 2026년 6월 22일
> 현재 배포 URL: `https://auto-by-auto.vercel.app/`

---

## 목표

Google에서 `오토바이오토`, `AUTObyAUTO`, `오토바이 기종 비교`, `바이크 제원 비교` 같은 검색어로 사이트를 발견할 수 있게 하는 것이 목표입니다.

SEO는 한 번 설정한다고 즉시 1위에 뜨는 작업이 아니라, 검색엔진이 사이트를 크롤링하고 색인할 수 있게 만들고, 페이지 제목/설명/콘텐츠 신호를 꾸준히 명확하게 쌓는 작업입니다.

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

현재 공유 이미지는 `/bikes/honda/cbr650r-2024.webp`를 사용합니다. 향후 브랜드 전용 대표 이미지나 로고형 OG 이미지를 만드는 것이 좋습니다.

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

`public/sitemap.xml`을 추가했습니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://auto-by-auto.vercel.app/</loc>
    <lastmod>2026-06-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

현재 앱은 단일 페이지 앱이므로 홈페이지 1개만 등록했습니다. 향후 모델별 상세 URL을 실제 라우팅으로 분리하면 sitemap에 각 모델 페이지를 추가해야 합니다.

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

- `index.html`의 canonical URL
- `index.html`의 `og:url`
- `public/robots.txt`의 `Sitemap:` URL
- `public/sitemap.xml`의 `<loc>`
- Search Console 새 도메인 또는 URL 접두어 속성 등록
- 기존 Vercel URL에서 커스텀 도메인으로 리다이렉트 확인

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
- [ ] 모델별 상세 URL 라우팅 도입 검토
- [ ] 모델별 title/description 자동 생성 검토
- [ ] 대표 OG 이미지 제작
- [ ] 이미지 alt 텍스트 품질 개선
- [ ] 번들 크기 및 이미지 성능 최적화

---

## 참고 URL

- 사이트: `https://auto-by-auto.vercel.app/`
- robots.txt: `https://auto-by-auto.vercel.app/robots.txt`
- sitemap.xml: `https://auto-by-auto.vercel.app/sitemap.xml`
- Google Search Console: `https://search.google.com/search-console`
