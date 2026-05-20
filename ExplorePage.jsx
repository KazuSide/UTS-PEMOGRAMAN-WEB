import { useState, useEffect } from 'react'
import axios from 'axios'

const ExplorePage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [page, setPage] = useState(1)

  // Data fetching dengan Axios dari Public API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        )
        setPosts(response.data)
      } catch (err) {
        setError('Gagal memuat data. Periksa koneksi internet kamu.')
        console.error('Axios error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page])

  // Simulasi news/artikel konser
  const concertCategories = [
    { icon: '🎤', label: 'Pengumuman', color: '#FF2D78' },
    { icon: '🎵', label: 'Review', color: '#00F5FF' },
    { icon: '📸', label: 'Gallery', color: '#FFE600' },
    { icon: '🎟️', label: 'Tips Beli Tiket', color: '#a78bfa' },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-12 animate-fade-in-up">
          <p className="text-xs font-mono text-neon-pink tracking-widest mb-3">// EXPLORE</p>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            BERITA &<br />
            <span className="shimmer-text">ARTIKEL</span>
          </h1>
          <p className="text-white/40 font-body max-w-lg">
            Update terbaru seputar dunia konser, review penonton, tips mendapatkan tiket, dan cerita dari backstage.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex gap-3 flex-wrap mb-10">
          {concertCategories.map((cat) => (
            <button
              key={cat.label}
              className="flex items-center gap-2 px-4 py-2 glass rounded-sm text-sm font-mono text-white/60 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,45,120,0.2)]"
              style={{ '--hover-color': cat.color }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* API Data Section */}
        <section aria-label="Artikel konser">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl text-white">
              ARTIKEL TERBARU
              <span className="ml-3 text-sm font-mono text-neon-cyan">via JSONPlaceholder API</span>
            </h2>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative mb-6">
                <div className="w-16 h-16 border-2 border-neon-pink/20 rounded-full" />
                <div className="absolute inset-0 w-16 h-16 border-t-2 border-neon-pink rounded-full animate-spin" />
                <div className="absolute inset-2 w-12 h-12 border-t-2 border-neon-cyan rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
              </div>
              <p className="font-mono text-neon-pink tracking-widest text-sm animate-pulse">MEMUAT DATA...</p>
              <p className="font-body text-white/20 text-xs mt-2">Kumpulan artikel tentang artis</p>
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="text-center py-20 glass rounded-sm border border-neon-pink/20 p-8">
              <p className="text-4xl mb-4">⚠️</p>
              <p className="font-display text-xl text-neon-pink mb-2">KONEKSI GAGAL</p>
              <p className="text-white/40 text-sm font-body mb-6">{error}</p>
              <button
                onClick={() => setPage(p => p)}
                className="px-6 py-2.5 bg-neon-pink text-black font-bold font-mono text-sm rounded-sm"
              >
                COBA LAGI
              </button>
            </div>
          )}

          {/* Data grid */}
          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {posts.map((post, i) => (
                  <article
                    key={post.id}
                    className="glass rounded-sm p-5 hover:border-neon-cyan/30 transition-all duration-300 cursor-pointer group animate-fade-in-up"
                    style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'forwards', opacity: 0 }}
                    onClick={() => setSelectedPost(selectedPost?.id === post.id ? null : post)}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-neon-pink/10 rounded-sm text-sm">
                          {['🎤', '🎸', '🎵', '🎼', '🎹'][i % 5]}
                        </div>
                        <span className="text-xs font-mono text-neon-pink">POST #{post.id}</span>
                      </div>
                      <span className={`text-neon-cyan text-lg transition-transform duration-300 ${selectedPost?.id === post.id ? 'rotate-45' : ''}`}>+</span>
                    </div>

                    <h3 className="font-display text-base text-white group-hover:text-neon-cyan transition-colors duration-300 mb-2 uppercase leading-tight">
                      {post.title}
                    </h3>

                    {/* Expanded content */}
                    {selectedPost?.id === post.id && (
                      <div className="mt-3 pt-3 border-t border-white/5 animate-fade-in-up">
                        <p className="text-sm text-white/50 font-body leading-relaxed">{post.body}</p>
                        <div className="flex gap-3 mt-4">
                          <button className="px-4 py-1.5 bg-neon-pink text-black text-xs font-mono font-bold rounded-sm">
                            BACA SELENGKAPNYA
                          </button>
                          <button className="px-4 py-1.5 glass border border-white/10 text-white/50 text-xs font-mono rounded-sm hover:text-white">
                            BAGIKAN
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-5 py-2.5 glass border border-white/10 text-sm font-mono text-white/60 rounded-sm hover:text-white hover:border-neon-pink/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← PREV
                </button>
                <span className="font-mono text-sm text-white/40">
                  Halaman <span className="text-neon-pink">{page}</span>
                </span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  className="px-5 py-2.5 glass border border-white/10 text-sm font-mono text-white/60 rounded-sm hover:text-white hover:border-neon-pink/30 transition-all duration-300"
                >
                  NEXT →
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default ExplorePage
