export default function PageHeader({ badge, title, subtitle, bg, align = 'left' }) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {bg && (
        <>
          <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-bark-400/60" />
        </>
      )}
      <div className={`relative max-w-[1440px] mx-auto px-6 lg:px-10 ${align === 'center' ? 'text-center' : ''}`}>
        {badge && (
          <span className={`inline-block text-[10px] font-medium tracking-[0.25em] uppercase mb-3 ${bg ? 'text-gold-300' : 'text-gold-500'}`}>
            {badge}
          </span>
        )}
        <h1 className={`font-serif font-bold text-4xl xl:text-5xl leading-tight ${bg ? 'text-cream-100' : 'text-bark-400'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-4 text-sm leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${bg ? 'text-cream-200' : 'text-bark-200'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
