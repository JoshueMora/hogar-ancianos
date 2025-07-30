import React, { useState, useEffect, useCallback } from 'react';
import instalacionesImgs from '../data/instalacionesImg.js';
import '../styles/instalaciones.css';

const Instalaciones = () => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [indexSeleccionado, setIndexSeleccionado] = useState(0);

    const siguienteImagen = useCallback(() => {
        const nuevoIndex = (indexSeleccionado + 1) % instalacionesImgs.length;
        setIndexSeleccionado(nuevoIndex);
        setImagenSeleccionada(instalacionesImgs[nuevoIndex]);
    }, [indexSeleccionado]);

    const anteriorImagen = useCallback(() => {
        const nuevoIndex = (indexSeleccionado - 1 + instalacionesImgs.length) % instalacionesImgs.length;
        setIndexSeleccionado(nuevoIndex);
        setImagenSeleccionada(instalacionesImgs[nuevoIndex]);
    }, [indexSeleccionado]);

    const cerrarOverlay = () => setImagenSeleccionada(null);

    useEffect(() => {
        document.title = 'Instalaciones';

        const handleKeyDown = (e) => {
            if (imagenSeleccionada) {
                if (e.key === 'ArrowRight') siguienteImagen();
                else if (e.key === 'ArrowLeft') anteriorImagen();
                else if (e.key === 'Escape') cerrarOverlay();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [imagenSeleccionada, siguienteImagen, anteriorImagen]);

    const abrirOverlay = (img, index) => {
        setImagenSeleccionada(img);
        setIndexSeleccionado(index);
    };

    return (
        <div className="instalaciones-wrapper">
            <h1 className="titulo-destacado">Nuestras Instalaciones</h1>
            <p className="intro-instalaciones">
                Conozca algunos de los espacios que hacen especial al Hogar de Ancianos Santiago Crespo Calvo.
            </p>

            <div className="masonry-grid">
                {instalacionesImgs.map((img, idx) => (
                    <div key={img.id} className="masonry-item" onClick={() => abrirOverlay(img, idx)}>
                        <img src={img.src} alt={`Instalación ${img.id}`} />
                    </div>
                ))}
            </div>

            <p className="mensaje-visita">
                <strong>Recuerda que también podés visitarnos en persona de lunes a viernes, entre 8:00 a.m. y 4:00 p.m. Estaremos encantados de recibirte.</strong>
            </p>

            {imagenSeleccionada && (
                <div className="overlay overlay-full" onClick={cerrarOverlay}>
                    <button className="btn-navegacion izquierda" onClick={(e) => { e.stopPropagation(); anteriorImagen(); }}>&#10094;</button>
                    <div className="overlay-contenido" onClick={(e) => e.stopPropagation()}>
                        <img src={imagenSeleccionada.src} alt={`Vista ampliada ${imagenSeleccionada.id}`} />
                        <p>{imagenSeleccionada.descripcion}</p>
                    </div>
                    <button className="btn-navegacion derecha" onClick={(e) => { e.stopPropagation(); siguienteImagen(); }}>&#10095;</button>
                </div>
            )}
        </div>
    );
};

export default Instalaciones;
