import { useState, useEffect } from 'react'
import axios from 'axios'

const ExplorePage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [page, setPage] = useState(1)

  // CATEGORY ACTIVE
  const [activeCategory, setActiveCategory] = useState('Semua')

  // FETCH API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        )

        const modifiedPosts = response.data.map((post, index) => ({
          ...post,

          title: [
            'Pamungkas World Tour 2025',
            'Review Konser Hindia Jakarta',
            'Tips War Ticket Konser',
            'Reality Club Bawa Visual Baru',
            'Raisa Siapkan Album Baru',
          ][index % 5],

          body: [
            `Pamungkas resmi mengumumkan rangkaian World Tour 2025 yang akan digelar di beberapa kota besar Asia.
            Konser ini menghadirkan konsep immersive stage dengan visual sinematik,
            tata cahaya futuristik, dan pengalaman audio premium untuk seluruh penonton.`,

            `Konser Hindia di Jakarta berhasil menciptakan suasana emosional sepanjang pertunjukan.
            Penonton ikut bernyanyi bersama dalam lagu-lagu populer seperti Evaluasi dan Secukupnya
            dengan tata panggung minimalis namun sangat artistik.`,

            `War tiket konser sering menjadi tantangan besar bagi penggemar musik.
            Pastikan kamu sudah login sebelum penjualan dimulai,
            gunakan koneksi internet stabil, dan siapkan metode pembayaran
            agar proses checkout lebih cepat.`,

            `Reality Club membawa konsep visual terbaru dengan nuansa sunset dan city pop aesthetic.
            Performa live mereka dipadukan dengan lighting warm tone dan efek visual
            yang membuat konser terasa lebih intimate.`,

            `Raisa dikabarkan sedang mempersiapkan album terbaru
            yang akan dirilis akhir tahun ini.
            Album tersebut disebut akan menghadirkan warna musik baru
            dengan sentuhan jazz modern dan orchestral pop.`,
          ][index % 5],

          image: [
            'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
            'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
          ][index % 5],

          category: [
            'Pengumuman',
            'Review',
            'Tips',
            'Gallery',
            'Music',
          ][index % 5],

          author: [
            'Admin ConcertHub',
            'Music Review',
            'Ticketing Team',
            'Concert Media',
            'Editorial',
          ][index % 5],

          date: [
            '12 Mei 2026',
            '15 Mei 2026',
            '18 Mei 2026',
            '20 Mei 2026',
            '22 Mei 2026',
          ][index % 5],
        }))

        setPosts(modifiedPosts)
      } catch (err) {
        setError('Gagal memuat data. Periksa koneksi internet kamu.')
        console.error('Axios error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page])

  // CATEGORY LIST
  const concertCategories = [
    { icon: '✨', label: 'Semua', color: '#ffffff' },
    { icon: '🎤', label: 'Pengumuman', color: '#FF2D78' },
    { icon: '🎵', label: 'Review', color: '#00F5FF' },
    { icon: '📸', label: 'Gallery', color: '#FFE600' },
    { icon: '🎟️', label: 'Tips', color: '#a78bfa' },
    { icon: '🎶', label: 'Music', color: '#00ff88' },
  ]

  // FILTER POSTS
  const filteredPosts =
    activeCategory === 'Semua'
      ? posts
      : posts.filter(
          (post) =>
            post.category.toLowerCase() ===
            activeCategory.toLowerCase()
        )

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-12 animate-fade-in-up">
          <p className="text-xs font-mono text-neon-pink tracking-widest mb-3">
            // EXPLORE
          </p>

          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            BERITA & <br />
            <span className="shimmer-text">ARTIKEL</span>
          </h1>

          <p className="text-white/40 font-body max-w-lg">
            Update terbaru seputar dunia konser,
            review penonton,
            tips mendapatkan tiket,
            dan cerita dari backstage.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex gap-3 flex-wrap mb-10">
          {concertCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`
              flex
              items-center
              gap-2
              px-4
              py-2
              glass
              rounded-sm
              text-sm
              font-mono
              transition-all
              duration-300
              border

              ${
                activeCategory === cat.label
                  ? 'bg-neon-pink text-black border-neon-pink shadow-[0_0_20px_rgba(255,45,120,0.4)]'
                  : 'text-white/60 border-white/10 hover:text-white hover:border-neon-pink/30'
              }
              `}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative mb-6">
                <div className="w-16 h-16 border-2 border-neon-pink/20 rounded-full" />
                <div className="absolute inset-0 w-16 h-16 border-t-2 border-neon-pink rounded-full animate-spin" />
                <div className="absolute inset-2 w-12 h-12 border-t-2 border-neon-cyan rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
              </div>
              <p className="font-mono text-neon-pink tracking-widest text-sm animate-pulse">MEMUAT DATA...</p>
              <p className="font-body text-white/20 text-xs mt-2">Kumpulan artikel tentang artis, musik, dan konser</p>
            </div>
          )}

        {/* ERROR */}
        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-neon-pink">{error}</p>
          </div>
        )}

        {/* ARTICLES */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              {/* EMPTY STATE */}
              {filteredPosts.length === 0 && (
                <div className="col-span-full text-center py-20">
                  <p className="text-white/30 font-mono">
                    Tidak ada artikel dalam kategori ini.
                  </p>
                </div>
              )}

              {filteredPosts.map((post, i) => (
                <article
                  key={post.id}
                  className="
                  glass
                  rounded-sm
                  overflow-hidden
                  hover:border-neon-cyan/30
                  transition-all
                  duration-300
                  cursor-pointer
                  group
                  animate-fade-in-up
                  "
                  style={{
                    animationDelay: `${i * 60}ms`,
                    animationFillMode: 'forwards',
                    opacity: 0,
                  }}
                  onClick={() =>
                    setSelectedPost(
                      selectedPost?.id === post.id
                        ? null
                        : post
                    )
                  }
                >

                  {/* IMAGE */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    {/* TOP */}
                    <div className="flex items-center justify-between mb-3">

                      <span className="
                      text-xs
                      font-mono
                      text-neon-pink
                      ">
                        {post.category}
                      </span>

                      <span className="
                      text-xs
                      text-white/30
                      font-mono
                      ">
                        POST #{post.id}
                      </span>

                    </div>

                    {/* TITLE */}
                    <h3 className="
                    font-display
                    text-xl
                    text-white
                    mb-3
                    group-hover:text-neon-cyan
                    transition-colors
                    duration-300
                    leading-tight
                    uppercase
                    ">
                      {post.title}
                    </h3>

                    {/* META */}
                    <div className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-white/30
                    font-mono
                    mb-4
                    ">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    {/* PREVIEW */}
                    <p className="
                    text-sm
                    text-white/50
                    leading-relaxed
                    line-clamp-3
                    ">
                      {post.body}
                    </p>

                    {/* EXPANDED */}
                    {selectedPost?.id === post.id && (
                      <div className="
                      mt-5
                      pt-5
                      border-t
                      border-white/10
                      animate-fade-in-up
                      ">

                        <p className="
                        text-sm
                        text-white/70
                        leading-8
                        ">
                          {post.body}
                        </p>

                        <div className="flex gap-3 mt-5">

                          <button
                            className="
                            px-5
                            py-2
                            bg-neon-pink
                            text-black
                            text-xs
                            font-bold
                            font-mono
                            rounded-sm
                            "
                          >
                            BACA SELENGKAPNYA
                          </button>

                          <button
                            className="
                            px-5
                            py-2
                            glass
                            border
                            border-white/10
                            text-white/50
                            text-xs
                            font-mono
                            rounded-sm
                            hover:text-white
                            "
                          >
                            BAGIKAN
                          </button>

                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-center gap-4">

              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="
                px-5
                py-2.5
                glass
                border
                border-white/10
                text-sm
                font-mono
                text-white/60
                rounded-sm
                hover:text-white
                transition-all
                duration-300
                disabled:opacity-30
                "
              >
                ← PREV
              </button>

              <span className="font-mono text-sm text-white/40">
                Halaman <span className="text-neon-pink">{page}</span>
              </span>

              <button
                onClick={() => setPage((p) => p + 1)}
                className="
                px-5
                py-2.5
                glass
                border
                border-white/10
                text-sm
                font-mono
                text-white/60
                rounded-sm
                hover:text-white
                transition-all
                duration-300
                "
              >
                NEXT →
              </button>

            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ExplorePage
