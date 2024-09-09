import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const SobreNosotros = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Nav />
            <main style={{ backgroundColor: 'white', color: '#333', padding: '40px 20px', flexGrow: 1 }}>
                <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#4A90E2', marginBottom: '20px' }}>Sobre Nosotros</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
                        Bienvenido a nuestra tienda en línea. Nos dedicamos a ofrecerte los mejores productos con la mejor calidad, 
                        siempre comprometidos con la satisfacción de nuestros clientes. 
                        Nuestra pasión por la excelencia nos ha llevado a convertirnos en un referente en el sector.
                    </p>

                    <section style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#4A90E2', marginBottom: '20px' }}>Nuestra Misión</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Nuestra misión es ofrecer productos de alta calidad que mejoren la vida de nuestros clientes, 
                            proporcionando una experiencia de compra excepcional, con un enfoque en la satisfacción y la lealtad del cliente.
                        </p>
                    </section>

                    <section style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#4A90E2', marginBottom: '20px' }}>Nuestra Visión</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Ser reconocidos como la tienda en línea de referencia, destacando por nuestra innovación, calidad, 
                            y compromiso con la comunidad, brindando siempre lo mejor a nuestros clientes.
                        </p>
                    </section>

                    <section style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#4A90E2', marginBottom: '20px' }}>Nuestros Valores</h2>
                        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
                            <li><strong>Calidad:</strong> Nos comprometemos a ofrecer productos de la más alta calidad.</li>
                            <li><strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar y crecer.</li>
                            <li><strong>Integridad:</strong> Operamos con transparencia y honestidad en todo lo que hacemos.</li>
                            <li><strong>Compromiso con el Cliente:</strong> La satisfacción del cliente es nuestra principal prioridad.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '2rem', color: '#4A90E2', marginBottom: '20px' }}>Nuestro Equipo</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <div style={{ margin: '10px', textAlign: 'center' }}>
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Equipo 1" 
                                    style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} 
                                />
                                <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>Nombre del Miembro 1</h3>
                                <p style={{ fontSize: '1rem', color: '#777' }}>Cargo</p>
                            </div>
                            <div style={{ margin: '10px', textAlign: 'center' }}>
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Equipo 2" 
                                    style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} 
                                />
                                <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>Nombre del Miembro 2</h3>
                                <p style={{ fontSize: '1rem', color: '#777' }}>Cargo</p>
                            </div>
                            <div style={{ margin: '10px', textAlign: 'center' }}>
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Equipo 3" 
                                    style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} 
                                />
                                <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>Nombre del Miembro 3</h3>
                                <p style={{ fontSize: '1rem', color: '#777' }}>Cargo</p>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SobreNosotros;
