import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Journey from './components/Journey.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import { trackPage } from './analytics.js'
import LegalPage, { LEGAL_HASHES } from './components/LegalPage.jsx'

const PAGE_FOR_HASH = Object.fromEntries(Object.entries(LEGAL_HASHES).map(([page, hash]) => [hash, page]))

// The legal pages live at #legal-notice and #privacy-policy; any other
// address shows the home page.
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const page = PAGE_FOR_HASH[hash]

  // Start legal pages at the top. Coming back to the home page from one,
  // jump to the section that was linked (the browser can't, it wasn't there yet).
  useLayoutEffect(() => {
    if (page) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else if (hash && hash !== '#top') {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else if (hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [page, hash])

  // Count a page view when moving between the home page and the legal pages
  // (after the page has set its title)
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    trackPage()
  }, [page])

  return (
    <>
      <Header />
      <main id="top">
        {page ? (
          <LegalPage kind={page} />
        ) : (
          <>
            <Hero />
            <Services />
            <Work />
            <Process />
            <Journey />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
