import { useState } from 'react'

// ──────────────────────────────────────────────
// Ticket Purchase Modal
// ──────────────────────────────────────────────
const TicketModal = ({ concert, onClose }) => {
  const [category, setCategory] = useState('festival')
  const [qty, setQty] = useState(1)
  const [step, setStep] = useState(1) // 1 = pilih, 2 = konfirmasi, 3 = sukses
  const MAX_QTY = 6

  const categories = [
    { id: 'festival', label: 'Festival', multiplier: 1, desc: 'Area festival, standing' },
    { id: 'vip', label: 'VIP', multiplier: 2, desc: 'Area VIP, kursi premium' },
    { id: 'vvip', label: 'VVIP', multiplier: 3, desc: 'Meet & greet + kursi terdepan' },
  ]

  const basePrice = concert.priceNum
  const selectedCat = categories.find((c) => c.id === category)
  const unitPrice = basePrice * selectedCat.multiplier
  const subtotal = unitPrice * qty
  const discount = qty >= 2 ? subtotal * 0.1 : 0
  const total = subtotal - discount

  const formatRp = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val)

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(5,4,10,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={handleBackdrop}
    >
      <div
        className="relative w-full max-w-sm rounded-lg overflow-hidden animate-fade-in-up"
        style={{ animationFillMode: 'forwards' }}
      >
        {/* ── HEADER with gradient ── */}
        <div
          className="relative px-5 pt-5 pb-6"
          style={{ background: concert.gradient }}
        >
          {/* Scanlines overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)' }}
          />

          <button
          onClick={onClose}
            className="
              absolute
              top-4
              right-4
              w-10
              h-10
              rounded-full
              bg-black/20
              hover:bg-black/40
              transition-all
              duration-300
              flex
              items-center
              justify-center
              cursor-pointer
              group
              "
              aria-label="Close"
          >

          <div className="relative w-4 h-4">

          <span
            className="
              absolute
              left-1/2
              top-1/2
              w-4
              h-[2px]
              bg-white
              rounded-full
              -translate-x-1/2
              -translate-y-1/2
              rotate-45
              group-hover:bg-neon-yellow
              "
          />

          <span
            className="
              absolute
              left-1/2
              top-1/2
              w-4
              h-[2px]
              bg-white
              rounded-full
              -translate-x-1/2
              -translate-y-1/2
              -rotate-45
              group-hover:bg-neon-yellow
              "
          />

          </div>

          </button>

          <div className="flex items-center gap-3 relative z-10">
            <div className="text-4xl">{concert.emoji}</div>
            <div>
              <h2 className="font-display text-lg text-white tracking-wider leading-tight uppercase">
                {concert.artist}
              </h2>
              <p className="text-white/70 text-xs font-body mt-0.5">
                {concert.venue}, {concert.city}
              </p>
            </div>
          </div>

          {/* Step progress bar */}
          <div className="flex gap-2 mt-5 relative z-10">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className="h-1 flex-1 rounded-full transition-all duration-500"
                style={{ background: step >= s ? '#FFE600' : 'rgba(255,255,255,0.2)' }}
              />
            ))}
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="bg-dark-800 px-5 py-5 space-y-5">

          {/* STEP 1 — Pilih tiket */}
          {step === 1 && (
            <>
              {/* Kategori */}
              <div>
                <p className="text-xs font-mono text-white/40 tracking-widest mb-3 uppercase">Kategori Tiket</p>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`py-3 px-2 rounded-sm border text-center transition-all duration-300 ${
                        category === cat.id
                          ? 'border-neon-yellow bg-neon-yellow/10 shadow-[0_0_15px_rgba(255,230,0,0.2)]'
                          : 'border-white/10 hover:border-white/30 bg-dark-700/50'
                      }`}
                    >
                      <p className={`font-bold font-display text-sm ${category === cat.id ? 'text-neon-yellow' : 'text-white/70'}`}>
                        {cat.label}
                      </p>
                      <p className="text-white/30 text-xs font-mono mt-0.5">x{cat.multiplier} harga</p>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-white/30 font-body mt-2 ml-1">{selectedCat.desc}</p>
              </div>

              {/* Jumlah */}
              <div>
                <p className="text-xs font-mono text-white/40 tracking-widest mb-3 uppercase">Jumlah Tiket</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    disabled={qty <= 1}
                    className="w-10 h-10 rounded-sm glass border border-white/10 text-white font-bold text-lg hover:border-neon-pink/50 hover:text-neon-pink transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <span className="font-display text-2xl text-white w-8 text-center">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))}
                    disabled={qty >= MAX_QTY}
                    className="w-10 h-10 rounded-sm glass border border-white/10 text-white font-bold text-lg hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                  <span className="text-xs font-mono text-white/25 ml-1">Maks. {MAX_QTY} tiket</span>
                </div>
              </div>

              {/* Summary box */}
              <div className="rounded-sm bg-dark-700/60 border border-white/5 p-4 space-y-3">

                <div className="flex justify-between text-sm">
                  <span className="text-white/50">
                    Harga satuan ({selectedCat.label})
                  </span>

                  <span className="text-white">
                    {formatRp(unitPrice)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-white/50">
                    Jumlah
                  </span>

                  <span className="text-white">
                    x{qty}
                  </span>
                </div>

                {qty >= 2 && (
                <div className="flex justify-between">

                  <span className="text-neon-cyan">
                    Diskon 10%
                  </span>

                  <span className="text-neon-cyan">
                    − {formatRp(discount)}
                  </span>

                </div>
                )}

                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span className="font-bold text-white">
                    TOTAL
                  </span>
                  <span className="font-display text-xl text-neon-yellow">
                    {formatRp(total)}
                  </span>
                </div>

              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-neon-yellow text-black font-bold font-display tracking-widest text-sm rounded-sm hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,230,0,0.4)] active:scale-[0.98]"
              >
                LANJUTKAN →
              </button>
            </>
          )}

          {/* STEP 2 — Detail Konser */}
          {step === 2 && (
          <>
            <div>

              <p className="text-xs font-mono text-white/40 tracking-widest mb-4 uppercase">
                Detail Konser
              </p>

              <div className="rounded-sm overflow-hidden border border-white/10 bg-dark-700/60">

                {/* Header */}
                <div
                  className="px-5 py-6"
                  style={{
                    background: concert.gradient,
                  }}
                >

                  <div className="flex items-center gap-4">

                    <div className="text-5xl">
                      {concert.emoji}
                    </div>

                    <div>

                      <h2 className="font-display text-2xl text-white tracking-wider uppercase">
                        {concert.artist}
                      </h2>

                      <p className="text-white/70 text-sm">
                        {concert.venue}, {concert.city}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Content */}
                <div className="p-5 space-y-4">

                  <div className="flex justify-between text-sm border-b border-white/10 pb-3">
                    <span className="text-white/40 font-mono">
                      TOUR
                    </span>

                    <span className="text-white">
                      {concert.tourName}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm border-b border-white/10 pb-3">
                    <span className="text-white/40 font-mono">
                      TANGGAL
                    </span>

                    <span className="text-white">
                      {concert.date}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm border-b border-white/10 pb-3">
                    <span className="text-white/40 font-mono">
                      KATEGORI
                    </span>

                    <span className="text-neon-yellow">
                      {selectedCat.label}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm border-b border-white/10 pb-3">
                    <span className="text-white/40 font-mono">
                      JUMLAH
                    </span>

                    <span className="text-white">
                      {qty} tiket
                    </span>
                  </div>

                  <div className="pt-2">

                    <p className="text-white/40 font-mono text-xs mb-3">
                      DESKRIPSI
                    </p>

                    <p className="text-sm text-white/70 leading-7">

                      Bersiap menikmati pengalaman konser
                      <span className="text-neon-pink">
                        {' '}{concert.artist}
                      </span>
                      {' '}melalui tur
                      <span className="text-neon-cyan">
                        {' '}{concert.tourName}
                      </span>
                      .

                      Nikmati tata panggung spektakuler,
                      pengalaman audio visual premium,
                      serta atmosfer konser yang lebih hidup.

                    </p>

                  </div>

                  <div className="border-t border-white/10 pt-4 flex justify-between items-center">

                    <span className="font-bold text-white">
                      TOTAL
                    </span>

                    <span className="font-display text-2xl text-neon-yellow">
                      {formatRp(total)}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() => setStep(1)}
                className="
                flex-1
                py-3
                glass
                border
                border-white/10
                text-white/60
                font-mono
                text-sm
                tracking-widest
                rounded-sm
                hover:text-white
                hover:border-white/30
                transition-all
                "
              >
                ← KEMBALI
              </button>

              <button
                onClick={() => setStep(3)}
                className="
                flex-1
                py-3
                bg-neon-pink
                text-black
                font-bold
                font-display
                tracking-widest
                text-sm
                rounded-sm
                hover:bg-white
                transition-all
                "
              >
                BAYAR →
              </button>

            </div>
          </>
          )}

          {/* STEP 3 — Sukses */}
          {step === 3 && (
            <div className="text-center py-4">
              <div className="text-6xl mb-4 animate-float">{concert.emoji}</div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-pink/10 border-2 border-neon-pink flex items-center justify-center neon-border-pink">
                <span className="text-neon-pink text-2xl">✓</span>
              </div>
              <h3 className="font-display text-xl text-white mb-2">PESANAN BERHASIL!</h3>
              <p className="text-white/40 text-sm font-body mb-1">
                {qty} tiket <span className="text-neon-cyan">{selectedCat.label}</span> untuk
              </p>
              <p className="text-neon-yellow font-display mb-1">{concert.artist}</p>
              <p className="text-white/30 text-xs font-body mb-6">{concert.date}</p>

              {/* Fake ticket barcode */}
              <div className="glass rounded-sm p-4 mb-5 border border-neon-pink/20">
                <p className="text-xs font-mono text-white/30 mb-3 tracking-widest">E-TICKET</p>
                <div className="flex gap-px justify-center mb-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 max-w-[3px] rounded-px"
                      style={{
                        height: `${Math.random() > 0.4 ? 28 : 18}px`,
                        background: i % 4 === 0 ? '#FF2D78' : 'rgba(255,255,255,0.25)',
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs font-mono text-white/20 tracking-widest">
                  STG-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 bg-neon-pink text-black font-bold font-display tracking-widest text-sm rounded-sm hover:bg-white transition-all duration-300"
              >
                SELESAI ✓
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────
// Concert Card
// ──────────────────────────────────────────────
const ConcertCard = ({ concert, delay = 0 }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <>
      <article
        className="animate-fade-in-up opacity-0-init glass rounded-sm overflow-hidden group hover:border-neon-pink/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,45,120,0.15)] relative"
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      >
        {/* Toast */}
        {showToast && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 bg-neon-pink text-black text-xs font-mono font-bold rounded-sm whitespace-nowrap">
            {isWishlisted ? '♥ Ditambahkan!' : '♡ Dihapus'}
          </div>
        )}

        {/* Image area */}
        <div className="relative h-48 overflow-hidden bg-dark-700">
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
            style={{ background: concert.gradient }}
          >
            <span className="text-6xl animate-float" style={{ animationDelay: `${delay * 0.5}ms` }}>
              {concert.emoji}
            </span>
          </div>

          {/* Badge */}
          <div className="absolute top-3 left-3 px-2 py-1 bg-dark-900/80 backdrop-blur-sm rounded-sm">
            <span className="text-xs font-mono text-neon-yellow tracking-widest">{concert.genre}</span>
          </div>

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-8 h-8 glass rounded-sm flex items-center justify-center hover:bg-neon-pink/20 transition-all duration-300"
            aria-label={isWishlisted ? 'Hapus dari wishlist' : 'Tambah ke wishlist'}
          >
            <span className={`text-sm transition-all duration-300 ${isWishlisted ? 'text-neon-pink scale-125' : 'text-white/50'}`}>
              {isWishlisted ? '♥' : '♡'}
            </span>
          </button>

          {/* Availability bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-900/60">
            <div
              className="h-full transition-all duration-1000"
              style={{
                width: `${concert.availability}%`,
                background: concert.availability > 50 ? '#00F5FF' : concert.availability > 20 ? '#FFE600' : '#FF2D78',
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-lg text-white group-hover:text-neon-pink transition-colors duration-300 tracking-wider mb-1">
            {concert.artist}
          </h3>
          <p className="text-sm text-neon-cyan font-mono mb-3">{concert.tourName}</p>

          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-2 text-xs text-white/50 font-body">
              <span>📍</span>
              <span>{concert.venue}, {concert.city}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50 font-body">
              <span>📅</span>
              <span>{concert.date}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50 font-body">
              <span>👥</span>
              <span>{concert.availability}% tiket tersisa</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/30 font-mono mb-0.5">MULAI DARI</p>
              <p className="font-display text-lg text-neon-yellow">{concert.price}</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-neon-pink text-black text-xs font-bold font-mono tracking-widest rounded-sm hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,45,120,0.5)] active:scale-95"
            >
              BELI
            </button>
          </div>
        </div>
      </article>

      {/* Modal */}
      {showModal && (
        <TicketModal concert={concert} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

export default ConcertCard
