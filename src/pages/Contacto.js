import { useEffect, useState } from 'react';
import '../styles/contacto.css';

const Contacto = () => {
    const [enviado, setEnviado] = useState(false);
    const [bloqueado, setBloqueado] = useState(false);
    const BLOQUEO_MINUTOS = 5;

    // Verifica bloqueo desde localStorage al cargar
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
            await fetch("https://formsubmit.co/ajax/qmazxgioyhxpnblxgn@fxavaj.com", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
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
        <div className="contacto-wrapper">
            <title>Contacto</title>
            <div className="contacto-texto">
                <h2>¿Necesitás ayuda?</h2>
                <p>¿No encontraste respuesta a tu pregunta en el apartado de <a href="/FAQ">preguntas frecuentes</a>? No dudes en contactarnos.</p>
                <p>También podés llamarnos al <strong>2442-2165</strong> con las extensiones correspondientes o visitarnos de lunes a viernes de 8:00 a.m. a 4:00 p.m.</p>
            </div>

            <form className="contacto-formulario" onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div>
                    <label htmlFor="nombre">Nombre completo:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="NombreContacto"
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor complete su nombre completo.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                    />
                </div>

                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="TelefonoContacto"
                        required
                        pattern="[2678][0-9]{7}"
                        onInvalid={(e) => e.target.setCustomValidity('Ingrese un número válido de 8 dígitos en Costa Rica.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                    />
                </div>

                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="EmailContacto"
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Ingrese un correo electrónico válido.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                    />
                </div>

                <div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="Mensaje"
                        rows="4"
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor escriba su mensaje.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                    ></textarea>
                </div>

                <div className="boton-con-tooltip">
                    <button
                        type="submit"
                        disabled={bloqueado}
                    >
                        Enviar
                    </button>
                    {bloqueado && (
                        <span className="tooltip">
                            Hemos recibido tu mensaje. Nos pondremos en contacto lo antes posible. Gracias por contactar al Hogar de Ancianos Santiago Crespo Calvo.
                        </span>
                    )}
                </div>

            </form>

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
