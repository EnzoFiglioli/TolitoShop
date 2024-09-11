import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import '../styles/ProductDetail.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { URL } from "../helpers/api";

const ProductDetail = () => {
    const [cookie, setCookie] = useCookies(['carrito']);
    const [itemDetail, setItemDetail] = useState({});
    const [cantidad, setCantidad] = useState(0);
    const [stock, setStock] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${URL}/productos/item/${id}`)
            .then((response) => response.json())
            .then(data => {
                setItemDetail(data);
                setStock(data.stock);
            })
            .catch(err => console.log(err));
    }, [id]);

    function addCart() {
        if(cantidad== 0) return alert('La cantidad minima es 1.')
        const carrito = cookie.carrito || [];
        carrito.push({ ...itemDetail, cantidad });        
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
    
        setCookie('carrito', carrito, { expires: expirationDate });
    }
    

    return (
        <>
            <Header />
            <Nav cookie={cookie} />
            <main className="itemDetail-container">
                {itemDetail ? (
                    <div style={{ display: 'flex', gap: '30px' }}
                        className="itemDetail">
                        <div 
                        className="imagenes-container-item-detail"
                        style={{
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                        {Array.isArray(itemDetail.imagen) ? (
                            itemDetail.imagen.map((item, index) => (
                                <img key={index} style={{width:'100px', height:'150px'}} src={item} alt="1" />
                            ))
                        ) : ("")}
                    </div>
                        <img
                        className="image-detail"
                            src={itemDetail.imagen}
                            alt={itemDetail.titulo}
                        />
                        <div>
                            <h5 style={{ color: 'gray' }}>Productos/{itemDetail.categoria}</h5>
                            <h1 className="titulo-producto">{itemDetail.titulo}</h1><br />
                            <h2 className="precio-producto"><b>${itemDetail.precio}</b></h2>
                            <hr/>
                            <h3><b>12X ${(itemDetail.precio / 12).toFixed(2)}</b></h3>
                            <h3>Cuotas sin interés</h3>
                            {
                                stock === 0 ? (
                                    <p style={{ color: 'red' }}>No hay stock de este producto</p>
                                ) : (
                                    <p><b>Stock:</b> {stock}</p>
                                )
                            }
                            <div className="cantidad-productos">
                                <span
                                    onClick={() => {
                                        if (stock > 0) {
                                            setCantidad(cantidad + 1);
                                            setStock(stock - 1);
                                        }
                                    }}
                                >+</span>
                                <p>{cantidad}</p>
                                <span
                                    onClick={() => {
                                        if (cantidad > 1) {
                                            setCantidad(cantidad - 1);
                                            setStock(stock + 1); // Incrementa el stock si se reduce la cantidad
                                        }
                                    }}
                                >-</span>
                            </div>
                            <button className="agregarCarrito" onClick={addCart}>Agregar al carrito</button>
                            <div className="disponibilidad">
                                <h4><b>Envio gratis en todo Olavarría</b></h4>
                                <h5 style={{margin:'0'}}>2-5 días hábiles (si el pedido contiene Vajilla 3-6 días hábiles)</h5>
                                <hr />
                            </div>
                            <div>
                                {itemDetail.descripcion}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Cargando...</div>
                )}
                <span className="span">Volver a productos</span>
            </main>
            <Footer />
        </>
    )
}

export default ProductDetail;
