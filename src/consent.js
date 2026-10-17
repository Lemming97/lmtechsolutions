// Remembers whether the visitor accepted or declined cookies.
// Anything that sets cookies (analytics, for example) must check
// hasConsent() first, and can listen for changes with onConsentChange().

const KEY = 'lm-consent'
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182 // ask again after about six months
const CHANGE = 'lm-consent-change'
const OPEN = 'lm-consent-open'

// 'accepted', 'declined', or null when the visitor hasn't chosen yet
export function getConsent() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(KEY) || 'null')
    if (!saved || Date.now() - saved.at > MAX_AGE_MS) return null
    return saved.value === 'accepted' || saved.value === 'declined' ? saved.value : null
  } catch {
    return null
  }
}

export function hasConsent() {
  return getConsent() === 'accepted'
}

export function setConsent(value) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ value, at: Date.now() }))
  } catch {
    // storage unavailable: the choice applies to this visit only
  }
  window.dispatchEvent(new CustomEvent(CHANGE, { detail: value }))
}

export function onConsentChange(callback) {
  const handler = (e) => callback(e.detail)
  window.addEventListener(CHANGE, handler)
  return () => window.removeEventListener(CHANGE, handler)
}

// Reopen the banner (the footer's Cookie Settings link)
export function openConsentBanner() {
  window.dispatchEvent(new Event(OPEN))
}

export function onConsentOpen(callback) {
  window.addEventListener(OPEN, callback)
  return () => window.removeEventListener(OPEN, callback)
}
