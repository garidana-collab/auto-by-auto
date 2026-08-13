# AUTO BY AUTO 🏍️

어떤 바이크가 당신에게 맞을까? 바이크 입문자와 라이더를 위한 **바이크 기종 비교 및 맞춤 추천 웹 서비스**입니다.

## 📌 주요 기능 (Key Features)

- **맞춤형 필터 및 탐색 (Browse)**
  - 브랜드, 카테고리(스쿠터, 네이키드, 스포츠 등), 면허 종류, 배기량, 입문자 태그 등 세밀한 조건으로 바이크를 검색할 수 있습니다.
  - **체형 맞춤 필터**: 라이더의 신장과 다리 길이(짧음/보통/긺)를 입력하면 인심(Inseam)과 권장 시트고를 계산하여, 발착지성이 무리 없는 바이크만 걸러서 보여줍니다.
- **상세 정보 (Detail)**
  - 개별 바이크의 제원, 연식별 모델, 그리고 배기량/카테고리가 비슷한 경쟁 차종을 한눈에 확인할 수 있습니다.
- **기종 비교 (Compare)**
  - 최대 3대의 바이크를 선택하여 한 화면에서 스펙을 비교할 수 있습니다.
  - **방사형 차트 (Radar Chart)** 및 최고/최저 스펙 하이라이팅을 통해 기종 간 장단점을 직관적으로 파악할 수 있습니다.

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend**: React 18, Vite
- **Chart**: Recharts (방사형 스펙 차트 구현)
- **Analytics/Backend**: Firebase, Vercel Analytics

## 🚀 현재 개발 현황 (Status)

현재 **프로토타입 단계**로, 주요 뷰(탐색, 상세, 비교)와 사이드바 필터링 로직이 구현되어 있습니다. 
- `src/components/`: `BrowseView`, `DetailView`, `CompareView`, `Sidebar`, `BikeCard` 등 UI 컴포넌트 분리 완료
- `src/data/`: `bikes.js`, `specs.js` 기반의 로컬 예시(Mock) 데이터를 사용하여 동작 중
- *참고: 현재 입력된 데이터는 예시이며 실제 제조사 제원과 일부 다를 수 있습니다.*

## 💻 실행 방법 (How to run)

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```