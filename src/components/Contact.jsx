import { useI18n } from '../i18n.jsx'

export default function Contact() {
  const { contact, site } = useI18n().t
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(contact.subject)}`
  return (
    <section className="block contact" id="contact">
      <div className="wrap">
        <div>
          <h2>{contact.title}</h2>
          <p>{contact.text}</p>
        </div>
        <div>
          <a className="btn btn-primary" href={mailto}>{contact.buttonLabel}</a>
          <a className="email" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  )
}
