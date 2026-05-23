import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExplorePage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        
        const rssUrl = 'https://www.cnnindonesia.com/hiburan/rss';
        const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
        
        if (response.data && response.data.items) {
          setNews(response.data.items.slice(0, 12));
        } else {
          setNews([]);
        }
        setError(null);
      } catch (err) {
        setError('Gagal memuat berita. Pastikan koneksi internet stabil.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString.replace(' ', 'T')); 
    return date.toLocaleDateString('id-ID', options);
  };

  
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
          MUSIC <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,245,255,0.8)]">UPDATES</span>
        </h1>
        <p className="text-gray-400 font-body">Berita hiburan dan musik terkini dari Indonesia.</p>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-dark-700 border-t-neon-cyan rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(0,245,255,0.5)]"></div>
          <p className="text-neon-cyan font-mono animate-pulse">Memuat data dari server...</p>
        </div>
      )}

      {error && !loading && (
        <div className="bg-dark-800 border border-red-500/50 rounded-lg p-8 text-center max-w-md mx-auto relative z-10">
          <p className="text-red-400 mb-6 font-body">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-transparent border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan/10 transition-colors font-mono"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
          {news.map((article, index) => {
            
            const imageUrl = article.thumbnail || article.enclosure?.link || 'https://via.placeholder.com/600x400/1E1535/00F5FF?text=BERITA+LOKAL';
            
            return (
              <div 
                key={index} 
                className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] flex flex-col group"
              >
                <div className="h-48 w-full bg-dark-600 relative overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-dark-900/80 backdrop-blur border border-neon-cyan text-neon-cyan text-xs font-mono px-2 py-1 rounded">
                    {formatDate(article.pubDate)}
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h2 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-neon-cyan transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm font-body mb-6 line-clamp-3 flex-grow">
                    {stripHtml(article.description)}
                  </p>

                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-2.5 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 rounded hover:bg-neon-cyan hover:text-dark-900 transition-all duration-300 font-bold mt-auto"
                  >
                    BACA DI CNN
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}
