// Google Analytics, loaded only after the visitor accepts cookies.
// If they later decline, tracking stops and the Analytics cookies are removed.
import { GA_MEASUREMENT_ID as ID } from './config.js'
import { hasConsent, onConsentChange } from './consent.js'

const COOKIE_LIFETIME_S = 60 * 60 * 24 * 395 // 13 months, the CNIL maximum
let loaded = false

function load() {
  if (!ID) return
  window[`ga-disable-${ID}`] = false
  if (loaded) return
  loaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', ID, {
    send_page_view: false,
    cookie_expires: COOKIE_LIFETIME_S,
    cookie_flags: 'SameSite=Lax;Secure',
  })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`
  document.head.appendChild(script)
  trackPage()
}

function stop() {
  if (!ID) return
  window[`ga-disable-${ID}`] = true
  const host = window.location.hostname
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`]
  document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
    .forEach((name) => {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`
      })
    })
}

// Record a page view. The legal pages are reported as /legal-notice and
// /privacy-policy; everything else counts as the home page.
export function trackPage() {
  if (!loaded || !hasConsent()) return
  const hash = window.location.hash
  const path = hash === '#legal-notice' || hash === '#privacy-policy' ? `/${hash.slice(1)}` : '/'
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: `${window.location.origin}${path}`,
    language: document.documentElement.lang,
  })
}

export function initAnalytics() {
  if (hasConsent()) load()
  onConsentChange((value) => (value === 'accepted' ? load() : stop()))
}
