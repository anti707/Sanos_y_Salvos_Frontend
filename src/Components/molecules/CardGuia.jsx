import Text from "../atoms/Text";

function CardGuia({
  imagen,
  titulo,
  descripcion,
}) {

  return (
    <div
      className="card"
      style={{ width: "18rem" }}
    >
      <div className="col-md-4">
        <img
            src={imagen}
            className="card-img-top"
            alt={titulo}
            style={{
                width: "290px",
                height: "220px",
                objectFit: "cover",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
            }}
        />
      </div>
      <div className="card-body">
        <Text>{titulo}</Text>
        <Text>{descripcion}</Text>
        <a
          href="#"
          className="btn btn-light px-4 py-2 rounded-pill shadow"
        >
          Detalles
        </a>
      </div>
    </div>
  );
}

export default CardGuia;