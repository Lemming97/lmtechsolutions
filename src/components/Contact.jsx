import { useEffect, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import ContactModal from './ContactModal.jsx'

const OPEN_EVENT = 'lm-open-contact'

// Lets other buttons on the page (like the hero's) open the contact form
export function openContactForm() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export default function Contact() {
  const { contact, site } = useI18n().t
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, show)
    return () => window.removeEventListener(OPEN_EVENT, show)
  }, [])
  return (
    <section className="block contact" id="contact">
      <div className="wrap">
        <div>
          <h2>{contact.title}</h2>
          <p>{contact.text}</p>
        </div>
        <div>
          <button type="button" className="btn btn-primary" onClick={() => setOpen(true)} aria-haspopup="dialog">
            {contact.buttonLabel}
          </button>
          <a className="email" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
