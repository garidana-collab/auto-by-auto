# AUTObyAUTO 리팩터링 기록

> 작성일: 2026년 7월 1일  
> 범위: 기능 변경 없는 구조 분리  
> 대상: `src/App.jsx`, `src/App.css`, `src/components/*`, `src/lib/*`

## 목적

이번 리팩터링의 목적은 현재 기능과 화면 흐름을 유지하면서 `src/App.jsx`에 몰려 있던 책임을 줄이는 것입니다.

리팩터링 전 `src/App.jsx`는 다음 책임을 한 파일에서 모두 처리하고 있었습니다.

- 앱 상태 관리
- 필터 계산
- 체형 적합도 계산
- 쉬운 찾기 태그 계산
- 가격/제원 표시 포맷
- 탐색 카드 렌더링
- 상세 화면 렌더링
- 비교 화면 렌더링
- 전체 CSS 문자열

이 구조는 기능은 동작하지만, 작은 UI 수정도 큰 파일을 직접 건드려야 해서 변경 범위가 커지는 문제가 있었습니다.

## 1차 작업

1차 작업은 동작 변경 위험이 낮은 분리부터 진행했습니다.

### CSS 분리

기존에는 `src/App.jsx` 하단의 `const css = \`...\`` 문자열을 `<style>{css}</style>`로 주입하고 있었습니다.

변경 후에는 다음처럼 일반 CSS 파일로 분리했습니다.

- 생성: `src/App.css`
- 변경: `src/App.jsx`에서 `import './App.css'` 사용
- 제거: JSX 내부 `<style>{css}</style>` 주입

### 계산/표시 유틸 분리

체형, 가격, 쉬운 찾기 태그, 레이더 차트 데이터 생성처럼 JSX와 직접 무관한 함수를 `src/lib/bikeDisplay.js`로 옮겼습니다.

분리된 주요 항목은 다음과 같습니다.

- `MIN_RIDER_HEIGHT`
- `MAX_RIDER_HEIGHT`
- `DEFAULT_RIDER_HEIGHT`
- `LEG_FACTOR`
- `BEGINNER_TAGS`
- `clampRiderHeight`
- `isKnownValue`
- `isKnownPrice`
- `formatShortSpec`
- `formatPrice`
- `getFitLabel`
- `getBeginnerTags`
- `buildRadarData`

1차 작업 후 `src/App.jsx`는 1,766줄에서 986줄로 줄었습니다.

## 2차 작업

2차 작업은 화면 단위 컴포넌트 분리를 진행했습니다.

### 시각 상수 분리

카드와 상세 화면에서 함께 사용하는 카테고리 색상, 배경 그라디언트, 브랜드 마크 fallback 값을 `src/lib/bikeTheme.js`로 분리했습니다.

분리된 항목은 다음과 같습니다.

- `CAT_GRADIENT`
- `CAT_COLOR`
- `BRAND_MARKS`

### 탐색 화면 분리

탐색 카드와 카드 그리드를 다음 컴포넌트로 분리했습니다.

- `src/components/BikeCard.jsx`
- `src/components/BrowseView.jsx`

`BikeCard`는 개별 바이크 카드의 이미지, 브랜드 표시, 기본 제원, 쉬운 찾기 태그, 가격대, 체형 적합도, 비교 추가 버튼을 담당합니다.

`BrowseView`는 필터 결과가 없을 때의 빈 상태와 카드 그리드 렌더링을 담당합니다.

### 상세 화면 분리

단일 기종 상세 화면을 `src/components/DetailView.jsx`로 분리했습니다.

이 컴포넌트는 다음 영역을 담당합니다.

- 상세 대표 이미지
- 브랜드/모델/연식/면허 표시
- 가격대 표시
- 비교 추가/제거 버튼
- 동일 모델 연식 선택
- 내 체형 기준 적합도
- 단일 기종 레이더 차트
- 핵심 제원
- 비슷한 기종 추천

### 비교 화면 분리

비교 화면을 `src/components/CompareView.jsx`로 분리했습니다.

이 컴포넌트는 다음 영역을 담당합니다.

- 비교 대상 칩
- 비교 대상이 없을 때의 빈 상태
- 성능 균형 레이더 차트
- 제원 비교 테이블
- 항목별 우위 표시

2차 작업 후 `src/App.jsx`는 986줄에서 633줄로 줄었습니다.

## 3차 작업

3차 작업은 사이드바를 `src/components/Sidebar.jsx`로 분리했습니다.

분리된 사이드바는 다음 영역을 담당합니다.

- 로고와 버전 표시
- 내 체형 필터
- 검색창
- 모바일 필터 요약과 하단 시트 열기/닫기
- 쉬운 찾기 태그 필터
- 브랜드/장르/면허/배기량 보조 필터
- 브랜드 · 모델 · 연식 드릴다운

이 작업 후 `src/App.jsx`는 633줄에서 389줄로 줄었습니다. `App.jsx`에는 앱 상태, 필터 결과 계산, 선택 상태, 화면 조립이 주로 남았습니다.

## 현재 파일 역할

현재 주요 파일의 역할은 다음과 같습니다.

| 파일 | 역할 |
|---|---|
| `src/App.jsx` | 앱 상태, 필터 계산, 선택 상태, 화면 조립 |
| `src/App.css` | 전체 앱 스타일 |
| `src/components/Sidebar.jsx` | 사이드바, 필터, 브랜드/모델/연식 드릴다운 |
| `src/components/BikeCard.jsx` | 탐색 카드 |
| `src/components/BrowseView.jsx` | 탐색 그리드와 빈 상태 |
| `src/components/DetailView.jsx` | 단일 기종 상세 화면 |
| `src/components/CompareView.jsx` | 비교 화면 |
| `src/lib/bikeDisplay.js` | 체형 계산, 표시 포맷, 쉬운 찾기 태그, 레이더 데이터 |
| `src/lib/bikeTheme.js` | 카테고리 색상, 배경, 브랜드 마크 |

## 현재 줄 수

리팩터링 후 확인한 줄 수는 다음과 같습니다.

| 파일 | 줄 수 |
|---|---:|
| `src/App.jsx` | 389 |
| `src/App.css` | 694 |
| `src/components/Sidebar.jsx` | 330 |
| `src/components/BikeCard.jsx` | 84 |
| `src/components/BrowseView.jsx` | 38 |
| `src/components/DetailView.jsx` | 164 |
| `src/components/CompareView.jsx` | 125 |
| `src/lib/bikeDisplay.js` | 98 |
| `src/lib/bikeTheme.js` | 39 |

## 검증

각 단계 후 빌드를 실행해 확인했습니다.

```powershell
npm.cmd run build
```

결과는 성공입니다.

다만 기존과 동일하게 Vite chunk-size 경고는 남아 있습니다. 이 경고는 이번 리팩터링으로 새로 생긴 빌드 실패가 아니며, 주로 앱 번들과 `recharts` 같은 의존성 크기 때문에 발생하는 경고입니다.

개발 서버 응답도 확인했습니다.

```text
http://127.0.0.1:5173/
status=200
```

## 의도적으로 하지 않은 일

이번 작업에서는 기능 유지가 우선이었기 때문에 다음 작업은 하지 않았습니다.

- UI 문구 변경
- CSS 디자인 변경
- 데이터 구조 변경
- `src/data/bikes.js` 정리
- 문서의 등록 기종 수 드리프트 수정
- `firebase` 의존성 제거
- 라우팅 또는 코드 스플리팅 적용

## 다음 리팩터링 후보

추가로 진행한다면 다음 순서가 적절합니다.

1. `Sidebar` 내부를 `BodyFilterPanel`, `SearchBox`, `AdvancedFilter`, `BrandModelYearTree` 같은 하위 컴포넌트로 추가 분리
2. 필터 상태와 필터 계산을 hook 또는 별도 유틸로 분리
3. `BIKES.find`, `BRANDS.find` 반복 조회를 `bikeById`, `brandById` 인덱스로 정리
4. `DISP_CATS`, `CATEGORY_ORDER` 같은 필터 상수를 별도 파일로 이동
5. 문서의 현재 등록 기종 수를 실제 `BIKES.length` 기준으로 갱신
6. 필요 시 `recharts` 중심의 code splitting 검토

## 현재 구조 판단

현재 상태는 기능 중심 단일 파일 구조에서 화면 단위 구조로 넘어간 단계입니다.

`App.jsx`는 아직 완전히 작지는 않지만, 이제 주요 화면 JSX가 분리되어 이후 수정 시 영향을 받는 파일을 더 좁힐 수 있습니다. 특히 탐색 카드, 상세 화면, 비교 화면은 각각 독립 파일에서 관리할 수 있게 되었습니다.
