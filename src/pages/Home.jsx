import Navbar from "../components/organisms/Navbar.jsx";
import Foother from "../components/organisms/Foother.jsx";
import PetCard from "../components/organisms/PetCard.jsx";
import "../home.css";

function Home() {
    return (
        
        <div>
            <div className="home-nav">
                   
                <Navbar logo="" title="Sanos y Salvos" boton="Apoyanos"/>
            </div>
            <div className="home-content">
                <h1>Bienvenidos a Sanos y Salvos</h1>
                <p>Somos una organización dedicada a la búsqueda y encuentro de mascotas perdidas. Nuestra misión es ayudar a reunir a las mascotas con sus dueños, brindando apoyo y recursos para facilitar el proceso de búsqueda.</p>
            </div>
            <div className="home-petcards">
                <PetCard imagen="" nombre="Firulais" direccion="Calle 123, Ciudad" fecha="2024-05-01" descripcion="Perro perdido, color marrón, tamaño mediano" estado="Perdido" boton="Ver Detalles"/>
                <PetCard imagen="" nombre="Mittens" direccion="Avenida Principal, Ciudad" fecha="2024-04-28" descripcion="Gato perdido, color blanco, tamaño pequeño" estado="Perdido" boton="Ver Detalles"/>
            </div>

        
            <div className="home-foo">
                <Foother logo="" title="Sanos y Salvos" description="somos una organizacion encargada de la busqueda y encuentro de mascotas perdidas" links={["instagram", "x", "facebook", "Contacto"]}/>
            </div>
        </div>
    );
}
export default Home;