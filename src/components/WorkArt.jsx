// Small illustrations for the Selected Work carousel, one per project.
// Flat shapes in the brand palette, drawn for the dark result panel.
const C = {
  indigo: '#4C44B8',
  violet: '#8F88E6',
  lav: '#E3E1F7',
  mint: '#5CC9A0',
  deep: '#1E9C70',
  ink: '#1E1B4B',
}
const SPARKLE = 'M10 0C11 6 14 9 20 10C14 11 11 14 10 20C9 14 6 11 0 10C6 9 9 6 10 0Z'
const Spark = ({ x, y, s = 1, color = C.mint }) => <path d={SPARKLE} fill={color} transform={`translate(${x},${y}) scale(${s})`} />

// Proptech installer app: phone pairing with a smart lock on a door
function Installer() {
  return (
    <>
      <rect x="138" y="22" width="62" height="112" rx="6" fill="none" stroke={C.violet} strokeWidth="3" />
      <rect x="146" y="30" width="46" height="104" rx="3" fill={C.indigo} opacity=".35" />
      <rect x="178" y="70" width="14" height="26" rx="4" fill={C.mint} />
      <circle cx="185" cy="78" r="2.5" fill={C.ink} />
      <rect x="20" y="30" width="76" height="120" rx="14" fill={C.indigo} />
      <rect x="27" y="42" width="62" height="96" rx="6" fill={C.lav} />
      <rect x="49" y="35" width="18" height="3" rx="1.5" fill={C.violet} />
      <circle cx="58" cy="76" r="17" fill={C.mint} opacity=".25" />
      <rect x="49" y="74" width="18" height="15" rx="3" fill={C.deep} />
      <path d="M52 74v-5a6 6 0 0 1 12 0v5" fill="none" stroke={C.deep} strokeWidth="3" />
      <rect x="37" y="104" width="42" height="7" rx="3.5" fill={C.indigo} opacity=".35" />
      <rect x="37" y="116" width="28" height="7" rx="3.5" fill={C.indigo} opacity=".2" />
      <path d="M104 64a20 20 0 0 1 0 28M112 56a32 32 0 0 1 0 44M120 48a44 44 0 0 1 0 60" fill="none" stroke={C.mint} strokeWidth="3" strokeLinecap="round" opacity=".9" />
      <Spark x="204" y="6" s=".9" />
    </>
  )
}

// SaaS platform with three user groups around one building
function Platform() {
  const person = (x, y, color) => (
    <g transform={`translate(${x},${y})`}>
      <circle r="17" fill={color} />
      <circle cy="-4" r="5.5" fill={C.ink} />
      <path d="M-9 9a9 8 0 0 1 18 0" fill={C.ink} />
    </g>
  )
  return (
    <g transform="translate(0,-8)">
      <path d="M44 42L104 64M196 42L136 64M120 150v-22" stroke={C.violet} strokeWidth="2.5" strokeDasharray="3 6" strokeLinecap="round" />
      <rect x="92" y="40" width="56" height="88" rx="6" fill={C.indigo} />
      <path d="M92 52l28-20 28 20" fill={C.violet} />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`${r}${c}`} x={101 + c * 14} y={60 + r * 15} width="9" height="9" rx="2" fill={r === 1 && c === 1 ? C.mint : C.lav} opacity={r === 1 && c === 1 ? 1 : 0.55} />
        )),
      )}
      {person(36, 38, C.mint)}
      {person(204, 38, C.lav)}
      {person(120, 148, C.violet)}
      <Spark x="208" y="112" s=".8" />
    </g>
  )
}

// Space software: a satellite in orbit and three revenue streams merging
function Space() {
  return (
    <>
      <ellipse cx="74" cy="84" rx="66" ry="22" fill="none" stroke={C.violet} strokeWidth="2" strokeDasharray="3 6" transform="rotate(-18 74 84)" />
      <circle cx="74" cy="84" r="30" fill={C.indigo} />
      <path d="M52 70c10 4 22 3 32-4M50 94c14 5 30 4 46-6" stroke={C.violet} strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7" />
      <g transform="translate(128,48) rotate(-18)">
        <rect x="-6" y="-6" width="12" height="12" rx="2" fill={C.lav} />
        <rect x="-24" y="-4" width="15" height="8" rx="1" fill={C.mint} />
        <rect x="9" y="-4" width="15" height="8" rx="1" fill={C.mint} />
      </g>
      <path d="M150 110c18 0 22 14 40 14M150 124h40M150 138c18 0 22-14 40-14" fill="none" stroke={C.mint} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M190 124h26" stroke={C.mint} strokeWidth="5" strokeLinecap="round" />
      <path d="M212 116l9 8-9 8" fill="none" stroke={C.mint} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="30" r="2.5" fill={C.lav} />
      <circle cx="180" cy="22" r="2" fill={C.lav} />
      <Spark x="200" y="40" s=".8" />
    </>
  )
}

// Usability research: a tablet being tapped, with notes
function Research() {
  return (
    <>
      <rect x="18" y="34" width="120" height="92" rx="12" fill={C.indigo} />
      <rect x="27" y="43" width="102" height="74" rx="5" fill={C.lav} />
      <rect x="37" y="55" width="44" height="8" rx="4" fill={C.indigo} opacity=".35" />
      <rect x="37" y="70" width="64" height="20" rx="5" fill={C.mint} opacity=".45" />
      <circle cx="96" cy="80" r="16" fill="none" stroke={C.deep} strokeWidth="2.5" opacity=".6" />
      <circle cx="96" cy="80" r="7" fill={C.deep} />
      <rect x="150" y="30" width="66" height="84" rx="8" fill={C.lav} />
      <rect x="168" y="24" width="30" height="12" rx="4" fill={C.violet} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(160,${52 + i * 20})`}>
          <path d="M0 4l4 4 7-8" fill="none" stroke={C.deep} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="18" y="1" width={i === 1 ? 22 : 30} height="7" rx="3.5" fill={C.indigo} opacity=".35" />
        </g>
      ))}
      <Spark x="204" y="118" s=".8" />
    </>
  )
}

// Client solutions: a client and a clinic connected through one contact
function Client() {
  return (
    <>
      <path d="M58 92H182" stroke={C.violet} strokeWidth="2.5" strokeDasharray="3 6" strokeLinecap="round" />
      <circle cx="40" cy="92" r="26" fill={C.lav} />
      <circle cx="40" cy="85" r="8" fill={C.indigo} />
      <path d="M26 106a14 12 0 0 1 28 0" fill={C.indigo} />
      <rect x="168" y="62" width="56" height="58" rx="6" fill={C.indigo} />
      <path d="M168 66l28-18 28 18" fill={C.violet} />
      <rect x="190" y="76" width="12" height="32" rx="2" fill={C.mint} />
      <rect x="180" y="86" width="32" height="12" rx="2" fill={C.mint} />
      <circle cx="120" cy="92" r="24" fill={C.mint} />
      <circle cx="120" cy="86" r="7" fill={C.ink} />
      <path d="M108 104a12 10 0 0 1 24 0" fill={C.ink} />
      <rect x="86" y="26" width="38" height="24" rx="8" fill={C.lav} />
      <path d="M96 50l-4 9 12-9" fill={C.lav} />
      <rect x="118" y="34" width="38" height="24" rx="8" fill={C.violet} />
      <path d="M146 58l4 9-12-9" fill={C.violet} />
      <Spark x="200" y="16" s=".8" />
    </>
  )
}

// QA for digital health: a shield with a check over a heartbeat line
function Qa() {
  return (
    <>
      <path d="M10 104h50l10-24 14 46 12-32 8 10h126" fill="none" stroke={C.mint} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
      <path d="M120 18l46 17v36c0 30-20 52-46 60-26-8-46-30-46-60V35z" fill={C.indigo} />
      <path d="M120 30l34 13v28c0 23-15 40-34 46z" fill={C.violet} opacity=".35" />
      <path d="M100 74l14 14 28-30" fill="none" stroke={C.mint} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(196,40)" opacity=".9">
        <rect x="-10" y="-8" width="20" height="24" rx="10" fill={C.lav} />
        <path d="M-10 0h-7M10 0h7M-10 10h-7M10 10h7M-6-8l-4-6M6-8l4-6" stroke={C.lav} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-20-16L20 22" stroke={C.mint} strokeWidth="4" strokeLinecap="round" />
      </g>
      <Spark x="28" y="22" s=".8" />
    </>
  )
}

// Support operations: a headset, chat bubbles and a fast response clock
function Support() {
  return (
    <>
      <path d="M40 92V78a46 46 0 0 1 92 0v14" fill="none" stroke={C.violet} strokeWidth="7" strokeLinecap="round" />
      <rect x="28" y="84" width="22" height="38" rx="9" fill={C.indigo} />
      <rect x="122" y="84" width="22" height="38" rx="9" fill={C.indigo} />
      <path d="M133 122c0 14-10 18-26 18" fill="none" stroke={C.violet} strokeWidth="4" strokeLinecap="round" />
      <rect x="62" y="64" width="50" height="38" rx="10" fill={C.lav} />
      <path d="M72 102l-6 12 18-12" fill={C.lav} />
      <path d="M87 92s-11-6.5-11-13a5.6 5.6 0 0 1 11-2.6 5.6 5.6 0 0 1 11 2.6c0 6.5-11 13-11 13z" fill={C.deep} />
      <circle cx="188" cy="62" r="30" fill={C.mint} />
      <circle cx="188" cy="62" r="23" fill={C.ink} opacity=".9" />
      <path d="M188 62V46M188 62l10 7" stroke={C.mint} strokeWidth="4" strokeLinecap="round" />
      <rect x="160" y="108" width="56" height="12" rx="6" fill={C.indigo} />
      <rect x="170" y="126" width="40" height="12" rx="6" fill={C.indigo} opacity=".6" />
      <Spark x="214" y="18" s=".8" />
    </>
  )
}

const ARTS = { installer: Installer, platform: Platform, space: Space, research: Research, client: Client, qa: Qa, support: Support }

export default function WorkArt({ name }) {
  const Art = ARTS[name]
  if (!Art) return null
  return (
    <svg className="work-art" viewBox="0 0 240 160" width="240" height="160" aria-hidden="true">
      <Art />
    </svg>
  )
}
