import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerLinks = {
  'Collections': [
    { label: 'All Collections', path: '/collections' },
    { label: 'Living Room', path: '/collections?cat=Living' },
    { label: 'Dining Room', path: '/collections?cat=Dining' },
    { label: 'Bedroom', path: '/collections?cat=Bedroom' },
    { label: 'Outdoor', path: '/collections?cat=Outdoor' },
    { label: 'Office & Contract', path: '/collections?cat=Office' },
  ],
  'Services': [
    { label: 'Customization', path: '/customization' },
    { label: 'B2B & Wholesale', path: '/customization' },
    { label: 'Materials', path: '/materials' },
    { label: 'Private Label', path: '/customization' },
    { label: 'Why Saga', path: '/why-saga' },
  ],
  'Company': [
    { label: 'Our Story', path: '/our-story' },
    { label: 'Why Saga', path: '/why-saga' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Careers', path: '/careers' },
    { label: 'Resources', path: '/resources' },
  ],
  'Legal & Support': [
    { label: 'Terms of Use', path: '/terms' },
    { label: 'Furniture Care', path: '/furniture-care' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact Us', path: '/customization' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bark-500 text-cream-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">
        {/* Top: Logo + tagline + newsletter */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-bark-300/30">
          <Link to="/">
            <Logo size="md" theme="light" />
          </Link>

          <div className="flex-1 max-w-md">
            <p className="text-sm text-cream-300 mb-3">
              Stay updated with our latest collections, craft stories, and trade offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-bark-400/50 border border-bark-300/40 rounded-sm px-4 py-2.5 text-sm text-cream-100 placeholder-cream-300/50 focus:outline-none focus:border-gold-400/60 transition-colors"
              />
              <button className="btn-gold text-white text-sm font-medium px-5 py-2.5 rounded-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif font-semibold text-sm text-cream-100 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-xs text-cream-300 hover:text-cream-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-bark-300/30">
          <div>
            <p className="text-[11px] text-bark-100/60">
              &copy; 2026 SAGA Handicrafts. All rights reserved.
            </p>
            <p className="text-[10px] text-bark-100/40 mt-0.5">
              Crafted in Jodhpur, Rajasthan. Connected through London. Made for the World.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/terms" className="text-[11px] text-bark-100/50 hover:text-cream-200 transition-colors">Terms of Use</Link>
            <Link to="/sustainability" className="text-[11px] text-bark-100/50 hover:text-cream-200 transition-colors">Sustainability</Link>
            <a href="mailto:info@sagahandicraft.com" className="text-[11px] text-bark-100/50 hover:text-cream-200 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
