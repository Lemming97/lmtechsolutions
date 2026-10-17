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
              <p className="sector">{item.sector}</p>
              <h3>{item.title}</h3>
              <dl>
                <dt>The problem</dt>
                <dd>{item.problem}</dd>
                <dt>What I did</dt>
                <dd>{item.did}</dd>
                <dt>The result</dt>
                <dd className="result">{item.result}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
