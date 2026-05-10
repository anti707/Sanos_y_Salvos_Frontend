import { useState } from "react";
import { Container } from 'react-bootstrap';
import "../../css/pages/Home.css";

function Home() {
    const [mascotas] = useState([]);

 
  return (
    <Container className="home-container">

      <div className="home-box">
        <h1 className="home-title">Sanos y Salvos</h1>
      </div>

      <div className="home-box">
        <p className="home-text">
          <strong>Sanos y Salvos</strong> somos un equipo sin fines de lucro dedicados a la busqueda y encuentro de mascotas perdidas.
        </p>
      </div>

      <div className="mascotas-home-wrapper">

        <div className="mascotas-home-list">
          {mascotas.map((mascota) => (
            <div key={mascota.mascota_id} className="home-card">

              <img src={mascota.imagenUrl} alt={mascota.nombreMascota} className="home-card-img" />

              <h3 className="home-card-title">{mascota.nombreMascota}</h3>

              <p className="home-card-desc">
                {mascota.descripcion?.slice(0, 160)}
              </p>

              <a className="home-card-btn" href={`/mascota/${mascota.mascota_id}`}>
                Ir a detalles
              </a>

            </div>
          ))}
        </div>

      </div>

    </Container>
  );
}

export default Home;