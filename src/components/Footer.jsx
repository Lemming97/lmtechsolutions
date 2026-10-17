import { useI18n } from '../i18n.jsx'

export default function Footer() {
  const { site } = useI18n().t
  return (
    <footer className="site">
      <div className="wrap">
        <span>&copy; {new Date().getFullYear()} {site.legalName}</span>
        <span>{site.locations}</span>
      </div>
    </footer>
  )
}
