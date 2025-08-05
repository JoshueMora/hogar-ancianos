import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-contenido">
                {/* Columna 1: Logo + texto + redes */}
                <div className="footer-col info-general">
                    <img src="imgs/logoExtenso.png" alt="Logo extenso Hogar de Ancianos" className="logo-extenso" />
                    <p>En el Hogar de Ancianos Santiago Crespo Calvo priorizamos el cuidado de tu familiar, reforzando su día a día con diferentes actividades y terapias.</p>
                    <div className="redes-sociales">
                        <a href="https://www.facebook.com/profile.php?id=61551051860671" target="_blank" rel="noopener noreferrer">
                            <img src="imgs/facebook.svg" alt="facebook" />
                        </a>
                        <a href="https://waze.com/ul/hd1u15bqp0" target="_blank" rel="noopener noreferrer">
                            <img src="imgs/waze.svg" alt="waze" />
                        </a>
                        <a href="https://maps.app.goo.gl/q8g6uWv5BdZCLzyF7" target="_blank" rel="noopener noreferrer">
                            <img src="imgs/maps.svg" alt="google maps" />
                        </a>
                    </div>
                </div>

                {/* Columna 2: Navegación */}
                <div className="footer-col navegacion">
                    <h1>Páginas</h1>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/instalaciones">Instalaciones</Link></li>
                        <li><Link to="/actividades">Actividades</Link></li>
                        <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                {/* Columna 3: Horario + contacto */}
                <div className="footer-col horario">
                    <h1>Horario</h1>
                    <div className="fila-horario">
                        <span className="dia">Lunes a Viernes</span>
                        <span className="hora">8:00 am - 4:00 pm</span>
                    </div>
                    <div className="fila-horario">
                        <span className="dia">Sábado y Domingo</span>
                        <span className="hora">Atención telefónica</span>
                    </div>

                    <div className="info-item">
                        <img src="imgs/pin.svg" alt="mapa" />
                        <p>De la iglesia la Agonía 200m Norte y 700m Este, Alajuela, Costa Rica</p>
                    </div>
                    <div className="info-item">
                        <img src="imgs/telefono.svg" alt="teléfono" />
                        <p>2442-2165</p>
                    </div>
                    <div className="info-item">
                        <img src="imgs/correo.svg" alt="correo" />
                        <p>
                            rrhh@hsantiagocrespo.com<br />
                            serviciocliente@hsantiagocrespo.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-final">
                <p>
                    &copy; {new Date().getFullYear()} Hogar de Ancianos Santiago Crespo Calvo.{' '}
                    <a href="https://github.com/JoshueMora" target="_blank" rel="noopener noreferrer">
                        JoshueMora
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
