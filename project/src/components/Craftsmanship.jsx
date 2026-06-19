import { useState } from 'react'
import { Play, X } from 'lucide-react'

const pillars = [
  {
    label: 'Generations\nof Craftsmanship',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Ethical\nSourcing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: 'Sustainable\nMaterials',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    label: 'Empowering\nCommunities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

/* Replace YOUTUBE_VIDEO_ID with your actual YouTube video ID */
const YOUTUBE_VIDEO_ID = 'LoHWR5SY4hc'

export default function Craftsmanship() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden border-b border-cream-200">
        <div className="relative h-56 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Master artisan crafting furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark-400/70 via-bark-400/20 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setVideoOpen(true)}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors group"
            >
              <Play size={20} className="text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="font-serif font-bold text-xl text-white">
              The Saga of Hands &amp; Heritage
            </h3>
            <p className="text-xs text-cream-200 mt-1">
              Behind every piece is a human story<br />passed down through generations.
            </p>
            <button
              onClick={() => setVideoOpen(true)}
              className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-gold-300 hover:text-gold-200 transition-colors"
            >
              <Play size={11} className="fill-gold-300" /> Watch Our Story
            </button>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-4 divide-x divide-cream-200 bg-cream-50">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-2 py-4 hover:bg-cream-100 transition-colors">
              <div className="text-gold-500">{p.icon}</div>
              <p className="text-[9px] font-medium text-bark-300 text-center whitespace-pre-line leading-snug">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bark-500/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setVideoOpen(false)}
        >
          <div className="w-full max-w-3xl relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-cream-200 hover:text-cream-100 flex items-center gap-1.5 text-sm"
            >
              <X size={16} /> Close
            </button>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-bark-400">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="Watch Our Story — SAGA Handicrafts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
