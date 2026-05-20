export default function RefundPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-body pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-5xl font-display tracking-wide text-neon-cyan">
            KEBIJAKAN <span className="text-neon-pink">REFUND</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Syarat pengembalian dana tiket</p>
        </div>

        <div className="bg-dark-800 border border-dark-700 p-8 rounded-2xl space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-display text-neon-yellow">1. Pembatalan Acara</h2>
            <p>Jika konser dibatalkan secara resmi oleh pihak penyelenggara (promotor), maka seluruh pembeli tiket berhak mendapatkan pengembalian dana penuh (100%) tidak termasuk biaya admin platform.</p>
          </section>

          <section className="space-y-2 border-t border-dark-600 pt-4">
            <h2 className="text-lg font-display text-neon-yellow">2. Perubahan Jadwal (Reschedule)</h2>
            <p>Apabila terjadi perubahan jadwal konser dan kamu tidak dapat hadir pada tanggal yang baru, kamu dapat mengajukan refund dalam batas waktu maksimal 7 hari setelah pengumuman resmi dikeluarkan.</p>
          </section>

          <section className="space-y-2 border-t border-dark-600 pt-4">
            <h2 className="text-lg font-display text-neon-yellow">3. Alasan Pribadi</h2>
            <p>Tiket yang sudah dibeli tidak dapat dibatalkan atau di-refund dengan alasan pribadi seperti bentrok dengan acara lain, sakit, atau salah memilih kategori tiket.</p>
          </section>

          <section className="space-y-2 border-t border-dark-600 pt-4">
            <h2 className="text-lg font-display text-neon-yellow">4. Proses Pengembalian Dana</h2>
            <p>Proses transfer pengembalian dana memakan waktu 14 hingga 30 hari kerja setelah data permohonan refund disetujui dan diverifikasi oleh tim STAGEFRONT.</p>
          </section>
        </div>

      </div>
    </div>
  );
}