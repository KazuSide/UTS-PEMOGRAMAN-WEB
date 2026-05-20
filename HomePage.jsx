import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchFilter from '../components/SearchFilter'
import ConcertCard from '../components/ConcertCard'
import { concerts } from '../data/concerts'

const HomePage = () => {
  const [filtered, setFiltered] = useState(concerts)
  const [activeGenre, setActiveGenre] = useState('Semua')
  const [heroIndex, setHeroIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [sortBy, setSortBy] = useState('terbaru')

  const applySortAndFilter = (list, sort) => {
    const sorted = [...list]
    if (sort === 'termurah') {
      sorted.sort((a, b) => a.priceNum - b.priceNum)
    } else if (sort === 'populer') {
      sorted.sort((a, b) => b.availability - a.availability)
    }
    // 'terbaru' = default order (by id)
    return sorted
  }

  const heroItems = [
    { artist: 'PAMUNGKAS', tour: 'To the Bone World Tour', date: '15 Agustus 2025', emoji: '🎸', color: '#FF2D78' },
    { artist: 'RICH BRIAN', tour: 'The Sailor World Tour', date: '12 September 2025', emoji: '🔥', color: '#00F5FF' },
    { artist: 'RAISA', tour: 'Teduh Concert', date: '22 Agustus 2025', emoji: '🌙', color: '#FFE600' },
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const genres = ['Semua', 'POP', 'INDIE', 'SOUL', 'HIP-HOP', 'JAZZ']

  const handleFilter = (filterObj) => {
    if (!filterObj || Object.keys(filterObj).length === 0) {
      setFiltered(applySortAndFilter(concerts, sortBy))
      return
    }
    let result = [...concerts]
    if (filterObj.query) {
      const q = filterObj.query.toLowerCase()
      result = result.filter(
        (c) => c.artist.toLowerCase().includes(q) || c.venue.toLowerCase().includes(q) || c.city.toLowerCase().includes(q)
      )
    }
    if (filterObj.genre) {
      result = result.filter((c) => c.genre.toLowerCase() === filterObj.genre.toLowerCase())
    }
    if (filterObj.city) {
      result = result.filter((c) => c.city.toLowerCase().includes(filterObj.city.toLowerCase()))
    }
    if (filterObj.priceRange) {
      result = result.filter((c) => c.priceNum <= filterObj.priceRange)
    }
    if (filterObj.onlyAvailable) {
      result = result.filter((c) => c.availability > 0)
    }
    setFiltered(applySortAndFilter(result, sortBy))
  }

  const handleGenreFilter = (g) => {
    setActiveGenre(g)
    const base = g === 'Semua' ? concerts : concerts.filter((c) => c.genre === g)
    setFiltered(applySortAndFilter(base, sortBy))
  }

  const handleSort = (val) => {
    setSortBy(val)
    setFiltered((prev) => applySortAndFilter(prev, val))
  }

  const hero = heroItems[heroIndex]

  return (
    <>
      {/* ====== HERO ====== */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
        aria-label="Hero banner"
      >
        {/* Dynamic background */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${hero.color}15 0%, transparent 70%)`,
          }}
        />

        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-white"
              style={{ top: `${i * 5}%` }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-sm mb-6 border border-neon-pink/20">
                <span className="w-2 h-2 bg-neon-pink rounded-full animate-ping" />
                <span className="text-xs font-mono text-neon-pink tracking-widest">LIVE NOW — 2025 TOUR SEASON</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-3 text-white">
                SAKSIKAN
                <br />
                <span className="shimmer-text">IDOLAMU</span>
                <br />
                SECARA LIVE
              </h1>

              <p className="text-white/50 font-body text-lg leading-relaxed mb-8 max-w-md">
                Temukan dan amankan tiket konser artis favorit kamu. Dari indie lokal hingga megastar internasional, semua ada di STAGEFRONT.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/explore"
                  className="px-8 py-3.5 bg-neon-pink text-black font-bold font-mono tracking-widest text-sm rounded-sm hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,45,120,0.6)] active:scale-95"
                >
                  JELAJAHI KONSER
                </Link>
                <button className="px-8 py-3.5 glass border border-white/15 text-white font-mono tracking-widest text-sm rounded-sm hover:border-neon-cyan/40 hover:text-neon-cyan transition-all duration-300">
                  CARA KERJA
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-white/5">
                {[
                  { val: '200+', label: 'Konser' },
                  { val: '50K+', label: 'Penonton' },
                  { val: '30+', label: 'Kota' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-2xl text-neon-pink">{s.val}</p>
                    <p className="text-xs font-mono text-white/30 tracking-widest mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured ticket visual */}
            <div className="relative flex items-center justify-center">
              {/* Big emoji */}
              <div
                className="absolute text-[180px] opacity-10 select-none pointer-events-none"
                style={{ filter: `drop-shadow(0 0 40px ${hero.color})` }}
              >
                {hero.emoji}
              </div>

              {/* Ticket card */}
              <div
                className="relative glass ticket-clip p-8 max-w-sm w-full transition-all duration-700"
                style={{ borderColor: `${hero.color}40`, boxShadow: `0 0 40px ${hero.color}20` }}
              >
                {/* Ticket top */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs font-mono tracking-widest mb-2"
                      style={{ color: hero.color }}>FEATURED TONIGHT</p>
                    <h2 className="font-display text-3xl text-white transition-all duration-500">
                      {hero.artist}
                    </h2>
                    <p className="text-sm text-white/40 font-body mt-1">{hero.tour}</p>
                  </div>
                  <span className="text-4xl">{hero.emoji}</span>
                </div>

                {/* Divider with holes */}
                <div className="relative flex items-center my-5">
                  <div className="w-4 h-4 rounded-full bg-dark-900 -ml-8 border border-white/10" />
                  <div className="flex-1 border-t border-dashed border-white/15" />
                  <div className="w-4 h-4 rounded-full bg-dark-900 -mr-8 border border-white/10" />
                </div>

                {/* Ticket info grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'TANGGAL', val: hero.date },
                    { label: 'STATUS', val: '🟢 ON SALE' },
                    { label: 'HARGA', val: 'Rp 350.000' },
                    { label: 'CAT.', val: 'Festival A' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs font-mono text-white/30 tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-sm font-body text-white">{item.val}</p>
                    </div>
                  ))}
                </div>

                {/* Barcode visual */}
                <div className="flex gap-px">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-px"
                      style={{
                        height: `${Math.random() > 0.5 ? 24 : 16}px`,
                        background: i % 3 === 0 ? hero.color : 'rgba(255,255,255,0.15)',
                        opacity: Math.random() * 0.5 + 0.5,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-3 text-center">
                  <p className="text-xs font-mono text-white/20 tracking-widest">**** **** **** 2025</p>
                </div>
              </div>

              {/* Floating dots behind */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${8 + i * 6}px`,
                    height: `${8 + i * 6}px`,
                    background: hero.color,
                    opacity: 0.15 - i * 0.02,
                    top: `${10 + i * 15}%`,
                    right: `${5 + i * 5}%`,
                    animation: `float ${2 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === heroIndex ? 'w-8 bg-neon-pink' : 'w-2 bg-white/20'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ====== SEARCH & FILTER ====== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-label="Pencarian konser">
        <div className="mb-6">
          <h2 className="font-display text-3xl text-white mb-2">TEMUKAN KONSER</h2>
          <p className="text-white/40 font-body text-sm">Filter berdasarkan genre, kota, harga, dan tanggal</p>
        </div>
        <SearchFilter onFilter={handleFilter} />
      </section>

      {/* ====== CONCERT GRID ====== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" aria-label="Daftar konser">
        {/* Genre filter pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => handleGenreFilter(g)}
              className={`px-4 py-1.5 text-xs font-mono tracking-widest rounded-sm transition-all duration-300 ${
                activeGenre === g
                  ? 'bg-neon-pink text-black shadow-[0_0_15px_rgba(255,45,120,0.4)]'
                  : 'glass text-white/50 hover:text-white hover:border-neon-pink/30'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-mono text-white/30">
            Menampilkan <span className="text-neon-cyan">{filtered.length}</span> konser
          </p>
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="px-3 py-1.5 bg-dark-700/60 border border-white/10 rounded-sm text-white/60 text-xs font-mono focus:outline-none focus:border-neon-pink/50 cursor-pointer transition-all duration-200 hover:border-white/30"
          >
            <option value="terbaru">Terbaru</option>
            <option value="termurah">Harga Termurah</option>
            <option value="populer">Populer</option>
          </select>
        </div>

        {/* Conditional rendering */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <p className="font-display text-2xl text-white/40 mb-2">TIDAK ADA HASIL</p>
            <p className="text-white/20 font-body text-sm">Coba ubah filter pencarian kamu</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((concert, i) => (
              <ConcertCard key={concert.id} concert={concert} delay={i * 80} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default HomePage
