import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import Link from "../atoms/Link";
import "../../css/Components/organisms/Foother.css";
import logo from "../../assets/logo.png";


function Foother() {
    return (
        <footer className="footer-section">
            <Container className="footer-content">

                

                    <div className="footer-left">
                        <Text className="footer-text">REDES SOCIALES</Text>
                        <Link href="#" className="footer-link">Instagram</Link>
                        <Link href="#" className="footer-link">Facebook</Link>
                        <Link href="#" className="footer-link">Twitter</Link>
                        <Link href="#" className="footer-link">tik-tok</Link>
                    </div>


                    <div className="footer-center">
                        <Text className="footer-text">terminos</Text>
                        <Link href="#" className="footer-link">Términos y Condiciones</Link>
                        <Link href="#" className="footer-link">Contacto</Link>
                    </div>


                    <div className="footer-rigth">
                        <img src={logo} alt="Logo" className="footer-logo" />
                          
                    </div>

                        

            </Container>
        </footer>
    );
}

export default Foother;