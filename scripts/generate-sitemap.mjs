// sitemap.xml 생성 스크립트
//
// 실행: node scripts/generate-sitemap.mjs  (npm run build 이전 단계에서 자동 실행)
// 출력: public/sitemap.xml
//
// 앱과 같은 데이터(src/data/bikes.js)와 같은 URL 규칙(src/lib/bikeRoutes.js)을
// 그대로 가져다 씁니다. 따라서 화면의 링크와 sitemap의 주소가 서로 어긋날 수 없습니다.
//
// 검증을 통과하지 못하면 파일을 쓰지 않고 종료 코드 1로 빌드를 중단합니다.
// 잘못된 URL이 섞인 sitemap을 배포하면 검색엔진이 사이트 전체의 신뢰도를 낮추기 때문에,
// 조용히 넘어가는 것보다 빌드를 세우는 편이 안전합니다.

import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// 아래 세 모듈은 브라우저 API(document, window 등)를 최상위에서 쓰지 않아야 합니다.
// Node가 그대로 불러오는 파일이므로, 최상위에 브라우저 코드가 들어가면 빌드가 깨집니다.
import { BIKES, BRANDS } from '../src/data/bikes.js'
import { getBikePath, resolveAppRoute, HOME_PATH } from '../src/lib/bikeRoutes.js'
import { SITE_URL } from '../src/lib/siteConfig.js'

// 홈 페이지의 최종 수정일. 홈 화면 구성이나 소개 문구를 크게 바꿀 때 함께 갱신합니다.
// 빌드 시각을 자동으로 넣지 않는 이유: 내용이 바뀌지 않았는데도 매 빌드마다
// 수정됐다고 신고하게 되고, 커밋 diff에도 의미 없는 변경이 계속 쌓입니다.
const HOME_LASTMOD = '2026-08-17'

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public')
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'sitemap.xml')

// sitemap 하나에 담을 수 있는 URL 상한(sitemaps.org 규격). 넘어가면 sitemap 색인 파일로
// 나눠야 하므로, 근접하면 미리 알립니다. 현재 485개라 한참 여유가 있습니다.
const URL_LIMIT = 50000
const URL_WARN_THRESHOLD = 45000

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// 바이크 목록에서 상세 경로를 만들고, 그 경로가 실제로 열리는지 검사합니다.
function collectBikePaths() {
  const brandIds = new Set(BRANDS.map(brand => brand.id))
  const errors = []
  const seen = new Map()
  const paths = []

  BIKES.forEach((bike, index) => {
    // BIKES 기준 순번을 함께 남깁니다. 484개 중 어느 항목인지 바로 찾기 위해서입니다.
    const label = `#${index} ${bike.brand ?? '?'}/${bike.id ?? '?'}`

    if (!bike.id || !bike.brand) {
      errors.push(`brand 또는 id가 비어 있습니다: ${label}`)
      return
    }

    if (!brandIds.has(bike.brand)) {
      errors.push(`BRANDS에 없는 브랜드입니다: ${label}`)
      return
    }

    const bikePath = getBikePath(bike)

    if (seen.has(bikePath)) {
      errors.push(`URL이 중복됩니다: ${bikePath} — ${seen.get(bikePath)} / ${label}`)
      return
    }

    // 생성한 경로를 앱 라우터에 되돌려 넣어, 실제로 이 바이크 상세가 열리는지 확인합니다.
    const route = resolveAppRoute(bikePath)
    if (route.type !== 'bike' || route.bike.id !== bike.id || route.bike.brand !== bike.brand) {
      errors.push(`라우터가 이 URL을 해석하지 못합니다: ${bikePath} (${label})`)
      return
    }

    seen.set(bikePath, label)
    paths.push(bikePath)
  })

  return { paths, errors }
}

// sitemap에 담을 항목 목록을 만듭니다.
// 나중에 브랜드 페이지나 가이드 페이지가 생기면, 같은 모양의 { path, lastmod } 목록을
// 여기에 이어 붙이기만 하면 출력 로직은 그대로 재사용됩니다.
function collectEntries(bikePaths) {
  // 경로 기준으로 정렬해서 출력합니다. bikes.js의 항목 순서가 바뀌어도 결과 파일은
  // 그대로이므로, 커밋 diff에는 실제로 추가·삭제된 URL만 남습니다.
  const sortedBikePaths = [...bikePaths].sort()

  return [
    { path: HOME_PATH, lastmod: HOME_LASTMOD },
    ...sortedBikePaths.map(bikePath => ({ path: bikePath })),
  ]
}

function renderEntry({ path: entryPath, lastmod }) {
  const lines = ['  <url>', `    <loc>${escapeXml(`${SITE_URL}${entryPath}`)}</loc>`]
  if (lastmod) lines.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`)
  lines.push('  </url>')
  return lines
}

// changefreq와 priority는 넣지 않습니다. Google이 이 두 항목을 사용하지 않는다고
// 공식적으로 밝혔기 때문에, 485줄을 채워도 얻는 것 없이 파일만 커집니다.
function buildSitemap(entries) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.flatMap(renderEntry),
    '</urlset>',
    '',
  ].join('\n')
}

function main() {
  const { paths, errors } = collectBikePaths()

  if (errors.length > 0) {
    console.error(`[sitemap] 검증 실패 — ${errors.length}건. sitemap.xml을 생성하지 않았습니다.`)
    for (const error of errors) console.error(`  - ${error}`)
    process.exit(1)
  }

  if (paths.length === 0) {
    console.error('[sitemap] 생성할 바이크 URL이 없습니다. src/data/bikes.js를 확인하세요.')
    process.exit(1)
  }

  const entries = collectEntries(paths)

  if (entries.length > URL_LIMIT) {
    console.error(`[sitemap] URL이 ${entries.length}개로 상한 ${URL_LIMIT}개를 넘었습니다.`)
    console.error('[sitemap] sitemap을 여러 파일로 나누고 sitemap 색인을 만들어야 합니다.')
    process.exit(1)
  }

  if (entries.length > URL_WARN_THRESHOLD) {
    console.warn(`[sitemap] 경고: URL ${entries.length}개. 상한 ${URL_LIMIT}개에 근접했습니다.`)
  }

  mkdirSync(OUTPUT_DIR, { recursive: true })
  writeFileSync(OUTPUT_PATH, buildSitemap(entries), 'utf8')
  console.log(`[sitemap] public/sitemap.xml 생성 완료 — 홈 1개 + 바이크 ${paths.length}개`)
}

main()
