import { useId, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { Sparkle } from './Logo.jsx'

const ICONS = {
  brain: <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" />,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  cap: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v5" /></>,
  rocket: <><path d="M12 3c3.5 2 5 5.5 5 9.5L15 16H9l-2-3.5C7 8.5 8.5 5 12 3z" /><circle cx="12" cy="9.5" r="1.8" /><path d="M9 16l-2.5 3.5L9 19M15 16l2.5 3.5L15 19" /></>,
}

const SPARKLE = 'M10 0C11 6 14 9 20 10C14 11 11 14 10 20C9 14 6 11 0 10C6 9 9 6 10 0Z'
const SIDE_ORDER = ['user', 'code', 'release', 'business']

// The four sides of a product, drawn as one diamond
function Diamond() {
  return (
    <svg className="about-diamond" width="132" height="132" viewBox="-66 -66 132 132" aria-hidden="true">
      <path d="M0-62L0 0-62 0z" fill="#8F88E6" />
      <path d="M0-62L62 0 0 0z" fill="#1E9C70" />
      <path d="M0 0L62 0 0 62z" fill="#5CC9A0" />
      <path d="M-62 0L0 0 0 62z" fill="#4338A8" />
      <path d={SPARKLE} fill="#fff" transform="translate(-10,-10)" />
    </svg>
  )
}

// About: a short intro, the career path tagged by the side of the product
// each step built, and the full story that opens in place
export default function About() {
  const { about } = useI18n().t
  const [open, setOpen] = useState(false)
  const storyId = useId()

  return (
    <section className="block" id="about">
      <div className="wrap about">
        <div className="about-intro">
          <h2>{about.title}</h2>
          <p className="about-lead">{about.intro}</p>

          <div className="about-sides">
            <Diamond />
            <div>
              <p className="about-sides-title">{about.sidesTitle}</p>
              <ul className="about-key">
                {SIDE_ORDER.map((side) => (
                  <li key={side} className={`side-${side}`}>
                    <i aria-hidden="true" />
                    {about.sides[side]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <dl className="about-facts">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            className="about-toggle"
            aria-expanded={open}
            aria-controls={storyId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? about.less : about.more}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        <ol className="about-path" aria-label={about.pathLabel}>
          {about.path.map((step) => (
            <li key={step.title} className={`side-${step.side}`}>
              <span className="about-step-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[step.icon]}
                </svg>
              </span>
              <div>
                <h3>
                  {step.title} <span className="about-tag">{about.sides[step.side]}</span>
                </h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
          <li className="is-today">
            <span className="about-step-icon" aria-hidden="true">
              <Sparkle size={20} color="#5CC9A0" />
            </span>
            <div>
              <h3>
                {about.today.title} <span className="about-tag">{about.sides.all}</span>
              </h3>
              <p>{about.today.text}</p>
            </div>
          </li>
        </ol>

        <div className={`about-story${open ? ' is-open' : ''}`} id={storyId} hidden={!open}>
          <div className="about-story-rows">
            {about.story.map((part) => (
              <div className="about-story-row" key={part.heading}>
                <h3>{part.heading}</h3>
                <p>{part.text}</p>
              </div>
            ))}
          </div>
          <aside className="about-details">
            {about.details.map((group) => (
              <div key={group.heading}>
                <h3>{group.heading}</h3>
                {group.items.map(([strong, text]) => (
                  <p key={strong + text}>
                    {strong && <strong>{strong}</strong>}
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
