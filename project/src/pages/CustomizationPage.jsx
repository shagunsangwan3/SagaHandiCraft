import { useState, useRef } from 'react'
import { ArrowRight, Check, Ruler, Palette, Package, Phone, X, Mail, Upload, Loader2, AlertCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'
import { sendEmail } from '../utils/sendEmail'

const steps = [
  { icon: Phone, title: 'Consultation', desc: 'Share your vision, space requirements, and aesthetic preferences with our team.' },
  { icon: Ruler, title: 'Design & Spec', desc: 'We produce detailed drawings, material samples, and a firm quote for your approval.' },
  { icon: Package, title: 'Production', desc: 'Your pieces are crafted by skilled artisans in our Jodhpur workshops with regular updates.' },
  { icon: ArrowRight, title: 'Delivery', desc: 'Export-grade packaging and your choice of shipping to anywhere in the world.' },
]

const options = [
  { label: 'Custom Dimensions', desc: 'Any W × D × H you need. We accommodate oversized, compact, and non-standard specifications.' },
  { label: 'Wood Species', desc: 'Choose from Teak, Sheesham, Mango, Reclaimed, Rosewood, Acacia, and more.' },
  { label: 'Finishes & Stains', desc: 'Natural oil, dark stains, white wash, ebony, distressed, or match your existing interior.' },
  { label: 'Hardware & Fittings', desc: 'Brass, iron, steel, rope, cane, rattan — we source and fit your preferred hardware.' },
  { label: 'Upholstery', desc: 'Choose fabric, leather, or performance outdoor textiles from our sample library.' },
  { label: 'Private Label', desc: 'Brand the furniture with your label for retail, hospitality, or trade collections.' },
  { label: 'Bulk Orders', desc: 'Volume pricing available. Tell us your quantity and we\'ll provide a competitive B2B quote.' },
  { label: 'Mixed Collections', desc: 'Combine pieces from different collections into a single cohesive order.' },
]

const productTypes = [
  'Sofa / Daybed',
  'Dresser / Chest of Drawers',
  'Dining Table',
  'Dining Chair',
  'Bed Frame',
  'Storage Cabinet',
  'Console / Sideboard',
  'Outdoor Furniture',
  'Décor & Handicrafts',
  'Other (please describe)',
]

export default function CustomizationPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', mobile: '', productType: '', otherProduct: '', description: '', qty: '' })
  const [images, setImages] = useState([])
  const [previews, setPreviews] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const fileRef = useRef(null)

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5)
    setImages(files)
    setPreviews(files.map((f) => URL.createObjectURL(f)))
  }

  const removeImage = (i) => {
    const newImages = images.filter((_, idx) => idx !== i)
    const newPreviews = previews.filter((_, idx) => idx !== i)
    setImages(newImages)
    setPreviews(newPreviews)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productLine = form.productType === 'Other (please describe)' ? form.otherProduct : form.productType
    const imgLine = images.length > 0
      ? `\n\nReference Images (${images.length}):\n${images.map((f) => f.name).join('\n')}\n(Please attach these images when you reply or resend this email)`
      : ''
    const subject = encodeURIComponent(`Custom Order Request from ${form.company || form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nMobile: ${form.mobile}\nProduct Type: ${productLine}\nQuantity: ${form.qty}\n\nRequirements:\n${form.description}${imgLine}`
    )
    window.location.href = `mailto:info@sagahandicrafts.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', company: '', mobile: '', productType: '', otherProduct: '', description: '', qty: '' })
      setImages([])
      setPreviews([])
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Made to Your Vision"
        title="Customization"
        subtitle="At SAGA, almost everything can be made to order. From a single bespoke piece to a full commercial collection — we craft it to your specification."
        bg="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">
        {/* Process */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="relative">
                  <div className="bg-white border border-cream-200 rounded-2xl p-6 h-full card-lift">
                    <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-gold-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gold-500 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-serif font-semibold text-bark-400 text-base mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-bark-200 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight size={16} className="text-cream-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* What we customize */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">What We Can Customize</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {options.map((opt, i) => (
              <div key={i} className="bg-white border border-cream-200 rounded-xl p-5 card-lift">
                <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mb-3">
                  <Check size={12} className="text-gold-500" />
                </div>
                <h4 className="font-serif font-semibold text-bark-400 text-sm mb-1.5">{opt.label}</h4>
                <p className="text-xs text-bark-200 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Request form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif font-bold text-2xl text-bark-400 mb-3">Start Your Custom Order</h2>
            <p className="text-sm text-bark-200 leading-relaxed mb-6">
              Tell us what you have in mind. Our team in Jodhpur will review your requirements and respond within 48 hours with a consultation proposal.
            </p>
            <div className="space-y-4 mb-6">
              {['Minimum lead time: 4 weeks from approved design', 'Free sample cuttings on material choices', 'CAD drawings available on request', 'Competitive bulk pricing for 10+ pieces'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={14} className="text-gold-500 flex-shrink-0" />
                  <span className="text-sm text-bark-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden h-52">
              <img src="/WhatsApp_Image_2026-06-16_at_3.32.49_PM.jpeg" alt="Craftsmanship detail" className="w-full h-full object-cover" />
            </div>
          </div>

          {submitted ? (
            <div className="bg-white border border-cream-200 rounded-2xl p-12 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                <Check size={22} className="text-gold-500" />
              </div>
              <p className="font-serif font-semibold text-bark-400">Opening your email client...</p>
              <p className="text-xs text-bark-200 text-center">Your custom order details are pre-filled.</p>
              {images.length > 0 && (
                <p className="text-xs text-gold-600 text-center">Remember to attach your {images.length} image{images.length > 1 ? 's' : ''} to the email.</p>
              )}
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-cream-200 rounded-2xl p-7 space-y-4">
            <h3 className="font-serif font-semibold text-bark-400 text-lg">Custom Project Request</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Full Name *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Company / Studio</label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Studio Name"
                  className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@studio.com"
                  className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Mobile Number</label>
                <div className="relative">
                  <Phone size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-bark-200" />
                  <input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    placeholder="+44 7700 000000"
                    className="w-full pl-8 border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
                </div>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Type of Product *</label>
              <select required value={form.productType} onChange={(e) => setForm({ ...form, productType: e.target.value })}
                className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all">
                <option value="">Select product type...</option>
                {productTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            {form.productType === 'Other (please describe)' && (
              <div>
                <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Describe the product</label>
                <input value={form.otherProduct} onChange={(e) => setForm({ ...form, otherProduct: e.target.value })}
                  placeholder="e.g. Carved wooden mirror frame..."
                  className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Quantity Required</label>
                <input value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })}
                  placeholder="e.g. 20 chairs"
                  className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" />
              </div>
              <div />
            </div>
            <div>
              <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Detailed Requirements *</label>
              <textarea required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Dimensions, materials, finish, delivery timeline, project details..."
                className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all resize-none" />
            </div>
            <div>
              <label className="text-[10px] font-medium text-bark-300 block mb-1.5">
                Reference Images <span className="text-bark-200 font-normal">(optional, up to 5)</span>
              </label>
              <button type="button" onClick={() => fileRef.current?.click()}
                className="w-full border-2 border-dashed border-cream-300 rounded-xl py-5 flex flex-col items-center gap-2 hover:border-gold-400 hover:bg-gold-50/40 transition-all">
                <Upload size={18} className="text-bark-200" />
                <p className="text-xs text-bark-300">Click to upload images</p>
                <p className="text-[10px] text-bark-200">JPG, PNG, WEBP · Max 5 images</p>
              </button>
              <input ref={fileRef} type="file" multiple accept="image/*" className="hidden"
                onChange={handleImageChange} />
              {previews.length > 0 && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {previews.map((src, i) => (
                    <div key={i} className="relative w-16 h-16">
                      <img src={src} alt="" className="w-full h-full object-cover rounded-lg border border-cream-300" />
                      <button type="button" onClick={() => removeImage(i)}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-bark-400 flex items-center justify-center shadow">
                        <X size={10} className="text-white" />
                      </button>
                    </div>
                  ))}
                  {previews.length < 5 && (
                    <button type="button" onClick={() => fileRef.current?.click()}
                      className="w-16 h-16 rounded-lg border-2 border-dashed border-cream-300 flex items-center justify-center hover:border-gold-400 transition-colors">
                      <span className="text-bark-200 text-xl leading-none">+</span>
                    </button>
                  )}
                </div>
              )}
              {images.length > 0 && (
                <p className="text-[10px] text-bark-200 mt-1.5">
                  {images.length} image{images.length > 1 ? 's' : ''} selected — attach them manually to the email that opens.
                </p>
              )}
            </div>
            <button type="submit" className="btn-gold w-full text-white text-sm font-medium py-3.5 rounded-xl flex items-center justify-center gap-2">
              <Mail size={14} /> Send Custom Request
            </button>
          </form>
          )}
        </div>
      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
