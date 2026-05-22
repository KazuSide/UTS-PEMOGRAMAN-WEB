import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authType, setAuthType] = useState('login')

  const location = useLocation()

  const openAuth = (type) => {
    setAuthType(type)
    setAuthOpen(true)
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/explore', label: 'Explore' },
    { to: '/artists', label: 'Artists' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-neon-pink rounded-sm flex items-center justify-center neon-border-pink transition-all duration-300 group-hover:scale-110">
                <span className="text-black font-display text-sm">S</span>
              </div>

              <span className="font-display text-xl tracking-widest text-white group-hover:text-neon-pink transition-colors duration-300">
                SahabatTiket
              </span>
            </Link>

            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
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

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-neon-pink transition-all duration-300 ${
                      location.pathname === link.to
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => openAuth('signin')}
                className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 font-mono tracking-wider"
              >
                SIGN IN
              </button>

              <button
                onClick={() => openAuth('login')}
                className="px-5 py-2 bg-neon-pink text-black text-sm font-bold rounded-sm hover:bg-white transition-all duration-300 font-mono tracking-wider hover:shadow-[0_0_20px_rgba(255,45,120,0.6)]"
              >
                LOGIN
              </button>
            </div>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen
                    ? '-rotate-45 -translate-y-2'
                    : ''
                }`}
              />
            </button>

          </div>
        </div>

        {menuOpen && (
          <nav
            className="md:hidden glass border-t border-white/5 px-4 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-sm tracking-widest uppercase py-2 border-b border-white/5 ${
                  location.pathname === link.to
                    ? 'text-neon-pink'
                    : 'text-white/70'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => openAuth('login')}
              className="mt-2 w-full py-3 bg-neon-pink text-black font-bold font-mono tracking-wider text-sm rounded-sm"
            >
              LOGIN
            </button>
          </nav>
        )}
      </header>

      {authOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex justify-center items-center">
          <div
            className="
            w-[420px]
            bg-[#081528]
            rounded-2xl
            border border-white/10
            overflow-hidden
            shadow-[0_0_50px_rgba(255,45,120,.2)]
            animate-[fade_.25s]
            "
          >
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-white text-3xl font-display tracking-widest">
                    {authType === 'login'
                      ? 'LOGIN'
                      : 'SIGN IN'}
                  </h2>

                  <p className="text-white/40 mt-2">
                    Welcome to StageFront
                  </p>
                </div>

                <button
                  onClick={() => setAuthOpen(false)}
                  className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  text-white
                  hover:bg-white/20
                  "
                >
                  ✕
                </button>
              </div>

              <form className="mt-8 space-y-4">
                {authType === 'signin' && (
                  <input
                    type="text"
                    placeholder="Username"
                    className="
                    w-full
                    p-4
                    rounded-lg
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                    "
                  />
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="
                  w-full
                  p-4
                  rounded-lg
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  outline-none
                  "
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="
                  w-full
                  p-4
                  rounded-lg
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  outline-none
                  "
                />

                <button
                  type="submit"
                  className="
                  w-full
                  py-4
                  bg-neon-pink
                  text-black
                  font-bold
                  rounded-sm
                  hover:bg-white
                  transition
                  "
                >
                  {authType === 'login'
                    ? 'LOGIN'
                    : 'CREATE ACCOUNT'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
