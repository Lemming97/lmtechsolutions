import { useI18n } from '../i18n.jsx'
import Logo from './Logo.jsx'
import { LEGAL_HASHES } from './LegalPage.jsx'

export default function Footer() {
  const { site, ui, legalUi } = useI18n().t
  return (
    <footer className="site">
      <div className="wrap">
        <a className="footer-logo" href="#top" aria-label={`${site.name}, ${ui.home}`}>
          <Logo tone="dark" />
        </a>
        <div className="footer-copy">
          <span>&copy; {new Date().getFullYear()} {site.legalName}</span>
          <span className="footer-legal">
            <a href={LEGAL_HASHES.legal}>{legalUi.legal}</a>
            <a href={LEGAL_HASHES.privacy}>{legalUi.privacy}</a>
          </span>
        </div>
        <div className="footer-place">
          <span>{site.locations}</span>
          <a
            className="footer-social"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.linkedin}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="8" cy="8" r="1.4" fill="currentColor" />
              <path d="M8 11v6M12 17v-6M12 13.5c0-1.5 1-2.5 2.3-2.5S16 12 16 13.5V17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
