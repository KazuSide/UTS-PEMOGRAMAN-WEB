import { useState } from 'react'

const SearchFilter = ({ onFilter }) => {
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('')
  const [city, setCity] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [priceRange, setPriceRange] = useState(2000000)
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onFilter({ query, genre, city, dateFrom, priceRange, onlyAvailable })
  }

  const handleReset = () => {
    setQuery('')
    setGenre('')
    setCity('')
    setDateFrom('')
    setPriceRange(2000000)
    setOnlyAvailable(false)
    onFilter({})
  }

  const formatPrice = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val)

  return (
    <section className="glass rounded-sm p-6 border border-white/5">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Main search row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Text search */}
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-pink text-sm">⚡</span>
            <input
              type="text"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari artis, konser, venue..."
              className="w-full pl-9 pr-4 py-3 bg-dark-700/60 border border-white/10 rounded-sm text-white placeholder-white/30 text-sm font-body focus:outline-none focus:border-neon-pink/50 focus:shadow-[0_0_15px_rgba(255,45,120,0.2)] transition-all duration-300"
            />
          </div>

          {/* Genre select */}
          <select
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="sm:w-44 px-4 py-3 bg-dark-700/60 border border-white/10 rounded-sm text-white text-sm font-body focus:outline-none focus:border-neon-cyan/50 transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="">Semua Genre</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="rnb">R&B / Soul</option>
            <option value="edm">EDM</option>
            <option value="indie">Indie</option>
            <option value="jazz">Jazz</option>
            <option value="hiphop">Hip-Hop</option>
          </select>

          <button
            type="submit"
            className="px-6 py-3 bg-neon-pink text-black font-bold font-mono text-sm tracking-widest rounded-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            CARI
          </button>
        </div>

        {/* Toggle advanced */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-mono text-neon-cyan/70 hover:text-neon-cyan transition-colors duration-300 flex items-center gap-2"
        >
          <span>{isExpanded ? '▲' : '▼'}</span>
          FILTER LANJUTAN
        </button>

        {/* Advanced filters */}
        {isExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-white/5 animate-fade-in-up">
            {/* City */}
            <div>
              <label className="block text-xs font-mono text-white/40 mb-2 tracking-widest uppercase">Kota</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Jakarta, Bandung, Surabaya..."
                className="w-full px-3 py-2.5 bg-dark-700/60 border border-white/10 rounded-sm text-white text-sm placeholder-white/20 focus:outline-none focus:border-neon-pink/40 transition-all duration-300"
              />
            </div>

            {/* Date from */}
            <div>
              <label className="block text-xs font-mono text-white/40 mb-2 tracking-widest uppercase">Tanggal Mulai</label>
              <input
                type="date"
                name="dateFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-3 py-2.5 bg-dark-700/60 border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-neon-pink/40 transition-all duration-300 [color-scheme:dark]"
              />
            </div>

            {/* Price range */}
            <div>
              <label className="block text-xs font-mono text-white/40 mb-2 tracking-widest uppercase">
                Harga Maks: <span className="text-neon-yellow">{formatPrice(priceRange)}</span>
              </label>
              <input
                type="range"
                name="priceRange"
                min={100000}
                max={5000000}
                step={100000}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-neon-pink cursor-pointer"
              />
              <div className="flex justify-between text-xs text-white/20 font-mono mt-1">
                <span>100K</span>
                <span>5JT</span>
              </div>
            </div>

            {/* Only available checkbox */}
            <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-3">
              <input
                type="checkbox"
                id="onlyAvailable"
                name="onlyAvailable"
                checked={onlyAvailable}
                onChange={(e) => setOnlyAvailable(e.target.checked)}
                className="w-4 h-4 accent-neon-pink cursor-pointer"
              />
              <label htmlFor="onlyAvailable" className="text-sm text-white/60 font-body cursor-pointer hover:text-white transition-colors">
                Tampilkan hanya konser yang masih tersedia tiket
              </label>
            </div>

            {/* Action buttons */}
            <div className="sm:col-span-2 lg:col-span-3 flex gap-3">
              <button
                type="submit"
                className="px-6 py-2.5 bg-neon-pink text-black text-sm font-bold font-mono tracking-widest rounded-sm hover:bg-white transition-all duration-300"
              >
                TERAPKAN
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 glass border border-white/10 text-white/60 text-sm font-mono tracking-widest rounded-sm hover:text-white hover:border-white/30 transition-all duration-300"
              >
                RESET
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  )
}

export default SearchFilter
