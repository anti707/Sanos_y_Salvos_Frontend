import { useState } from "react";
import { Container } from 'react-bootstrap';
import "../../css/pages/Home.css";
import "../../Components/molecules/CardHorizontal"




function Home() {

 
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


      


    </Container>
  );
}

export default Home;