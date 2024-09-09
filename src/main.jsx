import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Páginas
import App from './App.jsx';
import Productos from './pages/Productos.jsx';
import Login from './pages/Login.jsx';
import Perfil from './pages/Perfil.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Search from './pages/Search.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Carrito from './pages/Carrito.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/productos" element={<Productos />} />
        <Route path='/productos/item/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/perfil' element={<Perfil />} />  
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path='/api/usuario/logout' element={<Navigate to="/" />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
)
