import { createContext, useContext, useState } from 'react';

// Crear el contexto
export const MenuContext = createContext();

// Crear un proveedor de contexto
export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(MenuContext);
};
