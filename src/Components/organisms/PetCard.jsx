import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import PetStatus from "../molecules/PetStatus";


function PetCard({
    imagen,
    nombre,
    direccion,
    fecha,
    descripcion,
    estado,
    boton
}) {
    return (
        <nav className="pet-card">
            <div className="pet-imagen">
                <Image src={imagen} alt={nombre} />
            </div>
            
            <div className="pet-info">
                <Text as="h2">{nombre}</Text>
                <Text>{direccion}</Text>
                <Text>{fecha}</Text>
                <Text>{descripcion}</Text>
                <PetStatus status={estado} />
            </div>
            <div className="pet-boton">
                <Button>{boton}</Button>
            </div>

        </nav>
    );
}

export default PetCard;