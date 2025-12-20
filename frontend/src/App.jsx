import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { api } from './services/api';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPortfolioData() {
      try {
        setLoading(true);
        const data = await api.getAllPortfolioData();
        setPortfolioData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching portfolio data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
          <p className="text-slate-600 font-medium">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-red-600 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Error Loading Portfolio</h2>
          <p className="text-slate-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={portfolioData.header} />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <About data={portfolioData.about} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
