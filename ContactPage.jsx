export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-body pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-5xl font-display tracking-wide text-neon-pink">
            HUBUNGI <span className="text-neon-cyan">KAMI</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Kami siap membantu kamu 24/7</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-dark-800 border border-dark-700 p-8 rounded-2xl space-y-6">
            <h2 className="text-xl font-display text-white">Informasi Kontak</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Punya pertanyaan seputar tiket konser atau mengalami kendala pembayaran? Silakan hubungi kami melalui saluran berikut.
            </p>
            
            <div className="space-y-4 pt-2 font-mono text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <span className="text-neon-pink text-base">📍</span>
                <span>Jl. Ring Road Utara, Yogyakarta</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-cyan text-base">✉️</span>
                <span>support@stagefront.id</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-yellow text-base">📞</span>
                <span>+62 812-3456-7890</span>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-dark-800 border border-dark-700 p-8 rounded-2xl space-y-4">
            <h2 className="text-xl font-display text-white">Kirim Pesan</h2>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">Nama</label>
              <input type="text" className="w-full bg-dark-900 border border-dark-600 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-neon-pink" placeholder="Nama lengkap kamu" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">Email</label>
              <input type="email" className="w-full bg-dark-900 border border-dark-600 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-neon-cyan" placeholder="email@kamu.com" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">Pesan</label>
              <textarea rows="4" className="w-full bg-dark-900 border border-dark-600 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-neon-yellow resize-none" placeholder="Tulis kendala atau pertanyaanmu disini..."></textarea>
            </div>
            <button type="submit" className="w-full bg-neon-cyan text-dark-900 font-mono font-bold py-2.5 rounded-lg hover:scale-[1.02] transition-transform duration-200">
              KIRIM PESAN
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}