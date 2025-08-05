import React, { useState, useEffect } from 'react';
import { equipoTrabajo } from '../data/equipoTrabajo';
import '../styles/nosotros.css';

const EquipoCarousel = () => {
    const [indiceActual, setIndiceActual] = useState(0);
    const [esMovil, setEsMovil] = useState(false);
    const total = equipoTrabajo.length;

    const siguiente = () => {
        setIndiceActual((indiceActual + 1) % total);
    };

    const anterior = () => {
        setIndiceActual((indiceActual - 1 + total) % total);
    };

    useEffect(() => {
        const manejarResize = () => {
            setEsMovil(window.innerWidth <= 768);
        };

        manejarResize(); // Ejecutar una vez al cargar

        window.addEventListener('resize', manejarResize);
        return () => window.removeEventListener('resize', manejarResize);
    }, []);

    const miembro = equipoTrabajo[indiceActual];

    return (
        <div className="carousel-equipo-contenedor">
            <div className="carousel-equipo">
                {/* Mostrar botones de escritorio solo si no es móvil */}
                {!esMovil && (
                    <button className="btn-cambio btn-escritorio" onClick={anterior}>⟨</button>
                )}

                <div className="tarjeta-equipo">
                    <img src={miembro.foto} alt={miembro.nombre} className="foto-equipo" />
                    <div className="info-equipo">
                        <h3>{miembro.nombre}</h3>
                        <p className="cargo">{miembro.cargo}</p>
                        <p className="motivacion">“{miembro.Motivacion}”</p>
                    </div>
                </div>

                {!esMovil && (
                    <button className="btn-cambio btn-escritorio" onClick={siguiente}>⟩</button>
                )}
            </div>

            {/* Puntos indicadores */}
            <div className="puntos-indicadores">
                {equipoTrabajo.map((_, i) => (
                    <span
                        key={i}
                        className={`punto ${i === indiceActual ? 'activo' : ''}`}
                        onClick={() => setIndiceActual(i)}
                    ></span>
                ))}
            </div>

            {/* Mostrar flechas móviles solo si es móvil */}
            {esMovil && (
                <div className="controles-moviles">
                    <button className="btn-cambio" onClick={anterior}>⟨</button>
                    <button className="btn-cambio" onClick={siguiente}>⟩</button>
                </div>
            )}
        </div>
    );
};

export default EquipoCarousel;
