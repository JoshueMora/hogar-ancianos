// src/pages/Inicio.js

import React, { useState } from "react";
import { cuentas } from "../data/cuentasDonaciones";
import "../styles/inicio.css";

const Inicio = () => {
    const [seleccionado, setSeleccionado] = useState(cuentas[0].id);
    const cuentaActiva = cuentas.find((cuenta) => cuenta.id === seleccionado);

    return (
        <>
            {/* HERO CUTOUT FUERA DEL CONTAINER */}
            <div className="hero-modernizado">
                <div className="hero-contenido">
                    <h1>
                        <span>Hogar Nacional de Ancianos</span>
                        <span>Santiago Crespo Calvo</span>
                    </h1>
                    <p className="hero-subtexto">Cuidado, dignidad y calidez desde 1953</p>
                </div >
            </div >

            {/* CONTENIDO PRINCIPAL */}
            < div className="inicio-container" >
                <div className="card-inicio">
                    <h2><span className="icono">
                        <img src="/imgs/casa.svg" alt="Casa" />
                    </span> Bienvenidos al Hogar</h2>
                    <p>
                        Desde 1953, el Hogar Nacional de Ancianos Santiago Crespo Calvo ha sido un refugio de cuidado, dignidad y calidez para cientos de personas adultas mayores. Fundado sobre la visión solidaria de una comunidad alajuelense comprometida, nuestro hogar representa hoy un espacio donde la experiencia de vida se valora, se acompaña y se celebra cada día.
                    </p>
                </div>

                <div className="grid-tarjetas-inicio">
                    <div className="card-inicio">
                        <h2><span className="icono">
                            <img src="/imgs/personas.svg" alt="Personas" />
                        </span> ¿Quiénes somos?</h2>
                        <p>
                            Nuestra asociación nació del compromiso ciudadano en 1942, y fue gracias al apoyo de Don Santiago Crespo Calvo que logramos consolidarnos. Con una misión centrada en el bienestar físico, emocional y espiritual de los residentes.
                        </p>
                    </div>

                    <div className="card-inicio">
                        <h2><span className="icono">
                            <img src="/imgs/arbol.svg" alt="Árbol" />
                        </span> Un entorno pensado para ellos</h2>
                        <p>
                            Contamos con espacios diseñados para el descanso, la recreación y la atención integral. Desde habitaciones confortables hasta jardines, áreas comunes y una piscina terapéutica.
                        </p>
                    </div>

                    <div className="card-inicio">
                        <h2><span className="icono">
                            <img src="/imgs/campana.svg" alt="Campana" />
                        </span> Servicios que transforman vidas</h2>
                        <p>
                            Ofrecemos atención médica, enfermería 24/7, terapias físicas y cognitivas, actividades recreativas, alimentación balanceada, lavandería y acompañamiento espiritual.
                        </p>
                    </div>

                    <div className="card-inicio">
                        <h2><span className="icono">
                            <img src="/imgs/calendario.svg" alt="Calendario" />
                        </span> Visitá, conocé y apoyá</h2>
                        <p>
                            Te invitamos a conocer más sobre nosotros. Podés visitar nuestras instalaciones de lunes a viernes de 8:00 a.m. a 4:00 p.m.
                        </p>
                    </div>
                </div>

                {/* DONACIONES */}
                <div className="modulo-donaciones-completo">
                    <div className="donaciones-texto">
                        <h2 className="titulo-destacado">DONACIONES</h2>
                        <p className="donaciones-intro">
                            El Hogar de Ancianos Santiago Crespo Calvo es una organización sin fines de lucro dedicada a brindar atención y cuidado a personas adultas mayores. Tu apoyo es fundamental para continuar nuestra labor.
                        </p>
                        <p className="donaciones-intro"><strong>Cédula Jurídica:</strong> 3-002-056484</p>
                    </div>

                    <div className="donaciones-panel">
                        <div className="donaciones-tabs-horizontal">
                            {cuentas.map((cuenta) => (
                                <button
                                    key={cuenta.id}
                                    className={`donacion-tab-btn ${cuenta.id === seleccionado ? "activo" : ""}`}
                                    onClick={() => setSeleccionado(cuenta.id)}
                                >
                                    {cuenta.nombre}
                                </button>
                            ))}
                        </div>

                        <div className="donacion-tab-panel">
                            {cuentaActiva.detalles.map((item, index) => (
                                <div key={index} className="donacion-dato">
                                    <h4>{item.etiqueta}</h4>
                                    <p>{item.valor}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Inicio;
