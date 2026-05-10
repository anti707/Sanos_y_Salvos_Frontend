import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import Link from "../atoms/Link";
import "../../css/Components/organisms/Foother.css";


function Foother() {
    return (
        <footer className="footer-section">
            <Container className="footer-content">

                <Text className="footer-text">
                    © {new Date().getFullYear()} Sanos y salvos.
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

export default Foother;