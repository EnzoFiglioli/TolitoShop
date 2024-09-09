import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <section style={{display:'flex'}}>
                <ul>
                    <h3>Contacto</h3>
                    <li>Nos apasiona la vida en casa. Te inspiramos a crear espacios cálidos y hacer de tu hogar tu lugar favorito.</li>
                    <li>1138809169 - Whatsapp</li>
                    <li>Info@binahdeco.com.ar</li>
                    <li>Pick Up Av. S. Ortiz 1754 Palermo</li>
                </ul>
                <ul className='produtos-footer'>
                    <h3>Productos</h3>
                    <li>Mates</li>
                    <li>Tazas</li>
                    <li>Botellas</li>
                    <li>Vasos</li>
                    <li>Bowls</li>
                </ul>
                <ul className='produtos-footer'>
                    <h3>Nosotros</h3>
                    <li>Quiénes somos</li>
                    <li>Contacto</li>
                    <li>Preguntas Frecuentes</li>
                    <li>Términos y condiciones</li>
                    <li>Política de devolución y reembolso</li>
                </ul>
                <ul className='produtos-footer'>
                    <h3>Cuenta</h3>
                    <li>Mi cuenta</li>
                    <li>Mis pedidos</li>
                    <li>Mis direcciones</li>
                </ul>
                <ul>
                    <h3>Newsletter</h3>
                </ul>
            </section>
            <p>Tolito</p>
            <p className='signature'><a href="https://enzofiglioli.vercel.app/" target='_blank'>Desarrollado por Enzo Figlioli | 2024</a></p>
        </footer>
    )
}

export default Footer