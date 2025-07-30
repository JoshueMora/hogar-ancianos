import React, { useState } from "react";
import { cuentas } from "../data/cuentasDonaciones";

const Inicio = () => {
    const [seleccionado, setSeleccionado] = useState(cuentas[0].id);
    const cuentaActiva = cuentas.find((cuenta) => cuenta.id === seleccionado);

    return (
        <div className="inicio-container">
            <title>Hogar de Ancianos Santiago Crespo Calvo</title>
            <div className="modulo-donaciones-completo">
                {/* Sección de texto a la izquierda */}
                <div className="donaciones-texto">
                    <h2 className="titulo-destacado">DONACIONES</h2>
                    <p>
                        El Hogar de Ancianos Santiago Crespo Calvo es una organización sin fines de lucro dedicada a brindar
                        atención y cuidado a personas adultas mayores. Tu apoyo es fundamental para continuar nuestra labor.
                        Aquí puedes encontrar las diferentes cuentas bancarias donde puedes realizar tus donaciones.
                    </p>
                    <p><strong>Cédula Jurídica:</strong> 3-002-056484</p>
                </div>

                {/* Sección de tabs a la derecha */}
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

            {/* Módulos adicionales */}
            <div>
                <h2 className="titulo-destacado">Introducción al hogar</h2>
                <p>Contenido resumen del hogar...</p>
            </div>

            <div>
                <h2 className="titulo-destacado">Nosotros</h2>
                <p>Contenido resumen de nosotros...</p>
            </div>

            <div>
                <h2 className="titulo-destacado">Instalaciones</h2>
                <p>Contenido resumen de instalaciones...</p>
            </div>

            <div>
                <h2 className="titulo-destacado">Actividades</h2>
                <p>Contenido resumen de actividades...</p>
            </div>
        </div>
    );
};

export default Inicio;
