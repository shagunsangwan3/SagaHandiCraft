import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const destinations = [
  { name: 'USA', cx: 155, cy: 148, region: 'Americas' },
  { name: 'Canada', cx: 130, cy: 100, region: 'Americas' },
  { name: 'UK', cx: 358, cy: 92, region: 'Europe' },
  { name: 'Germany', cx: 415, cy: 95, region: 'Europe' },
  { name: 'France', cx: 392, cy: 108, region: 'Europe' },
  { name: 'Italy', cx: 420, cy: 120, region: 'Europe' },
  { name: 'Spain', cx: 368, cy: 122, region: 'Europe' },
  { name: 'UAE', cx: 510, cy: 172, region: 'Middle East' },
  { name: 'Saudi', cx: 492, cy: 185, region: 'Middle East' },
  { name: 'India', cx: 555, cy: 192, region: 'South Asia' },
  { name: 'Japan', cx: 700, cy: 120, region: 'East Asia' },
  { name: 'China', cx: 645, cy: 135, region: 'East Asia' },
  { name: 'Australia', cx: 672, cy: 308, region: 'Oceania' },
  { name: 'S.Africa', cx: 438, cy: 318, region: 'Africa' },
  { name: 'Brazil', cx: 218, cy: 280, region: 'Americas' },
  { name: 'Mexico', cx: 128, cy: 178, region: 'Americas' },
]

// Improved continent paths — cleaner shapes
const landMasses = [
  // North America
  { d: 'M 65,72 L 85,56 L 112,45 L 155,38 L 195,42 L 228,55 L 255,72 L 265,98 L 260,128 L 254,155 L 248,178 L 252,198 L 240,220 L 225,232 L 208,225 L 192,235 L 175,248 L 158,242 L 140,228 L 120,212 L 98,192 L 78,165 L 62,135 L 58,102 Z', key: 'na' },
  // Central America
  { d: 'M 175,248 L 200,235 L 218,225 L 228,232 L 222,252 L 205,265 L 188,268 L 175,258 Z', key: 'ca' },
  // South America
  { d: 'M 168,265 L 218,252 L 255,262 L 272,282 L 278,318 L 275,355 L 262,382 L 242,395 L 218,392 L 195,378 L 175,355 L 158,325 L 148,295 L 148,272 Z', key: 'sa' },
  // Greenland
  { d: 'M 218,18 L 262,8 L 288,20 L 290,45 L 272,58 L 245,58 L 218,46 Z', key: 'gr' },
  // Iceland
  { d: 'M 328,58 L 350,52 L 362,62 L 355,75 L 338,78 Z', key: 'ic' },
  // UK & Ireland
  { d: 'M 345,86 L 362,78 L 375,86 L 372,108 L 355,112 L 345,100 Z', key: 'uk' },
  // Scandinavia
  { d: 'M 402,32 L 428,22 L 455,32 L 462,52 L 448,62 L 428,58 L 408,48 Z', key: 'sc' },
  // Europe main
  { d: 'M 358,86 L 398,52 L 432,45 L 462,52 L 468,62 L 460,80 L 448,92 L 455,108 L 448,125 L 430,135 L 412,145 L 395,150 L 378,142 L 365,128 L 358,112 Z', key: 'eu' },
  // Iberian Peninsula
  { d: 'M 358,122 L 375,118 L 385,135 L 378,158 L 362,162 L 354,148 Z', key: 'ib' },
  // Russia / Eurasia
  { d: 'M 462,52 L 528,38 L 622,28 L 705,22 L 752,35 L 758,55 L 745,72 L 718,78 L 615,68 L 535,78 L 495,92 L 472,102 L 458,92 L 455,72 Z', key: 'ru' },
  // Africa
  { d: 'M 362,142 L 440,132 L 478,148 L 495,175 L 498,215 L 495,255 L 488,295 L 472,332 L 448,352 L 420,355 L 395,342 L 375,318 L 362,285 L 355,248 L 355,208 L 358,175 Z', key: 'af' },
  // Madagascar
  { d: 'M 495,268 L 508,258 L 518,278 L 512,305 L 496,310 L 488,292 Z', key: 'mg' },
  // Arabian Peninsula
  { d: 'M 488,158 L 525,148 L 540,162 L 538,190 L 522,208 L 505,210 L 488,195 Z', key: 'ar' },
  // Central Asia
  { d: 'M 462,62 L 535,55 L 608,62 L 618,72 L 538,80 L 498,92 L 480,100 L 462,92 Z', key: 'cA' },
  // South Asia / India
  { d: 'M 532,132 L 578,125 L 602,142 L 600,172 L 582,200 L 558,218 L 534,208 L 520,188 L 520,158 Z', key: 'in' },
  // Southeast Asia
  { d: 'M 600,142 L 652,130 L 672,148 L 665,178 L 648,198 L 622,200 L 605,185 L 598,162 Z', key: 'se' },
  // East Asia
  { d: 'M 618,68 L 710,55 L 735,75 L 730,118 L 712,145 L 682,155 L 652,152 L 622,138 L 608,115 L 612,88 Z', key: 'ea' },
  // Japan
  { d: 'M 732,78 L 752,68 L 762,85 L 756,115 L 740,120 L 728,108 Z', key: 'jp' },
  // Australia
  { d: 'M 632,265 L 698,252 L 762,260 L 778,290 L 775,332 L 758,362 L 718,378 L 678,372 L 645,350 L 630,318 L 628,290 Z', key: 'au' },
  // New Zealand
  { d: 'M 762,322 L 778,308 L 786,330 L 778,352 L 768,350 Z', key: 'nz' },
]

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

export default function ExportIntelligence() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [activePin, setActivePin] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const countries = useCountUp(45, 1400, visible)
  const clients = useCountUp(1200, 1600, visible)
  const delivery = useCountUp(98, 1000, visible)

  const INDIA = destinations.find(d => d.name === 'India')

  return (
    <section ref={sectionRef} className="map-dark text-cream-100 relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(200,164,86,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative p-8 xl:p-10 flex flex-col h-full justify-between min-h-[480px]">
        <div>
          <h2 className="font-serif font-bold text-2xl text-cream-100 mb-0.5">Export Intelligence</h2>
          <p className="text-xs text-cream-300">Jodhpur craftsmanship. Delivered to <span className="text-gold-300 font-semibold">45+ countries</span> worldwide.</p>
        </div>

        {/* Improved World Map SVG */}
        <div className="my-4 rounded-xl overflow-hidden border border-gold-500/20 relative" style={{ background: 'rgba(18,10,4,0.7)' }}>
          <svg viewBox="0 0 800 400" className="w-full" style={{ height: '220px' }} preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="oceanGrad2" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="rgba(38,24,10,0.6)" />
                <stop offset="100%" stopColor="rgba(8,4,2,0.8)" />
              </radialGradient>
              <filter id="pinGlow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Ocean background */}
            <rect x="0" y="0" width="800" height="400" fill="url(#oceanGrad2)" />

            {/* Grid lines (latitude/longitude feel) */}
            {[80, 160, 240, 320].map(y => (
              <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(200,164,86,0.05)" strokeWidth="0.5" />
            ))}
            {[100, 200, 300, 400, 500, 600, 700].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="rgba(200,164,86,0.05)" strokeWidth="0.5" />
            ))}

            {/* Continent fills */}
            {landMasses.map(({ d, key }) => (
              <path
                key={key}
                d={d}
                fill="rgba(160,120,40,0.22)"
                stroke="rgba(200,164,86,0.5)"
                strokeWidth="0.9"
                strokeLinejoin="round"
              />
            ))}

            {/* Trade route lines from India */}
            {destinations.filter(d => d.name !== 'India').map((d, i) => {
              const mx = (INDIA.cx + d.cx) / 2
              const my = Math.min(INDIA.cy, d.cy) - 60
              return (
                <g key={i}>
                  {/* Glow layer */}
                  <path
                    d={`M ${INDIA.cx},${INDIA.cy} Q ${mx},${my} ${d.cx},${d.cy}`}
                    stroke="rgba(200,164,86,0.06)"
                    strokeWidth="5"
                    fill="none"
                    filter="url(#lineGlow)"
                  />
                  {/* Dashed route */}
                  <path
                    d={`M ${INDIA.cx},${INDIA.cy} Q ${mx},${my} ${d.cx},${d.cy}`}
                    stroke="rgba(200,164,86,0.28)"
                    strokeWidth="1"
                    strokeDasharray="4 5"
                    fill="none"
                  />
                  {/* Animated dot on path - subtle */}
                  <circle r="1.2" fill="rgba(200,164,86,0.6)">
                    <animateMotion
                      dur={`${3 + (i % 4)}s`}
                      repeatCount="indefinite"
                      path={`M ${INDIA.cx},${INDIA.cy} Q ${mx},${my} ${d.cx},${d.cy}`}
                    />
                  </circle>
                </g>
              )
            })}

            {/* Destination pins */}
            {destinations.map((d) => {
              const isIndia = d.name === 'India'
              const isActive = activePin === d.name
              return (
                <g key={d.name} style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setActivePin(d.name)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {/* Pulse outer ring */}
                  {isIndia && (
                    <circle cx={d.cx} cy={d.cy} r="16"
                      fill="none"
                      stroke="rgba(200,164,86,0.2)"
                      strokeWidth="1"
                    >
                      <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                  {/* Ring */}
                  <circle cx={d.cx} cy={d.cy} r={isIndia ? 7 : isActive ? 5 : 4}
                    fill="none"
                    stroke={isIndia ? '#C8A456' : isActive ? 'rgba(200,164,86,0.9)' : 'rgba(200,164,86,0.55)'}
                    strokeWidth={isIndia ? 1.5 : 1}
                  />
                  {/* Core dot */}
                  <circle cx={d.cx} cy={d.cy} r={isIndia ? 4 : isActive ? 3 : 2.2}
                    fill={isIndia ? '#C8A456' : isActive ? '#E0C070' : 'rgba(200,164,86,0.75)'}
                    filter={isIndia || isActive ? 'url(#pinGlow)' : undefined}
                  />
                  {/* Label */}
                  <text
                    x={d.cx}
                    y={d.cy - (isIndia ? 14 : 10)}
                    textAnchor="middle"
                    fill={isIndia ? '#C8A456' : isActive ? '#E0C070' : 'rgba(210,180,120,0.85)'}
                    fontSize={isIndia ? 8 : 6.2}
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="700"
                    letterSpacing="0.5"
                  >
                    {d.name}
                  </text>
                </g>
              )
            })}

            {/* Origin label */}
            <text x={INDIA.cx} y={INDIA.cy + 18} textAnchor="middle"
              fill="rgba(200,164,86,0.5)" fontSize="5.5"
              fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="1">
              ORIGIN
            </text>
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <span className="font-serif font-bold text-3xl text-cream-100">{countries}<span className="text-gold-300">+</span></span>
            <p className="text-[10px] text-cream-300 mt-0.5 tracking-wide uppercase">Countries</p>
          </div>
          <div className="text-center border-x border-bark-300/20">
            <span className="font-serif font-bold text-3xl text-cream-100">{clients}<span className="text-gold-300">+</span></span>
            <p className="text-[10px] text-cream-300 mt-0.5 tracking-wide uppercase">Global Clients</p>
          </div>
          <div className="text-center">
            <span className="font-serif font-bold text-3xl text-cream-100">{delivery}<span className="text-gold-300">%</span></span>
            <p className="text-[10px] text-cream-300 mt-0.5 tracking-wide uppercase">On-time Delivery</p>
          </div>
        </div>

        {/* Key destinations */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['USA', 'UK', 'UAE', 'Germany', 'France', 'Japan', 'Australia', 'Canada'].map(c => (
            <span key={c} className="text-[9px] font-medium px-2 py-0.5 rounded-full border border-gold-400/30 text-gold-300 bg-gold-500/5">
              {c}
            </span>
          ))}
          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border border-cream-400/20 text-cream-400 bg-transparent">
            +37 more
          </span>
        </div>

        <button className="flex items-center gap-2 text-xs font-medium text-gold-300 hover:text-gold-200 transition-colors group">
          View All Destinations
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
