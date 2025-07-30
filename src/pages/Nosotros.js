import React from 'react';
import '../styles/nosotros.css';
import EquipoCarrusel from '../components/equipoCarrusel';

const Nosotros = () => {
    return (
        <div>
            <title>Nosotros</title>
            <h1> Pagina Nosotros JS</h1>

            {/* División Misión, Visión, Valores, Objetivos como grid */}
            <div className="grid-mvvo">
                <div className="mvvo-item">
                    <h2>Misión</h2>
                    <p>La Misión del hogar de ancianos Santiago Crespo Calvo</p>
                </div>
                <div className="mvvo-item">
                    <h2>Visión</h2>
                    <p>La Visión del hogar de ancianos Santiago Crespo Calvo</p>
                </div>
                <div className="mvvo-item">
                    <h2>Valores</h2>
                    <p>Los Valores del hogar de ancianos Santiago Crespo Calvo</p>
                </div>
                <div className="mvvo-item">
                    <h2>Objetivos</h2>
                    <p>Los Objetivos del hogar de ancianos Santiago Crespo Calvo</p>
                </div>
            </div>


            {/* Division Historia */}
            <div>
                <h1>Historia</h1>
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
                    Santiago Crespo Calvo”
                    .
                </p>
            </div>

            {/* Division Equipo */}
            <h1>Nuestro Equipo</h1>
            <EquipoCarrusel />

        </div>
    );
};

export default Nosotros;
