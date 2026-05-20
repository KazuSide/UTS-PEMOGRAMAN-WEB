import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ArtistsPage from './pages/ArtistsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import RefundPage from './pages/RefundPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 noise-overlay">
        {/* Efek Background Glow Neon */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-900/20 rounded-full blur-[100px]" />
        </div>

        <Header />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
