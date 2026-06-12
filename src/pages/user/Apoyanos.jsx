import { Container } from 'react-bootstrap';
import "../../css/pages/Apoyanos.css";
import ApoyanosCard from "../../Components/molecules/ApoyanosCard";
import { Link } from 'react-router-dom';


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

      <div className="row d-flex flex-row flex-wrap justify-content-center gap-3">
        <div className="apoyanos-cards-container">
          <ApoyanosCard/>
        </div>
      </div>


      <div className="apoyanos-nosotros">
        <h1 className="apoyanos-title">¡Quiero apoyar!</h1>
        <div className="apoyanos-boton">
          <Link to="/simulador-webpay" className="btn-primary">
            AYUDANOS A QUE VUELVAN A CASA
          </Link>
        </div>
      </div>

      <div className="my-5" style={{width: "100vw",marginLeft: "calc(-50vw + 50%)",}}>
          <img
            src="https://i.pinimg.com/originals/27/19/12/271912b329ec663f31a95238cae5a6fd.gif"
            alt="Banner mascotas"
            className="w-80 rounded"
            style={{
              height: "250px",
              objectFit: "scale-down",
            }}
          />
        </div> 


      <div className="apoyanos-nosotros">
        <h1 className="apoyanos-title">Sobre nosotros</h1>
        <h2 className="apoyanos-subtitle">¿Quieres saber mas de nosotros?, contactanos a traves de nuestras redes y/o sucursales</h2>
        <div className="apoyanos-boton">
          <Link to="/contactanos" className="btn-primary">
            Contactanos
          </Link>
        </div>
      </div>

    </Container>
  );
}

export default Apoyanos;