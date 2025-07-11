const Contacto = () => {
    const paletas = [
        {
            id: 1,
            boton: '#E53935',
            icono: '#FBC02D',
            fondoSeccion: '#F5F5F5',
            texto: '#212121',
            fondoGeneral: '#FFFFFF',
        }
    ];

    const fuentes = [
        'Nunito, sans-serif',
    ];

    const fontBoxStyle = (font) => ({
        fontFamily: font,
        padding: '4px 6px',
        marginBottom: '4px',
        borderBottom: '1px solid #ddd'
    });

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Presentación de Estilos</h1>

            {/* Paletas de colores */}
            {paletas.map((p) => (
                <div
                    key={p.id}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '24px',
                        boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
                        maxWidth: '500px',
                        width: '100%',
                        backgroundColor: p.fondoGeneral,
                        color: p.texto
                    }}
                >
                    <h2 style={{ marginTop: 0 }}>Paleta de colores {p.id}</h2>

                    <button
                        style={{
                            backgroundColor: p.boton,
                            color: '#fff',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            marginBottom: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Botón de muestra
                    </button>

                    <p style={{ color: p.icono }}>
                        <span style={{ fontSize: '18px' }}>★</span> Detalles e iconos
                    </p>

                    <p style={{
                        backgroundColor: p.fondoSeccion,
                        padding: '6px',
                        borderRadius: '4px'
                    }}>
                        Fondo de secciones
                    </p>

                    <p style={{ color: p.texto }}>
                        Color de texto principal
                    </p>

                    <p style={{
                        backgroundColor: p.fondoGeneral,
                        padding: '6px',
                        borderRadius: '4px'
                    }}>
                        Fondo general
                    </p>
                </div>
            ))}

            {/* Tipografías con contexto */}
            <div style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '24px',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
                maxWidth: '600px',
                width: '100%',
                backgroundColor: '#f9f9f9'
            }}>
                <h2>Tipografías</h2>
                {/* Fuente 5 */}
                <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '20px', margin: 0 }}>
                        Título de ejemplo (Nunito)
                    </p>
                    <p style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Este es un texto de ejemplo para el cuerpo del contenido.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacto;