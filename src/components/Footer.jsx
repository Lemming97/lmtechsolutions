import { site } from '../content.js'

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <span>&copy; {new Date().getFullYear()} {site.legalName}</span>
        <span>{site.locations}</span>
      </div>
    </footer>
  )
}
