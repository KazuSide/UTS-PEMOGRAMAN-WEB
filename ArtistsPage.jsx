import { useState } from 'react'

const artists = [
  {
    id: 1,
    name: 'PAMUNGKAS',
    genre: 'Indie Pop',
    origin: 'Yogyakarta',
    emoji: '🎸',
    fans: '2.3M',
    tours: 12,
    rating: 4.9,
    debut: '2017',
    realName: 'Pamungkas',
    label: 'Independent',
    spotify: '4.1M',
    bio: 'Pamungkas adalah singer-songwriter asal Yogyakarta yang dikenal dengan suara intim dan lirik puitis berbahasa Inggris. Kariernya melejit lewat pendekatan lo-fi yang autentik, menggabungkan indie pop dengan nuansa bedroom pop yang hangat dan jujur.\n\nDebut albumnya "Walk the Talk" (2017) langsung mencuri perhatian dengan single "To the Bone" yang viral secara organik di berbagai platform streaming. Kejujuran emosional dalam setiap lagunya membuat ia cepat membangun basis penggemar loyal dari kalangan anak muda Indonesia hingga mancanegara.\n\nHingga kini Pamungkas terus berkarya secara independen, membuktikan bahwa musisi Indonesia bisa menembus pasar internasional tanpa dukungan label besar.',
    milestones: [
      { year: '2017', event: 'Rilis debut album "Walk the Talk"' },
      { year: '2018', event: '"To the Bone" viral, menembus 50 juta streams' },
      { year: '2021', event: 'Tur internasional pertama ke Asia Tenggara' },
      { year: '2023', event: 'Rilis album "Solipsism" dengan world tour' },
    ],
    bestAlbums: ['Walk the Talk', 'Solipsism', 'Birdy'],
    funFact: 'Pamungkas merekam debut albumnya di kamar kos dengan peralatan seadanya — justru kualitas lo-fi itulah yang menjadi ciri khasnya dan dicintai jutaan pendengar.',
  },
  {
    id: 2,
    name: 'RAISA',
    genre: 'Pop',
    origin: 'Jakarta',
    emoji: '🌙',
    fans: '8.1M',
    tours: 28,
    rating: 4.8,
    debut: '2011',
    realName: 'Raisa Andriana',
    label: 'Universal Music Indonesia',
    spotify: '12M',
    bio: 'Raisa Andriana adalah salah satu penyanyi pop paling berpengaruh di Indonesia. Dengan suara soprano yang khas dan stage presence yang memukau, ia telah mendefinisikan ulang standar artis pop wanita tanah air selama lebih dari satu dekade.\n\nDebutnya di industri musik dimulai dengan single "Serba Salah" yang langsung meledak di tangga lagu nasional. Raisa dikenal mampu membawakan lagu sendu dengan kedalaman emosi yang membuat pendengar terhanyut, sebuah kemampuan yang membuatnya meraih berbagai penghargaan bergengsi.\n\nSelain bermusik, Raisa juga aktif dalam berbagai kegiatan sosial dan sempat berkolaborasi dengan artis internasional, membuktikan bahwa kualitasnya diakui melampaui batas negara.',
    milestones: [
      { year: '2011', event: 'Debut dengan single "Serba Salah"' },
      { year: '2013', event: 'Album self-titled raih Platinum Award' },
      { year: '2017', event: 'Konser solo "Raisa Live in Concert" sold out' },
      { year: '2022', event: 'Tur "Teduh" di 10 kota besar Indonesia' },
    ],
    bestAlbums: ['Raisa', 'Heart to Heart', 'Handmade'],
    funFact: 'Sebelum solo, Raisa pernah menjadi backing vocalist untuk beberapa artis besar Indonesia — pengalaman itulah yang mengasah kemampuan vokalnya menjadi luar biasa.',
  },
  {
    id: 3,
    name: 'TULUS',
    genre: 'Soul/R&B',
    origin: 'Bukittinggi',
    emoji: '✨',
    fans: '5.4M',
    tours: 20,
    rating: 4.9,
    debut: '2011',
    realName: 'Muhammad Tulus',
    label: 'Tulus Music',
    spotify: '9.2M',
    bio: 'Muhammad Tulus adalah musisi soul berbakat dari Bukittinggi, Sumatera Barat, yang membawa warna berbeda di industri musik pop Indonesia. Dengan sentuhan jazz dan R&B yang dipadukan lirik Bahasa Indonesia yang puitis, Tulus menciptakan genre tersendiri yang sulit ditiru.\n\nKariernya dimulai dengan album debut bertajuk "Tulus" yang langsung mendapat respons luar biasa dari pendengar. Setiap albumnya menampilkan kedewasaan bermusik yang terus berkembang, dengan tema-tema yang dekat dengan kehidupan sehari-hari namun dikemas dengan sangat elegan.\n\nTulus dikenal sebagai perfeksionis dalam bermusik. Ia sering menghabiskan waktu berbulan-bulan untuk menyempurnakan sebuah lagu, dan dedikasi inilah yang membuat setiap rilisannya selalu dinantikan penggemarnya.',
    milestones: [
      { year: '2011', event: 'Debut album "Tulus" dirilis' },
      { year: '2014', event: 'Album "Gajah" raih penghargaan AMI Awards' },
      { year: '2019', event: '"Manusia" masuk nominasi album terbaik Asia' },
      { year: '2023', event: 'Manusia World Tour menyambangi Eropa' },
    ],
    bestAlbums: ['Gajah', 'Monokrom', 'Manusia'],
    funFact: 'Tulus adalah lulusan arsitektur — ketelitian dan sense of structure dari dunia arsitektur sangat mempengaruhi cara ia menyusun aransemen musiknya.',
  },
  {
    id: 4,
    name: 'RICH BRIAN',
    genre: 'Hip-Hop',
    origin: 'Jakarta',
    emoji: '🔥',
    fans: '12M',
    tours: 35,
    rating: 4.7,
    debut: '2016',
    realName: 'Brian Imanuel Soewarno',
    label: '88rising',
    spotify: '18M',
    bio: 'Brian Imanuel Soewarno, yang dikenal dunia sebagai Rich Brian, adalah fenomena musik global yang lahir dari internet. Remaja asal Jakarta ini menggebrak industri hip-hop dunia saat usianya belum genap 17 tahun dengan single viral yang menarik perhatian label 88rising berbasis Los Angeles.\n\nDebutnya yang mengejutkan membuktikan bahwa bakat tidak mengenal batas geografis. Rich Brian menulis, memproduksi, dan merilis musiknya sendiri dari kamarnya di Jakarta sebelum akhirnya pindah ke Amerika Serikat untuk mengembangkan karier. Gaya rappingnya yang unik dan produksi beats yang matang membuatnya menonjol di antara rapper seusianya.\n\nKini Rich Brian adalah salah satu artis Asia paling berpengaruh di kancah musik global, membuka jalan bagi artis-artis Asia lain untuk menembus industri musik internasional.',
    milestones: [
      { year: '2016', event: 'Single debut viral di SoundCloud & Twitter' },
      { year: '2018', event: 'Album debut "Amen" dirilis via 88rising' },
      { year: '2019', event: 'Tur Amerika Utara pertama sold out' },
      { year: '2023', event: 'Kolaborasi dengan artis-artis hip-hop kelas dunia' },
    ],
    bestAlbums: ['Amen', 'The Sailor', 'Brightside'],
    funFact: 'Rich Brian belajar bahasa Inggris dan hip-hop seluruhnya dari internet — ia tidak pernah mengambil kelas vokal atau rap, semua murni autodidak.',
  },
  {
    id: 5,
    name: 'ISYANA SARASVATI',
    genre: 'Pop',
    origin: 'Bandung',
    emoji: '🦋',
    fans: '6.2M',
    tours: 18,
    rating: 4.8,
    debut: '2015',
    realName: 'Isyana Sarasvati',
    label: 'Sony Music Entertainment',
    spotify: '8.5M',
    bio: 'Isyana Sarasvati adalah perpaduan sempurna antara musisi klasik terlatih dan pop star modern. Lahir di Bandung, ia menyelesaikan pendidikan musik klasik di Nanyang Academy of Fine Arts Singapura dan Royal College of Music London sebelum memutuskan terjun ke industri pop Indonesia.\n\nDebut albumnya langsung meledak dengan "Keep Being You" yang menampilkan vokal opera berpadu dengan aransemen pop kontemporer — sebuah kombinasi yang belum pernah ada sebelumnya di Indonesia. Isyana berhasil membuktikan bahwa musik klasik dan pop bisa berjalan beriringan tanpa mengorbankan salah satunya.\n\nDi balik penampilannya yang anggun, Isyana adalah musisi yang sangat teknikal dan detail-oriented. Ia sering terlibat langsung dalam proses aransemen dan produksi setiap lagunya.',
    milestones: [
      { year: '2015', event: 'Debut dengan "Keep Being You", langsung viral' },
      { year: '2016', event: 'Album "Explore!" raih berbagai penghargaan' },
      { year: '2019', event: 'Kolaborasi dengan orkestra simfoni nasional' },
      { year: '2022', event: '"Lexicon" tur keliling Indonesia' },
    ],
    bestAlbums: ['Keep Being You', 'Explore!', 'Lexicon'],
    funFact: 'Isyana adalah pemain biola yang sangat mahir — ia bahkan pernah tampil sebagai solois dengan orkestra simfoni sebelum memulai karier sebagai penyanyi pop.',
  },
  {
    id: 6,
    name: 'HINDIA',
    genre: 'Indie',
    origin: 'Jakarta',
    emoji: '🌿',
    fans: '1.8M',
    tours: 9,
    rating: 4.9,
    debut: '2019',
    realName: 'Baskara Putra',
    label: 'Sun Eater',
    spotify: '3.7M',
    bio: 'Baskara Putra, yang berkarya di bawah nama Hindia, adalah suara paling autentik dari generasi musik indie Indonesia kontemporer. Sebelum solo, ia dikenal luas sebagai vokalis .feast, band indie rock yang memiliki basis penggemar fanatik di kalangan anak muda urban.\n\nHindia lahir sebagai proyek pribadi yang lebih intim — ruang bagi Baskara untuk mengeksplorasi kerentanan, kecemasan, dan kerinduan yang terlalu personal untuk dibawakan lewat .feast. Lirik-liriknya yang jujur dan tidak berpura-pura menjadi daya tarik utama yang membuat pendengar merasa "dimengerti".\n\nLabel Sun Eater yang ia dirikan bersama rekan-rekannya juga menjadi salah satu label indie paling berpengaruh di Indonesia, melahirkan banyak artis muda berbakat.',
    milestones: [
      { year: '2019', event: 'Debut EP "Setengah Tahun Ini"' },
      { year: '2020', event: 'Album "Menari dengan Bayangan" dirilis' },
      { year: '2021', event: 'Sun Eater Festival perdana digelar' },
      { year: '2023', event: '"Evermore Indonesia" tur nasional' },
    ],
    bestAlbums: ['Menari dengan Bayangan', 'Lagipula Hidup Akan Berakhir', 'Evermore'],
    funFact: 'Nama "Hindia" dipilih Baskara karena merujuk pada Samudra Hindia — ia ingin musiknya terasa seperti lautan: luas, tenang, tapi menyimpan kedalaman tak terduga.',
  },
  {
    id: 7,
    name: 'MALIQ & D ESSENTIALS',
    genre: 'Jazz/Soul',
    origin: 'Jakarta',
    emoji: '🎷',
    fans: '3.9M',
    tours: 22,
    rating: 4.7,
    debut: '2002',
    realName: "Maliq & D'Essentials",
    label: 'Warner Music Indonesia',
    spotify: '6.8M',
    bio: "Maliq & D'Essentials adalah band jazz-soul paling konsisten dan berpengaruh dalam sejarah musik Indonesia modern. Berdiri sejak 2002, mereka telah melewati berbagai perubahan formasi namun tetap mempertahankan identitas musikalnya yang kuat dan khas.\n\nDengan memadukan jazz, soul, R&B, dan funk ke dalam format band, Maliq menciptakan suara yang terasa sangat segar di telinga pendengar Indonesia yang kala itu lebih akrab dengan pop dan rock. Mereka membuktikan bahwa musik berkualitas tinggi bisa juga menjadi musik populer.\n\nSepanjang lebih dari dua dekade berkarya, Maliq & D'Essentials telah menjadi referensi utama bagi musisi muda Indonesia yang ingin mengeksplorasi genre jazz dan soul. Pengaruh mereka terasa nyata dalam gelombang musik R&B Indonesia yang berkembang saat ini.",
    milestones: [
      { year: '2002', event: 'Band dibentuk di Jakarta' },
      { year: '2006', event: 'Album "1" menjadi breakthrough nasional' },
      { year: '2014', event: 'Tur internasional pertama ke Malaysia & Singapura' },
      { year: '2022', event: 'Perayaan 20 tahun berkarya dengan album spesial' },
    ],
    bestAlbums: ['1', 'Mata Hati Telinga Rasa', 'Senandung Lama'],
    funFact: "Nama 'D'Essentials' terinspirasi dari kata 'essentials' — para pendiri band ingin musiknya menjadi sesuatu yang esensial, sesuatu yang selalu dibutuhkan pendengarnya.",
  },
  {
    id: 8,
    name: 'REALITY CLUB',
    genre: 'Indie Rock',
    origin: 'Jakarta',
    emoji: '🌅',
    fans: '900K',
    tours: 7,
    rating: 4.8,
    debut: '2016',
    realName: 'Reality Club',
    label: 'Independent',
    spotify: '2.1M',
    bio: 'Reality Club adalah band indie rock muda dari Jakarta yang dalam waktu singkat berhasil membangun reputasi sebagai salah satu act paling exciting di skena musik Indonesia. Dengan sound yang terinspirasi dari indie rock Barat namun tetap terasa lokal, mereka menemukan ceruk unik yang sulit disaingi.\n\nDibentuk saat para anggotanya masih duduk di bangku kuliah, Reality Club menunjukkan kedewasaan bermusik yang jauh melampaui usia mereka. Lirik dalam Bahasa Inggris yang puitis dan melodik, dipadukan dengan dinamika band yang kuat, menciptakan pengalaman mendengarkan yang imersif.\n\nMeski masih tergolong baru, Reality Club telah tampil di berbagai festival musik bergengsi dan konsisten menarik perhatian media musik internasional sebagai artis Asia yang patut diperhitungkan.',
    milestones: [
      { year: '2016', event: 'Band dibentuk, rilis single pertama' },
      { year: '2018', event: 'EP "Reality Club" mendapat respons internasional' },
      { year: '2021', event: 'Tampil di festival musik internasional pertama' },
      { year: '2024', event: 'Album "Before The Sunrise" tur Asia Tenggara' },
    ],
    bestAlbums: ['Before The Sunrise', 'In This World', 'Reality Club EP'],
    funFact: 'Reality Club menulis hampir semua lagu mereka dalam Bahasa Inggris — bukan untuk mengejar pasar internasional, tapi karena mereka merasa emosi tertentu hanya bisa diungkapkan dalam bahasa tersebut.',
  },
]


const StatBadge = ({ label, value, color }) => (
  <div style={{
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 6,
    padding: '10px 14px',
    textAlign: 'center',
    flex: 1,
  }}>
    <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color, margin: 0 }}>{value}</p>
    <p style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)', margin: '4px 0 0', letterSpacing: 2 }}>{label}</p>
  </div>
)

const BioPanel = ({ artist }) => {
  const cyan = '#00F5FF'
  const pink = '#FF2D78'
  const gold = '#FFE600'

  return (
    <div style={{
      background: 'rgba(0,0,0,0.6)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12,
      padding: '28px 28px 24px',
      backdropFilter: 'blur(20px)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
        <div style={{
          width: 72, height: 72, borderRadius: 12,
          background: 'rgba(0,245,255,0.08)',
          border: '1px solid rgba(0,245,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 36, flexShrink: 0,
        }}>
          {artist.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'monospace', fontSize: 10, color: cyan, letterSpacing: 4, margin: '0 0 4px' }}>// BIOGRAFI</p>
          <h2 style={{ fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)', fontSize: 26, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 }}>
            {artist.name}
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            {artist.realName} · {artist.origin} · Debut {artist.debut}
          </p>
        </div>
      </div>

     
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <StatBadge label="FANS" value={artist.fans} color={pink} />
        <StatBadge label="TOURS" value={artist.tours} color={cyan} />
        <StatBadge label="RATING" value={`★${artist.rating}`} color={gold} />
      </div>

      
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.15)',
        borderRadius: 20, padding: '4px 12px', marginBottom: 24,
      }}>
        <span style={{ fontSize: 10, color: cyan, fontFamily: 'monospace', letterSpacing: 1 }}>🎵 {artist.label}</span>
      </div>

      
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: cyan, letterSpacing: 3, margin: '0 0 10px' }}>TENTANG ARTIS</p>
        {artist.bio.split('\n\n').map((para, i) => (
          <p key={i} style={{
            fontSize: 13, color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8, margin: i > 0 ? '10px 0 0' : 0,
            fontFamily: 'Georgia, serif',
          }}>{para}</p>
        ))}
      </div>

      
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: gold, letterSpacing: 3, margin: '0 0 12px' }}>PERJALANAN KARIER</p>
        <div style={{ position: 'relative', paddingLeft: 24 }}>
          <div style={{ position: 'absolute', left: 6, top: 6, bottom: 6, width: 1, background: 'rgba(255,230,0,0.15)' }} />
          {artist.milestones.map((m, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < artist.milestones.length - 1 ? 14 : 0 }}>
              <div style={{
                position: 'absolute', left: -18, top: 4,
                width: 8, height: 8, borderRadius: '50%',
                background: gold, boxShadow: `0 0 8px ${gold}`,
              }} />
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: gold, letterSpacing: 1, marginRight: 8 }}>{m.year}</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{m.event}</span>
            </div>
          ))}
        </div>
      </div>

      
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: pink, letterSpacing: 3, margin: '0 0 10px' }}>ALBUM TERBAIK</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {artist.bestAlbums.map((album, i) => (
            <span key={i} style={{
              background: 'rgba(255,45,120,0.08)', border: '1px solid rgba(255,45,120,0.2)',
              borderRadius: 20, padding: '4px 12px',
              fontSize: 11, color: pink, fontFamily: 'monospace', letterSpacing: 0.5,
            }}>🎵 {album}</span>
          ))}
        </div>
      </div>

      
      <div style={{
        background: 'rgba(0,245,255,0.04)',
        border: '1px solid rgba(0,245,255,0.1)',
        borderLeft: `3px solid ${cyan}`,
        borderRadius: '0 8px 8px 0',
        padding: '12px 16px',
      }}>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: cyan, letterSpacing: 2, margin: '0 0 6px' }}>⚡ TAHUKAH KAMU?</p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.7, fontStyle: 'italic' }}>
          {artist.funFact}
        </p>
      </div>
    </div>
  )
}



const ArtistsPage = () => {
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [view, setView] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFollowing, setIsFollowing] = useState({})

  const filteredArtists = artists.filter((a) =>
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.genre.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectArtist = (artist) => {
    setSelectedArtist(selectedArtist?.id === artist.id ? null : artist)
  }

  const handleFollow = (artistId) => {
    setIsFollowing((prev) => ({ ...prev, [artistId]: !prev[artistId] }))
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="mb-10 animate-fade-in-up">
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            ARTIS<br /><span className="shimmer-text">PILIHAN</span>
          </h1>
        </div>

        
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
              <button key={v} onClick={() => setView(v)}
                className={`px-4 py-3 font-mono text-xs tracking-widest rounded-sm transition-all duration-300 ${
                  view === v ? 'bg-neon-cyan text-black font-bold' : 'glass text-white/50 hover:text-white'
                }`}>
                {v === 'grid' ? '⊞ GRID' : '☰ LIST'}
              </button>
            ))}
          </div>
        </div>

        <div className={`flex gap-8 ${selectedArtist ? 'flex-col lg:flex-row' : ''}`}>

          
          <div className={selectedArtist ? 'lg:w-1/2' : 'w-full'}>
            {filteredArtists.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🎵</p>
                <p className="font-display text-xl text-white/40">ARTIS TIDAK DITEMUKAN</p>
              </div>
            ) : view === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredArtists.map((artist, i) => (
                  <article key={artist.id} onClick={() => selectArtist(artist)}
                    className={`glass rounded-sm p-4 cursor-pointer transition-all duration-300 hover:scale-105 group animate-fade-in-up ${
                      selectedArtist?.id === artist.id
                        ? 'border-neon-cyan/50 shadow-[0_0_20px_rgba(0,245,255,0.2)]'
                        : 'hover:border-white/20'
                    }`}
                    style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'forwards', opacity: 0 }}>
                    <div className="text-4xl text-center mb-3 group-hover:scale-110 transition-transform duration-300">{artist.emoji}</div>
                    <h3 className="font-display text-sm text-white text-center leading-tight mb-1">{artist.name}</h3>
                    <p className="text-xs font-mono text-neon-cyan/60 text-center">{artist.genre}</p>
                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-between">
                      <span className="text-xs text-white/30 font-mono">{artist.fans}</span>
                      <span className="text-xs text-neon-yellow">★{artist.rating}</span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs font-mono text-white/20">Debut {artist.debut}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredArtists.map((artist, i) => (
                  <article key={artist.id} onClick={() => selectArtist(artist)}
                    className={`glass rounded-sm p-4 cursor-pointer transition-all duration-300 flex items-center gap-5 group animate-fade-in-left ${
                      selectedArtist?.id === artist.id
                        ? 'border-neon-cyan/50 shadow-[0_0_20px_rgba(0,245,255,0.15)]'
                        : 'hover:border-white/20'
                    }`}
                    style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'forwards', opacity: 0 }}>
                    <span className="text-3xl">{artist.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-white group-hover:text-neon-cyan transition-colors duration-300">{artist.name}</h3>
                      <p className="text-xs text-white/40 font-body">{artist.genre} · {artist.origin} · Debut {artist.debut}</p>
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
                    <span className="text-xs font-mono text-neon-cyan/40 hidden lg:block">
                      {selectedArtist?.id === artist.id ? '← BIO' : 'BIO →'}
                    </span>
                  </article>
                ))}
              </div>
            )}
          </div>

          
          {selectedArtist && (
            <div className="lg:w-1/2 animate-fade-in-left" style={{ position: 'sticky', top: 96, height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
              
              <div className="flex justify-end mb-3" style={{ flexShrink: 0 }}>
                <button onClick={() => setSelectedArtist(null)}
                  className="text-white/30 hover:text-white transition-colors glass rounded-sm px-3 py-1 text-xs font-mono tracking-widest">
                  ✕ TUTUP
                </button>
              </div>
              
              <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
                <BioPanel artist={selectedArtist} />
              </div>
              
              <button
                onClick={() => handleFollow(selectedArtist.id)}
                style={{ flexShrink: 0, marginTop: 12 }}
                className={`w-full py-3 font-bold font-mono tracking-widest text-sm rounded-sm transition-all duration-300 ${
                  isFollowing[selectedArtist.id]
                    ? 'bg-white/10 text-neon-cyan border border-neon-cyan/30'
                    : 'bg-neon-pink text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,45,120,0.5)]'
                }`}>
                {isFollowing[selectedArtist.id] ? '✓ MENGIKUTI' : '+ IKUTI ARTIS'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArtistsPage
