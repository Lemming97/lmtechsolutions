import { services } from '../content.js'

export default function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <h2>{services.title}</h2>
        <p className="intro">{services.intro}</p>
        <div className="services">
          {services.items.map((item) => (
            <article className="service" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
