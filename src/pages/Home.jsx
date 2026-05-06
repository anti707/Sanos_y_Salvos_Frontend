import Navbar from "../components/organisms/Navbar";
import Foother from "../components/organisms/Footer";

function Home() {
    return (
        <div>
            <Navbar
                logo=""
                title="Sanos y Salvos"
                boton="Apoyanos"
            />

            <Foother 
                logo=""
                title="Sanos y Salvos"
                description="somos una organizacion encargada de la busqueda y encuentro de mascotas perdidas"
                links={["instagram", "x", "facebook", "Contacto"]}
            />
        </div>
    );
}
export default Home;