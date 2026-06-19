import { ArrowRight } from 'lucide-react'

export default function ReliableSection() {
  return (
    <section className="relative overflow-hidden bg-cream-50 border-t border-cream-200">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Global shipping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-400/80 via-bark-400/50 to-bark-400/30" />
      </div>

      <div className="relative p-8 xl:p-10 flex flex-col justify-end min-h-[260px]">
        <h2 className="font-serif font-bold text-3xl xl:text-4xl text-cream-100 leading-tight mb-3">
          Reliable.<br />Responsible.<br />Remarkable.
        </h2>
        <p className="text-xs text-cream-300 max-w-[200px] mb-5 leading-relaxed">
          Sustainable materials. Ethical practices. Premium quality.
        </p>
        <button className="flex items-center gap-2 text-xs font-medium text-gold-300 hover:text-gold-200 transition-colors group">
          Learn More
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
