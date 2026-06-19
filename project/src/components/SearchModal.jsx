import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [open])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const results = query.trim().length < 1 ? [] : products.filter((p) => {
    const q = query.toLowerCase()
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.materials.some((m) => m.toLowerCase().includes(q))
    )
  })

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center pt-24 px-4 bg-bark-400/70 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div className="w-full max-w-2xl bg-cream-100 rounded-2xl shadow-2xl overflow-hidden animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-cream-200">
          <Search size={18} className="text-bark-200 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, materials, collections..."
            className="flex-1 bg-transparent text-base text-bark-400 placeholder-bark-200/60 focus:outline-none"
          />
          <button onClick={onClose} className="text-bark-200 hover:text-bark-400 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length === 0 && (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-bark-200">Start typing to search products</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Sofa', 'Dresser', 'Cane', 'Oak', 'Sheesham'].map((tag) => (
                  <button key={tag} onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-cream-200 text-xs text-bark-300 hover:bg-gold-100 hover:text-gold-600 transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim().length > 0 && results.length === 0 && (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-bark-300">No products found for "<span className="font-semibold">{query}</span>"</p>
              <p className="text-xs text-bark-200 mt-2">Try searching by material, category, or collection name</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-3">
              <p className="text-[10px] font-medium text-bark-200 uppercase tracking-widest px-3 py-2">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-cream-200/60 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-cream-200 flex-shrink-0">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-semibold text-bark-400 text-sm">{product.name}</h4>
                    <p className="text-xs text-bark-200 mt-0.5">{product.materials.join(' · ')}</p>
                    <p className="text-[10px] text-bark-200/70 mt-0.5">{product.collection} · {product.category}</p>
                  </div>
                  <ArrowRight size={14} className="text-gold-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="px-5 py-3 border-t border-cream-200 flex items-center justify-between">
          <p className="text-[10px] text-bark-200/60">Press <kbd className="px-1 py-0.5 bg-cream-200 rounded text-[9px] font-mono">ESC</kbd> to close</p>
          <Link to="/collections" onClick={onClose} className="text-[10px] text-gold-500 hover:text-gold-600 transition-colors">
            Browse all products →
          </Link>
        </div>
      </div>
    </div>
  )
}
