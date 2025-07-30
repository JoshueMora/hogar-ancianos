import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className='main-wrapper header-inner'>
                <a href='/'>
                    <img src='imgs/logo0.png' alt='logo' />
                </a>
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav>
                    <ul className={menuOpen ? "active" : ""}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/instalaciones">Instalaciones</Link></li>
                        <li><Link to="/actividades">Actividades</Link></li>
                        <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
