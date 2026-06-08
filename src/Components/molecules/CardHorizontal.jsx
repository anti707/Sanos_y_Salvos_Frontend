import Text from "../atoms/Text";

function CardHorizontal({
  imagen,
  titulo,
  descripcion,
  fecha,
}) {
  return (
    <div
      className="card mb-3 shadow-sm"
      style={{ maxWidth: "540px" }}
    >
      <div className="row g-0">

        <div className="col-md-4">
          <img
            src={imagen}
            className="img-fluid rounded-start h-100 object-fit-cover"
            alt={titulo}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">

            <h6 className="card-title">
              <Text>{titulo}</Text>
            </h6>

            <h4 className="card-text">
              <Text>{descripcion}</Text>
            </h4>

            <h6 className="card-text">
              <small className="text-body-secondary">
                {fecha}
              </small>
            </h6>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CardHorizontal;