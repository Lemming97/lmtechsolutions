import { useLayoutEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { Sparkle } from './Logo.jsx'

// Line icons for each tool category
const ICONS = {
  board: <><rect x="3" y="4" width="5" height="16" rx="1.5" /><rect x="10" y="4" width="5" height="10" rx="1.5" /><rect x="17" y="4" width="4" height="7" rx="1.5" /></>,
  palette: <><circle cx="12" cy="12" r="8.5" /><circle cx="9" cy="9.5" r="1.3" /><circle cx="14.5" cy="8.5" r="1.3" /><circle cx="15.5" cy="13.5" r="1.3" /><path d="M11 20.5c-1.5-2 0-4 2-3.5" /></>,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  sparkle: <><path d="M12 2.5c.7 4.5 2.8 6.6 7.5 7.5-4.7.9-6.8 3-7.5 7.5-.7-4.5-2.8-6.6-7.5-7.5 4.7-.9 6.8-3 7.5-7.5z" /><path d="M19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6z" /></>,
  checklist: <><path d="M9 6h11M9 12h11M9 18h11" /><path d="M3 6l1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17" /></>,
  phone: <><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></>,
}

function Icon({ name }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

// How much of each layer behind the front one stays visible, in px.
// Keep in sync with --stack-peek in index.css.
const PEEK = 56

// "Tools I work with": three stacked layers (Product, Quality, Solutions).
// Clicking a layer behind brings it down to the front, and the layers in
// front of it rotate to the back, like a carousel.
export default function Stack() {
  const { stack } = useI18n().t
  const count = stack.layers.length
  const [order, setOrder] = useState(() => stack.layers.map((_, i) => i)) // front first
  const [heights, setHeights] = useState([])
  const inners = useRef([])

  // Measure each layer's full content so the stack can take the front one's height
  useLayoutEffect(() => {
    const measure = () => setHeights(inners.current.map((el) => el?.offsetHeight || 0))
    measure()
    const ro = new ResizeObserver(measure)
    inners.current.forEach((el) => el && ro.observe(el))
    return () => ro.disconnect()
  }, [stack])

  const frontHeight = heights[order[0]] || null

  function bringForward(index) {
    const depth = order.indexOf(index)
    if (depth > 0) setOrder([...order.slice(depth), ...order.slice(0, depth)])
  }

  return (
    <div className="stack">
      <div className="stack-head">
        <h3>
          {stack.title} <Sparkle size={16} color="#1E9C70" />
        </h3>
        <p className="stack-hint">{stack.hint}</p>
      </div>
      <div
        className="stack-deck"
        style={{ height: frontHeight ? frontHeight + (count - 1) * PEEK : undefined }}
      >
        {stack.layers.map((layer, i) => {
          const depth = order.indexOf(i)
          const front = depth === 0
          return (
            <section
              key={layer.tone}
              className={`stack-layer tone-${layer.tone}${front ? ' is-front' : ''}`}
              aria-label={layer.label}
              style={{
                '--depth': depth,
                zIndex: count - depth,
                height: frontHeight || undefined,
              }}
            >
              <div className="stack-inner" ref={(el) => (inners.current[i] = el)}>
                <div className="stack-layer-head">
                  <span className="stack-layer-label">
                    <span className="stack-dot" aria-hidden="true" />
                    {layer.label}
                  </span>
                  {front ? (
                    <span className="stack-count" aria-hidden="true">
                      {i + 1} / {count}
                    </span>
                  ) : (
                    <button
                      type="button"
                      className="stack-layer-btn"
                      onClick={() => bringForward(i)}
                      aria-label={stack.showLayer.replace('{layer}', layer.label)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>
                <dl className="stack-rows">
                  {layer.groups.map((group) => (
                    <div className="stack-row" key={group.label}>
                      <dt>
                        <span className="stack-icon">
                          <Icon name={group.icon} />
                        </span>
                        {group.label}
                      </dt>
                      <dd>
                        <ul>
                          {group.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
