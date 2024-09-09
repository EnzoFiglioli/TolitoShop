import { useEffect, useState } from 'react';

const Search = () => {
    const [msg, setMsg] = useState("");
    const [query, setQuery] = useState("");
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        if (query.trim()) { // Evitar hacer fetch si la query está vacía
            fetch(`/api/productos/search?q=${query}`)
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(err => { setMsg(err.msg)});
                    }
                    return response.json();
                })
                .then(data => {
                    setResultado(data);
                    setMsg("Producto encontrado");
                })
                .catch(err => {
                    setResultado([]);
                    setMsg(err.message);
                });
        } else {
            setResultado([]);
            setMsg("");
        }
    }, [query]);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    console.log(resultado);
    

    return (
        <div style={{ color: 'black', margin: 'auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input
                    onChange={handleQuery}
                    type="text"
                    placeholder="Buscar un producto"
                    style={{ padding: '5px', width: '300px' }}
                />
                <button
                    type="button"
                    onClick={() => setQuery("")}
                    style={{ backgroundColor: 'transparent', color: 'black', marginLeft: '10px' }}
                >
                    X
                </button>
            </form>
            {msg && <p>{msg}</p>}
            <div
                style={{
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start', 
                    alignContent: 'flex-start'

                    }}
            >
                {resultado.map((producto, index) => (
                <a key={index} style={{display:'flex'}} href={`/productos/item/${producto.id}`}>
                    <img src={producto.imagen} alt={producto.titulo} style={{width:'50px',height:'50px'}} />
                    <p> {producto.titulo}</p>
                </a>
                ))}
            </div>
        </div>
    );
};

export default Search;
