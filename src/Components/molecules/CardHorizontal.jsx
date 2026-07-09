import Text from "../atoms/Text";

function CardHorizontal({
  imagen,
  titulo,
  descripcion,
  fecha,
}) {
  return (
    <div
      className="card mb-3 shadow-sm border-0"
      style={{
        maxWidth: '540px',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff 0%, #f4fbfc 100%)'
      }}
    >
      <div className="row g-0 h-100">
        <div className="col-md-4">
          <img
            src={imagen}
            className="img-fluid h-100 w-100"
            alt={titulo}
            style={{ objectFit: 'cover', minHeight: '180px' }}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100 p-4">
            <div>
              <h5 className="card-title fw-bold mb-2" style={{ color: '#2f7f89' }}>
                <Text>{titulo}</Text>
              </h5>
              <p className="card-text mb-3" style={{ color: '#4f5f67', lineHeight: 1.5 }}>
                <Text>{descripcion}</Text>
              </p>
            </div>

            <small className="text-body-secondary fw-semibold" style={{ color: '#7a8b92' }}>
              {fecha}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHorizontal;