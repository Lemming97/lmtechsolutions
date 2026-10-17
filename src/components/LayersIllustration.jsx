// Hero illustration: three stacked layers showing how the work fits together.
// Product strategy on top, quality in the middle, client solutions as the base.
// Labels come from content.js (hero.layers), top layer first.

const INK = '#1E1B4B'
const PRI = '#4338A8'
const MINT = '#5CC9A0'
const MINT_DARK = '#1E9C70'
const LAV = '#C9C4F2'
const LAV_DARK = '#9C93EC'
const RULE = '#DCDAEE'

const SPARKLE = 'M10 0C11 6 14 9 20 10C14 11 11 14 10 20C9 14 6 11 0 10C6 9 9 6 10 0Z'

// One isometric slab centered at (260, cy)
function Slab({ cy, top, left, right }) {
  const cx = 260
  const w = 150
  const h = 75
  const t = 18
  return (
    <>
      <polygon points={`${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + t} ${cx - w},${cy + t}`} fill={left} />
      <polygon points={`${cx},${cy + h} ${cx + w},${cy} ${cx + w},${cy + t} ${cx},${cy + h + t}`} fill={right} />
      <polygon points={`${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`} fill={top} />
    </>
  )
}

function Note({ x, y, color }) {
  return <polygon points={`${x},${y - 10} ${x + 18},${y - 1} ${x},${y + 8} ${x - 18},${y - 1}`} fill={color} />
}

function Label({ y, title, text }) {
  return (
    <g className="layer-label">
      <path d={`M412 ${y}h40`} stroke={RULE} strokeWidth="1.5" />
      <text x="460" y={y - 2} className="layer-title">{title}</text>
      <text x="460" y={y + 15} className="layer-text">{text}</text>
    </g>
  )
}

export default function LayersIllustration({ layers }) {
  const [product, quality, solutions] = layers
  const description = `An illustration of three stacked layers: ${layers
    .map((l) => `${l.title}, ${l.text.toLowerCase()}`)
    .join('; ')}.`

  return (
    <svg
      className="layers"
      viewBox="60 20 560 500"
      role="img"
      aria-label={description}
    >
      {/* Base layer: client solutions */}
      <g className="layer layer-3">
        <Slab cy={420} top="#E3E1F7" left="#B8B1EF" right="#CEC9F5" />
        <g transform="translate(0,75)">
          <rect x="190" y="306" width="46" height="30" rx="9" fill={PRI} />
          <path d="M200 336l-4 9 12-9" fill={PRI} />
          <rect x="250" y="318" width="40" height="26" rx="8" fill="#fff" stroke={PRI} strokeWidth="2.5" />
          <path d="M284 344l4 8 -11-8" fill="#fff" stroke={PRI} strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="320" cy="322" r="11" fill={LAV_DARK} />
          <path d="M304 350c2-10 9-15 16-15s14 5 16 15" fill={LAV_DARK} />
        </g>
        <Label y={420} title={solutions.title} text={solutions.text} />
      </g>

      {/* Middle layer: quality */}
      <g className="layer layer-2">
        <Slab cy={280} top="#DDF4EB" left="#9ED9C3" right="#BDE8D8" />
        <g transform="translate(0,40)">
          <rect x="215" y="183" width="42" height="52" rx="5" fill="#fff" stroke={MINT_DARK} strokeWidth="2.5" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path
                d={`M222 ${195 + i * 13}l3 3 6-6`}
                fill="none"
                stroke={MINT_DARK}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d={`M236 ${194 + i * 13}h14`} stroke={RULE} strokeWidth="3" strokeLinecap="round" />
            </g>
          ))}
          <circle cx="296" cy="214" r="15" fill="#fff" stroke={MINT_DARK} strokeWidth="4" />
          <path d="M307 225l12 12" stroke={MINT_DARK} strokeWidth="5" strokeLinecap="round" />
        </g>
        <Label y={280} title={quality.title} text={quality.text} />
      </g>

      {/* Top layer: product */}
      <g className="layer layer-1">
        <Slab cy={140} top="#F1F0FB" left={LAV} right="#DCD9F7" />
        <g transform="translate(0,5)">
          <Note x={205} y={128} color="#FFE9A8" />
          <Note x={245} y={108} color="#D6F2E7" />
          <Note x={250} y={138} color={LAV} />
          <Note x={290} y={122} color="#FFE9A8" />
          <path d="M318 132V82" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <path d="M318 82l26 9-26 9z" fill={PRI} />
        </g>
        <Label y={140} title={product.title} text={product.text} />
      </g>

      {/* Sparkle */}
      <g className="layers-sparkle">
        <circle cx="385" cy="58" r="26" fill={INK} />
        <path transform="translate(372,45) scale(1.3)" d={SPARKLE} fill={MINT} />
      </g>
    </svg>
  )
}
