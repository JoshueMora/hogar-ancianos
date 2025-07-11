import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios'
import Instalaciones from './pages/Instalaciones';
import Actividades from './pages/Actividades';
import FAQ from './pages/FAQ';
import Contacto from './pages/Contacto';

import './styles/main.css';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className='main-wrapper'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
