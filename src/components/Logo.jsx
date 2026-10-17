// L&M Technology Solutions logo: a lavender pill holding the name,
// with a mint sparkle on the top right corner.
export function Sparkle({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 0C11 6 14 9 20 10C14 11 11 14 10 20C9 14 6 11 0 10C6 9 9 6 10 0Z" fill={color} />
    </svg>
  )
}

// tone="dark" is for dark backgrounds like the footer
export default function Logo({ tone = 'light' }) {
  return (
    <span className={tone === 'dark' ? 'logo logo-dark' : 'logo'}>
      <span className="logo-initials">L&amp;M</span>
      <span className="logo-divider" aria-hidden="true" />
      <span className="logo-name">Technology Solutions</span>
      <span className="logo-sparkle">
        <Sparkle size={17} color={tone === 'dark' ? '#5CC9A0' : '#1E9C70'} />
      </span>
    </span>
  )
}
