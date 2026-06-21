import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const beliefs = [
  {
    title: 'Craft With a Story',
    body: 'Every handmade piece has a story — of the artisan, the material, the technique, and the place it comes from. In a world full of mass production, we believe handcraft gives furniture its quiet power. It creates warmth, imperfection, depth, and character that machines can never fully replace.',
  },
  {
    title: 'Quality Without Noise',
    body: 'True luxury does not need to shout. It is seen in the way a drawer closes, the smoothness of a finish, the balance of a frame, the strength of joinery, and the feeling a piece creates when placed in a room. At SAGA, quality is not treated as a feature. It is the foundation.',
  },
  {
    title: 'Rajasthan, Reimagined',
    body: 'Our inspiration comes from Rajasthan\'s palaces, havelis, desert landscapes, antique markets, carved doors, traditional motifs, natural textures, and living craft culture. But we do not believe heritage should remain frozen in the past. We reinterpret it for modern interiors — refined, functional, elegant, and globally relevant.',
  },
  {
    title: 'Fair & Respectful Partnerships',
    body: 'We believe business should create value for everyone connected to it — buyers, artisans, manufacturers, partners, and communities. SAGA works with a partnership mindset, building relationships based on trust, communication, transparency, and long-term growth.',
  },
  {
    title: 'Global Standards, Indian Soul',
    body: 'Our products carry Indian craft, but our approach is international. We understand that foreign buyers need professional communication, consistent quality, export-ready packaging, custom development, order clarity, and dependable delivery. That is why SAGA is built not only as a brand, but as a serious B2B partner.',
  },
]

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Jodhpur, Rajasthan"
        title="About SAGA Handicrafts"
        subtitle="A World of Craft, Character & Commerce"
        bg="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">

        {/* Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20 items-center">
          <div>
            <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Our Origin</span>
            <h2 className="font-serif font-bold text-3xl text-bark-400 mt-2 mb-5">Born in the Blue City</h2>
            <div className="space-y-4 text-sm text-bark-200 leading-relaxed">
              <p>
                SAGA HANDICRAFTS was born in Jodhpur, Rajasthan — a city where craft is not a trend, but a way of life.
              </p>
              <p>
                For generations, Rajasthan has been known for its royal architecture, carved woodwork, desert colours, antique forms, hand-finished furniture, and a culture where every object carries memory. At SAGA, we take that heritage forward with a modern eye, creating furniture, handicrafts, antiques, and décor pieces for homes, hotels, retailers, designers, and commercial spaces across the world.
              </p>
              <p className="font-serif italic text-bark-300 text-lg leading-relaxed">
                "We believe the best furniture is not only made to fill a room. It is made to give the room a soul."
              </p>
              <p>
                Our work brings together the depth of Rajasthani craftsmanship with the expectations of today's international market. Every piece is shaped with respect for material, proportion, finish, and function — whether it is a handcrafted wooden cabinet, an antique-inspired console, a carved mirror, a woven cane bed, a statement chair, or a custom collection made for a global buyer.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-64 rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Artisan crafting" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-36 rounded-xl overflow-hidden">
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Workshop" className="w-full h-full object-cover" />
              </div>
              <div className="h-36 rounded-xl overflow-hidden">
                <img src="https://images.pexels.com/photos/6508357/pexels-photo-6508357.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Handcrafted Indian furniture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-bark-400 text-cream-100 rounded-2xl p-10 md:p-14 mb-20 text-center">
          <span className="text-[10px] font-medium tracking-widest text-gold-300 uppercase">Our Mission</span>
          <h2 className="font-serif font-bold text-2xl xl:text-3xl text-cream-100 mt-3 mb-5 max-w-3xl mx-auto leading-relaxed">
            To bring the soul of Indian craftsmanship to the global premium market — while building long-term partnerships that support artisans, honour tradition, and deliver products with beauty, quality, and commercial value.
          </h2>
          <p className="text-sm text-cream-300 max-w-2xl mx-auto leading-relaxed">
            We are not here to simply sell furniture. We are here to build a bridge between Rajasthan's handmade heritage and the world's most beautiful interiors.
          </p>
        </div>

        {/* Beliefs */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Our Values</span>
            <h2 className="font-serif font-bold text-3xl text-bark-400 mt-2">What We Believe In</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((b, i) => (
              <div key={i} className="bg-white border border-cream-200 rounded-2xl p-7 card-lift">
                <div className="w-8 h-1 bg-gold-400 rounded mb-4" />
                <h3 className="font-serif font-bold text-base text-bark-400 mb-3">{b.title}</h3>
                <p className="text-sm text-bark-200 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* B2B Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Built for B2B</span>
            <h2 className="font-serif font-bold text-3xl text-bark-400 mt-2 mb-5">Built for B2B, Bulk Orders & Global Trade</h2>
            <div className="space-y-4 text-sm text-bark-200 leading-relaxed">
              <p>
                SAGA HANDICRAFTS works with B2B buyers, wholesalers, retailers, interior designers, hospitality projects, procurement teams, and importers across the UK, Europe, Australia, the United States, and other international markets.
              </p>
              <p>
                We support bulk orders, custom requirements, wholesale collections, private-label possibilities, project-based manufacturing, and long-term supply partnerships. From product selection and sampling to finishing, packing, documentation, and shipment coordination, our focus is to make sourcing from India feel refined, organised, and dependable.
              </p>
              <p className="font-serif italic text-bark-300">
                "For international buyers, trust matters as much as design. That is why we treat every order as a representation of both our name and our client's reputation."
              </p>
            </div>
            <Link to="/customization" className="btn-gold mt-6 inline-flex items-center gap-2 text-white text-sm font-medium px-5 py-3 rounded-sm">
              Start a B2B Partnership <ArrowRight size={14} />
            </Link>
          </div>
          <div className="h-72 rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Global export shipping cargo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* London Connection */}
        <div className="bg-cream-200/60 border border-cream-300 rounded-2xl p-8 md:p-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Our London Connection</span>
              <h3 className="font-serif font-bold text-2xl text-bark-400 mt-2 mb-4">Jodhpur Meets London</h3>
              <p className="text-sm text-bark-200 leading-relaxed mb-4">
                With trusted partners and a UK-based office in London, SAGA HANDICRAFTS offers global clients a more confident way to work with India.
              </p>
              <p className="text-sm text-bark-200 leading-relaxed">
                Our London presence gives buyers in the UK and Europe an accessible commercial touchpoint, while our production strength in Rajasthan allows us to deliver authentic Indian craftsmanship at scale. This connection between Jodhpur and London represents what SAGA stands for — heritage and modernity, craft and commerce, India and the world.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-cream-300 flex items-center justify-center text-bark-400 font-serif font-bold text-xl">JDH</div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-8 bg-gold-400" />
                  <span className="text-xs text-gold-500 font-medium">Connected</span>
                  <div className="w-0.5 h-8 bg-gold-400" />
                </div>
                <div className="w-20 h-20 rounded-full bg-bark-400 flex items-center justify-center text-cream-100 font-serif font-bold text-xl">LDN</div>
              </div>
              <p className="text-xs text-bark-200 mt-4">Crafted in Rajasthan<br />Connected through London</p>
            </div>
          </div>
        </div>

        {/* Promise */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Our Promise</span>
          <h2 className="font-serif font-bold text-3xl text-bark-400 mt-3 mb-6">Made for the World</h2>
          <div className="space-y-3 text-sm text-bark-200 leading-relaxed">
            <p>We promise honest materials, thoughtful design, careful craftsmanship, professional communication, and products made with purpose.</p>
            <p>We promise to respect the trust of every buyer who chooses to work with us.</p>
            <p>We promise to keep the soul of handmade craft alive while building a company ready for the global stage.</p>
          </div>
          <p className="font-serif italic text-bark-300 text-lg mt-6">
            Crafted in Rajasthan. Connected through London. Made for the World.
          </p>
        </div>

      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
