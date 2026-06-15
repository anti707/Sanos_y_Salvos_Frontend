import { Container } from 'react-bootstrap';
import "../../css/pages/Contactanos.css";
import "../../css/pages/Apoyanos.css";
import Link from "../../Components/atoms/Linktwo";
import Text from "../../Components/atoms/Text";

function Contactanos() {
  
 
  return (
    <Container className='contactanos-container'>


        <div className="apoyanos-header">
        <h1 className="apoyanos-title">¿Quieres saber mas de nosotros?</h1>
        <h3 className="apoyanos-subtitle">Estamos disponibles para atenderles y resolver cualquier duda o consulta que pueda tener, no dude en ponerse en contacto con nosotros,
            tenemos tanto nuestras Redes sociales tales como nuestra sucursal fisica a su disposicion, para que pueda elegir la forma de contacto que mas le acomode, recuerde que estamos aqui para ayudarle y brindarle el mejor servicio posible, asi que no dude en contactarnos, estaremos encantados de atenderle y ayudarle en lo que necesite.
        </h3>
      </div>

        <div className='carta-contactanos'>
        

            <div className="contactanos-left">
                <Text className="contactanos-text">Redes sociales</Text>
                <h2 className="contactanos-link">Numero: +569 89764598</h2>
                <h2 className="contactanos-link">gmail:Sanos&salvos@gmail.com</h2>
                <h2 className="contactanos-link">Presencial:av.central 567</h2>
            </div>

            <div className="contactanos-center">
                <Text className="contactanos-text">Terminos y condiciones</Text>
                <Link href="#" className="contactanos-link">Términos y Condiciones</Link>
                <Link href="#" className="contactanos-link">Contacto</Link>
            </div>

            <div className="contactanos-rigth">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMME-MM-lYNn2N7yO0IM852QdExrz0ClxYGw&s" alt="Logo" className="contactanos-logo" />
                                      
            </div>

        </div>


    </Container>
  );
}

export default Contactanos;