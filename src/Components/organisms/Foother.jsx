import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import Link from "../atoms/Link";
import "../../css/Components/organisms/Foother.css";
import logo from "../../assets/logo.png";


function Foother() {
    return (
        <footer className="footer-section">
            <Container className="footer-content">

                

                <div className="footer-links">
                    <Link href="#" className="footer-link">Aviso Legal</Link>
                    <span className="footer-separator">|</span>
                    <Link href="#" className="footer-link">Política de Privacidad</Link>
                </div>

                <Text className="footer-text">
                    © {new Date().getFullYear()} Sanos y salvos.
                </Text>

                <div className="footer-left">
                          <img src={logo} alt="Logo" className="footer-logo" />
                          
                        </div>

            </Container>
        </footer>
    );
}

export default Foother;