export default function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      <rect x="1" y="1" width="28" height="28" rx="7" fill="#17223A" />
      <path
        d="M9 15.5l4 4 8-9"
        fill="none"
        stroke="#5FD39A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
