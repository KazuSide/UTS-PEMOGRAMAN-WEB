import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ArtistsPage() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchLocalArtists = async () => {
      try {
        setLoading(true);
        // Trik iTunes API: Membatasi pencarian hanya untuk region Indonesia (country=id) 
        // dan mencari kata kunci spesifik musik lokal.
        const response = await axios.get(
          'https://itunes.apple.com/search?term=indonesia+pop&country=id&entity=album&limit=20'
        );
        
        // Memfilter data ganda (karena 1 artis bisa punya banyak album yang terambil)
        // Kita hanya mengambil 1 data unik per artis
        if (response.data && response.data.results) {
          const uniqueArtists = [];
          const seenArtistIds = new Set();
          
          for (const item of response.data.results) {
            if (!seenArtistIds.has(item.artistId)) {
              seenArtistIds.add(item.artistId);
              uniqueArtists.push(item);
            }
          }
          setArtists(uniqueArtists);
        } else {
          setArtists([]);
        }
        setError(null);
      } catch (err) {
        setError('Gagal memuat data lineup musisi lokal.');
      } finally {
        setLoading(false);
      }
    };

    fetchLocalArtists();
  }, []);

  // Fitur pencarian berdasarkan nama artis
  const filteredArtists = artists.filter(artist => 
    (artist.artistName || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h1 className="text-4xl md:text-5xl font-display text-white">
          LOKAL <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,45,120,0.8)]">HEROES</span>
        </h1>
        
        <div className="relative w-full md:w-72">
          <input 
            type="search" 
            placeholder="Cari musisi..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-dark-800 border border-dark-700 text-white px-4 py-2 rounded focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all font-body"
          />
        </div>
      </div>

      {loading && <p className="text-neon-cyan text-center font-mono animate-pulse">Menyiapkan panggung untuk artis lokal...</p>}
      {error && <p className="text-red-500 text-center font-mono">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredArtists.map((artist) => (
            <div key={artist.collectionId} className="group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-neon-pink transition-colors shadow-lg">
              <div className="h-48 bg-dark-600 w-full relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent z-10"></div>
                {/* Menggunakan gambar cover HD 600x600 dari iTunes */}
                <img 
                  src={artist.artworkUrl100?.replace('100x100bb', '600x600bb')} 
                  alt={artist.artistName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                />
              </div>
              <div className="p-4 relative z-20 -mt-6">
                <h3 className="text-lg font-bold text-white mb-1 truncate">{artist.artistName}</h3>
                <p className="text-neon-yellow text-xs font-mono mb-4 truncate">
                  {artist.primaryGenreName === 'Indonesian' ? 'Pop Indo' : artist.primaryGenreName}
                </p>
                <a 
                  href={artist.artistViewUrl || artist.collectionViewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full text-sm border border-neon-pink text-neon-pink px-3 py-1.5 rounded hover:bg-neon-pink hover:text-white transition-all font-bold"
                >
                  Lihat Profil
                </a>
              </div>
            </div>
          ))}
          
          {filteredArtists.length === 0 && (
             <div className="col-span-full text-center py-12 text-gray-500 font-mono border border-dashed border-gray-700 rounded-xl">
               <p className="mb-2">🎸 Musisi "{searchQuery}" tidak ditemukan.</p>
               <button 
                  onClick={() => setSearchQuery('')} 
                  className="text-neon-cyan hover:underline"
               >
                 Tampilkan semua musisi
               </button>
             </div>
          )}
        </div>
      )}
    </div>
  );
}
