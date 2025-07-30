import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-contenido">
                {/* Division 1/3 Informacion General */}
                <div className="info-general">
                    <img src="imgs/logoExtenso.png" alt="Logo extenso Hogar de Ancianos" className="logo-extenso" />
                    <p>En el Hogar de Ancianos Santiago Crespo Calvo priorizamos
                        el cuidado de tu familiar, reforzando su día a día con
                        diferentes actividades y terapias.</p>

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
                            rrhh@hsantiagocrespo.com
                            serviciocliente@hsantiagocrespo.com
                        </p>

                    </div>

                    <div className="redes-sociales">
                        <a href="https://www.facebook.com/hogarsantiagocrespo" target="_blank" rel="noopener noreferrer">
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


                {/* Division 2/3 Navegacion de Paginas */}
                <div className="navegacion">
                    <h1>Paginas</h1>
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

                {/* Division 3/3 Informacion Horario */}
                <div className="horario">
                    <h1>Horario</h1>
                    <div className="fila-horario">
                        <span className="dia">Lunes a Viernes</span>
                        <span className="hora">8:00 am - 4:00 pm</span>
                    </div>
                    <div className="fila-horario">
                        <span className="dia">Sábado y Domingo</span>
                        <span className="hora">Atención telefonica</span>
                    </div>
                </div>
            </div>

            {/* Final de pagina */}
            <div className="footer-final">
                <p>
                    &copy; {new Date().getFullYear()} Hogar de Ancianos Santiago Crespo Calvo.{' '}
                    <a
                        href="https://github.com/JoshueMora"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#E53935', textDecoration: 'none' }}
                    >
                        JoshueMora
                    </a>
                </p>
            </div>
        </footer>
    );
}; export default Footer;