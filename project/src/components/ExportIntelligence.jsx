import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const destinations = [
  { name: 'USA', cx: 165, cy: 152 },
  { name: 'UK', cx: 365, cy: 98 },
  { name: 'EU', cx: 422, cy: 110 },
  { name: 'INDIA', cx: 558, cy: 182 },
  { name: 'AUSTRALIA', cx: 695, cy: 318 },
]

/* Geographically accurate simplified world map — 800×420 Mercator viewBox */
const continents = [
  // Greenland
  'M 215,18 L 258,8 L 285,18 L 288,42 L 272,55 L 245,55 L 218,45 Z',
  // North America
  'M 62,78 L 80,62 L 108,48 L 148,40 L 185,45 L 222,58 L 252,75 L 262,98 L 258,125 L 252,152 L 248,178 L 252,198 L 242,218 L 228,228 L 212,222 L 195,232 L 178,245 L 162,240 L 145,228 L 128,215 L 108,198 L 88,175 L 70,148 L 60,118 L 58,95 Z',
  // Central America
  'M 178,245 L 198,232 L 215,222 L 228,228 L 222,248 L 205,260 L 188,264 L 175,254 Z',
  // South America
  'M 168,262 L 215,250 L 252,258 L 272,278 L 280,315 L 278,352 L 268,378 L 248,394 L 222,396 L 198,386 L 178,366 L 160,338 L 150,308 L 148,275 Z',
  // Iceland
  'M 330,62 L 352,55 L 362,65 L 355,78 L 338,80 Z',
  // UK & Ireland
  'M 352,88 L 368,80 L 380,88 L 378,108 L 362,112 L 352,100 Z',
  // Scandinavia
  'M 428,38 L 450,28 L 468,38 L 468,55 L 455,58 L 435,52 Z',
  // Europe (main)
  'M 362,88 L 395,55 L 428,48 L 455,52 L 468,62 L 462,80 L 448,92 L 455,108 L 448,122 L 432,132 L 415,142 L 398,148 L 382,142 L 368,128 L 360,112 Z',
  // Iberian Peninsula
  'M 360,128 L 378,124 L 386,138 L 380,158 L 365,160 L 356,148 L 358,135 Z',
  // Russia / Siberia
  'M 455,52 L 520,40 L 618,32 L 698,28 L 748,38 L 758,58 L 748,75 L 728,80 L 618,72 L 538,80 L 498,92 L 478,100 L 462,92 L 455,72 Z',
  // Africa
  'M 365,142 L 442,135 L 478,150 L 492,175 L 498,212 L 495,252 L 488,292 L 475,328 L 450,348 L 422,352 L 398,340 L 378,315 L 365,282 L 358,245 L 358,208 L 362,178 Z',
  // Madagascar
  'M 496,270 L 510,258 L 518,278 L 514,305 L 498,310 L 490,294 Z',
  // Arabian Peninsula
  'M 488,158 L 525,148 L 540,162 L 538,188 L 522,205 L 505,208 L 490,195 Z',
  // Central Asia
  'M 468,62 L 535,55 L 608,62 L 618,72 L 538,80 L 498,92 L 480,100 L 462,92 Z',
  // South Asia (India)
  'M 535,135 L 578,128 L 600,145 L 598,172 L 582,198 L 558,215 L 535,205 L 522,185 L 522,158 Z',
  // Southeast Asia
  'M 600,145 L 650,132 L 672,150 L 665,178 L 648,195 L 625,198 L 608,185 L 598,165 Z',
  // East Asia
  'M 618,72 L 708,58 L 732,78 L 728,115 L 710,142 L 682,152 L 655,150 L 625,135 L 608,115 L 612,90 Z',
  // Japan
  'M 732,82 L 752,72 L 762,88 L 756,112 L 742,118 L 730,108 Z',
  // Australia
  'M 635,268 L 700,255 L 762,262 L 778,290 L 775,330 L 758,360 L 720,375 L 678,370 L 648,350 L 632,320 L 630,292 Z',
  // New Zealand (North + South combined)
  'M 764,320 L 778,308 L 785,328 L 778,350 L 768,348 Z',
]

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

export default function ExportIntelligence() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const countries = useCountUp(45, 1200, visible)
  const clients = useCountUp(1200, 1500, visible)
  const delivery = useCountUp(98, 1000, visible)

  return (
    <section ref={sectionRef} className="map-dark text-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(200,164,86,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative p-8 xl:p-10 flex flex-col h-full justify-between min-h-[420px]">
        <div>
          <h2 className="font-serif font-bold text-2xl text-cream-100 mb-1">Export Intelligence</h2>
          <p className="text-xs text-cream-300">Delivering handcrafted excellence to the world.</p>
        </div>

        {/* World Map SVG */}
        <div className="my-5 rounded-xl overflow-hidden border border-bark-300/20 bg-bark-500/40">
          <svg viewBox="0 0 800 420" className="w-full" style={{ height: '195px' }} preserveAspectRatio="xMidYMid meet">
            {/* Ocean background */}
            <rect x="0" y="0" width="800" height="420" fill="rgba(20,14,8,0.3)" />

            {/* Continent fills */}
            {continents.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="rgba(168,131,46,0.22)"
                stroke="rgba(200,164,86,0.5)"
                strokeWidth="0.7"
                strokeLinejoin="round"
              />
            ))}

            {/* Dashed connection lines from India */}
            {destinations.filter(d => d.name !== 'INDIA').map((d, i) => (
              <path
                key={i}
                d={`M 558,182 Q ${(558 + d.cx) / 2},${Math.min(182, d.cy) - 40} ${d.cx},${d.cy}`}
                stroke="rgba(200,164,86,0.25)"
                strokeWidth="0.9"
                strokeDasharray="4 4"
                fill="none"
              />
            ))}

            {/* Destination dots */}
            {destinations.map((d) => (
              <g key={d.name}>
                <circle cx={d.cx} cy={d.cy} r="9" fill="rgba(200,164,86,0.12)" className="animate-ping" style={{ transformOrigin: `${d.cx}px ${d.cy}px` }} />
                <circle cx={d.cx} cy={d.cy} r="5.5" fill="none" stroke="rgba(200,164,86,0.75)" strokeWidth="1" />
                <circle cx={d.cx} cy={d.cy} r="3" fill="#C8A456" />
                <text
                  x={d.cx}
                  y={d.cy - 10}
                  textAnchor="middle"
                  fill="rgba(212,184,130,0.95)"
                  fontSize="7.5"
                  fontFamily="DM Sans, sans-serif"
                  fontWeight="700"
                  letterSpacing="0.5"
                >
                  {d.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <span className="font-serif font-bold text-3xl text-cream-100">{countries}<span className="text-gold-300">+</span></span>
            <p className="text-[10px] text-cream-300 mt-0.5">Countries</p>
          </div>
          <div>
            <span className="font-serif font-bold text-3xl text-cream-100">{clients}<span className="text-gold-300">+</span></span>
            <p className="text-[10px] text-cream-300 mt-0.5">Clients</p>
          </div>
          <div>
            <span className="font-serif font-bold text-3xl text-cream-100">{delivery}<span className="text-gold-300">%</span></span>
            <p className="text-[10px] text-cream-300 mt-0.5">On-time Delivery</p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-xs font-medium text-gold-300 hover:text-gold-200 transition-colors group">
          View All Destinations
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
