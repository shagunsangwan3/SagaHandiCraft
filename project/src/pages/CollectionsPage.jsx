import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import { products, collections } from '../data/products'
import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Outdoor', 'Office']

export default function CollectionsPage() {
  const [searchParams] = useSearchParams()
  const initialCat = searchParams.get('cat') || 'All'
  const [activeCategory, setActiveCategory] = useState(initialCat)
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.materials.some((m) => m.toLowerCase().includes(search.toLowerCase()))
    return catMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Curated for the World"
        title="Our Collections"
        subtitle="Every piece is a story told in wood, craft, and care. Explore our complete range of handcrafted furniture from Jodhpur, Rajasthan."
        bg="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Collections banner row */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {collections.map((col) => (
            <button
              key={col.id}
              onClick={() => setActiveCategory(col.category)}
              className={`group relative rounded-xl overflow-hidden aspect-[4/3] card-lift ${activeCategory === col.category ? 'ring-2 ring-gold-500' : ''}`}
            >
              <img src={col.img} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-bark-400/40 group-hover:bg-bark-400/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                <p className="font-serif font-bold text-sm text-cream-100">{col.name}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === cat ? 'tab-active' : 'tab-inactive border border-cream-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-bark-200" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl border border-cream-300 bg-white text-sm text-bark-400 placeholder-bark-200/60 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all w-52"
            />
          </div>
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-bark-300">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group card-lift block">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-cream-200 mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-semibold tracking-widest uppercase bg-white/80 backdrop-blur-sm text-bark-300 px-2 py-1 rounded-full">
                      {product.collection}
                    </span>
                  </div>
                </div>
                <div>
                    <h3 className="font-serif font-semibold text-bark-400 text-base leading-tight">{product.name}</h3>
                    <p className="text-xs text-bark-200 mt-1">{product.materials.join(' · ')}</p>
                  </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-gold-500 group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* B2B CTA */}
        <div className="mt-16 rounded-2xl bg-bark-400 text-cream-100 p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-2">Looking for Bulk or Custom Orders?</h3>
            <p className="text-cream-300 text-sm">We work with architects, designers, and global importers for bespoke manufacturing and wholesale supply.</p>
          </div>
          <Link to="/customization" className="btn-gold text-white text-sm font-medium px-7 py-3.5 rounded-xl whitespace-nowrap flex items-center gap-2">
            Start a Custom Project <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
