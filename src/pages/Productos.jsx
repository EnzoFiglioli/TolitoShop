import Header from "../components/Header";
import Footer from "../components/Footer";
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
        }else if (sortOption === 'az') {
            fetch(`${URL}/productos/ordenados-a-z`)
                .then(response => response.json())
                .then(ordenados => setProductos(ordenados))
                .catch(err => console.log(err));
        } else if (sortOption === 'za') {
            fetch(`${URL}/productos/ordenados-z-a`)
                .then(response => response.json())
                .then(ordenados => setProductos(ordenados))
                .catch(err => console.log(err));
        } else if (sortOption === 'precio-asc') {
            fetch(`${URL}/productos//ordenados-precio-menor-mayor`)
                .then(response => response.json())
                .then(ordenados => setProductos(ordenados))
                .catch(err => console.log(err));
        } else if (sortOption === 'precio-desc') {
            fetch(`${URL}/productos/ordenados-precio-mayor-menor`)
                .then(response => response.json())
                .then(ordenados => setProductos(ordenados))
                .catch(err => console.log(err));
        }

        if(sortOption == 'Mates' || sortOption == 'Tazas' || sortOption == 'Botellas' || sortOption == 'Vasos'){
            fetch(`${URL}/productos/q?categoria=${sortOption}`)
            .then(data => data.json())
            .then(response => setProductos(response));
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
                <ul style={{ color: 'black' }} className="filtros-productos">
                <li>
                    <select
                        style={{ backgroundColor: 'white', color: 'black', padding: '15px', border: '1px solid gray', textTransform:'full-width'}}
                        onChange={handleSortChange}>
                        <option value="filt">Filtrar</option>
                        <option value="precio-asc">Menor a mayor precio</option>
                        <option value="precio-desc">Mayor a menor precio</option>
                        {categoria.map((categoria, index) => (
                                <option key={index} value={categoria}>{categoria}</option>
                            ))}
                    </select>
                </li>
                    <li style={{color:'gray'}} className="cantidad-articulos">{productos.length} artículos</li>
                    <li>
                        <select
                            style={{ backgroundColor: 'white', color: 'black', padding: '15px', border: '1px solid gray' }}
                            onChange={handleSortChange}
                        >
                            <option value="cat">Características</option>
                            <option value="az">Alfabéticamente A a Z</option>
                            <option value="za">Alfabéticamente Z a A</option>
                        </select>
                    </li>
                </ul>
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
