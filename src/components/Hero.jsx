import { useI18n } from '../i18n.jsx'
import LayersIllustration from './LayersIllustration.jsx'
import { openContactForm } from './Contact.jsx'

export default function Hero() {
  const { hero } = useI18n().t
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <h1>{hero.headline}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="actions">
            <a
              className="btn btn-primary"
              href={hero.primaryCta.href}
              aria-haspopup="dialog"
              onClick={(e) => {
                e.preventDefault()
                openContactForm()
              }}
            >
              {hero.primaryCta.label}
            </a>
            <a className="btn btn-ghost" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
        </div>
        <div className="hero-art">
          <LayersIllustration layers={hero.layers} />
        </div>
      </div>
    </section>
  )
}
