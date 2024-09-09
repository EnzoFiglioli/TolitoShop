import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";

const Carrito = () => {
    const [cookies] = useCookies(['carrito']);
    const miCookie = cookies.carrito || [];
    const [precioFinal, setPrecioFinal] = useState(0);
    const [mensajeServidor, setMensajeServidor ] = useState("");

    // Calcular el precio final del carrito
    useEffect(() => {
        const total = miCookie.reduce((acc, item) => acc + (item.precio * (item.cantidad || 1)), 0);
        setPrecioFinal(total);
    }, [miCookie]);

    // Definir la función fuera de useEffect para usarla en el botón
    const comprarCarrito = () => {
        fetch('/api/carrito/comprar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                carrito: miCookie,
                total: precioFinal
            })
        }).then(response => response.json())
          .then(data => {
            console.log(data.msg)
            setMensajeServidor(data.msg)
        })
          .catch(err => console.error(err));
    };

    return (
        <div>
            <Header />
            <Nav />
            <main style={{ backgroundColor: 'white', color: 'black', justifyContent: 'normal' }}>
                <h1>Carrito</h1>
                <div>
                    {miCookie.length > 0 ? miCookie.map((item, index) => (
                        <section key={index}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid black', marginBottom: '10px', position:'relative'}}>
                                <span style={{position:'absolute',top:'13px',right:'13px'}}>X</span>
                                <img
                                    width={'70px'}
                                    height={'70px'}
                                    style={{ margin: '10px', objectFit: 'cover' }}
                                    src={item.imagen}
                                    alt={item.titulo}
                                />
                                <div>
                                    <h4>{item.titulo}</h4>
                                    <p>${item.precio}</p>
                                    <p>Cantidad: X{item.cantidad || 1}</p>
                                </div>
                            </div>
                        </section>
                    )) : (
                        <p>No hay items en el carrito...</p>
                    )}
                    <h4>Total: ${(precioFinal.toFixed(2))}</h4>
                    <p style={{color:"green"}}>{mensajeServidor}</p>
                    <button onClick={comprarCarrito}>Comprar</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Carrito;
