import React from 'react';
import '../styles/servicios.css';

const servicios = [
    {
        titulo: 'Ejercicio y Movimiento',
        icono: 'ejercicio.svg',
        descripcion:
            'Promovemos el bienestar físico mediante caminatas, rutinas suaves y sesiones en nuestra piscina para ejercicios terapéuticos, ayudando a preservar la movilidad y autonomía de cada residente.',
    },
    {
        titulo: 'Terapias Especializadas',
        icono: 'terapia.svg',
        descripcion:
            'Ofrecemos terapias ocupacionales, físicas y cognitivas diseñadas por profesionales, enfocadas en mantener la funcionalidad, mejorar la salud mental y elevar la calidad de vida de los adultos mayores.',
    },
    {
        titulo: 'Atención Recreativa y Social',
        icono: 'arte.svg',
        descripcion:
            'Organizamos actividades artísticas, culturales, musicales y juegos grupales que fortalecen los vínculos sociales, estimulan la creatividad y brindan alegría en el día a día.',
    },
    {
        titulo: 'Alimentación y Convivencia',
        icono: 'alimentacion.svg',
        descripcion:
            'Brindamos una alimentación balanceada y supervisada por profesionales de nutrición, fomentando la convivencia en espacios diseñados para compartir, conversar y disfrutar juntos cada comida.',
    },
    {
        titulo: 'Apoyo Espiritual',
        icono: 'capilla.svg',
        descripcion:
            'Ofrecemos un espacio de reflexión en nuestra capilla, con celebraciones religiosas y acompañamiento espiritual según las creencias de cada residente, promoviendo la paz interior y el consuelo.',
    },
    {
        titulo: 'Lavandería',
        icono: 'lavadora.svg',
        descripcion:
            'Contamos con un servicio de lavandería eficiente y personalizado, asegurando el cuidado adecuado de la ropa personal de los residentes con puntualidad, higiene y atención al detalle.',
    },
    {
        titulo: 'Enfermería y Vigilancia',
        icono: 'enfermeria.svg',
        descripcion:
            'Disponemos de personal de enfermería altamente capacitado que brinda atención continua, administración de medicamentos y seguimiento de la salud, con calidez y profesionalismo.',
    },
    {
        titulo: 'Atención Médica',
        icono: 'doctor.svg',
        descripcion:
            'Garantizamos controles médicos regulares y atención preventiva mediante visitas médicas programadas, coordinadas con especialistas cuando sea necesario para un cuidado integral.',
    },
    {
        titulo: 'Voluntariado',
        icono: 'voluntariado.svg',
        descripcion:
            'Fomentamos la integración de voluntarios que brindan compañía, afecto y actividades recreativas, enriqueciendo la vida emocional de nuestros adultos mayores y creando vínculos significativos.',
    }
];

const Servicios = () => {
    return (
        <div className="servicios-wrapper">
            <title>Servicios</title>
            <h1 className="titulo-servicios">Servicios</h1>
            <hr className="linea-separadora" />
            <p className="intro-servicios">
                En el Hogar de Ancianos Santiago Crespo Calvo brindamos una atención integral centrada en el bienestar físico, emocional, social y espiritual. Nuestros servicios están diseñados para promover una vida digna, activa y acompañada, en un entorno seguro y con instalaciones como nuestra piscina para terapias acuáticas.
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
