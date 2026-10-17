import { useEffect, useState } from 'react'

// The animated "test run" panel in the hero. Each check flips from RUNS to PASS
// in turn on page load. Visitors who prefer reduced motion see it finished.
export default function TestRun({ file, target, checks }) {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [passed, setPassed] = useState(reduceMotion ? checks.length : 0)

  useEffect(() => {
    if (reduceMotion) return
    const timers = checks.map((_, i) =>
      setTimeout(() => setPassed(i + 1), 500 + i * 450),
    )
    return () => timers.forEach(clearTimeout)
  }, [checks, reduceMotion])

  const finished = passed === checks.length
  const description = `A test run showing ${checks.length} checks passing: ${checks
    .map((c) => c.label)
    .join(', ')}.`

  return (
    <div className="console" role="img" aria-label={description}>
      <div className="console-bar">
        <span>{file}</span>
        <span>{target}</span>
      </div>
      <ol>
        {checks.map((check, i) => {
          const done = i < passed
          return (
            <li key={check.label} className={done ? 'done' : undefined}>
              <span className="status">{done ? 'PASS' : 'RUNS'}</span>
              <span>{check.label}</span>
              <span className="time">{check.time}</span>
            </li>
          )
        })}
      </ol>
      <div className="summary">
        {finished ? (
          <>
            Tests: <strong>{checks.length} passed</strong>, {checks.length} total
          </>
        ) : (
          'Running checks...'
        )}
      </div>
    </div>
  )
}
