import { BIKES } from '../data/bikes.js'

export const HOME_PATH = '/'

export function getBikePath(bike) {
  return `/bikes/${encodeURIComponent(bike.brand)}/${encodeURIComponent(bike.id)}`
}

export function shouldHandleLinkClick(event) {
  return event.button === 0
    && !event.defaultPrevented
    && !event.metaKey
    && !event.ctrlKey
    && !event.shiftKey
    && !event.altKey
    && (!event.currentTarget.target || event.currentTarget.target === '_self')
}

export function resolveAppRoute(pathname) {
  const normalizedPath = pathname.length > 1
    ? pathname.replace(/\/+$/, '')
    : pathname

  if (normalizedPath === HOME_PATH) {
    return { type: 'home' }
  }

  const match = normalizedPath.match(/^\/bikes\/([^/]+)\/([^/]+)$/)
  if (!match) {
    return { type: 'not-found' }
  }

  let brand
  let id

  try {
    brand = decodeURIComponent(match[1])
    id = decodeURIComponent(match[2])
  } catch {
    return { type: 'not-found' }
  }

  const bike = BIKES.find(item => item.brand === brand && item.id === id)

  return bike
    ? { type: 'bike', bike }
    : { type: 'not-found' }
}
