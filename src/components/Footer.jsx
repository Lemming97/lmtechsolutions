import { useI18n } from '../i18n.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const { site, ui } = useI18n().t
  return (
    <footer className="site">
      <div className="wrap">
        <a className="footer-logo" href="#top" aria-label={`${site.name}, ${ui.home}`}>
          <Logo tone="dark" />
        </a>
        <span className="footer-copy">&copy; {new Date().getFullYear()} {site.legalName}</span>
        <span className="footer-place">{site.locations}</span>
      </div>
    </footer>
  )
}
