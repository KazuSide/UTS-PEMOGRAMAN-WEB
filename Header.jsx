import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/explore', label: 'Explore' },
    { to: '/artists', label: 'Artists' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-neon-pink rounded-sm flex items-center justify-center neon-border-pink transition-all duration-300 group-hover:scale-110">
              <span className="text-black font-display text-sm">S</span>
            </div>
            <span className="font-display text-xl tracking-widest text-white group-hover:text-neon-pink transition-colors duration-300">
              STAGEFRONT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group ${
                  location.pathname === link.to
                    ? 'text-neon-pink'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-neon-pink transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 font-mono tracking-wider">
              SIGN IN
            </button>
            <button className="px-5 py-2 bg-neon-pink text-black text-sm font-bold rounded-sm hover:bg-white transition-all duration-300 font-mono tracking-wider hover:shadow-[0_0_20px_rgba(255,45,120,0.6)]">
              LOGIN
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="md:hidden glass border-t border-white/5 px-4 py-6 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-sm tracking-widest uppercase py-2 border-b border-white/5 ${
                location.pathname === link.to ? 'text-neon-pink' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 w-full py-3 bg-neon-pink text-black font-bold font-mono tracking-wider text-sm rounded-sm">
            LOGIN
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
