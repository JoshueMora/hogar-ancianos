import { useEffect, useState } from 'react';
import '../styles/contacto.css';

const Contacto = () => {
    const [enviado, setEnviado] = useState(false);
    const [bloqueado, setBloqueado] = useState(false);
    const BLOQUEO_MINUTOS = 0;

    useEffect(() => {
        const ultimo = localStorage.getItem('bloqueoContacto');
        if (ultimo) {
            const tiempoPasado = Date.now() - parseInt(ultimo, 10);
            const tiempoBloqueo = BLOQUEO_MINUTOS * 60 * 1000;
            if (tiempoPasado < tiempoBloqueo) {
                setBloqueado(true);
                const restante = tiempoBloqueo - tiempoPasado;
                setTimeout(() => setBloqueado(false), restante);
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bloqueado) {
            alert("Por favor espere unos minutos antes de enviar otro mensaje.");
            return;
        }

        const formData = new FormData(e.target);
        try {
            await fetch("https://formsubmit.co/joshuemora24@gmail.com", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            setEnviado(true);
            setBloqueado(true);
            localStorage.setItem('bloqueoContacto', Date.now().toString());
            e.target.reset();

            setTimeout(() => setEnviado(false), 5000);
            setTimeout(() => setBloqueado(false), BLOQUEO_MINUTOS * 60 * 1000);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    return (
        <div>
            <title>Contacto</title>

            {/* HERO con encabezado principal */}
            <section className="contacto-hero-rediseño">
                <h1 className="titulo-contacto">Contacto</h1>
                <hr className="linea-separadora" />
                <p className="contacto-hero-titulo">
                    Estamos aquí para <span className="resaltar">ayudarte</span>
                </p>
                <p className="contacto-hero-subtitulo">
                    Nos comprometemos a brindar el mejor cuidado y atención a nuestros residentes y sus familias
                </p>
            </section>

            {/* CONTENIDO: formulario y ayuda */}
            <section className="contacto-contenedor-principal">
                {/* Formulario */}
                <div className="contacto-formulario-box">
                    <h2><img src="/imgs/avion.svg" className="icono-inline" alt="send" /> Envíanos un mensaje</h2>
                    <p>Completa el formulario y nos pondremos en contacto contigo</p>

                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        <div className="form-grid">
                            <div>
                                <label>Nombre completo *</label>
                                <input type="text" name="NombreContacto" required />
                            </div>
                            <div>
                                <label>Teléfono *</label>
                                <input type="tel" name="TelefonoContacto" required pattern="[2678][0-9]{7}" />
                            </div>
                        </div>

                        <div>
                            <label>Correo electrónico *</label>
                            <input type="email" name="EmailContacto" required />
                        </div>

                        <div>
                            <label>Mensaje *</label>
                            <textarea name="Mensaje" rows="4" required />
                        </div>

                        <div className="boton-con-tooltip">
                            <button type="submit" disabled={bloqueado}>
                                <img src="/imgs/avion.svg" alt="enviar" className="icono-inline" /> Enviar mensaje
                            </button>
                            {bloqueado && (
                                <span className="tooltip">
                                    Hemos recibido tu mensaje. Nos pondremos en contacto lo antes posible.
                                </span>
                            )}
                        </div>
                    </form>
                </div>

                {/* Ayuda */}
                <div className="contacto-ayuda-box">
                    <div className="contacto-ayuda-alerta">
                        <h3 className='info-linea'>
                            <img className='icono' src="/imgs/pregunta.svg" alt="icono pregunta" />
                            ¿Necesitás ayuda?</h3>
                        <p>
                            ¿No encontraste respuesta a tu pregunta en el apartado de{' '}
                            <a href="/FAQ">preguntas frecuentes</a>? No dudes en contactarnos.
                        </p>
                        <div className="ayuda-contacto-box">
                            <p>También podés llamarnos al <strong>2442-2165</strong> con las extensiones correspondientes.</p>
                        </div>
                    </div>

                    <div className="contacto-info-extra">
                        <h4>Información de contacto</h4>
                        <div className="info-linea">
                            <img className='icono' src="/imgs/telefono.svg" alt="tel" />
                            <div>
                                <strong>Teléfono</strong><br />
                                2442-2165
                            </div>
                        </div>

                        <div className="info-linea">
                            <img className='icono' src="/imgs/correo.svg" alt="correo" />
                            <div>
                                <strong>Email</strong><br />
                                rrhh@hsantiagocrespo.com<br />
                                serviciocliente@hsantiagocrespo.com
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Overlay de confirmación */}
            {enviado && (
                <div className="overlay-confirmacion" onClick={() => setEnviado(false)}>
                    <div className="mensaje-superpuesto" onClick={(e) => e.stopPropagation()}>
                        Gracias por contactarnos. Nos pondremos en contacto con usted lo antes posible.
                    </div>
                </div>
            )}
        </div>
    );

};

export default Contacto;
