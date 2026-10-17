import { about } from '../content.js'

export default function About() {
  return (
    <section className="block" id="about">
      <div className="wrap about">
        <div className="about-facts">
          <dl>
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                {Array.isArray(fact.value) ? (
                  fact.value.map((line) => <dd key={line} className="multi">{line}</dd>)
                ) : (
                  <dd>{fact.value}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
        <div className="about-copy">
          <h2>{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
