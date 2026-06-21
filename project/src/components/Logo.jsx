export default function Logo({ size = 'md', theme = 'dark' }) {
  const textColor = theme === 'dark' ? '#2C2218' : '#FAF5EC'
  const subColor = theme === 'dark' ? '#6B5A3E' : '#D4B882'
  const iconSize = size === 'sm' ? 28 : size === 'md' ? 36 : 48
  const fontSize = size === 'sm' ? 14 : size === 'md' ? 18 : 24
  const subSize = size === 'sm' ? 7 : size === 'md' ? 8 : 10

  return (
    <div className="flex items-center gap-2.5">
      {/* Actual Saga logo image */}
      <img
        src="/saga-logo-new.png"
        alt="Saga Handicrafts Logo"
        style={{ width: iconSize, height: iconSize, objectFit: 'contain', flexShrink: 0 }}
      />
      <div className="leading-none">
        <span className="block font-serif font-bold tracking-wide" style={{ fontSize, color: textColor }}>SAGA</span>
        <span className="block font-sans font-medium tracking-[0.2em] uppercase" style={{ fontSize: subSize, color: subColor }}>Handicrafts</span>
      </div>
    </div>
  )
}
