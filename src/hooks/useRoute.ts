import { useSyncExternalStore } from 'react'

// Hash routes also work on GitHub Pages, without server rewrite rules.
function getRoute() {
  return window.location.hash.slice(1).split('?')[0].replace(/\/+$/, '') || '/'
}
function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}
export function useRoute() {
  return useSyncExternalStore(subscribe, getRoute, () => '/')
}
