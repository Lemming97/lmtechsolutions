import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as en from './content/en.js'
import * as fr from './content/fr.js'

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
]

const CONTENT = { en, fr }
const STORAGE_KEY = 'lm-lang'
const SITE_URL = 'https://lmtechsolutions.co'
const FADE_MS = 160 // keep in sync with the transition in index.css

// Pick the starting language: a ?lang= link wins, then the visitor's saved
// choice, then their browser language, then English.
function initialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl && CONTENT[fromUrl]) return fromUrl
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && CONTENT[saved]) return saved
  } catch {
    // storage unavailable, fall through
  }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase()
  return CONTENT[browser] ? browser : 'en'
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// The section under the top of the viewport, and where it sits, so we can
// put it back in the same place after the text changes length.
function readScrollAnchor() {
  const probe = 90 // just below the sticky header
  for (const el of document.querySelectorAll('main > section, footer')) {
    const r = el.getBoundingClientRect()
    if (r.top <= probe && r.bottom > probe) return { el, top: r.top }
  }
  return null
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // lang: the language the visitor picked (drives the switch right away)
  // shown: the language whose text is on screen (changes mid-fade)
  const [lang, setLangState] = useState(initialLanguage)
  const [shown, setShown] = useState(lang)
  const anchor = useRef(null)
  const timer = useRef(null)

  function setLang(next) {
    if (next === lang || !CONTENT[next]) return
    setLangState(next)
    clearTimeout(timer.current)
    if (prefersReducedMotion()) {
      anchor.current = readScrollAnchor()
      setShown(next)
      return
    }
    document.documentElement.classList.add('lang-fading')
    timer.current = setTimeout(() => {
      anchor.current = readScrollAnchor()
      setShown(next)
    }, FADE_MS)
  }

  // After the new text renders: keep the same section in view, then fade back in
  useLayoutEffect(() => {
    const a = anchor.current
    if (a && a.el.isConnected) {
      const drift = a.el.getBoundingClientRect().top - a.top
      if (drift) window.scrollTo({ top: window.scrollY + drift, behavior: 'instant' })
    }
    anchor.current = null
    requestAnimationFrame(() => document.documentElement.classList.remove('lang-fading'))
  }, [shown])

  useEffect(() => {
    const t = CONTENT[shown]
    document.documentElement.lang = shown
    // The legal pages set their own title
    if (!['#legal-notice', '#privacy-policy'].includes(window.location.hash)) document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    // Tell search engines which address is the main one for this language
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}/${shown === 'en' ? '' : `?lang=${shown}`}`)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', shown === 'fr' ? 'fr_FR' : 'en_US')
  }, [shown])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // storage unavailable, the choice just won't be remembered
    }
  }, [lang])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: CONTENT[shown] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Returns { lang, setLang, t }, where t holds all the copy for the language on screen
export function useI18n() {
  return useContext(LanguageContext)
}
