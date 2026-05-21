function Acordion({ items }) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse-${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse-${index}`}
            >
              {item.titulo}
            </button>
          </h2>

          <div
            id={`flush-collapse-${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {item.descripcion}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Acordion;