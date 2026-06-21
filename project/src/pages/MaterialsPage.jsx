import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const materials = [
  {
    name: 'Teak Wood',
    origin: 'India / Myanmar',
    color: '#8B6914',
    img: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Naturally water-resistant', 'Extremely durable (50+ years)', 'Gorgeous golden-brown grain', 'Ideal for outdoor & indoor use'],
    description: 'Teak is the king of hardwoods. Prized for its natural oils that resist moisture, rot, and insects without treatment, it is the premier choice for long-lasting furniture. Its warm golden-brown colour deepens beautifully with age.',
    uses: 'Chairs, tables, beds, outdoor furniture',
    hardness: 5,
  },
  {
    name: 'Sheesham (Indian Rosewood)',
    origin: 'Rajasthan, India',
    color: '#6B4226',
    img: 'https://images.pexels.com/photos/172276/pexels-photo-172276.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Rich dark grain', 'Very hard & heavy', 'Natural lustre', 'Age improves appearance'],
    description: 'Sheesham, or Indian Rosewood, is native to Rajasthan and one of the most coveted woods for Indian furniture. Its complex, interlocked grain creates unique patterns in every piece. Dense, durable, and beautiful.',
    uses: 'Dining tables, sideboards, cabinets, carved pieces',
    hardness: 5,
  },
  {
    name: 'Mango Wood',
    origin: 'Rajasthan & South India',
    color: '#A0522D',
    img: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Eco-friendly choice', 'Light & workable', 'Warm honey tones', 'Unique figuring'],
    description: 'Mango wood is a sustainable choice sourced from mango trees that have completed their fruit-bearing cycle. It offers beautiful honey-to-amber tones with interesting figuring. Lighter than teak but still durable and characterful.',
    uses: 'Beds, wardrobes, decorative pieces, accent furniture',
    hardness: 3,
  },
  {
    name: 'Handwoven Cane',
    origin: 'Northeast India',
    color: '#C4975A',
    img: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Lightweight & breathable', 'Natural texture', 'Flexible & strong', 'Tropical aesthetic'],
    description: 'Handwoven cane brings natural lightness and texture to furniture. Harvested from rattan palms and woven by skilled artisans in intricate patterns, cane furniture is both beautiful and functional, creating an airy, organic aesthetic.',
    uses: 'Chair backs & seats, bed headboards, decorative panels',
    hardness: 2,
  },
  {
    name: 'Reclaimed Wood',
    origin: 'Various, India',
    color: '#7B5C3C',
    img: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Each piece unique', 'Rich patina & history', 'Sustainable choice', 'Characterful marks'],
    description: 'Our reclaimed wood comes from old structures, demolished buildings, and antique furniture parts across Rajasthan. Every plank carries history — nail holes, saw marks, and patina that cannot be replicated. The most authentic and sustainable option we offer.',
    uses: 'Console tables, shelving, accent pieces, antique-style furniture',
    hardness: 4,
  },
  {
    name: 'Hand-forged Iron',
    origin: 'Jodhpur, Rajasthan',
    color: '#2C2218',
    img: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Incredibly strong', 'Handmade in Rajasthan', 'Rust-treated & sealed', 'Customisable forms'],
    description: 'Our iron components are forged by traditional blacksmiths in Jodhpur, using techniques passed down for generations. Hand-hammered iron adds raw, industrial character to furniture bases, frames, and hardware while remaining highly durable.',
    uses: 'Table bases, bed frames, cabinet hardware, shelf brackets',
    hardness: 5,
  },
  {
    name: 'Brass Hardware',
    origin: 'Jodhpur & Moradabad, India',
    color: '#C8A456',
    img: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Warm golden finish', 'Corrosion-resistant', 'Hand-finished', 'Ages beautifully'],
    description: 'Brass has been used in Indian craft for thousands of years. Our hardware is cast and hand-finished in traditional craft centres, producing pulls, hinges, and decorative elements with a warmth that elevates any piece of furniture.',
    uses: 'Cabinet pulls, hinges, decorative inlay, door knobs',
    hardness: 3,
  },
  {
    name: 'Natural Marble',
    origin: 'Rajasthan, India',
    color: '#E8E0D0',
    img: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=600',
    properties: ['Unique veining per slab', 'Cool to the touch', 'Timeless luxury', 'Rajasthan sourced'],
    description: 'Rajasthan is one of the world\'s great marble sources, producing white, grey, pink, and green varieties. We use Indian marble for table tops, decorative inlay, and accent surfaces, combining stone with wood in pieces that feel truly special.',
    uses: 'Table tops, decorative inlay, occasional tables',
    hardness: 4,
  },
]

const finishes = [
  { name: 'Natural Oil', desc: 'Enhances the wood\'s natural grain and colour. Provides a matte, organic feel. Easiest to maintain.', color: '#C4975A' },
  { name: 'Walnut Stain', desc: 'Rich dark brown finish that deepens the wood tone. Adds sophistication and warmth. Popular for dining.', color: '#5C3D2E' },
  { name: 'Ebony', desc: 'Deep black finish inspired by ebony wood. Bold and dramatic. Works beautifully with brass hardware.', color: '#1C1209' },
  { name: 'White Wash', desc: 'Pale, chalky finish that lightens the wood while revealing grain. Creates a Scandi-meets-Rajasthani aesthetic.', color: '#F0E8DC' },
  { name: 'Antique Distressed', desc: 'Hand-applied ageing technique that creates a weathered, vintage look. Each piece is unique.', color: '#8B6434' },
  { name: 'Teak Gold', desc: 'Warm amber finish that highlights teak\'s natural golden tones. Classic and timeless.', color: '#A07830' },
]

function HardnessBar({ level }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((i) => (
        <div key={i} className={`h-2 w-6 rounded-full ${i <= level ? 'bg-gold-500' : 'bg-cream-300'}`} />
      ))}
    </div>
  )
}

export default function MaterialsPage() {
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Honest Materials"
        title="Materials & Finishes"
        subtitle="Every SAGA piece begins with the right material. We work with the finest woods, natural fibres, metals, and stones sourced responsibly from India and beyond."
        bg="https://images.pexels.com/photos/172276/pexels-photo-172276.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">
        {/* Materials Grid */}
        <div className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-2">Our Materials</h2>
          <p className="text-sm text-bark-200">Click any material to explore its properties.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {materials.map((mat, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`text-left rounded-2xl overflow-hidden border-2 transition-all card-lift ${active === i ? 'border-gold-500 shadow-lg' : 'border-cream-200 hover:border-cream-300'}`}
            >
              <div className="h-32 overflow-hidden">
                <img src={mat.img} alt={mat.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: mat.color }} />
                  <h3 className="font-serif font-semibold text-bark-400 text-sm">{mat.name}</h3>
                </div>
                <p className="text-[10px] text-bark-200">{mat.origin}</p>
                <div className="mt-2">
                  <p className="text-[9px] text-bark-200 mb-1">Hardness</p>
                  <HardnessBar level={mat.hardness} />
                </div>
              </div>
              {active === i && (
                <div className="bg-cream-50 border-t border-cream-200 p-4">
                  <p className="text-xs text-bark-300 leading-relaxed mb-3">{mat.description}</p>
                  <div>
                    <p className="text-[10px] font-semibold text-bark-400 mb-1">Common Uses</p>
                    <p className="text-[10px] text-bark-200">{mat.uses}</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-[10px] font-semibold text-bark-400 mb-1.5">Properties</p>
                    <ul className="space-y-1">
                      {mat.properties.map((p, j) => (
                        <li key={j} className="text-[10px] text-bark-200 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Finishes */}
        <div className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-2">Finishes & Stains</h2>
          <p className="text-sm text-bark-200">The finish defines the mood of a piece. All finishes available on custom orders.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {finishes.map((f, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-cream-200 bg-white card-lift">
              <div className="h-20" style={{ backgroundColor: f.color }} />
              <div className="p-3">
                <h4 className="font-semibold text-xs text-bark-400 mb-1">{f.name}</h4>
                <p className="text-[9px] text-bark-200 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing note */}
        <div className="rounded-2xl bg-cream-200/60 border border-cream-300 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-medium tracking-widest text-gold-500 uppercase">Our Commitment</span>
              <h3 className="font-serif font-bold text-2xl text-bark-400 mt-2 mb-4">Responsibly Sourced, Honestly Made</h3>
              <p className="text-sm text-bark-200 leading-relaxed">
                Every material we use is selected not just for its beauty, but for how it is sourced. We work with suppliers
                who share our values around forest stewardship, fair labour, and long-term sustainability. Our reclaimed and
                recycled materials give new life to timber that would otherwise go to waste.
              </p>
            </div>
            <div className="h-48 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1125776/pexels-photo-1125776.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sustainably sourced timber forest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
