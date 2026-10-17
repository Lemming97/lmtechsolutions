import { nav, site } from '../content.js'
import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <a className="mark" href="#top" aria-label={`${site.name}, home`}>
          <Logo />
          {site.name}
        </a>
        <nav className="primary" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a className="nav-cta" href="#contact">Get in touch</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
