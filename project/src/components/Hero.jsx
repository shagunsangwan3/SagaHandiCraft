import { useState, useEffect } from 'react'
import { ArrowRight, Heart, RotateCcw, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    badge: 'IMMERSIVE 3D SHOWROOM',
    headline: 'Timeless Craft.',
    headlineItalic: 'Global Legacy.',
    sub: 'Handcrafted furniture made to be treasured.\nDesigned for beautiful living, built for generations.',
    cta: 'Explore Collection',
    ctaPath: '/collections',
    productId: 'haveli-cane-daybed',
    productName: 'Haveli Cane Daybed',
    productMats: ['Sheesham Wood', 'Handwoven Cane'],
    bg: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    product: '/WhatsApp_Image_2026-06-16_at_3.32.50_PM.jpeg',
  },
  {
    badge: 'IMMERSIVE 3D SHOWROOM',
    headline: 'Every handmade piece',
    headlineItalic: 'has a story.',
    sub: 'Discover timeless furniture crafted by skilled\nhands, designed for the world.',
    cta: 'Explore Showroom',
    ctaPath: '/collections',
    productId: 'cane-oak-dresser',
    productName: 'Cane & Oak Dresser',
    productMats: ['Oak Wood', 'Brass Hardware'],
    bg: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600',
    product: '/WhatsApp_Image_2026-06-16_at_4.08.31_PM.jpeg',
  },
]

const materials = [
  { name: 'Teak Wood', color: '#8B6914' },
  { name: 'Oak Wood', color: '#C4975A' },
  { name: 'Walnut', color: '#4A3728' },
  { name: 'Rattan', color: '#D4B882' },
  { name: 'Marble', color: '#E8E0D0' },
]

const thumbnails = [
  { src: '/WhatsApp_Image_2026-06-16_at_3.32.50_PM.jpeg', id: 'haveli-cane-daybed', label: 'Front' },
  { src: '/WhatsApp_Image_2026-06-16_at_3.32.49_PM.jpeg', id: 'haveli-cane-daybed', label: 'Detail' },
  { src: '/WhatsApp_Image_2026-06-16_at_4.08.31_PM.jpeg', id: 'cane-oak-dresser', label: 'Front' },
  { src: '/WhatsApp_Image_2026-06-16_at_4.08.32_PM_(1).jpeg', id: 'cane-oak-dresser', label: 'Angle' },
]

const avatars = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [activeMat, setActiveMat] = useState(0)
  const [wished, setWished] = useState(false)
  const [rotating, setRotating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  const handleRotate = () => {
    setRotating(true)
    setTimeout(() => setRotating(false), 800)
  }

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img key={slide.bg} src={slide.bg} alt="showroom" className="w-full h-full object-cover transition-opacity duration-700" />
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-cream-100/40" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-center">

          {/* LEFT */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-gold-500 text-lg">✦</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-bark-200 uppercase">{slide.badge}</span>
            </div>
            <h1 key={current} className="font-serif text-4xl xl:text-5xl font-bold text-bark-400 leading-tight animate-slide-up">
              {slide.headline}<br />
              <span className="italic text-gold-500">{slide.headlineItalic}</span>
            </h1>
            <p className="text-sm text-bark-200 leading-relaxed whitespace-pre-line">{slide.sub}</p>
            <Link to={slide.ctaPath} className="btn-gold inline-flex items-center gap-2.5 text-white text-sm font-medium px-6 py-3 rounded-sm">
              {slide.cta} <ArrowRight size={15} />
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => <img key={i} src={src} alt="designer" className="w-8 h-8 rounded-full border-2 border-cream-100 object-cover" />)}
              </div>
              <div>
                <p className="text-xs font-medium text-bark-400">Trusted by 1200+</p>
                <p className="text-[10px] text-bark-200">Designers &amp; Global Buyers</p>
                <div className="flex gap-0.5 mt-0.5">{[...Array(5)].map((_, i) => <span key={i} className="text-gold-400 text-[10px]">★</span>)}</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-1.5 rounded-full transition-all duration-300 ${i === current ? 'h-8 bg-gold-500' : 'h-1.5 bg-cream-400'}`} />
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 relative">
            <div className="relative">
              <div className="w-64 h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-cream-200/80">
                <img key={slide.product} src={slide.product} alt={slide.productName}
                  className={`w-full h-full object-cover transition-all duration-700 ${rotating ? 'scale-110' : 'scale-100'}`} />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-bark-300/20 rounded-full blur-lg" />
            </div>
            <button onClick={handleRotate} className="flex items-center gap-2 text-xs text-bark-200 hover:text-bark-400 transition-colors">
              <RotateCcw size={14} className={rotating ? 'animate-spin' : ''} />
              Drag to rotate
            </button>
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center hover:bg-cream-200 transition-colors">
                <ChevronLeft size={14} className="text-bark-300" />
              </button>
              {thumbnails.map((t, i) => (
                <Link key={i} to={`/product/${t.id}`}
                  className="w-14 h-11 rounded overflow-hidden border-2 border-transparent hover:border-gold-400 transition-colors flex-shrink-0 group relative">
                  <img src={t.src} alt={t.label} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 left-0 right-0 text-center text-[8px] text-white bg-bark-400/60 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">{t.label}</span>
                </Link>
              ))}
              <button className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center hover:bg-cream-200 transition-colors">
                <ChevronRight size={14} className="text-bark-300" />
              </button>
            </div>

            {/* Product card — no price */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-cream-200 w-64 xl:w-72 animate-slide-up">
              <div className="flex items-start justify-between">
                <h3 className="font-serif font-semibold text-bark-400 text-base">{slide.productName}</h3>
                <button onClick={() => setWished(!wished)}>
                  <Heart size={17} className={`transition-colors ${wished ? 'fill-gold-500 stroke-gold-500' : 'stroke-bark-200'}`} />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                {slide.productMats.map((m, i) => (
                  <span key={i} className="text-[10px] font-medium text-bark-200 after:content-['•'] after:ml-2 last:after:content-['']">{m}</span>
                ))}
              </div>
              <div className="mt-3">
                <Link to={`/product/${slide.productId}`} className="btn-gold w-full text-white text-xs font-medium px-3.5 py-2 rounded-sm flex items-center justify-center gap-1.5">
                  View Details <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-cream-200 animate-slide-in-right">
              <h4 className="font-serif font-semibold text-bark-400 text-sm mb-1">Live Materials Studio</h4>
              <p className="text-[10px] text-bark-200 mb-3">Experience textures. Real materials. Real quality.</p>
              <div className="flex items-center gap-2 flex-wrap">
                {materials.map((mat, i) => (
                  <button key={i} onClick={() => setActiveMat(i)} className="flex flex-col items-center gap-1 group">
                    <span
                      className={`w-9 h-9 rounded-full block border-2 transition-all flex items-center justify-center ${activeMat === i ? 'border-gold-500 scale-110' : 'border-transparent'}`}
                      style={{ backgroundColor: mat.color }}
                    >
                      {activeMat === i && <Check size={12} className="text-white" />}
                    </span>
                    <span className="text-[9px] text-bark-200 group-hover:text-bark-400 transition-colors">{mat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-cream-200 animate-slide-in-right">
              <div className="p-4">
                <h4 className="font-serif font-semibold text-bark-400 text-sm mb-1">
                  {current === 0 ? 'Customize Your Piece' : 'Build Your Collection'}
                </h4>
                <p className="text-[10px] text-bark-200 mb-3">
                  {current === 0 ? 'Personalize dimensions, materials & finishes.' : 'Curate furniture that defines your brand.'}
                </p>
                <Link to="/customization" className="btn-gold text-white text-xs font-medium px-4 py-2 rounded-sm inline-flex items-center gap-1.5">
                  {current === 0 ? 'Start Customizing' : 'Start Building'} <ArrowRight size={12} />
                </Link>
              </div>
              <div className="h-28 overflow-hidden">
                <img src="/WhatsApp_Image_2026-06-16_at_4.08.32_PM_(2).jpeg" alt="Product detail" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {thumbnails.map((t, i) => (
                <Link key={i} to={`/product/${t.id}`} className="aspect-square rounded-md overflow-hidden hover:ring-2 hover:ring-gold-400 transition-all">
                  <img src={t.src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
