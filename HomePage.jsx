import { useState, useEffect, useRef } from 'react'
import HowItWorks from '../components/HowItWorks'
import { Link } from 'react-router-dom'
import SearchFilter from '../components/SearchFilter'
import ConcertCard from '../components/ConcertCard'
import { concerts } from '../data/concerts'

const HomePage = () => {
  const [filtered, setFiltered] = useState(concerts)
  const [activeGenre, setActiveGenre] = useState('Semua')
  const [heroIndex, setHeroIndex] = useState(0)
  const [sortBy, setSortBy] = useState('terbaru')
  const [showHowItWorks, setShowHowItWorks] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef(null)

  const applySortAndFilter = (list, sort) => {
    const sorted = [...list]
    if (sort === 'termurah') sorted.sort((a, b) => a.priceNum - b.priceNum)
    else if (sort === 'populer') sorted.sort((a, b) => b.availability - a.availability)
    return sorted
  }

  
  const heroItems = [
    {
      id: 0,
      bg: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 40%, #FFA500 100%)',
      accentColor: '#FF6B35',
      tagline: 'Solusi Praktis Cetak',
      title: 'Tiket\nGelang',
      subtitle: 'Kelola event kamu lebih mudah dengan sistem tiket digital & gelang eksklusif',
      cta: 'Pesan Sekarang',
      badge: '🎫 NEW',
      illustration: '🎪',
    },
    {
      id: 1,
      bg: 'linear-gradient(135deg, #6C63FF 0%, #3B82F6 50%, #06B6D4 100%)',
      accentColor: '#6C63FF',
      tagline: 'Concert Season 2025',
      title: 'Temukan\nKonsermu',
      subtitle: 'Dari indie lokal hingga megastar internasional, semua tiket ada di STAGEFRONT',
      cta: 'Jelajahi Konser',
      badge: '🔥 HOT',
      illustration: '🎸',
    },
    {
      id: 2,
      bg: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 50%, #FB923C 100%)',
      accentColor: '#EC4899',
      tagline: 'Limited Tickets Available',
      title: 'Jangan\nKehabisan',
      subtitle: 'Amankan tiket konser favoritmu sebelum terjual habis. Booking mudah & aman',
      cta: 'Cek Tiket',
      badge: '⚡ TERBATAS',
      illustration: '🎤',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((prev) => (prev + 1) % heroItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroIndex])

  const goToSlide = (indexOrFn) => {
    const next = typeof indexOrFn === 'function' ? indexOrFn(heroIndex) : indexOrFn
    if (next === heroIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setHeroIndex(next)
      setIsTransitioning(false)
    }, 300)
  }

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
    if (filterObj.genre) result = result.filter((c) => c.genre.toLowerCase() === filterObj.genre.toLowerCase())
    if (filterObj.city) result = result.filter((c) => c.city.toLowerCase().includes(filterObj.city.toLowerCase()))
    if (filterObj.dateFrom) {
      const monthMap = { januari:0,februari:1,maret:2,april:3,mei:4,juni:5,juli:6,agustus:7,september:8,oktober:9,november:10,desember:11 }
      const filterDate = new Date(filterObj.dateFrom)
      result = result.filter((c) => {
        const parts = c.date.toLowerCase().split(' ')
        if (parts.length < 3) return true
        const concertDate = new Date(Number(parts[2]), monthMap[parts[1]] ?? 0, Number(parts[0]))
        return concertDate >= filterDate
      })
    }
    if (filterObj.priceRange) result = result.filter((c) => c.priceNum <= filterObj.priceRange)
    if (filterObj.onlyAvailable) result = result.filter((c) => c.availability > 0)
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
    <div className="bg-dark-900 min-h-screen">

      
      <section className="relative w-full overflow-hidden pt-16">
        
        <div
          className="relative w-full flex items-center justify-between transition-opacity duration-300"
          style={{
            background: hero.bg,
            minHeight: '420px',
            opacity: isTransitioning ? 0 : 1,
            padding: '56px max(32px, calc((100vw - 1280px) / 2 + 32px))',
          }}
        >
          
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${hero.accentColor}25 0%, transparent 65%)` }}
          />

          
          <div className="relative z-10 flex-1" style={{ maxWidth: '520px' }}>
            
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm rounded-sm px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span className="text-white font-mono font-bold text-xs tracking-widest">SahabatTiket</span>
              </div>
              <span
                className="font-mono font-bold text-xs px-2 py-0.5 rounded-sm"
                style={{ background: hero.accentColor, color: 'white' }}
              >
                {hero.badge}
              </span>
            </div>

            <p className="text-white/70 font-mono text-xs mb-3 tracking-widest uppercase">{hero.tagline}</p>

            <h1
              className="text-white font-black leading-none mb-5"
              style={{ fontSize: 'clamp(48px, 6vw, 88px)', whiteSpace: 'pre-line', textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
            >
              {hero.title}
            </h1>

            <p className="text-white/65 text-sm leading-relaxed mb-8" style={{ maxWidth: '360px' }}>
              {hero.subtitle}
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/explore"
                className="inline-block font-bold font-mono text-sm px-7 py-3.5 transition-all hover:scale-105 active:scale-95"
                style={{
                  background: 'white',
                  color: hero.accentColor,
                  boxShadow: `0 4px 24px ${hero.accentColor}50`,
                  borderRadius: '2px',
                }}
              >
                {hero.cta} →
              </Link>
              <button
                onClick={() => setShowHowItWorks(true)}
                className="text-white/70 font-mono text-sm hover:text-white transition-colors tracking-widest"
              >
                CARA KERJA
              </button>
            </div>
          </div>

          
          <div
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{ width: '340px', height: '300px' }}
          >
            <div
              className="text-[170px] select-none"
              style={{ lineHeight: 1, transform: 'rotate(-8deg)', filter: `drop-shadow(0 0 40px ${hero.accentColor}80)` }}
            >
              {hero.illustration}
            </div>
            
            <div className="absolute top-6 right-10 w-14 h-14 rounded-full bg-white/10 animate-bounce" style={{ animationDuration: '2s' }} />
            <div className="absolute bottom-10 left-6 w-9 h-9 rounded-full bg-white/10 animate-bounce" style={{ animationDuration: '2.7s' }} />
            <div className="absolute top-1/2 right-2 w-6 h-6 rounded-full bg-white/15 animate-bounce" style={{ animationDuration: '1.9s' }} />
          </div>

          
          <button
            onClick={() => goToSlide((heroIndex - 1 + heroItems.length) % heroItems.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold transition-all z-20"
          >
            ‹
          </button>
          <button
            onClick={() => goToSlide((heroIndex + 1) % heroItems.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold transition-all z-20"
          >
            ›
          </button>
        </div>

        
        <div className="flex justify-center gap-2 py-4" style={{ background: 'rgba(0,0,0,0.4)' }}>
          {heroItems.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === heroIndex ? '28px' : '8px',
                height: '8px',
                background: i === heroIndex ? hero.accentColor : 'rgba(255,255,255,0.2)',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-label="Pencarian konser">
        <div className="mb-6">
          <h2 className="font-display text-3xl text-white mb-2">TEMUKAN KONSER</h2>
          <p className="text-white/40 font-body text-sm">Filter berdasarkan genre, kota, harga, dan tanggal</p>
        </div>
        <SearchFilter onFilter={handleFilter} />
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" aria-label="Daftar konser">

        
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

      
      {showHowItWorks && <HowItWorks onClose={() => setShowHowItWorks(false)} />}
    </div>
  )
}

export default HomePage
