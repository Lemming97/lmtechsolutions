import { hero } from '../content.js'
import TestRun from './TestRun.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <h1>{hero.headline}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="actions">
            <a className="btn btn-primary" href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
            <a className="btn btn-ghost" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
        </div>
        <TestRun {...hero.testRun} />
      </div>
    </section>
  )
}
