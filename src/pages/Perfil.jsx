import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';

const Perfil = () => {
    const [cookie] = useCookies(["usuario"]);
    const user = cookie.usuario;
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        // Simulación de datos de compras
        if (user) {
            setCompras([
                {
                    id: 1,
                    nombre: 'Producto A',
                    imagen: 'https://via.placeholder.com/100', // URL de la imagen del producto
                    fechaCompra: '2024-07-01',
                    estado: 'Entregado',
                    fechaEntrega: '2024-07-03',
                },
                {
                    id: 2,
                    nombre: 'Producto B',
                    imagen: 'https://via.placeholder.com/100', // URL de la imagen del producto
                    fechaCompra: '2024-07-10',
                    estado: 'En camino',
                    fechaEntrega: '2024-07-12',
                },
                {
                    id: 3,
                    nombre: 'Producto C',
                    imagen: 'https://via.placeholder.com/100', // URL de la imagen del producto
                    fechaCompra: '2024-08-15',
                    estado: 'Pendiente de envío',
                    fechaEntrega: null, // Si aún no ha sido entregado
                }
            ]);
        }
    }, [user]);

    const obtenerColorEstado = (estado) => {
        switch (estado) {
            case 'Entregado':
                return 'green';
            case 'En camino':
                return 'orange';
            case 'Pendiente de envío':
                return 'red';
            default:
                return 'gray';
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Nav />
            <main style={{ backgroundColor: 'white', color: '#333', padding: '20px', flexGrow: 1 }}>
                {user ? (
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <img src={user.img} alt={user.username} style={{width:'8rem', height:'8rem'}} />
                        <h2 style={{ fontSize: '2rem', color: '#4A90E2' }}>Bienvenido, @{user.username}!</h2>
                        <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>Este es tu perfil. Aquí puedes ver y editar tus datos.</p>
                        <button 
                            style={{
                                backgroundColor: '#4A90E2',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                marginTop: '20px'
                            }}
                            onClick={() => alert('Funcionalidad de edición próximamente!')}
                        >
                            Editar Perfil
                        </button>

                        {/* Historial de Compras */}
                        <div style={{ marginTop: '30px', textAlign: 'left' }}>
                            <h3 style={{ color: '#4A90E2', marginBottom: '20px' }}>Historial de Compras</h3>
                            {compras.length > 0 ? (
                                <ul style={{ listStyleType: 'none', padding: 0, display:'flex',flexDirection:'column' }}>
                                    {compras.map(compra => (
                                        <li key={compra.id} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            backgroundColor: '#f0f0f0',
                                            margin: '10px 0',
                                            padding: '15px',
                                            borderRadius: '5px',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                        }}>
                                            {/* Imagen del producto */}
                                            <img 
                                                src={compra.imagen} 
                                                alt={`Imagen de ${compra.nombre}`} 
                                                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px', marginRight: '20px' }} 
                                            />

                                            {/* Información de la compra */}
                                            <div style={{ flexGrow: 1 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{compra.nombre}</div>
                                                        <div style={{ fontSize: '0.9rem', color: '#777' }}>Comprado el {compra.fechaCompra}</div>
                                                    </div>
                                                    <div style={{ textAlign: 'right', color: obtenerColorEstado(compra.estado), fontWeight: 'bold' }}>
                                                        {compra.estado}
                                                    </div>
                                                </div>
                                                {compra.estado === 'Entregado' || compra.estado === 'En camino' ? (
                                                    <div style={{ marginTop: '10px', color: '#555', fontSize: '0.9rem' }}>
                                                        {compra.estado === 'Entregado' ? `Entregado el ${compra.fechaEntrega}` : `Estimada entrega el ${compra.fechaEntrega}`}
                                                    </div>
                                                ) : (
                                                    <div style={{ marginTop: '10px', color: '#555', fontSize: '0.9rem' }}>
                                                        Pendiente de envío
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ color: '#999' }}>No has realizado compras aún.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', color: '#999', fontSize: '1.5rem' }}>
                        <p>Inicia sesión para ver tu perfil.</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Perfil;
