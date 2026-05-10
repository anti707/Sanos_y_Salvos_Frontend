import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import "../../styles/components/molecules/ProductoCard.css";

function MascotaCard({ mascota }) {
  return (
    <div className="card-producto">

      <Link to={`/mascota/${mascota.mascota_id}`}>
        <Image
          src={mascota.imagenUrl}
          alt={mascota.nombreMascota}
          className="card-img-producto"
        />
      </Link>

      <Text variant="h5" className="card-title-producto">
        {mascota.nombreMascota}
      </Text>

      <Text className="card-text-producto">
        {mascota.descripcionMascota}
      </Text>

      <div className="botones-producto">

        <Link to={`/mascota/${mascota.mascota_id}`}>
          <Button text="Ver detalles" className="btn-detalles" />
        </Link>

      </div>
    </div>
  );
}

export default MascotaCard;
