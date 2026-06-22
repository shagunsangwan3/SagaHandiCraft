import { useState, useRef } from 'react'
import { ArrowRight, Check, X, Mail, Upload, Phone, Loader2, AlertCircle } from 'lucide-react'
import { sendEmail } from '../utils/sendEmail'

const benefits = [
  'Competitive Wholesale Pricing',
  'Custom Size & Finish Options',
  'Private Label & Branding',
  'Dedicated Account Support',
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

export default function B2BSection() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', mobile: '',
    productType: '', description: '', otherProduct: '',
  })
  const [images, setImages] = useState([])
  const [previews, setPreviews] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const fileRef = useRef(null)

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5)
    setImages(files)
    setPreviews(files.map((f) => URL.createObjectURL(f)))
  }

  const removeImage = (i) => {
    setImages(images.filter((_, idx) => idx !== i))
    setPreviews(previews.filter((_, idx) => idx !== i))
  }

  const resetForm = () => {
    setForm({ name: '', company: '', email: '', mobile: '', productType: '', description: '', otherProduct: '' })
    setImages([])
    setPreviews([])
    setStatus('idle')
    setErrorMsg('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const productLine = form.productType === 'Other (please describe)' ? form.otherProduct : form.productType

    try {
      await sendEmail({
        subject: `B2B Inquiry from ${form.company || form.name}`,
        name: form.name,
        email: form.email,
        message: `
B2B INQUIRY — SAGA HANDICRAFTS
================================
Name:        ${form.name}
Company:     ${form.company || '—'}
Email:       ${form.email}
Mobile:      ${form.mobile || '—'}

Product Type: ${productLine}

Description / Requirements:
${form.description}

${images.length > 0 ? `Reference Images: ${images.map(f => f.name).join(', ')} (${images.length} file${images.length > 1 ? 's' : ''} — customer will email separately)` : ''}
================================
Sent from sagahandicraft.com
        `.trim(),
      })
      setStatus('success')
      setTimeout(() => {
        setOpen(false)
        resetForm()
      }, 3000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="b2b" className="bg-cream-50 p-8 xl:p-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-[10px] font-medium tracking-widest text-gold-500 uppercase mb-1.5">B2B Inquiry</p>
          <h3 className="font-serif font-bold text-xl text-bark-400 mb-1">For Architects &amp; Global Buyers</h3>
          <p className="text-[11px] text-bark-200 mb-4">Architects, Designers &amp; Global Buyers</p>
          <ul className="space-y-2.5 mb-5">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                  <Check size={9} className="text-gold-500" strokeWidth={3} />
                </div>
                <span className="text-xs text-bark-300">{b}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => setOpen(true)} className="btn-gold text-white text-sm font-medium px-5 py-2.5 rounded-sm flex items-center gap-2">
            Submit Your Inquiry <ArrowRight size={14} />
          </button>
        </div>
        <div className="h-44 rounded-xl overflow-hidden card-lift">
          <img src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Luxury interior" className="w-full h-full object-cover" />
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bark-400/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream-100 rounded-2xl shadow-2xl w-full max-w-lg relative animate-slide-up max-h-[92vh] overflow-y-auto">
            <div className="sticky top-0 bg-cream-100 px-7 pt-7 pb-4 border-b border-cream-200 z-10">
              <button onClick={() => { setOpen(false); resetForm() }} className="absolute top-5 right-5 text-bark-200 hover:text-bark-400"><X size={18} /></button>
              <h3 className="font-serif font-bold text-xl text-bark-400">B2B Inquiry</h3>
              <p className="text-xs text-bark-200 mt-0.5">Tell us what you need. We'll get back within 48 hours.</p>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center gap-3 py-12 px-7">
                <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center">
                  <Check size={26} className="text-gold-500" />
                </div>
                <p className="font-serif font-semibold text-bark-400 text-lg">Inquiry Sent!</p>
                <p className="text-xs text-bark-200 text-center">Your inquiry has been delivered to <span className="text-gold-600 font-medium">info@sagahandicraft.com</span>. We'll respond within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-7 pt-5 pb-7 space-y-4">
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

                <div>
                  <label className="text-[10px] font-medium text-bark-300 block mb-1.5">Description / Requirements *</label>
                  <textarea required rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Dimensions, materials, quantity, delivery country, timeline..."
                    className="w-full border border-cream-300 rounded-lg px-3 py-2.5 text-sm text-bark-400 placeholder-bark-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all resize-none" />
                </div>

                {/* Image upload */}
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
                  <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={handleImageChange} />
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
                      {images.length} image{images.length > 1 ? 's' : ''} selected — mention them in your description, we'll request them separately.
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5">
                    <AlertCircle size={14} className="text-red-500 flex-shrink-0" />
                    <p className="text-xs text-red-600">{errorMsg}</p>
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="btn-gold w-full text-white text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'sending' ? (
                    <><Loader2 size={14} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Mail size={14} /> Send Inquiry</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
