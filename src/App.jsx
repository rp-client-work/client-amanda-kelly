import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomePreview from './pages/HomePreview';
import HairGuide from './pages/HairGuide';
import Contact from './pages/Contact';
import About from './pages/About';
import AboutPreview from './pages/AboutPreview';
import Terms from './pages/Terms';

// React Router doesn't scroll to a #hash on client-side navigation by
// default; without this, links like /about#faq land on the page but never
// scroll to the section.
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToHash />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-preview" element={<HomePreview />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-preview" element={<AboutPreview />} />
          <Route path="/hair-guide" element={<HairGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
