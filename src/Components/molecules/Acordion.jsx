function Acordion({ items }) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample" style={{ maxWidth: '980px', margin: '0 auto' }}>
      {items.map((item, index) => (
        <div className="accordion-item" key={index} style={{ borderRadius: '16px', marginBottom: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse-${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse-${index}`}
              style={{ fontSize: '1.05rem', fontWeight: 600, padding: '18px 22px' }}
            >
              {item.titulo}
            </button>
          </h2>

          <div
            id={`flush-collapse-${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={{ fontSize: '1rem', lineHeight: 1.7, padding: '0 22px 20px' }}>
              {item.descripcion}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Acordion;