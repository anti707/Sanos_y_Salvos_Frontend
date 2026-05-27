import { Container } from 'react-bootstrap';
import "../../css/pages/Contactanos.css";
import Link from "../../Components/atoms/link";
import Text from "../../Components/atoms/Text";

function Contactanos() {
  
 
  return (
    <Container className='contactanos-container'>
        <div className='carta-contactanos'>

            <div className="contactanos-left">
                <Text className="contactanos-text">Contactos</Text>
                <h2 className="contactanos-link">Numero: +569 89764598</h2>
                <h2 className="contactanos-link">gmail:Sanos&salvos@gmail.com</h2>
                <h2 className="contactanos-link">Precencial:av.central 567</h2>
            </div>

            <div className="contactanos-center">
                <Text className="contactanos-text">CONTACTANOS</Text>
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