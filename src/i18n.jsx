import { createContext, useContext, useEffect, useState } from 'react'
import * as en from './content/en.js'
import * as fr from './content/fr.js'

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
]

const CONTENT = { en, fr }
const STORAGE_KEY = 'lm-lang'

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

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage)

  useEffect(() => {
    const t = CONTENT[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // storage unavailable, the choice just won't be remembered
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Returns { lang, setLang, t }, where t holds all the copy for the current language
export function useI18n() {
  return useContext(LanguageContext)
}
