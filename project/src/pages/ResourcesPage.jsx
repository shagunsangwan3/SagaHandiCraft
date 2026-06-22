import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Leaf, Wrench, Briefcase, BookOpen, Download } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const resources = [
  {
    icon: FileText,
    title: 'Product Catalogue',
    desc: 'Browse our complete range of handcrafted furniture, décor, and handicrafts. Available as a digital PDF for trade partners.',
    cta: 'Download Catalogue',
    path: '#',
    type: 'download',
  },
  {
    icon: Leaf,
    title: 'Sustainability Report',
    desc: 'Our approach to responsible sourcing, ethical production, and building a furniture brand that respects people and planet.',
    cta: 'Read Report',
    path: '/sustainability',
  },
  {
    icon: Wrench,
    title: 'Furniture Care Guide',
    desc: 'Detailed care and maintenance instructions to help your customers keep their SAGA furniture beautiful for decades.',
    cta: 'View Care Guide',
    path: '/furniture-care',
  },
  {
    icon: Briefcase,
    title: 'Trade Programme',
    desc: 'Information for architects, interior designers, and commercial buyers. Includes pricing tiers, sample policy, and account benefits.',
    cta: 'Join Trade Programme',
    path: '/customization',
  },
  {
    icon: BookOpen,
    title: 'Careers at SAGA',
    desc: 'We are growing. Explore opportunities to join our team in design, production, sales, logistics, and marketing.',
    cta: 'View Openings',
    path: '/careers',
  },
  {
    icon: FileText,
    title: 'Terms of Use',
    desc: 'Legal terms governing the use of the SAGA Handicrafts website and our services.',
    cta: 'Read Terms',
    path: '/terms',
  },
]

const faqs = [
  { q: 'What is the minimum order quantity?', a: 'MOQ varies by product — typically 1–4 pieces. Wholesale pricing begins from 10 pieces. Contact us for a custom quote.' },
  { q: 'Do you offer private label / white label?', a: 'Yes. We can produce furniture and décor under your brand label for retail, hospitality, or trade use.' },
  { q: 'How long does production take?', a: 'Standard lead time is 4–8 weeks depending on complexity and order volume. Rush orders can sometimes be accommodated.' },
  { q: 'Do you provide samples?', a: 'Yes, material samples and finish swatches are available for trade buyers. Contact our team to arrange.' },
  { q: 'Which countries do you ship to?', a: 'We export worldwide. Key markets include the UK, EU, USA, Australia, and the Middle East. We work with your freight forwarder or can arrange shipping.' },
  { q: 'Can I visit the workshop in Jodhpur?', a: 'Trade visits to our Jodhpur facility are welcome by appointment. Please contact us in advance to arrange.' },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Everything You Need"
        title="Resources"
        subtitle="Guides, catalogues, care instructions, and information for trade partners, designers, and buyers."
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">
        {/* Resource cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className="bg-white border border-cream-200 rounded-2xl p-7 card-lift flex flex-col">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold-500" />
                </div>
                <h3 className="font-serif font-bold text-bark-400 text-base mb-2">{r.title}</h3>
                <p className="text-sm text-bark-200 leading-relaxed flex-1 mb-5">{r.desc}</p>
                {r.type === 'download' ? (
                  <button className="flex items-center gap-2 text-xs font-medium text-gold-500 hover:text-gold-600 transition-colors group">
                    <Download size={13} />
                    {r.cta}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <Link to={r.path} className="flex items-center gap-1.5 text-xs font-medium text-gold-500 hover:text-gold-600 transition-colors group">
                    {r.cta}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-cream-50 border border-cream-200 rounded-xl p-6">
                <h4 className="font-serif font-semibold text-bark-400 text-sm mb-2">{faq.q}</h4>
                <p className="text-sm text-bark-200 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-bark-400 text-cream-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-xl text-cream-100 mb-1">Can't find what you're looking for?</h3>
            <p className="text-cream-300 text-sm">Our team is happy to help with any enquiry.</p>
          </div>
          <a href="mailto:info@sagahandicrafts.com" className="btn-gold text-white text-sm font-medium px-7 py-3 rounded-xl whitespace-nowrap flex items-center gap-2">
            Contact Us <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
