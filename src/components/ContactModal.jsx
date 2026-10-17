import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../i18n.jsx'
import { FORM_ENDPOINT } from '../config.js'

const EMPTY = { name: '', email: '', company: '', website: '', message: '' }
const REQUIRED = ['name', 'email', 'message']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values, errors) {
  const found = {}
  for (const key of REQUIRED) {
    if (!values[key].trim()) found[key] = errors.required
  }
  if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) found.email = errors.email
  if (values.website.trim()) {
    try {
      const url = new URL(values.website.trim())
      if (!/^https?:$/.test(url.protocol)) found.website = errors.website
    } catch {
      found.website = errors.website
    }
  }
  return found
}

// A pop-up contact form. Uses the native <dialog> element, so Escape closes it,
// focus stays inside while it's open, and it returns to the button afterwards.
export default function ContactModal({ open, onClose }) {
  const { site, contactForm: f } = useI18n().t
  const dialogRef = useRef(null)
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | failed

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      setStatus('idle')
      setErrors({})
      dialog.showModal()
      requestAnimationFrame(() => dialog.querySelector('#cf-name')?.focus())
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  // Clear the form once a message has gone out and the dialog closes
  useEffect(() => {
    if (!open && (status === 'sent' || status === 'mailto')) setValues(EMPTY)
  }, [open, status])

  function update(key) {
    return (e) => {
      setValues((v) => ({ ...v, [key]: e.target.value }))
      if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }))
    }
  }

  async function submit(e) {
    e.preventDefault()
    const found = validate(values, f.errors)
    setErrors(found)
    const first = Object.keys(EMPTY).find((k) => found[k])
    if (first) {
      dialogRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }

    const clean = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]))

    if (!FORM_ENDPOINT) {
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

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...clean, _subject: `${f.emailSubject}: ${clean.company || clean.name}` }),
      })
      setStatus(res.ok ? 'sent' : 'failed')
    } catch {
      setStatus('failed')
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
        {multiline ? <textarea rows={5} {...common} /> : <input type={type} {...common} />}
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
            <h2 id="cf-title">{f.title}</h2>
            <p className="cf-intro">{f.intro}</p>
            <div className="cf-grid">
              {field('name', { autoComplete: 'name' })}
              {field('email', { type: 'email', autoComplete: 'email' })}
              {field('company', { autoComplete: 'organization' })}
              {field('website', { type: 'url', autoComplete: 'url' })}
              {field('message', { multiline: true })}
            </div>
            {status === 'failed' && (
              <p className="cf-error cf-fail" role="alert">
                {f.failText} <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}
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
