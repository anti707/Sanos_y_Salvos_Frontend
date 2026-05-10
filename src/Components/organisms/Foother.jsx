import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import Link from "../atoms/Link";
import "../../Css/components/organisms/Footer.css";


function Footer() {
    return (
        <footer className="footer-section">
            <Container className="footer-content">

                <Text className="footer-text">
                    © {new Date().getFullYear()} 미지 Beauty. Todos los derechos reservados.
                </Text>

                <div className="footer-links">
                    <Link href="#" className="footer-link">Aviso Legal</Link>
                    <span className="footer-separator">|</span>
                    <Link href="#" className="footer-link">Política de Privacidad</Link>
                </div>

            </Container>
        </footer>
    );
}

export default Footer;