const MenuProductos = ({handleSortChange, categoria, productos}) => {
  return (
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
  )
}

export default MenuProductos