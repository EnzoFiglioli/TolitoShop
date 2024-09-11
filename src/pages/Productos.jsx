import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuProductos from '../components/MenuProductos.jsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cards.css';
import Nav from '../components/Nav';
import {URL} from '../helpers/api.js'

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [sortOption, setSortOption] = useState(''); // Estado para la opción seleccionada
    const [categoria, setCategoria] = useState([]);
    useEffect(() => {
        fetch(`${URL}/productos`)
            .then(response => response.json())
            .then(data => {
                setProductos(data)
                const categoriaUnicas = [... new Set(data.map((item)=>item.categoria))];
                setCategoria(categoriaUnicas)
            })
            .catch(err => console.error(err));

            
    }, []);

    useEffect(() => {
        if (sortOption === 'cat' || sortOption === 'filt'){
            fetch(`${URL}/productos`)
            .then(response => response.json())
            .then(productos => setProductos(productos))
        }

        if (sortOption === 'az' || sortOption === 'za' || sortOption === 'precio-asc' || sortOption === 'precio-desc') {
            fetch(`${URL}/productos?sort=${sortOption}`)
                .then(response => response.json())
                .then(data => setProductos(data))
                .catch(err => console.error(err));
        }

        if(sortOption == 'Mates' || sortOption == 'Tazas' || sortOption == 'Botellas' || sortOption == 'Vasos'){
            fetch(`${URL}/productos/q?categoria=${sortOption}`)
            .then(data => data.json())
            .then(response => setProductos(response))
            .catch(err => console.error(err));
        }
    }, [sortOption]);

    // Función para cambiar la imagen al pasar el ratón por encima
    function changeImg(e, newSrc) {
        e.target.src = newSrc;
    }

    // Función para restaurar la imagen original al quitar el ratón
    function resetImg(e, originalSrc) {
        e.target.src = originalSrc;
    }

    // Maneja el cambio en el <select> para ordenar productos
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div>
            <Header />
            <Nav/ >
            <main style={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
                <h2 style={{ color: "black", textAlign: 'center' }}>Productos</h2>
                <MenuProductos 
                    handleSortChange={handleSortChange}
                    categoria={categoria}
                    productos={productos}
                />
                <section className="cards-container">
                    {productos.map((item, index) => (
                        <div
                            key={index}
                            className="cards"
                            onMouseEnter={(e) => changeImg(e, item.imagen[1] || item.imagen[0])}
                            onMouseLeave={(e) => resetImg(e, item.imagen[0])}
                        >
                            <img src={item.imagen[0]} alt={item.titulo} />
                            <div className="card-tex">
                                <h4 style={{ textTransform: 'uppercase', fontWeight: '700', minHeight: '50px' }}>{item.titulo}</h4>
                                <h4>${item.precio}</h4>
                                <h3><b>12X ${(item.precio / 12).toFixed(2)}</b></h3>
                                <h5 style={{ textTransform: 'uppercase', color: 'purple' }}>Sin interés</h5>
                                <Link to={`/productos/item/${item.id}`} className="btn-ver">Ver {item.categoria}</Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Productos;
