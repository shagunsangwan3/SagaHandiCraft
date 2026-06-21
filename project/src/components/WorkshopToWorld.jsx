import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '1.',
    title: 'Handcrafted\nby Artisans',
    desc: 'Every piece begins with skill & passion.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: '2.',
    title: 'Quality\nAssurance',
    desc: 'Strict multi-level quality checks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: '3.',
    title: 'Safe\nPackaging',
    desc: 'Export-grade packing for every product.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    number: '4.',
    title: 'Worldwide\nDelivery',
    desc: 'On-time, every time, anywhere in the world.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function WorkshopToWorld() {
  return (
    <section className="bg-cream-50 border-r border-cream-200 overflow-hidden">
      {/* Artisan image header */}
      <div className="relative h-52 overflow-hidden">
        <img
          src="/workshop-artisan.jpg"
          alt="Saga Handicrafts artisan leather craftsmanship"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/80 via-cream-50/40 to-transparent" />
        <div className="absolute inset-0 p-8 flex items-end">
          <h2 className="font-serif font-bold text-2xl text-bark-400">
            From Workshop to<br />Worldwide Delivery
          </h2>
        </div>
      </div>

      {/* Steps */}
      <div className="p-8">
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-gold-500">{step.icon}</div>
                {i < steps.length - 1 && (
                  <ArrowRight size={14} className="text-cream-400 hidden xl:block" />
                )}
              </div>
              <div>
                <span className="text-[10px] font-medium text-gold-500 tracking-widest">{step.number}</span>
                <h4 className="font-serif font-semibold text-sm text-bark-400 mt-0.5 whitespace-pre-line leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] text-bark-200 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
