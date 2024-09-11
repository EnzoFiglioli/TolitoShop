import { useState } from 'react';
import { URL } from '../helpers/api';

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${URL}/usuario/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "username": usuario,
                "password": password
            }),
            credentials:'include'
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw err; });
            }
            return response.json();
        })
        .then(data => {
            // Mostrar mensaje de éxito
            setLoginMessage({ msg: data.msg, success: true });
        })
        .catch(error => {
            // Mostrar el mensaje de error
            setLoginMessage({ msg: error.msg || 'Error en el login', success: false });
        });
    };
    return (
        <div style={{ backgroundColor: '#fff', color: 'black', height: '100vh', width: '100%' }}>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <form 
                onSubmit={handleSubmit}
                style={{
                    width: "40vw",
                    display: 'flex', 
                    flexDirection: 'column',
                    margin: 'auto', 
                    gap: '20px'
                }}
            >
                <label htmlFor="username">Usuario:</label>
                <input 
                    style={{ padding: '10px' }} 
                    type="text" 
                    placeholder="Ejemplo: TolitoLover" 
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    placeholder="Tu contraseña va aquí.." 
                    style={{ padding: '10px' }} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar</button>
            </form>
            <p style={{
                textAlign: 'center', 
                color: loginMessage.success ? 'greenyellow' : 'red', 
                fontWeight: 'bold'
            }}>
                {loginMessage.msg}
            </p>
        </div>
    );
}

export default Login;
