export default function Logo({ size = 'md', theme = 'dark' }) {
  const textColor = theme === 'dark' ? '#2C2218' : '#FAF5EC'
  const subColor = theme === 'dark' ? '#6B5A3E' : '#D4B882'
  const iconColor = theme === 'dark' ? '#3B5323' : '#A8C07A'
  const iconSize = size === 'sm' ? 28 : size === 'md' ? 36 : 48
  const fontSize = size === 'sm' ? 14 : size === 'md' ? 18 : 24
  const subSize = size === 'sm' ? 7 : size === 'md' ? 8 : 10
  const scale = iconSize / 48

  return (
    <div className="flex items-center gap-2.5">
      {/* Leaf / S-mark SVG icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Outer arch: from top-left, sweeps right & down, right-angle corner bottom-right */}
        <path
          d="M 16 7 L 34 7 C 43 7 45 16 45 24 C 45 38 34 46 34 52 L 27 52"
          stroke={iconColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Inner S-curve through the middle */}
        <path
          d="M 16 7 C 30 14 37 27 27 39 C 22 46 17 48 17 52"
          stroke={iconColor}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Small bottom-left arc */}
        <path
          d="M 9 34 C 9 43 14 50 24 53"
          stroke={iconColor}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="leading-none">
        <span className="block font-serif font-bold tracking-wide" style={{ fontSize, color: textColor }}>SAGA</span>
        <span className="block font-sans font-medium tracking-[0.2em] uppercase" style={{ fontSize: subSize, color: subColor }}>Handicrafts</span>
      </div>
    </div>
  )
}
