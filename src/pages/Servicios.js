import React from 'react';
import '../styles/servicios.css';

const servicios = [
    {
        titulo: 'Ejercicio y Movimiento',
        icono: 'ejercicio.svg',
        descripcion:
            'Promovemos el bienestar físico mediante sesiones terapéuticas adaptadas, caminatas y ejercicios suaves, ayudando a mantener la movilidad y la autonomía.',
    },
    {
        titulo: 'Terapias Especializadas',
        icono: 'terapia.svg',
        descripcion:
            'Ofrecemos terapias ocupacionales y cognitivas diseñadas por profesionales, con el objetivo de estimular la mente y mejorar la calidad de vida.',
    },
    {
        titulo: 'Atención Recreativa y Social',
        icono: 'arte.svg',
        descripcion:
            'Organizamos talleres, actividades culturales y juegos que fomentan la socialización, la expresión creativa y el disfrute del tiempo libre.',
    },
    {
        titulo: 'Alimentación y Convivencia',
        icono: 'alimentacion.svg',
        descripcion:
            'Proveemos una alimentación balanceada en espacios que fomentan la convivencia, fortaleciendo los lazos sociales y el bienestar emocional.',
    },
    {
        titulo: 'Apoyo Espiritual',
        icono: 'capilla.svg',
        descripcion:
            'Brindamos un espacio de reflexión y espiritualidad a través de nuestra capilla, abierto a la oración individual o actividades grupales religiosas.',
    },
    {
        titulo: 'Conexión con la Naturaleza',
        icono: 'flor.svg',
        descripcion:
            'A través de la jardinería y el contacto con espacios verdes, fomentamos la tranquilidad emocional, la responsabilidad y el sentido de pertenencia.',
    },
];

const Servicios = () => {
    return (
        <div className="servicios-wrapper">
            <title>Servicios</title>
            <h1 className="titulo-destacado">Servicios</h1>
            <p className="intro-servicios">
                En el Hogar de Ancianos Santiago Crespo Calvo brindamos una atención integral centrada en el bienestar físico, emocional, social y espiritual. Nuestros servicios están diseñados para promover una vida digna, activa y acompañada.
            </p>
            <div className="servicios-grid">
                {servicios.map((servicio, index) => (
                    <div className="servicio-cubo" key={index}>
                        <img
                            src={`/imgs/${servicio.icono}`}
                            alt={servicio.titulo}
                            className="icono-servicio"
                        />
                        <h3>{servicio.titulo}</h3>
                        <p>{servicio.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Servicios;
