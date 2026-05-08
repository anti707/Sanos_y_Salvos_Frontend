import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";


function Navbar({
  logo,
  title,
  boton
}) {

  return (
    <nav>
        <div className="logo"> 
            <Image src={logo} alt="Logo" />
            <Text as="h1">{title}</Text>
        </div>

        <div className="nav-content">
            <Button>{boton}</Button>
        </div>
    </nav>
  );
}

export default Navbar;