import { Container } from 'react-bootstrap';
import "../../css/pages/Home.css";
import "../../Components/molecules/CardHorizontal"
import CardHorizontal from "../../Components/molecules/CardHorizontal";
import "../../Components/organisms/CardCarousel"
import CardCarousel from '../../Components/organisms/CardCarousel';




function Home() {

    const mascotas = [
    {
      id: 1,
      imagen: "https://placedog.net/500",
      titulo: "Max",
      descripcion: "Perrito muy juguetón responde al nombre de max, lleva perdido 1 dia",
      fecha: "Hace 3 minutos",
    },

    {
      id: 3,
      imagen: "https://placedog.net/501",
      titulo: "Rocky",
      descripcion: "perrito amigable con problemas de diabetes, se perdio hace 7 horas en la florida",
      fecha: "Hace 1 hora",
    },
  ];

 
  return (
    <Container className="home-container">


      <div className="home-box">
        <h1 className="home-title">Sanos y Salvos</h1>
      </div>

      <div className="d-flex flex-column gap-4 align-items-center">

        {mascotas.map((mascota) => (
          <CardHorizontal
            key={mascota.id}
            imagen={mascota.imagen}
            titulo={mascota.titulo}
            descripcion={mascota.descripcion}
            fecha={mascota.fecha}
          />
        ))}


      </div>


    </Container>
  );
}

export default Home;