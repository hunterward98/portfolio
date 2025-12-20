import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

function App() {
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
