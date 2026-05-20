import { useState, useEffect } from 'react'
import axios from 'axios'

const artists = [
  { id: 1, name: 'PAMUNGKAS', genre: 'Indie Pop', origin: 'Yogyakarta', emoji: '🎸', fans: '2.3M', tours: 12, rating: 4.9 },
  { id: 2, name: 'RAISA', genre: 'Pop', origin: 'Jakarta', emoji: '🌙', fans: '8.1M', tours: 28, rating: 4.8 },
  { id: 3, name: 'TULUS', genre: 'Soul/R&B', origin: 'Bukittinggi', emoji: '✨', fans: '5.4M', tours: 20, rating: 4.9 },
  { id: 4, name: 'RICH BRIAN', genre: 'Hip-Hop', origin: 'Jakarta', emoji: '🔥', fans: '12M', tours: 35, rating: 4.7 },
  { id: 5, name: 'ISYANA SARASVATI', genre: 'Pop', origin: 'Bandung', emoji: '🦋', fans: '6.2M', tours: 18, rating: 4.8 },
  { id: 6, name: 'HINDIA', genre: 'Indie', origin: 'Jakarta', emoji: '🌿', fans: '1.8M', tours: 9, rating: 4.9 },
  { id: 7, name: 'MALIQ & D ESSENTIALS', genre: 'Jazz/Soul', origin: 'Jakarta', emoji: '🎷', fans: '3.9M', tours: 22, rating: 4.7 },
  { id: 8, name: 'REALITY CLUB', genre: 'Indie Rock', origin: 'Jakarta', emoji: '🌅', fans: '900K', tours: 7, rating: 4.8 },
]

const ArtistsPage = () => {
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [view, setView] = useState('grid') // 'grid' | 'list'
  const [searchQuery, setSearchQuery] = useState('')
  const [artistData, setArtistData] = useState(null)
  const [loadingDetail, setLoadingDetail] = useState(false)
  const [isFollowing, setIsFollowing] = useState({})

  const filteredArtists = artists.filter((a) =>
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.genre.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Fetch fake "artist detail" data from API when artist selected
  useEffect(() => {
    if (!selectedArtist) {
      setArtistData(null)
      return
    }

    const fetchArtistDetail = async () => {
      setLoadingDetail(true)
      try {
        // Using JSONPlaceholder comments as fake "album/concert reviews"
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${selectedArtist.id}&_limit=4`
        )
        setArtistData(res.data)
      } catch (err) {
        console.error(err)
        setArtistData([])
      } finally {
        setLoadingDetail(false)
      }
    }

    fetchArtistDetail()
  }, [selectedArtist])

  const handleFollow = (artistId) => {
    setIsFollowing((prev) => ({ ...prev, [artistId]: !prev[artistId] }))
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <p className="text-xs font-mono text-neon-cyan tracking-widest mb-3">// ARTISTS</p>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            ARTIS<br />
            <span className="shimmer-text">PILIHAN</span>
          </h1>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan text-sm">🔎</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artis atau genre..."
              className="w-full pl-9 pr-4 py-3 bg-dark-700/60 border border-white/10 rounded-sm text-white placeholder-white/30 text-sm font-body focus:outline-none focus:border-neon-cyan/50 transition-all duration-300"
            />
          </div>
          <div className="flex gap-2">
            {['grid', 'list'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-3 font-mono text-xs tracking-widest rounded-sm transition-all duration-300 ${
                  view === v ? 'bg-neon-cyan text-black font-bold' : 'glass text-white/50 hover:text-white'
                }`}
              >
                {v === 'grid' ? '⊞ GRID' : '☰ LIST'}
              </button>
            ))}
          </div>
        </div>

        <div className={`flex gap-8 ${selectedArtist ? 'flex-col lg:flex-row' : ''}`}>
          {/* Artist List */}
          <div className={selectedArtist ? 'lg:w-1/2' : 'w-full'}>
            {/* No results */}
            {filteredArtists.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🎵</p>
                <p className="font-display text-xl text-white/40">ARTIS TIDAK DITEMUKAN</p>
              </div>
            ) : view === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredArtists.map((artist, i) => (
                  <article
                    key={artist.id}
                    onClick={() => setSelectedArtist(selectedArtist?.id === artist.id ? null : artist)}
                    className={`glass rounded-sm p-4 cursor-pointer transition-all duration-300 hover:scale-105 group animate-fade-in-up ${
                      selectedArtist?.id === artist.id
                        ? 'border-neon-cyan/50 shadow-[0_0_20px_rgba(0,245,255,0.2)]'
                        : 'hover:border-white/20'
                    }`}
                    style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'forwards', opacity: 0 }}
                  >
                    <div className="text-4xl text-center mb-3 group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 0.2}s` }}>
                      {artist.emoji}
                    </div>
                    <h3 className="font-display text-sm text-white text-center leading-tight mb-1">
                      {artist.name}
                    </h3>
                    <p className="text-xs font-mono text-neon-cyan/60 text-center">{artist.genre}</p>
                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-between">
                      <span className="text-xs text-white/30 font-mono">{artist.fans}</span>
                      <span className="text-xs text-neon-yellow">★{artist.rating}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredArtists.map((artist, i) => (
                  <article
                    key={artist.id}
                    onClick={() => setSelectedArtist(selectedArtist?.id === artist.id ? null : artist)}
                    className={`glass rounded-sm p-4 cursor-pointer transition-all duration-300 flex items-center gap-5 group animate-fade-in-left ${
                      selectedArtist?.id === artist.id
                        ? 'border-neon-cyan/50 shadow-[0_0_20px_rgba(0,245,255,0.15)]'
                        : 'hover:border-white/20'
                    }`}
                    style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'forwards', opacity: 0 }}
                  >
                    <span className="text-3xl">{artist.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-white group-hover:text-neon-cyan transition-colors duration-300">
                        {artist.name}
                      </h3>
                      <p className="text-xs text-white/40 font-body">{artist.genre} • {artist.origin}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 text-right">
                      <div>
                        <p className="text-xs text-white/30 font-mono">FANS</p>
                        <p className="text-sm font-mono text-neon-pink">{artist.fans}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 font-mono">TOURS</p>
                        <p className="text-sm font-mono text-neon-cyan">{artist.tours}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 font-mono">RATING</p>
                        <p className="text-sm font-mono text-neon-yellow">★{artist.rating}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Artist Detail Panel */}
          {selectedArtist && (
            <div className="lg:w-1/2 animate-fade-in-left">
              <div className="glass rounded-sm p-6 sticky top-24">
                {/* Artist header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{selectedArtist.emoji}</div>
                    <div>
                      <h2 className="font-display text-2xl text-white">{selectedArtist.name}</h2>
                      <p className="text-neon-cyan font-mono text-sm">{selectedArtist.genre}</p>
                      <p className="text-white/40 text-xs font-body mt-1">📍 {selectedArtist.origin}, Indonesia</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedArtist(null)}
                    className="text-white/30 hover:text-white transition-colors w-8 h-8 glass rounded-sm flex items-center justify-center text-sm"
                  >
                    ✕
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'FANS', val: selectedArtist.fans, color: '#FF2D78' },
                    { label: 'TOURS', val: selectedArtist.tours, color: '#00F5FF' },
                    { label: 'RATING', val: `★${selectedArtist.rating}`, color: '#FFE600' },
                  ].map((s) => (
                    <div key={s.label} className="glass rounded-sm p-3 text-center">
                      <p className="font-display text-xl" style={{ color: s.color }}>{s.val}</p>
                      <p className="text-xs font-mono text-white/30 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Follow button */}
                <button
                  onClick={() => handleFollow(selectedArtist.id)}
                  className={`w-full py-3 font-bold font-mono tracking-widest text-sm rounded-sm transition-all duration-300 mb-6 ${
                    isFollowing[selectedArtist.id]
                      ? 'bg-white/10 text-neon-cyan border border-neon-cyan/30'
                      : 'bg-neon-pink text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,45,120,0.5)]'
                  }`}
                >
                  {isFollowing[selectedArtist.id] ? '✓ MENGIKUTI' : '+ IKUTI ARTIS'}
                </button>

                {/* Reviews / comments from API */}
                <div>
                  <h3 className="font-mono text-xs text-neon-yellow tracking-widest mb-4">ULASAN KONSER</h3>

                  {/* Loading state for detail */}
                  {loadingDetail ? (
                    <div className="flex items-center justify-center gap-3 py-8">
                      <div className="w-5 h-5 border-t-2 border-neon-pink rounded-full animate-spin" />
                      <p className="text-xs font-mono text-white/30 animate-pulse">MEMUAT ULASAN...</p>
                    </div>
                  ) : artistData && artistData.length > 0 ? (
                    <div className="space-y-3">
                      {artistData.map((comment) => (
                        <div key={comment.id} className="glass rounded-sm p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-mono text-neon-pink">{comment.email.split('@')[0].toUpperCase()}</p>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, j) => (
                                <span key={j} className="text-xs text-neon-yellow">★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-white/50 font-body leading-relaxed line-clamp-2">{comment.body}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/20 text-sm font-body text-center py-4">Belum ada ulasan</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArtistsPage
