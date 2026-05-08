import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import PetStatus from "../molecules/PetStatus";
import BodyCard from "../molecules/BodyCard";
import "../../css/PetCard.css";


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
        <div className="pet-card">
            <div className="pet-imagen">
                <Image src={imagen} alt={nombre} />
            </div>
            
            <BodyCard className="pet-info">
                <Text variant="h2">{nombre}</Text>
                <Text>{direccion}</Text>
                <Text>{fecha}</Text>
                <Text>{descripcion}</Text>
                <PetStatus status={estado} />
            </BodyCard>
            <div className="pet-boton">
                <Button>{boton}</Button>
            </div>

        </div>
    );
}

export default PetCard;