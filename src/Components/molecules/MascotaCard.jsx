import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

function MascotaCard({ mascota }) {
  return (
    <div className="card-mascota">
      <Link to={`/mascota/${mascota.mascota_id}`}>
        <Image
          src={mascota.imagenUrl}
          alt={mascota.nombreMascota}
          className="card-img-mascota"
        />
      </Link>
      <Text variant="h5" className="card-title-mascota">
        {mascota.nombreMascota}
      </Text>
      <Text className="card-text-mascota">
        {mascota.descripcionMascota}
      </Text>
      <div className="botones-mascota">
        <Link to={`/mascota/${mascota.mascota_id}`}>
          <Button text="Ver detalles" className="btn-detalles" />
        </Link>
      </div>
    </div>
  );
}

export default MascotaCard;
