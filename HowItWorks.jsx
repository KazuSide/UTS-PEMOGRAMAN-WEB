import { useState } from 'react'

const steps = [
  {
    number: '01',
    icon: '🔍',
    title: 'Temukan Konser',
    color: '#FF2D78',
    desc: 'Gunakan fitur pencarian dan filter untuk menemukan konser artis favoritmu berdasarkan genre, kota, harga, dan tanggal.',
  },
  {
    number: '02',
    icon: '🎟️',
    title: 'Pilih Tiket',
    color: '#00F5FF',
    desc: 'Pilih kategori tiket — Festival, VIP, VVIP, atau Tribun. Lihat detail venue, tanggal, dan syarat sebelum lanjut.',
  },
  {
    number: '03',
    icon: '💳',
    title: 'Bayar dengan Aman',
    color: '#FFE600',
    desc: 'Bayar via transfer bank, e-wallet (GoPay, OVO, DANA), kartu kredit, atau QRIS. Enkripsi SSL 256-bit.',
  },
  {
    number: '04',
    icon: '📱',
    title: 'Terima E-Ticket',
    color: '#a78bfa',
    desc: 'Tiket digital langsung dikirim ke email dan akunmu dalam hitungan menit. Tunjukkan QR code saat masuk venue.',
  },
]

const faqs = [
  {
    q: 'Apakah tiket bisa dikembalikan / refund?',
    a: 'Pembatalan konser oleh promotor mendapat refund penuh dalam 7–14 hari kerja. Tiket tidak dapat dikembalikan atas inisiatif pembeli kecuali ada kebijakan khusus.',
  },
  {
    q: 'Bisakah tiket dipindahtangankan?',
    a: 'Tiket terikat pada nama pemesan. Transfer kepemilikan bisa dilakukan via fitur "Transfer Tiket" di akun, dengan biaya admin sesuai kategori.',
  },
  {
    q: 'Tips war ticket saat penjualan dibuka?',
    a: 'Login sebelum waktu penjualan, siapkan metode pembayaran, aktifkan notifikasi, gunakan jaringan stabil, dan refresh halaman tepat saat timer habis.',
  },
]

export default function HowItWorks({ onClose }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div
      className="fixed inset-0 z-[200] flex justify-center"
      style={{
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(10px)',
        paddingTop: '72px',   /* tepat di bawah header h-16 (64px) + 8px gap */
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '16px',
        alignItems: 'flex-start',
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-2xl border border-white/10 bg-dark-800 animate-fade-in-up"
        style={{
          maxWidth: '700px',
          maxHeight: 'calc(100vh - 88px)',  /* 72px paddingTop + 16px paddingBottom */
          overflowY: 'auto',
          boxShadow: '0 0 60px rgba(255,45,120,0.15), 0 25px 50px rgba(0,0,0,0.6)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,45,120,0.3) transparent',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky close button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right mt-4 mr-4 z-20 w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-neon-pink/50 hover:bg-neon-pink/10 transition-all duration-200 text-xs font-mono"
          style={{ background: 'rgba(15,15,25,0.9)', backdropFilter: 'blur(4px)' }}
        >
          ✕
        </button>

        <div className="px-6 pt-6 pb-8 sm:px-8 sm:pt-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <p className="text-xs font-mono text-neon-pink tracking-widest mb-2">// PANDUAN</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">
              CARA KERJA <span className="text-neon-cyan">STAGEFRONT</span>
            </h2>
            <p className="text-white/40 font-body text-sm max-w-sm mx-auto leading-relaxed">
              Dari pencarian hingga masuk venue — 4 langkah mudah mendapatkan tiket konser impianmu.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl p-4 border transition-all duration-300 group"
                style={{
                  background: `${step.color}08`,
                  borderColor: `${step.color}25`,
                }}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className="text-2xl flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-lg"
                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}35` }}
                  >
                    {step.icon}
                  </div>
                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-xs font-mono mb-1 tracking-widest" style={{ color: step.color }}>
                      LANGKAH {step.number}
                    </p>
                    <h3 className="font-display text-base text-white mb-1.5 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed font-body">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Step flow indicator */}
          <div className="flex items-center justify-center gap-1.5 mb-8">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40` }}
                >
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="text-white/20 text-xs">→</span>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mb-6" />

          {/* FAQ */}
          <div className="mb-6">
            <h3 className="font-display text-lg text-white mb-4">
              PERTANYAAN <span className="text-neon-yellow">UMUM</span>
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-all duration-200"
                  >
                    <span className="font-mono text-sm text-white/75 pr-4 leading-snug">{faq.q}</span>
                    <span className="text-neon-pink flex-shrink-0 text-xs">
                      {openFaq === i ? '▲' : '▼'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 border-t border-white/5 pt-3">
                      <p className="text-xs text-white/50 leading-relaxed font-body">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-2">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-neon-pink text-black font-bold font-mono tracking-widest text-sm rounded-sm hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,45,120,0.6)] active:scale-95"
            >
              MULAI SEKARANG
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
