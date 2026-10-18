import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n.jsx'

// Two-tone icons: the fill is a soft tint, the outline the step's color
const ICONS = {
  bulb: <><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /><path d="M9.5 18.5h5M10.5 21h3" fill="none" /></>,
  map: <><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" /><path d="M9 4v14M15 6v14" fill="none" /></>,
  bug: <><rect x="7" y="8" width="10" height="12" rx="5" /><path d="M9.5 8a2.5 2.5 0 0 1 5 0M12 12v8M7 13H3M21 13h-4M7 17l-3 2M17 17l3 2M7 10L4 8M17 10l3-2" fill="none" /></>,
  rocket: <><path d="M12 3c3.5 2 5 5.5 5 9.5L15 16H9l-2-3.5C7 8.5 8.5 5 12 3z" /><circle cx="12" cy="9.5" r="1.8" fill="#fff" /><path d="M9 16l-2.5 3.5L9 19M15 16l2.5 3.5L15 19M12 17v4" fill="none" /></>,
  heart: <><path d="M4 5h16v11H9l-5 4z" /><path d="M12 13.5s-3-1.8-3-3.6a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 1.8-3 3.6-3 3.6z" fill="#fff" /></>,
}

// Colors follow the brand: indigo for the early steps, mint for testing and
// launch, deep indigo for support
const TONES = [
  { line: '#4338A8', fill: '#C9C5EE', ring: '#E3E1F7' },
  { line: '#4338A8', fill: '#C9C5EE', ring: '#E3E1F7' },
  { line: '#1E9C70', fill: '#A9E0CB', ring: '#DDF3EA' },
  { line: '#1E9C70', fill: '#A9E0CB', ring: '#DDF3EA' },
  { line: '#1E1B4B', fill: '#CFCBE8', ring: '#E9E7F3' },
]

function StepIcon({ name, tone, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill={tone.fill} stroke={tone.line} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[name]}
      </g>
    </svg>
  )
}

const SPARKLE = 'M10 0C11 6 14 9 20 10C14 11 11 14 10 20C9 14 6 11 0 10C6 9 9 6 10 0Z'

// Positions of the five stops along the wavy path (desktop drawing)
const XS = [90, 320, 550, 780, 1010]
const YS = [104, 56, 114, 56, 104]
const PATH =
  `M${XS[0]},${YS[0]} ` +
  XS.slice(1)
    .map((x, i) => {
      const mid = (XS[i] + x) / 2
      return `C${mid},${YS[i]} ${mid},${YS[i + 1]} ${x},${YS[i + 1]}`
    })
    .join(' ')

// An illustrated path from first idea to support, for visitors who skim
export default function Journey() {
  const { journey } = useI18n().t
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  // Stops appear one after another when the band scrolls into view
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const steps = journey.steps
  return (
    <section className={`journey${shown ? ' is-shown' : ''}`} aria-label={journey.label} ref={ref}>
      <div className="wrap">
        {/* Desktop: wavy path, left to right */}
        <svg className="journey-wide" viewBox="0 0 1100 200" role="img" aria-label={`${journey.label}: ${steps.map((s) => s.label).join(', ')}`}>
          <path className="journey-path" d={PATH} fill="none" stroke="#C9C5EE" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
          {steps.map((step, i) => (
            <g key={step.icon} transform={`translate(${XS[i]},${YS[i]})`}>
              <g className="journey-stop" style={{ '--i': i }}>
                <ellipse cy="42" rx="34" ry="8" fill="#1E1B4B" opacity=".07" />
                <rect x="-33" y="-33" width="66" height="66" rx="19" fill="#fff" stroke={TONES[i].ring} strokeWidth="4" />
                <g transform="translate(-17,-17) scale(1.4167)">
                  <g fill={TONES[i].fill} stroke={TONES[i].line} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[step.icon]}
                  </g>
                </g>
                <text y="68" textAnchor="middle" className="journey-label">{step.label}</text>
              </g>
            </g>
          ))}
          <g className="journey-stop journey-spark" style={{ '--i': 5 }}>
            <path d={SPARKLE} fill="#1E9C70" transform="translate(1052,22) scale(1.2)" />
            <path d={SPARKLE} fill="#5CC9A0" transform="translate(1080,60) scale(.6)" />
          </g>
        </svg>

        {/* Phones: the same stops, top to bottom */}
        <ol className="journey-tall">
          {steps.map((step, i) => (
            <li key={step.icon} className="journey-stop" style={{ '--i': i }}>
              <span className="journey-tile" style={{ borderColor: TONES[i].ring }}>
                <StepIcon name={step.icon} tone={TONES[i]} />
              </span>
              <span className="journey-name">{step.label}</span>
            </li>
          ))}
        </ol>

        <p className="journey-caption">{journey.caption}</p>
      </div>
    </section>
  )
}
