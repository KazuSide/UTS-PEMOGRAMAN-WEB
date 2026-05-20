import { useState } from 'react';

export default function FAQPage() {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    { id: 1, q: "Bagaimana cara membeli tiket di STAGEFRONT?", a: "Pilih konser yang kamu inginkan di halaman Explore, klik tombol beli, pilih kategori tiket, dan selesaikan pembayaran melalui metode yang tersedia." },
    { id: 2, q: "Apakah tiket yang sudah dibeli bisa di-refund?", a: "Kebijakan refund tergantung pada penyelenggara konser. Kamu bisa melihat detail lebih lanjut di halaman Kebijakan Refund kami." },
    { id: 3, q: "Metode pembayaran apa saja yang didukung?", a: "Kami mendukung berbagai metode pembayaran mulai dari Transfer Bank, E-Wallet (GOPAY, OVO, Dana), hingga Kartu Kredit." },
    { id: 4, q: "Bagaimana cara menukarkan e-tiket menjadi gelang fisik?", a: "E-tiket akan dikirimkan ke email kamu. Tunjukkan QR Code yang ada pada e-tiket di lokasi penukaran tiket pada hari H konser." }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white font-body pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-5xl font-display tracking-wide text-neon-pink">
            FREQUENTLY ASKED <span className="text-neon-cyan">QUESTIONS</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Pertanyaan yang sering diajukan</p>
        </div>

        <div className="space-y-4 pt-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden">
              <button 
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full text-left p-5 flex justify-between items-center hover:bg-dark-700 transition-colors duration-200"
              >
                <span className="font-medium text-gray-200 text-sm md:text-base">{faq.q}</span>
                <span className="text-neon-cyan font-mono text-lg">{activeId === faq.id ? '−' : '+'}</span>
              </button>
              {activeId === faq.id && (
                <div className="p-5 border-t border-dark-700 bg-dark-900/50 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}