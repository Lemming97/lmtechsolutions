import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../i18n.jsx'
import { CONFIRMATION_SCRIPT_URL, CONFIRMATION_TOKEN, WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '../config.js'

const EMPTY = { name: '', email: '', company: '', website: '', message: '' }
const FIELDS = Object.keys(EMPTY)
const REQUIRED = ['name', 'email', 'company', 'website', 'message']
const LIMITS = { name: 100, email: 254, company: 120, website: 200, message: 5000 }
const MESSAGE_MIN = 20
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/
const SEND_TIMEOUT_MS = 15000

const fill = (text, vars) => text.replace(/\{(\w+)\}/g, (_, k) => vars[k])

// Turn "acme.com" or "www.acme.com" into "https://acme.com"; returns null if
// the text isn't a usable web address.
export function normalizeWebsite(raw) {
  const text = raw.trim()
  if (!text) return ''
  const withScheme = /^https?:\/\//i.test(text) ? text : `https://${text}`
  try {
    const url = new URL(withScheme)
    const host = url.hostname
    const validHost = /^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(host) && !host.split('.').some((p) => p.startsWith('-') || p.endsWith('-'))
    return validHost && !/\s/.test(text) ? url.href.replace(/\/$/, '') : null
  } catch {
    return null
  }
}

// Ask the Google Apps Script to email the visitor a confirmation. It runs in the
// background: if it fails, the visitor has still reached you through Web3Forms.
function sendConfirmation(clean, lang) {
  if (!CONFIRMATION_SCRIPT_URL) return
  fetch(CONFIRMATION_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      token: CONFIRMATION_TOKEN,
      lang,
      name: clean.name,
      email: clean.email,
      company: clean.company,
      message: clean.message,
    }),
  }).catch(() => {})
}

// Returns the error message for one field, or undefined if it's fine
function checkField(key, value, msgs) {
  const v = value.trim()
  if (REQUIRED.includes(key) && !v) return msgs.required
  if (!v) return undefined
  if (v.length > LIMITS[key]) return fill(msgs.tooLong, { max: LIMITS[key] })
  if (key === 'name' && v.length < 2) return msgs.nameShort
  if (key === 'email' && !EMAIL_RE.test(v)) return msgs.email
  if (key === 'website' && normalizeWebsite(v) === null) return msgs.website
  if (key === 'message' && v.length < MESSAGE_MIN) return fill(msgs.messageShort, { min: MESSAGE_MIN })
  return undefined
}

function validate(values, msgs) {
  const found = {}
  for (const key of FIELDS) {
    const err = checkField(key, values[key], msgs)
    if (err) found[key] = err
  }
  return found
}

// A pop-up contact form. Uses the native <dialog> element, so Escape closes it,
// focus stays inside while it's open, and it returns to the button afterwards.
export default function ContactModal({ open, onClose }) {
  const { lang, t } = useI18n()
  const { site, contactForm: f, legalUi } = t
  const dialogRef = useRef(null)
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [showSummary, setShowSummary] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | failed
  const [failure, setFailure] = useState('') // offline | timeout | rateLimit | other
  const summaryRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      setStatus('idle')
      setErrors({})
      setTouched({})
      setShowSummary(false)
      setSubmitted(false)
      dialog.showModal()
      requestAnimationFrame(() => dialog.querySelector('#cf-name')?.focus())
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  // Clear the form once a message has gone out and the dialog closes
  useEffect(() => {
    if (!open && (status === 'sent' || status === 'mailto')) {
      setValues(EMPTY)
      setTouched({})
    }
  }, [open, status])

  // Errors appear when a visitor leaves a field, then update live as they fix it
  function update(key) {
    return (e) => {
      const value = e.target.value
      setValues((v) => ({ ...v, [key]: value }))
      if (touched[key] || errors[key]) {
        setErrors((err) => ({ ...err, [key]: checkField(key, value, f.errors) }))
      }
      if (status === 'failed') setStatus('idle')
    }
  }

  function leave(key) {
    return (e) => {
      setTouched((tch) => ({ ...tch, [key]: true }))
      let value = e.target.value
      if (key === 'website' && value.trim()) {
        const normalized = normalizeWebsite(value)
        if (normalized) {
          value = normalized
          setValues((v) => ({ ...v, website: normalized }))
        }
      }
      // Don't nag about empty required fields until the visitor tries to send
      const err = checkField(key, value, f.errors)
      const emptyRequired = !value.trim() && REQUIRED.includes(key)
      setErrors((prev) => ({ ...prev, [key]: emptyRequired && !submitted ? undefined : err }))
    }
  }

  async function submit(e) {
    e.preventDefault()
    if (status === 'sending') return
    setSubmitted(true)
    const found = validate(values, f.errors)
    setErrors(found)
    setTouched(Object.fromEntries(FIELDS.map((k) => [k, true])))
    if (FIELDS.some((k) => found[k])) {
      setShowSummary(true)
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    setShowSummary(false)

    const clean = Object.fromEntries(FIELDS.map((k) => [k, values[k].trim()]))
    if (clean.website) clean.website = normalizeWebsite(clean.website)
    // Hidden spam trap: real visitors never see or fill this field
    if (e.target.elements.botcheck?.checked) {
      setStatus('sent')
      return
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      const details = [
        `${f.fields.name}: ${clean.name}`,
        `${f.fields.email}: ${clean.email}`,
        clean.company && `${f.fields.company}: ${clean.company}`,
        clean.website && `${f.fields.website}: ${clean.website}`,
      ].filter(Boolean)
      const body = `${details.join('\n')}\n\n${clean.message}`
      const subject = clean.company ? `${f.emailSubject}: ${clean.company}` : f.emailSubject
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      setFailure('offline')
      setStatus('failed')
      return
    }

    setStatus('sending')
    setFailure('')
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS)
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${f.emailSubject}: ${clean.company}`,
          from_name: 'L&M Technology Solutions website',
          name: clean.name,
          email: clean.email,
          company: clean.company,
          website: clean.website,
          message: clean.message,
          language: lang,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) {
        setStatus('sent')
        sendConfirmation(clean, lang)
      } else {
        setFailure(res.status === 429 ? 'rateLimit' : 'other')
        setStatus('failed')
      }
    } catch (err) {
      const offline = typeof navigator !== 'undefined' && navigator.onLine === false
      setFailure(err?.name === 'AbortError' ? 'timeout' : offline ? 'offline' : 'other')
      setStatus('failed')
    } finally {
      clearTimeout(timer)
    }
  }

  const done = status === 'sent' || status === 'mailto'

  function field(key, { type = 'text', autoComplete, multiline = false } = {}) {
    const required = REQUIRED.includes(key)
    const id = `cf-${key}`
    const errorId = `${id}-error`
    const common = {
      id,
      name: key,
      value: values[key],
      onChange: update(key),
      onBlur: leave(key),
      maxLength: LIMITS[key] + 50,
      'aria-invalid': errors[key] ? 'true' : undefined,
      'aria-describedby': errors[key] ? errorId : undefined,
      required,
      placeholder: f.placeholders[key],
      autoComplete,
    }
    return (
      <div className={`cf-field${multiline ? ' cf-wide' : ''}`}>
        <label htmlFor={id}>
          {f.fields[key]}
          <span className="cf-hint">{required ? f.required : f.optional}</span>
        </label>
        {multiline ? <textarea rows={5} {...common} /> : <input type={key === 'website' ? 'text' : type} inputMode={key === 'website' ? 'url' : undefined} {...common} />}
        {multiline && (
          <p className={`cf-count${values[key].length > LIMITS[key] ? ' over' : ''}`} aria-hidden="true">
            {fill(f.charCount, { count: values[key].length, max: LIMITS[key] })}
          </p>
        )}
        {errors[key] && (
          <p className="cf-error" id={errorId}>
            {errors[key]}
          </p>
        )}
      </div>
    )
  }

  // Rendered at the end of <body> so it doesn't inherit the dark contact section's styles
  return createPortal(
    <dialog
      ref={dialogRef}
      className="cf-dialog"
      aria-labelledby="cf-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
    >
      <div className="cf-panel">
        <button type="button" className="cf-close" onClick={onClose} aria-label={f.close}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {done ? (
          <div className="cf-done" role="status">
            <svg width="44" height="44" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 0C11 6 14 9 20 10C14 11 11 14 10 20C9 14 6 11 0 10C6 9 9 6 10 0Z" fill="#1E9C70" />
            </svg>
            <h2 id="cf-title">{status === 'sent' ? f.successTitle : f.mailtoTitle}</h2>
            <p>{status === 'sent' ? f.successText : f.mailtoText}</p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              {f.close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <input type="checkbox" name="botcheck" className="cf-trap" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <h2 id="cf-title">{f.title}</h2>
            <p className="cf-intro">{f.intro}</p>
            {showSummary && FIELDS.some((k) => errors[k]) && (
              <div className="cf-summary" role="alert" tabIndex={-1} ref={summaryRef}>
                <p>{f.errors.summary}</p>
                <ul>
                  {FIELDS.filter((k) => errors[k]).map((k) => (
                    <li key={k}>
                      <a
                        href={`#cf-${k}`}
                        onClick={(e) => {
                          e.preventDefault()
                          dialogRef.current?.querySelector(`#cf-${k}`)?.focus()
                        }}
                      >
                        {f.fields[k]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="cf-grid">
              {field('name', { autoComplete: 'name' })}
              {field('email', { type: 'email', autoComplete: 'email' })}
              {field('company', { autoComplete: 'organization' })}
              {field('website', { type: 'url', autoComplete: 'url' })}
              {field('message', { multiline: true })}
            </div>
            {status === 'failed' && (
              <p className="cf-error cf-fail" role="alert">
                {failure === 'offline' && f.failOffline}
                {failure === 'timeout' && f.failTimeout}
                {(failure === 'rateLimit' || failure === 'other' || !failure) && (
                  <>
                    {failure === 'rateLimit' ? f.failRateLimit : f.failText}{' '}
                    <a href={`mailto:${site.email}`}>{site.email}</a>.
                  </>
                )}
              </p>
            )}
            <p className="cf-privacy">
              {legalUi.formNote} <a href="#privacy-policy" onClick={onClose}>{legalUi.privacy}</a>.
            </p>
            <div className="cf-actions">
              <button type="button" className="btn btn-ghost" onClick={onClose}>
                {f.cancel}
              </button>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? f.sending : f.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>,
    document.body,
  )
}
