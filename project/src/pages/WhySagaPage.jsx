import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Globe, Award, Users, Clock, Truck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const reasons = [
  {
    icon: Award,
    title: 'Heritage Craftsmanship',
    body: 'Every piece comes from artisans with generational skill. Our makers have crafted furniture for decades, and their expertise shows in every joint, finish, and form.',
  },
  {
    icon: Globe,
    title: 'Global Export Experience',
    body: 'We have delivered to over 45 countries. We understand international standards, documentation, Incoterms, and what it takes to deliver on time, every time.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    body: 'Multi-level quality checks at every stage — raw material, production, finishing, and pre-shipment. Nothing leaves our workshop unless it meets our standards.',
  },
  {
    icon: Users,
    title: 'Dedicated B2B Support',
    body: 'You get a named account manager from first inquiry through to delivery. One point of contact, clear communication, and full visibility on your order.',
  },
  {
    icon: Clock,
    title: 'On-time Delivery',
    body: '98% on-time delivery rate across 1,200+ global clients. We build realistic timelines and stick to them — because your project deadlines matter.',
  },
  {
    icon: Truck,
    title: 'Export-Ready Packaging',
    body: 'Purpose-built export packaging protects every piece through long international transit. We handle documentation, packaging, and coordinate with your freight forwarder.',
  },
]

const stats = [
  { value: '45+', label: 'Countries Served' },
  { value: '1200+', label: 'Global Clients' },
  { value: '98%', label: 'On-time Delivery' },
  { value: '15+', label: 'Years of Crafting' },
]

const testimonials = [
  {
    quote: 'SAGA is our most reliable supplier from India. The quality is consistently high and communication is excellent.',
    name: 'Sarah Mitchell',
    role: 'Interior Designer, London',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    quote: 'We\'ve placed over 20 bulk orders with SAGA. They understand what international buyers need — quality, consistency, and professionalism.',
    name: 'James Holloway',
    role: 'Retail Buyer, Sydney',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    quote: 'The custom dining set SAGA created for our hotel collection was beyond our expectations. Truly world-class craftsmanship.',
    name: 'Maria Vandenberg',
    role: 'Hospitality Procurement, Amsterdam',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
]

export default function WhySagaPage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Our Difference"
        title="Why Choose SAGA?"
        subtitle="Hundreds of furniture manufacturers exist. Here is what makes SAGA the partner of choice for architects, designers, and global buyers."
        bg="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-cream-200 rounded-2xl p-6 text-center card-lift">
              <p className="font-serif font-bold text-4xl text-bark-400">{stat.value}</p>
              <p className="text-xs text-bark-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">6 Reasons SAGA is Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <div key={i} className="bg-white border border-cream-200 rounded-2xl p-7 card-lift group hover:border-gold-300 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors">
                    <Icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif font-bold text-bark-400 text-base mb-2">{r.title}</h3>
                  <p className="text-sm text-bark-200 leading-relaxed">{r.body}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-cream-50 border border-cream-200 rounded-2xl p-7 card-lift">
                <p className="text-sm text-bark-300 leading-relaxed mb-5 font-serif italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-semibold text-bark-400">{t.name}</p>
                    <p className="text-[10px] text-bark-200">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl overflow-hidden relative">
          <img src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-bark-400/75 flex items-center justify-center">
            <div className="text-center text-cream-100 px-6">
              <h3 className="font-serif font-bold text-2xl xl:text-3xl mb-3">Ready to Source from SAGA?</h3>
              <p className="text-cream-300 text-sm mb-6 max-w-md mx-auto">Join 1,200+ global clients who trust SAGA for their premium furniture sourcing from India.</p>
              <Link to="/customization" className="btn-gold inline-flex items-center gap-2 text-white text-sm font-medium px-7 py-3.5 rounded-xl">
                Start a Conversation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
