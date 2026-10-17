import { useState } from 'react'
import { useI18n } from '../i18n.jsx'
import ContactModal from './ContactModal.jsx'

export default function Contact() {
  const { contact, site } = useI18n().t
  const [open, setOpen] = useState(false)
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
