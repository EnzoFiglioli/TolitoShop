import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import "../index.css";

const Nav = ({ isActiveMenu }) => {
    const [cookies] = useCookies(["usuario"]);
    const usuario = cookies.usuario;
    return (
        <nav className={isActiveMenu}>
            <ul
                data-section="nav"
                data-value="nav"
                style={{ margin: '0'}}
            >
                <li><Link data-value="home" to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li className='item-link'>
                    Café & Mate
                    <ul className="submenu">
                        <li><Link to="/cafe">Vasos</Link></li>
                        <li><Link to="/mate">Mate</Link></li>
                    </ul>
                </li>
                <li className='item-link'>
                    Cocina
                    <ul className="submenu">
                        <li><Link to="/bowls">Bowls</Link></li>
                        <li><Link to="/jabon">Jaboneras</Link></li>
                    </ul>
                </li>
                <li className='item-link'>
                    Utiles
                    <ul className="submenu">
                        <li><Link to="/enrrollacables">Enrollacables</Link></li>
                    </ul>
                </li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                {usuario ? <li><Link to="/perfil">Mi perfil</Link></li> : null}
            </ul>
        </nav>
    );
}

export default Nav;
