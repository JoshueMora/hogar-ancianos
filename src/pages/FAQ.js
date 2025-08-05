import React, { useState } from 'react';
import { FAQ } from '../data/FAQ';
import '../styles/faq.css';

const FaqCascada = () => {
    const [activo, setActivo] = useState(null);

    const alternar = (id) => {
        setActivo(prev => (prev === id ? null : id));
    };

    return (
        <section className="faq-wrapper seccion-fondo">
            <title>Preguntas Frecuentes</title>
            <h2 className="titulo-faq">Preguntas Frecuentes</h2>
            <hr className='linea-separadora'></hr>
            <div className="faq-lista">
                {FAQ.map(({ id, pregunta, respuesta }) => (
                    <div
                        key={id}
                        className={`faq-item ${activo === id ? 'activo' : 'inactivo'}`}
                        onClick={() => alternar(id)}
                    >
                        <div className="faq-encabezado">
                            <span className="faq-pregunta">{pregunta}</span>
                            <span className="faq-icono">{activo === id ? '−' : '+'}</span>
                        </div>
                        {activo === id && (
                            <div className="faq-respuesta">
                                <p>{respuesta}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqCascada;
