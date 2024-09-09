import { useState, useEffect } from "react";
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import { arrayImg } from "./handlers/arrayImg.js";
import GeoMap from "./components/GeoMap.jsx";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const main = document.querySelector("main[data-background='hero']");
    main.style.backgroundImage = `url(${arrayImg[currentIndex]})`;

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % arrayImg.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]);

  return (
    <>
    <Header />
    <Nav />
    <main data-background="hero">
      <h1 data-section="slogan">Comprá y enamorate</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius totam eaque error modi quod unde earum recusandae eligendi eum, maxime voluptates aperiam deleniti praesentium provident corporis in aliquid qui.
      </p>
    </main>
    <section
      style={{color:'black', height:'100vh'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente et facere aliquid reiciendis animi, voluptatibus alias praesentium voluptate? Quis dicta voluptates, expedita cumque consequuntur laudantium dolorum quos quibusdam iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sequi eius ullam porro architecto, totam enim veritatis dolorem, nemo saepe suscipit tempora quidem magnam tempore molestias in quibusdam beatae fugiat.
    </section>
    <GeoMap />
    <Footer />
  </>
  );
}

export default App;
