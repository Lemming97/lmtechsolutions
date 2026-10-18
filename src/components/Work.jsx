import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n.jsx'

const SPARKLE = 'M10 0C11 6 14 9 20 10C14 11 11 14 10 20C9 14 6 11 0 10C6 9 9 6 10 0Z'
const fill = (text, vars) => text.replace(/\{(\w+)\}/g, (_, k) => vars[k])

// Selected Work: filter buttons on top, then one project at a time in a
// carousel. Arrows, dots, the keyboard arrow keys and swiping all move it.
export default function Work() {
  const { work, ui } = useI18n().t
  const [filter, setFilter] = useState('all')
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const touch = useRef(null)

  const items = filter === 'all' ? work.items : work.items.filter((item) => item.kind === filter)
  const count = items.length
  const current = Math.min(index, count - 1)

  // Start from the first project whenever the filter changes
  useEffect(() => setIndex(0), [filter])

  function go(next, dir) {
    setDirection(dir)
    setIndex(((next % count) + count) % count)
  }
  const prev = () => go(current - 1, -1)
  const next = () => go(current + 1, 1)

  function onKeyDown(e) {
    if (count < 2) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  // Swipe left or right on touch screens
  function onTouchStart(e) {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  function onTouchEnd(e) {
    if (!touch.current || count < 2) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev)()
  }

  const countFor = (key) => (key === 'all' ? work.items.length : work.items.filter((i) => i.kind === key).length)

  return (
    <section className="block" id="work">
      <div className="wrap">
        <h2>{work.title}</h2>
        <p className="intro">{work.intro}</p>

        <div className="work-filters" role="group" aria-label={work.filterLabel}>
          {work.filters
            .filter((f) => countFor(f.key) > 0)
            .map((f) => (
              <button
                key={f.key}
                type="button"
                className="work-filter"
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
                <span className="work-filter-count">{countFor(f.key)}</span>
              </button>
            ))}
        </div>

        <div
          className="work-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={ui.projects}
          tabIndex={-1}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="work-slides" aria-live="polite">
            {items.map((item, i) => {
              const active = i === current
              return (
                <article
                  key={`${filter}-${item.title}`}
                  className={`work-slide${active ? ' is-active' : ''}`}
                  style={{ '--from': `${direction * 28}px` }}
                  aria-roledescription="slide"
                  aria-label={fill(ui.slideOf, { n: i + 1, total: count })}
                  aria-hidden={active ? undefined : 'true'}
                  inert={active ? undefined : ''}
                >
                  <div className="work-result">
                    <strong>{item.metric}</strong>
                    <span>{item.metricLabel}</span>
                    <svg className="work-art" width="190" height="112" viewBox="0 0 190 112" aria-hidden="true">
                      <g transform="translate(18,8)">
                        <path d="M70 0L140 32 70 64 0 32z" fill="#4C44B8" />
                        <g transform="translate(0,28)">
                          <path d="M70 0L140 32 70 64 0 32z" fill="#5CC9A0" opacity=".92" />
                        </g>
                      </g>
                      <path d={SPARKLE} fill="#5CC9A0" transform="translate(160,4) scale(.9)" />
                    </svg>
                  </div>
                  <div className="work-story">
                    <p className="work-tags">
                      <span className="work-area">{item.area}</span>
                      <span className="work-sector">{item.sector}</span>
                    </p>
                    <h3>{item.title}</h3>
                    <dl>
                      <dt>{ui.challenge}</dt>
                      <dd>{item.problem}</dd>
                      <dt>{ui.whatIDid}</dt>
                      <dd>{item.did}</dd>
                    </dl>
                    <ul className="work-skills" aria-label={ui.skillsUsed}>
                      {item.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>

          {count > 1 && (
            <div className="work-nav">
              <button type="button" className="work-arrow" onClick={prev} aria-label={ui.prevProject}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <div className="work-dots">
                {items.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    className="work-dot"
                    aria-label={fill(ui.goToProject, { n: i + 1 })}
                    aria-current={i === current ? 'true' : undefined}
                    onClick={() => go(i, i >= current ? 1 : -1)}
                  />
                ))}
              </div>
              <span className="work-count" aria-hidden="true">
                {current + 1} / {count}
              </span>
              <button type="button" className="work-arrow is-next" onClick={next} aria-label={ui.nextProject}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
