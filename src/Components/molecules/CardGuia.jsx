import Text from "../atoms/Text";


function CardGuia({
  imagen,
  titulo,
  descripcion,
  link,
}) {

  return (
    <div
      className="card shadow-sm border-0 h-100"
      style={{
        width: '18rem',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff 0%, #f5fcfd 100%)'
      }}
    >
      <img
        src={imagen}
        className="card-img-top"
        alt={titulo}
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'cover'
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-2" style={{ color: '#2f7f89' }}>
          <Text>{titulo}</Text>
        </h5>
        <p className="card-text mb-3" style={{ color: '#5c6b70', lineHeight: 1.5 }}>
          <Text>{descripcion}</Text>
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn mt-auto"
          style={{
            background: 'linear-gradient(135deg, #41a4af, #2f7f89)',
            color: '#fff',
            borderRadius: '999px',
            fontWeight: 600
          }}
        >
          Detalles
        </a>
      </div>
    </div>
  );
}

export default CardGuia;