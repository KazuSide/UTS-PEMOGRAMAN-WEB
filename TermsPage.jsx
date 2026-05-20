export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-body pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-5xl font-display tracking-wide text-neon-yellow">
            SYARAT & <span className="text-neon-pink">KETENTUAN</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Aturan penggunaan platform stagefront</p>
        </div>

        <div className="bg-dark-800 border border-dark-700 p-8 rounded-2xl space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-display text-neon-cyan">1. Ketentuan Pengguna</h2>
            <p>Dengan mengakses dan membeli tiket di STAGEFRONT, kamu menyatakan bahwa kamu berusia minimal 17 tahun atau telah mendapatkan pengawasan dari orang tua atau wali hukum yang sah.</p>
          </section>

          <section className="space-y-2 border-t border-dark-600 pt-4">
            <h2 className="text-lg font-display text-neon-cyan">2. Larangan Calo (Scalping)</h2>
            <p>STAGEFRONT melarang keras penjualan kembali tiket dengan harga yang lebih tinggi untuk keuntungan pribadi. Setiap akun yang terindikasi melakukan aktivitas percaloan akan diblokir secara permanen.</p>
          </section>

          <section className="space-y-2 border-t border-dark-600 pt-4">
            <h2 className="text-lg font-display text-neon-cyan">3. Keamanan Akun</h2>
            <p>Kamu bertanggung jawab penuh untuk menjaga kerahasiaan informasi akun dan password kamu sendiri. STAGEFRONT tidak bertanggung jawab atas kerugian akibat kelalaian menjaga keamanan akun.</p>
          </section>

          <section className="space-y-2 border-t border-dark-600 pt-4">
            <h2 className="text-lg font-display text-neon-cyan">4. Batasan Tanggung Jawab</h2>
            <p>STAGEFRONT bertindak murni sebagai perantara penjualan tiket resmi. Kami tidak bertanggung jawab atas performa artis, kualitas sound system, perubahan susunan acara, ataupun kendala teknis di lapangan saat konser berlangsung.</p>
          </section>
        </div>

      </div>
    </div>
  );
}