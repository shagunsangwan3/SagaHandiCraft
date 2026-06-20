import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Check, ChevronRight, Mail, Package, Clock, Wrench, X } from 'lucide-react'
import { getProductById, products } from '../data/products'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)

  const [activeImg, setActiveImg] = useState(0)
  const [activeMat, setActiveMat] = useState(0)
  const [activeFinish, setActiveFinish] = useState(0)
  const [wished, setWished] = useState(false)
  const [inquireOpen, setInquireOpen] = useState(false)
  const [customizeOpen, setCustomizeOpen] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', qty: '', notes: '' })

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center gap-4 bg-cream-100">
        <p className="font-serif text-2xl text-bark-400">Product not found</p>
        <Link to="/collections" className="btn-gold text-white px-5 py-2.5 rounded-sm text-sm font-medium">
          Back to Collections
        </Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3)

  const handleInquiry = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Product Inquiry: ${product.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nQty: ${form.qty}\n\nProduct: ${product.name}\nMaterial: ${product.materialOptions[activeMat]}\nFinish: ${product.finishOptions[activeFinish]}\n\nNotes:\n${form.notes}`
    )
    window.location.href = `mailto:info@sagahandicraft.com?subject=${subject}&body=${body}`
    setInquireOpen(false)
  }

  return (
    <div className="min-h-screen bg-cream-100">
      <div className="pt-20 max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-6 text-xs text-bark-200">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/collections" className="hover:text-gold-500 transition-colors">Collections</Link>
          <ChevronRight size={12} />
          <span className="text-bark-400">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16">
          {/* Left: Images */}
          <div className="space-y-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-200">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => setWished(!wished)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <Heart size={18} className={wished ? 'fill-gold-500 stroke-gold-500' : 'stroke-bark-300'} />
              </button>
            </div>
            <div className="flex gap-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? 'border-gold-500' : 'border-transparent hover:border-cream-300'}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">{product.collection}</span>
                <span className="text-cream-300">·</span>
                <span className="text-[10px] font-medium text-bark-200 uppercase">{product.category}</span>
              </div>
              <h1 className="font-serif font-bold text-3xl xl:text-4xl text-bark-400 mb-2">{product.name}</h1>
              <div className="flex items-center gap-3">
                <span className="text-xs text-bark-200">MOQ: {product.moq} {product.moq === 1 ? 'piece' : 'pieces'}</span>
              </div>
            </div>

            <p className="text-sm text-bark-200 leading-relaxed">{product.description}</p>

            {/* Material Options */}
            <div>
              <p className="text-xs font-semibold text-bark-400 mb-3">Material: <span className="font-normal text-bark-200">{product.materialOptions[activeMat]}</span></p>
              <div className="flex flex-wrap gap-2">
                {product.materialOptions.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMat(i)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      i === activeMat ? 'bg-bark-400 text-cream-100 border-bark-400' : 'border-cream-300 text-bark-300 hover:border-gold-400'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Options */}
            <div>
              <p className="text-xs font-semibold text-bark-400 mb-3">Finish: <span className="font-normal text-bark-200">{product.finishOptions[activeFinish]}</span></p>
              <div className="flex flex-wrap gap-2">
                {product.finishOptions.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFinish(i)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      i === activeFinish ? 'bg-bark-400 text-cream-100 border-bark-400' : 'border-cream-300 text-bark-300 hover:border-gold-400'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Meta info */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 bg-cream-50 border border-cream-200 rounded-xl p-3">
                <Clock size={15} className="text-gold-500" />
                <div>
                  <p className="text-[10px] text-bark-200">Lead Time</p>
                  <p className="text-xs font-semibold text-bark-400">{product.leadTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-cream-50 border border-cream-200 rounded-xl p-3">
                <Package size={15} className="text-gold-500" />
                <div>
                  <p className="text-[10px] text-bark-200">Min. Order</p>
                  <p className="text-xs font-semibold text-bark-400">{product.moq} {product.moq === 1 ? 'piece' : 'pieces'}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setInquireOpen(true)}
                className="btn-gold flex-1 text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <Mail size={15} /> Send Inquiry
              </button>
              <button
                onClick={() => setCustomizeOpen(true)}
                className="flex-1 border border-gold-400 text-gold-500 hover:bg-gold-100/40 font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
              >
                <Wrench size={15} /> Customize
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-cream-200 pt-5">
              <p className="text-xs font-semibold text-bark-400 mb-3">Key Features</p>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-bark-300">
                    <Check size={13} className="text-gold-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Care notes */}
            <div className="bg-cream-200/50 rounded-xl p-4">
              <p className="text-[10px] font-semibold text-bark-400 uppercase tracking-widest mb-2">Care Instructions</p>
              <p className="text-xs text-bark-200 leading-relaxed">{product.careNotes}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="border-t border-cream-200 py-12">
            <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group card-lift block">
                  <div className="aspect-square rounded-xl overflow-hidden bg-cream-200 mb-3">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-serif font-semibold text-bark-400 text-sm">{p.name}</h3>
                  <p className="text-xs text-bark-200 mt-0.5">{p.materials.join(' · ')}</p>
                  <p className="text-xs text-bark-200 mt-1.5">{p.materials.join(' · ')}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <TrustBar />
      <Footer />

      {/* Inquiry Modal */}
      {inquireOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bark-400/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream-100 rounded-2xl shadow-2xl w-full max-w-lg p-7 relative animate-slide-up max-h-[90vh] overflow-y-auto">
            <button onClick={() => setInquireOpen(false)} className="absolute top-4 right-4 text-bark-200 hover:text-bark-400"><X size={18} /></button>
            <h3 className="font-serif font-bold text-xl text-bark-400 mb-1">Product Inquiry</h3>
            <p className="text-xs text-bark-200 mb-5">{product.name} — {product.materialOptions[activeMat]}, {product.finishOptions[activeFinish]}</p>
            <form onSubmit={handleInquiry} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Full Name *</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith"
                    className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Company</label>
                  <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Studio Name"
                    className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@studio.com"
                    className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Quantity Required</label>
                  <input value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} placeholder={`Min. ${product.moq}`}
                    className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Additional Notes</label>
                <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Custom dimensions, branding, delivery timeline..."
                  className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all resize-none" />
              </div>
              <button type="submit" className="btn-gold w-full text-white text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2">
                <Mail size={14} /> Send Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Customize Modal */}
      {customizeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bark-400/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream-100 rounded-2xl shadow-2xl w-full max-w-lg p-7 relative animate-slide-up">
            <button onClick={() => setCustomizeOpen(false)} className="absolute top-4 right-4 text-bark-200 hover:text-bark-400"><X size={18} /></button>
            <h3 className="font-serif font-bold text-xl text-bark-400 mb-1">Customization Request</h3>
            <p className="text-xs text-bark-200 mb-5">Tell us exactly what you need. We'll craft it to your specification.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cream-200/50 rounded-xl p-4">
                  <p className="text-[10px] text-bark-200 mb-2">Base Product</p>
                  <p className="text-sm font-semibold text-bark-400">{product.name}</p>
                </div>
                <div className="bg-cream-200/50 rounded-xl p-4">
                  <p className="text-[10px] text-bark-200 mb-2">Selected Material</p>
                  <p className="text-sm font-semibold text-bark-400">{product.materialOptions[activeMat]}</p>
                </div>
              </div>
              <p className="text-sm text-bark-300 leading-relaxed">
                We offer custom dimensions, alternative materials, bespoke finishes, private label options, and bulk order pricing.
                Our team will work with you from concept to delivery.
              </p>
              <div className="bg-gold-100/40 border border-gold-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gold-600 mb-1">What we can customize:</p>
                <ul className="text-xs text-bark-300 space-y-1">
                  {['Dimensions (W × D × H)', 'Wood species & material', 'Stain & finish colour', 'Hardware & fittings', 'Upholstery & fabric', 'Private label & branding'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><Check size={10} className="text-gold-500" />{item}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setCustomizeOpen(false)
                  setInquireOpen(true)
                }}
                className="btn-gold w-full text-white text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2"
              >
                Request Custom Quote <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
