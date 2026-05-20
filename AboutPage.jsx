import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-body pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-display tracking-wide animate-pulse-glow inline-block px-4 py-2 border border-neon-pink rounded-lg bg-dark-800">
            ABOUT <span className="text-neon-cyan">STAGEFRONT</span>
          </h1>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest max-w-md mx-auto pt-4">
            Platform Tiket Konser Terdepan di Indonesia
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-dark-800 p-8 rounded-2xl border border-dark-700 backdrop-blur-sm">
          <article className="space-y-4">
            <h2 className="text-2xl font-display text-neon-pink">Misi Kami</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              STAGEFRONT hadir untuk mengubah cara kamu menikmati hiburan musik. Kami menghubungkan jutaan penggemar dengan musisi favorit mereka melalui sistem penjualan tiket yang aman, cepat, dan transparan.
            </p>
          </article>
          <article className="space-y-4 border-t md:border-t-0 md:border-l border-dark-600 pt-6 md:pt-0 md:pl-8">
            <h2 className="text-2xl font-display text-neon-cyan">Teknologi Terkini</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dengan arsitektur modern berkecepatan tinggi, kami memastikan proses transaksi berjalan lancar bahkan saat periode *war ticket* yang paling padat sekalipun.
            </p>
          </article>
        </section>

        <section className="bg-gradient-to-r from-dark-800 to-dark-700 p-8 rounded-2xl border border-neon-cyan/30 text-center space-y-6">
          <h3 className="text-xl font-mono text-neon-yellow">Siap Menjelajahi Konser Impianmu?</h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Temukan ribuan event musik dari berbagai genre dan kota di seluruh Indonesia sekarang juga.
          </p>
          <div className="pt-2">
            <Link 
              to="/explore" 
              className="inline-block bg-neon-pink text-white font-mono font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(255,45,120,0.5)]"
            >
              JELAJAHI SEKARANG
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
