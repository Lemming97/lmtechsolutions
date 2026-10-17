import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { getConsent, onConsentOpen, setConsent } from '../consent.js'
import { LEGAL_HASHES } from './LegalPage.jsx'

// Asks for cookie consent on the first visit. Accept and Decline are given
// equal weight, as the CNIL requires. The footer link reopens it.
export default function CookieBanner() {
  const { cookieBanner: c } = useI18n().t
  const [open, setOpen] = useState(() => getConsent() === null)
  const [reopened, setReopened] = useState(false)
  const panelRef = useRef(null)

  useEffect(
    () =>
      onConsentOpen(() => {
        setReopened(true)
        setOpen(true)
      }),
    [],
  )

  // When reopened from the footer, move focus into the banner
  useEffect(() => {
    if (open && reopened) panelRef.current?.querySelector('button')?.focus()
  }, [open, reopened])

  if (!open) return null

  function choose(value) {
    setConsent(value)
    setOpen(false)
    setReopened(false)
  }

  return (
    <section className="cookie-banner" role="region" aria-label={c.label} ref={panelRef}>
      <p>
        {c.text} <a href={LEGAL_HASHES.privacy}>{c.learnMore}</a>
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn cookie-btn" onClick={() => choose('declined')}>
          {c.decline}
        </button>
        <button type="button" className="btn cookie-btn" onClick={() => choose('accepted')}>
          {c.accept}
        </button>
      </div>
    </section>
  )
}
