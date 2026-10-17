import { work } from '../content.js'

export default function Work() {
  return (
    <section className="block" id="work">
      <div className="wrap">
        <h2>{work.title}</h2>
        <p className="intro">{work.intro}</p>
        <div className="cases">
          {work.items.map((item) => (
            <article className="case" key={item.title}>
              <p className="case-tags">
                <span className="area">{item.area}</span>
                <span className="sector">{item.sector}</span>
              </p>
              <p className="metric">
                <strong>{item.metric}</strong>
                <span>{item.metricLabel}</span>
              </p>
              <h3>{item.title}</h3>
              <dl>
                <dt>The challenge</dt>
                <dd>{item.problem}</dd>
                <dt>What I did</dt>
                <dd>{item.did}</dd>
              </dl>
              <ul className="skills" aria-label="Skills used">
                {item.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
