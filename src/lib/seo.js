export const SITE_URL = 'https://auto-by-auto.vercel.app'

const HOME_METADATA = {
  title: '오토바이오토 AUTObyAUTO - 오토바이 기종 비교',
  description: '오토바이오토(AUTObyAUTO)에서 브랜드, 배기량, 시트고, 가격대, 제원을 기준으로 입문자에게 맞는 오토바이와 바이크 기종을 비교해보세요.',
  canonical: `${SITE_URL}/`,
  image: `${SITE_URL}/bikes/honda/cbr650r-2024.webp`,
  robots: 'index, follow',
}

function toAbsoluteUrl(path) {
  if (!path) return HOME_METADATA.image
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildHomeMetadata() {
  return { ...HOME_METADATA }
}

export function buildBikeMetadata(bike, brand, path) {
  const brandName = brand?.name ?? bike.brand
  const title = `${bike.year} ${brandName} ${bike.model} 제원·시트고·가격 | 오토바이오토`
  const description = `${bike.year} ${brandName} ${bike.model}의 배기량, 출력, 시트고, 중량과 가격을 확인하고 비슷한 바이크와 비교해보세요.`

  return {
    title,
    description,
    canonical: `${SITE_URL}${path}`,
    image: toAbsoluteUrl(bike.image),
    robots: 'index, follow',
  }
}

export function buildNotFoundMetadata() {
  return {
    title: '페이지를 찾을 수 없습니다 | 오토바이오토',
    description: '요청한 바이크 페이지를 찾을 수 없습니다.',
    canonical: null,
    image: HOME_METADATA.image,
    robots: 'noindex, follow',
  }
}

function setMetaContent(selector, content) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute('content', content)
}

export function applyMetadata(metadata) {
  document.title = metadata.title

  setMetaContent('meta[name="description"]', metadata.description)
  setMetaContent('meta[name="robots"]', metadata.robots)
  setMetaContent('meta[property="og:url"]', metadata.canonical ?? window.location.href)
  setMetaContent('meta[property="og:title"]', metadata.title)
  setMetaContent('meta[property="og:description"]', metadata.description)
  setMetaContent('meta[property="og:image"]', metadata.image)
  setMetaContent('meta[name="twitter:title"]', metadata.title)
  setMetaContent('meta[name="twitter:description"]', metadata.description)
  setMetaContent('meta[name="twitter:image"]', metadata.image)

  if (metadata.canonical) {
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', metadata.canonical)
  } else {
    document.head.querySelector('link[rel="canonical"]')?.remove()
  }
}
