import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ExploreePage from '../pages/ExplorePage'
import ArtistsPage from '../pages/ArtistsPage'

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-dark-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-neon-pink flex items-center justify-center">
                <span className="text-black font-display text-sm">S</span>
              </div>
              <span className="font-display text-xl tracking-widest">STAGEFRONT</span>
            </div>
            <p className="text-white/40 text-sm font-body leading-relaxed max-w-sm">
              Platform tiket konser terdepan di Indonesia. Dapatkan pengalaman menonton konser terbaik dengan teknologi terkini.
            </p>
            <div className="flex gap-4 mt-6">
              {['IG', 'TW', 'TK', 'YT'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 glass rounded-sm flex items-center justify-center text-xs font-mono text-white/40 hover:text-neon-pink hover:border-neon-pink/40 transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          
          <div>
          <h4 className="text-neon-pink font-mono text-sm font-bold mb-4 uppercase tracking-widest">NAVIGASI</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
            <li><Link to="/explore" className="hover:text-white transition-colors duration-200">Explore</Link></li>
            <li><Link to="/artists" className="hover:text-white transition-colors duration-200">Artists</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-neon-cyan font-mono text-sm font-bold mb-4 uppercase tracking-widest">SUPPORT</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/faq" className="hover:text-white transition-colors duration-200">FAQ</Link></li>
            <li><Link to="/refund" className="hover:text-white transition-colors duration-200">Kebijakan Refund</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Hubungi Kami</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors duration-200">Syarat & Ketentuan</Link></li>
          </ul>
        </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-neon-cyan mb-4 uppercase">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Kebijakan Refund', 'Hubungi Kami', 'Syarat & Ketentuan'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white font-body transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-mono tracking-wider">
            © 2025 STAGEFRONT. ALL RIGHTS RESERVED.
          </p>
          <p className="text-white/20 text-xs font-mono">
            UNIVERSITAS AMIKOM YOGYAKARTA — ST084
          </p>
        </div>
      </div>
    </footer>
  )
}


export default Footer
