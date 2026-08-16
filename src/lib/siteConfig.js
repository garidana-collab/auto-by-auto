// 사이트 기준 도메인 단일 정의.
//
// 이 값을 참조하는 곳:
//   - src/lib/seo.js          (canonical, og:url, og:image)
//   - scripts/generate-sitemap.mjs (sitemap <loc>)
//
// 커스텀 도메인으로 이전할 때는 이 파일과 함께
// index.html의 canonical/og:url, public/robots.txt의 Sitemap 주소도 바꿔야 합니다.

export const SITE_URL = 'https://auto-by-auto.vercel.app'

// 상대 경로를 배포 도메인의 전체 URL로 변환합니다.
// 이미 절대 URL이면 그대로 두고, 값이 없으면 null을 돌려줍니다.
export function toAbsoluteUrl(path) {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
