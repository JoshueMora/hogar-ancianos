import React from 'react';
import '../styles/nosotros.css';
import EquipoCarrusel from '../components/equipoCarrusel';

const Nosotros = () => {
    return (
        <div className="nosotros-wrapper">
            <title>Nosotros</title>
            <h1 className="titulo-nosotros">Nosotros</h1>
            <hr className="linea-separadora" />

            {/* Misión, Visión, Valores, Objetivos */}
            <div className="grid-mvvo">
                <div className="mvvo-item">
                    <img src='/imgs/diana.svg' alt='diana' className="icono-mvvo" />
                    <h2>Misión</h2>
                    <p>
                        "Brindar atención integral y de calidad a nuestros adultos mayores, promoviendo su bienestar físico, emocional y social en un ambiente de respeto, dignidad y calidez humana."
                    </p>
                </div>
                <div className="mvvo-item">
                    <img src='/imgs/ojo.svg' alt='visión' className="icono-mvvo" />
                    <h2>Visión</h2>
                    <p>
                        "Ser reconocidos como el hogar de ancianos líder en Costa Rica, destacando por la excelencia en el cuidado y la innovación en servicios gerontológicos."
                    </p>
                </div>
                <div className="mvvo-item">
                    <img src='/imgs/diamante.svg' alt='valores' className="icono-mvvo" />
                    <h2>Valores</h2>
                    <p>
                        "Respeto, compasión, integridad, profesionalismo y compromiso con el bienestar de nuestros residentes y sus familias."
                    </p>
                </div>
                <div className="mvvo-item">
                    <img src='/imgs/diana.svg' alt='objetivos' className="icono-mvvo" />
                    <h2>Objetivos</h2>
                    <p>
                        "Proporcionar cuidado personalizado, mantener la dignidad de nuestros residentes y crear un ambiente familiar que promueva la calidad de vida."
                    </p>
                </div>
            </div>

            {/* Historia como bloque flotante */}
            <div className="historia-bloque">
                <h2>Historia</h2>
                <p>
                    La Asociación nace en el año 1942 gracias a la preocupación de un grupo de ciudadanos
                    alajuelenses por el bienestar de ancianos desposeídos. Para 1944 ya se estaba trabajando
                    en los preparativos para la construcción del hogar que inicialmente se realizaría en un
                    terreno donado en Barrio San José; sin embargo, el 15 de agosto de 1945 aparece la figura
                    de Don Santiago Crespo Calvo, quién se presentó ante la Asamblea General proponiendo la
                    idea de comprar un terreno de por lo menos 3 o más manzanas lo mejor situado posible y
                    que él supliría lo que faltare por completar la suma necesaria para su adquisición. Fue así
                    como en 1949 se compró el terreno donde actualmente está localizado el Hogar de
                    Ancianos y después de grandes sacrificios, gracias a actividades y donaciones el 16 de
                    agosto de 1953 se inaugura los servicios y el edificio que albergó a los primeros adultos
                    mayores. Debido al mérito que tuvo Don Santiago Crespo, su visión, su liderazgo, su
                    entrega y generosidad por la Institución, el 07 de abril de 1963 la Asamblea General en
                    reconocimiento acordó modificar la Cláusula del nombre a “Hogar Nacional de Ancianos
                    Santiago Crespo Calvo”.
                </p>
            </div>

            {/* Carrusel de equipo */}
            <h2 className="titulo-nosotros">Nuestro Equipo</h2>
            <EquipoCarrusel />
        </div>
    );
};

export default Nosotros;
