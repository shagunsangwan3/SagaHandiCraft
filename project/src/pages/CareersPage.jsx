import { ArrowRight, Mail } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const departments = [
  { name: 'Furniture Design & Product Development', desc: 'Create pieces that blend Rajasthani heritage with global design sensibilities.' },
  { name: 'Woodworking & Production', desc: 'Skilled artisans and production specialists who bring designs to life in our Jodhpur workshops.' },
  { name: 'Sales & Retail Operations', desc: 'Build relationships with global buyers, retailers, and trade partners.' },
  { name: 'Marketing & Brand Communication', desc: 'Tell the SAGA story to the world through digital, content, and brand strategy.' },
  { name: 'Logistics & Operations', desc: 'Manage international export, packaging, supply chain, and delivery coordination.' },
  { name: 'Internships', desc: 'Structured internship programmes for students and recent graduates across all departments.' },
]

const values = [
  { title: 'Craftsmanship', desc: 'We honour skill, precision, and the art of making things well — in every discipline.' },
  { title: 'Design Excellence', desc: 'Beauty and function together. We set high standards and push for great outcomes.' },
  { title: 'Responsibility', desc: 'We take our work, our people, and our impact seriously.' },
  { title: 'Continuous Improvement', desc: 'We are always learning, growing, and getting better at what we do.' },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Join Our Team"
        title="Careers at SAGA"
        subtitle="Build with purpose. Grow with integrity. Craft for the world."
        bg="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Who We Are</span>
            <h2 className="font-serif font-bold text-3xl text-bark-400 mt-2 mb-5">Grow With Purpose. Build With Us.</h2>
            <div className="space-y-4 text-sm text-bark-200 leading-relaxed">
              <p>
                At SAGA Handicrafts, we are committed to craftsmanship, design excellence, and creating products that stand the test of time. Our work culture values creativity, responsibility, and continuous improvement.
              </p>
              <p>
                We welcome individuals who are passionate, driven, and ready to contribute to a growing brand built on quality and integrity.
              </p>
              <p>
                From the workshops of Jodhpur to our London-connected export operations, SAGA offers an environment where your work contributes directly to a brand that is shaping how the world sees Indian craft.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-48 rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artisan at work" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="bg-white border border-cream-200 rounded-xl p-4 card-lift">
                  <h4 className="font-serif font-semibold text-bark-400 text-xs mb-1">{v.title}</h4>
                  <p className="text-[10px] text-bark-200 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities */}
        <div className="mb-16">
          <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Open to Talent</span>
          <h2 className="font-serif font-bold text-2xl text-bark-400 mt-2 mb-6">Opportunities</h2>
          <p className="text-sm text-bark-200 mb-8">We are looking for talent across the following areas:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, i) => (
              <div key={i} className="bg-white border border-cream-200 rounded-2xl p-6 card-lift group hover:border-gold-300 transition-colors">
                <div className="w-8 h-1 bg-gold-400 rounded mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-serif font-semibold text-bark-400 text-sm mb-2">{dept.name}</h3>
                <p className="text-xs text-bark-200 leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <div className="bg-bark-400 text-cream-100 rounded-2xl p-8 md:p-10">
            <span className="text-[10px] font-medium tracking-widest text-gold-300 uppercase">Apply With Us</span>
            <h3 className="font-serif font-bold text-2xl text-cream-100 mt-3 mb-4">How to Apply</h3>
            <p className="text-sm text-cream-300 leading-relaxed mb-5">
              If you believe your skills align with our vision, we invite you to apply. Please share your resume and portfolio (if applicable) at:
            </p>
            <a
              href="mailto:info@sagahandicrafts.com"
              className="flex items-center gap-3 bg-cream-100/10 border border-cream-100/20 rounded-xl px-5 py-4 hover:bg-cream-100/20 transition-colors"
            >
              <Mail size={18} className="text-gold-300 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-cream-300 mb-0.5">Send your application to</p>
                <p className="text-sm font-semibold text-cream-100">info@sagahandicrafts.com</p>
              </div>
            </a>
            <p className="text-xs text-cream-300/70 mt-4">
              Include your department of interest, your experience, and attach your CV and any relevant portfolio work.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">What to Include</span>
            <h3 className="font-serif font-bold text-2xl text-bark-400 mt-2 mb-5">Your Application</h3>
            <div className="space-y-3">
              {[
                { num: '01', title: 'Your CV / Resume', desc: 'A clear overview of your experience, education, and skills.' },
                { num: '02', title: 'Portfolio (if applicable)', desc: 'For design, marketing, and craft roles — show us your best work.' },
                { num: '03', title: 'Cover Note', desc: 'Tell us why SAGA is the right place for you and what you bring to the brand.' },
                { num: '04', title: 'Department of Interest', desc: 'Let us know which area you are applying for in the email subject line.' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="font-serif font-bold text-gold-400 text-base leading-none mt-0.5 w-6">{step.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-bark-400">{step.title}</p>
                    <p className="text-xs text-bark-200 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="mailto:info@sagahandicrafts.com?subject=Career Application - SAGA Handicrafts"
              className="btn-gold mt-6 inline-flex items-center gap-2 text-white text-sm font-medium px-5 py-3 rounded-sm"
            >
              <Mail size={14} /> Apply Now
            </a>
          </div>
        </div>

        <div className="bg-cream-200/60 border border-cream-300 rounded-2xl p-6 text-center">
          <p className="font-serif italic text-bark-300 text-lg">
            "Grow With Purpose. Build With Us."
          </p>
          <p className="text-sm text-bark-200 mt-2">SAGA Handicrafts, Jodhpur, Rajasthan</p>
        </div>

      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
