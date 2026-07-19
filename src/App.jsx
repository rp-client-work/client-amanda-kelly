import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomePreview from './pages/HomePreview';
import HairGuide from './pages/HairGuide';
import Contact from './pages/Contact';
import About from './pages/About';
import AboutPreview from './pages/AboutPreview';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-preview" element={<HomePreview />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-preview" element={<AboutPreview />} />
          <Route path="/hair-guide" element={<HairGuide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
