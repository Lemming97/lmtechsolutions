import { LANGUAGES, useI18n } from '../i18n.jsx'
import Logo from './Logo.jsx'

export default function Header() {
  const { lang, setLang, t } = useI18n()
  const { nav, site, ui } = t
  return (
    <header className="site">
      <div className="wrap">
        <a className="mark" href="#top" aria-label={`${site.name}, ${ui.home}`}>
          <Logo />
        </a>
        <nav className="primary" aria-label={ui.mainNav}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a className="nav-cta" href="#contact">{ui.getInTouch}</a>
            </li>
          </ul>
        </nav>
        <div className="lang-switch" role="group" aria-label={ui.language}>
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              lang={l.code}
              aria-label={l.name}
              aria-pressed={lang === l.code}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
