import { useEffect } from 'react'
import { useI18n } from '../i18n.jsx'

export const LEGAL_HASHES = { legal: '#legal-notice', privacy: '#privacy-policy' }

// Turn email addresses and web addresses in plain text into links
const LINK_RE = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+|https?:\/\/[^\s]*[^\s.,])/g

function linkify(text) {
  return text.split(LINK_RE).map((part, i) => {
    if (i % 2 === 0) return part
    if (part.includes('@')) return <a key={i} href={`mailto:${part}`}>{part}</a>
    return (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer">
        {part.replace(/^https?:\/\/(www\.)?/, '')}
      </a>
    )
  })
}

// The Legal Notice and Privacy Policy pages, shown in place of the home page
export default function LegalPage({ kind }) {
  const { t } = useI18n()
  const page = t[kind]
  const ui = t.legalUi

  useEffect(() => {
    document.title = `${page.title} | ${t.site.name}`
    return () => {
      document.title = t.meta.title
    }
  }, [page.title, t.site.name, t.meta.title])

  return (
    <article className="legal">
      <div className="wrap legal-wrap">
        <a className="legal-back" href="#top">{ui.back}</a>
        <h1>{page.title}</h1>
        <p className="legal-updated">{page.updated}</p>
        {page.intro && <p className="legal-intro">{linkify(page.intro)}</p>}
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body?.map((p) => <p key={p}>{linkify(p)}</p>)}
            {s.list && (
              <ul>
                {s.list.map((item) => <li key={item}>{linkify(item)}</li>)}
              </ul>
            )}
            {s.after?.map((p) => <p key={p}>{linkify(p)}</p>)}
            {s.link && (
              <p>
                <a href={LEGAL_HASHES[s.link]}>{ui[s.link]}</a>
              </p>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}
