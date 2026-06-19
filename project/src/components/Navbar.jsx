import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Globe, Menu, X, Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import SearchModal from './SearchModal'

const navLinks = [
  {
    label: 'Collections',
    path: '/collections',
    dropdown: [
      { label: 'All Collections', path: '/collections' },
      { label: 'Timeless Classics', path: '/collections?cat=Living' },
      { label: 'Modern Heritage', path: '/collections?cat=Bedroom' },
      { label: 'Natural Living', path: '/collections?cat=Bedroom' },
      { label: 'Outdoor Escape', path: '/collections?cat=Outdoor' },
      { label: 'Executive Spaces', path: '/collections?cat=Office' },
    ],
  },
  { label: 'Materials', path: '/materials' },
  { label: 'Customization', path: '/customization' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'Why Saga', path: '/why-saga' },
  {
    label: 'Resources',
    path: '/resources',
    dropdown: [
      { label: 'All Resources', path: '/resources' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Furniture Care', path: '/furniture-care' },
      { label: 'Careers', path: '/careers' },
      { label: 'Terms of Use', path: '/terms' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream-100/95 backdrop-blur-sm shadow-sm' : 'bg-cream-100'}`}>
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between" ref={dropdownRef}>
          <Link to="/" className="shrink-0">
            <Logo size="md" theme="dark" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.dropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`nav-link flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-gold-500' : 'text-bark-300 hover:text-bark-400'}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`opacity-60 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link to={link.path}
                    className={`nav-link text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-gold-500' : 'text-bark-300 hover:text-bark-400'}`}>
                    {link.label}
                  </Link>
                )}
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-cream-200 py-2 z-50 animate-fade-in">
                    {link.dropdown.map((item) => (
                      <Link key={item.label} to={item.path}
                        className="block px-4 py-2 text-sm text-bark-300 hover:text-bark-400 hover:bg-cream-50 transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 flex items-center justify-center text-bark-300 hover:text-bark-400 hover:bg-cream-200 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search size={17} />
            </button>
            <button className="flex items-center gap-1.5 text-sm font-medium text-bark-300 hover:text-bark-400 transition-colors">
              <Globe size={15} /><span>EN</span><ChevronDown size={13} className="opacity-60" />
            </button>
            <a href="#b2b" onClick={(e) => { e.preventDefault(); document.getElementById('b2b')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-gold text-white text-sm font-medium px-5 py-2.5 rounded-sm">
              B2B Inquiry
            </a>
            <button className="w-9 h-9 flex items-center justify-center text-bark-300 hover:text-bark-400 hover:bg-cream-200 rounded transition-colors">
              <Menu size={18} />
            </button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={() => setSearchOpen(true)} className="w-9 h-9 flex items-center justify-center text-bark-400">
              <Search size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-bark-400" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden bg-cream-100 border-t border-cream-200 px-6 py-4 space-y-1 animate-fade-in max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link to={link.path} className="flex items-center justify-between py-2.5 text-sm font-medium text-bark-300 hover:text-bark-400 border-b border-cream-200">
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 pb-1">
                    {link.dropdown.slice(1).map((item) => (
                      <Link key={item.label} to={item.path} className="block py-2 text-xs text-bark-200 hover:text-gold-500 transition-colors">{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-sm font-medium text-bark-300">
                <Globe size={15} /> EN <ChevronDown size={13} />
              </button>
              <a href="#b2b" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById('b2b')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-gold text-white text-sm font-medium px-5 py-2.5 rounded-sm ml-auto">
                B2B Inquiry
              </a>
            </div>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
