// src/components/EquipoCarousel.jsx
import React, { useState } from 'react';
import { equipoTrabajo } from '../data/equipoTrabajo';
import '../styles/nosotros.css';

const EquipoCarousel = () => {
    const [indiceActual, setIndiceActual] = useState(0);
    const total = equipoTrabajo.length;

    const siguiente = () => {
        setIndiceActual((indiceActual + 1) % total);
    };

    const anterior = () => {
        setIndiceActual((indiceActual - 1 + total) % total);
    };

    const miembro = equipoTrabajo[indiceActual];

    return (
        <div className="carousel-equipo-contenedor">
            <div className="carousel-equipo">
                {/* Botón izquierdo solo visible en escritorio */}
                <button className="btn-cambio btn-escritorio" onClick={anterior}>⟨</button>

                <div className="tarjeta-equipo">
                    <img src={miembro.foto} alt={miembro.nombre} className="foto-equipo" />
                    <div className="info-equipo">
                        <h3>{miembro.nombre}</h3>
                        <p className="cargo">{miembro.cargo}</p>
                        <p className="motivacion">“{miembro.Motivacion}”</p>
                    </div>
                </div>

                {/* Botón derecho solo visible en escritorio */}
                <button className="btn-cambio btn-escritorio" onClick={siguiente}>⟩</button>
            </div>

            {/* Puntos siempre visibles */}
            <div className="puntos-indicadores">
                {equipoTrabajo.map((_, i) => (
                    <span
                        key={i}
                        className={`punto ${i === indiceActual ? 'activo' : ''}`}
                        onClick={() => setIndiceActual(i)}
                    ></span>
                ))}
            </div>

            {/* Controles móviles con flechas */}
            <div className="controles-moviles">
                <button className="btn-cambio" onClick={anterior}>⟨</button>
                <button className="btn-cambio" onClick={siguiente}>⟩</button>
            </div>
        </div>
    );
};

export default EquipoCarousel;
