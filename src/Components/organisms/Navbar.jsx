import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import "../../css/Navbar.css";


function Navbar({
  logo,
  title,
  boton
}) {

  return (
    <nav className="nav">
        <div className="logo"> 
            <Image src={logo} alt="Logo" />
            <Text as="h1">{title}</Text>
        </div>

        <div className="nav-content">
            <Button className="boton">{boton}</Button>
        </div>
    </nav>
  );
}

export default Navbar;