import { useState } from "react";
import { Container } from 'react-bootstrap';
import "../../css/pages/Apoyanos.css";
import ApoyanosCard from "../../Components/molecules/ApoyanosCard";


function Apoyanos() {

 
  return (
    <Container className="apoyanos-container">

      <div className="apoyanos-header">
        <h1 className="apoyanos-title">¡Apóyanos a encontrar a más mascotas perdidas!</h1>
        <h3 className="apoyanos-subtitle">¿Te hemos ayudado a encontrar a tu mascota?, pues es lo que mas nos alegra de escuchar, 
          si deseas tu tambien ser parte de esta linda comunidad y ayudar a mas familias a encontrar a sus pequeñines, esta es tu oportunidad
          puedes decidir apoyarnos con una donacion para mejorar nuestros servicios o simplemente compartir nuestra pagina con tus amigos y familiares,
          entre mas personas seamos mas rapido podremos encontrar a las mascotas perdidas, recuerda que cada ayuda es importante y cada mascota es un mundo, 
          asi que no dudes en ser parte de esta hermosa causa, juntos podemos hacer la diferencia y ayudar a mas familias a reunirse con sus amados compañeros peludos.
        </h3>
      </div>

      <div className="apoyanos-cards-container">
        <ApoyanosCard/>
      </div>


    </Container>
  );
}

export default Apoyanos;