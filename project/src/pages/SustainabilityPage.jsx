import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const pillars = [
  {
    title: 'Responsible Materials',
    body: 'Wherever possible, we work with responsibly sourced wood, reclaimed materials, recycled elements, natural fibres, cane, iron, and hand-finished surfaces that carry depth and honesty. Many of our antique-inspired and handcrafted pieces celebrate the beauty of reused, restored, and character-rich materials — giving them a new life in modern interiors.\n\nWe do not believe every material has to look perfect to be valuable. In handmade furniture, natural marks, grains, textures, and age can become part of the story.',
    img: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Slow Craft Over Fast Production',
    body: 'Our work is guided by artisans, not assembly lines.\n\nHandmade production naturally encourages a more considered way of working — slower, more intentional, and less wasteful than mass-manufactured furniture. Every cut, finish, joint, polish, and detail is handled with care, helping us create products with greater meaning and a longer life.\n\nWe believe in making fewer, better pieces.',
    img: 'https://images.pexels.com/photos/8768609/pexels-photo-8768609.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Built to Last',
    body: 'For us, sustainability also means strength.\n\nA well-made cabinet, chair, bed, table, mirror, or décor piece should not be treated as disposable. It should age gracefully, carry memory, and remain useful and beautiful over time. This belief shapes our focus on solid materials, reliable craftsmanship, careful finishing, and designs that do not depend only on short-term trends.',
    img: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Packaging With Care',
    body: 'For international and B2B orders, packaging is an important part of responsibility. We aim to use protective, efficient, and practical packaging methods that help reduce damage, avoid unnecessary waste, and support safe movement of goods across long distances.\n\nOur approach is simple: protect the product, respect the material, and keep improving wherever possible.',
    img: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Supporting Handmade Livelihoods',
    body: 'Sustainability is not only about the planet. It is also about people.\n\nBy working with skilled artisans, workshops, and craft communities, SAGA HANDICRAFTS helps keep traditional techniques alive while creating commercial opportunities connected to global markets. Every order supports a wider chain of makers, finishers, suppliers, packers, and skilled hands behind the final product.\n\nWhen craft survives, culture survives.',
    img: 'https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Our Responsibility"
        title="Sustainability at SAGA"
        subtitle="Made With Respect — For Craft, Material & the Future"
        bg="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">

        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <p className="text-base text-bark-200 leading-relaxed mb-4">
            At SAGA HANDICRAFTS, sustainability is not a marketing line. It is a responsibility we are learning, improving, and building into the way we work.
          </p>
          <p className="text-base text-bark-200 leading-relaxed mb-4">
            As a furniture and handicrafts brand rooted in Jodhpur, Rajasthan, we understand that every piece we create begins with nature — wood, fibre, cane, metal, stone, texture, time, and human skill. Our goal is to respect these materials, use them thoughtfully, and create products that are made to last beyond trends.
          </p>
          <p className="font-serif italic text-bark-300 text-xl leading-relaxed">
            "We believe the most sustainable piece is one that is not quickly replaced."
          </p>
          <p className="text-sm text-bark-200 leading-relaxed mt-4">
            That is why our approach focuses on quality, durability, small-batch production, responsible material choices, and timeless design. Instead of encouraging fast consumption, we create furniture and décor with character, strength, and long-term value — pieces that can live in homes, hotels, showrooms, and commercial spaces for years.
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-16 mb-16">
          {pillars.map((p, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-8 h-1 bg-gold-400 rounded mb-4" />
                <h3 className="font-serif font-bold text-2xl text-bark-400 mb-4">{p.title}</h3>
                <div className="space-y-3">
                  {p.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-sm text-bark-200 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
              <div className={`h-64 rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Work in Progress note */}
        <div className="bg-bark-400 text-cream-100 rounded-2xl p-8 md:p-10">
          <div className="max-w-2xl">
            <span className="text-[10px] font-medium tracking-widest text-gold-300 uppercase">A Work in Progress</span>
            <h3 className="font-serif font-bold text-2xl text-cream-100 mt-3 mb-4">Honest About Our Journey</h3>
            <p className="text-sm text-cream-300 leading-relaxed mb-4">
              We are honest about one thing: sustainability is a journey. We are not here to make empty claims. We are here to keep improving — in how we source, design, produce, pack, and deliver. As SAGA grows, our responsibility is to make better choices, ask better questions, and build a business that respects both heritage and the future.
            </p>
            <p className="font-serif italic text-gold-300 text-base">
              "At SAGA HANDICRAFTS, every piece begins with material and ends with meaning."
            </p>
            <div className="mt-6 flex gap-6 text-sm text-cream-300">
              <div>
                <p className="font-semibold text-cream-100">Crafted with care.</p>
                <p>Made with respect.</p>
                <p>Built to last.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
