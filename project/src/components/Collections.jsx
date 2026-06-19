import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { collections } from '../data/products'

const tabs = ['All', 'Living', 'Dining', 'Bedroom', 'Outdoor', 'Office']

export default function Collections() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? collections
    : collections.filter((c) => c.category === activeTab)

  return (
    <section id="collections" className="bg-cream-50 p-8 xl:p-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif font-bold text-2xl text-bark-400">Curated Collections</h2>
        <Link to="/collections" className="flex items-center gap-1.5 text-xs font-medium text-gold-500 hover:text-gold-600 transition-colors group">
          View All Collections
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="flex items-center gap-2 flex-wrap mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeTab === tab ? 'tab-active' : 'tab-inactive border border-cream-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {filtered.map((col, i) => (
          <Link
            key={i}
            to={`/collections?cat=${col.category}`}
            className="card-lift flex-shrink-0 w-36 xl:w-40 group cursor-pointer block"
          >
            <div className="relative h-28 xl:h-32 rounded-lg overflow-hidden">
              <img
                src={col.img}
                alt={col.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bark-400/0 group-hover:bg-bark-400/20 transition-colors duration-300" />
            </div>
            <div className="mt-2.5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-bark-400 leading-tight">{col.name}</p>
                <span className="text-[10px] text-gold-500 flex items-center gap-1 mt-0.5 group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={9} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
