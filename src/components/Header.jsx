import "../styles/Header.css";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useCookies } from 'react-cookie';
import ReponsiveMenu from "./ReponsiveMenu";
import { useState } from "react";

const Header = () => {
    const [cookies] = useCookies(["usuario"]);
    const [cookieCart] = useCookies(["carrito"]);
    const [menuResponsive, setMenuResponsive] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(""); 

    const toggleMenu = () => {
        setMenuResponsive(!menuResponsive);
        setIsActiveMenu(menuResponsive ? "menu-disable":"menu-active");
        console.log(isActiveMenu)        
    };

    return (
        <div>
            <header>
                {/* Menu responsive */}
                <ReponsiveMenu toggleMenu={toggleMenu} />
                <div className="logo-container">
                    <h1 data-logo="tolito" style={{textAlign: 'center'}}>TolitoShop</h1>
                </div>
                <section style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <Link to="/search" style={{color: 'black'}}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                    <Link to="/carrito" style={{color: 'black'}}>
                        <i className="fa-solid fa-bag-shopping" style={{position: 'relative'}}>
                            {cookieCart.carrito ? (
                                <span style={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                    fontSize: '8px',
                                    position: 'absolute',
                                    bottom: '8px',
                                    right: '-5px',
                                    padding: '3px',
                                    borderRadius: '50%'
                                }}>
                                    {cookieCart.carrito.length}
                                </span>
                            ) : ""}
                        </i>
                    </Link>
                    {cookies.usuario ? (
                        <div style={{margin: '0', padding: '0', gap: '0'}}>
                            <li>{cookies.usuario.username}</li>
                            <li><a href="/api/usuario/logout">Salir</a></li>
                        </div>
                    ) : (
                        <Link to="/login" style={{color: 'black'}}><i className="fa-regular fa-user"></i></Link>
                    )}
                </section>
            </header>
            {menuResponsive && <Nav isActiveMenu={isActiveMenu} />}
        </div>
    );
}

export default Header;
