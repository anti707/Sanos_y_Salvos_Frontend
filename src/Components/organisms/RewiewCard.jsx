import Image from "../atoms/Image";
import Text from "../atoms/Text";
import PetStatus from "../molecules/PetStatus";


function ReviewCard({
    imagen,
    nombre,
    descripcion,
    estado,
    fecha,
    valoracion
}) {
    return (
        <div className="review-card">
            <div className="review-imagen">
                <Image src={imagen} alt={nombre} />
            </div>
            <div className="review-info">
                <Text variant="h2">{nombre}</Text>
                <Text>{descripcion}</Text>

            <div className="review-estado">
                <PetStatus status={estado} />
                <Text>{fecha}</Text>
            </div>
                <Text>{valoracion}</Text>
            </div>
        </div>
    );
}

export default ReviewCard;