const CardCarousel = ({
  items,
  id = "carouselExample",
}) => {
  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <img
              src={item.image}
              className="d-block w-100"
              alt={item.title}
            />

            <div className="carousel-caption">
              <h2>{item.title}</h2>

              <p>
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default CardCarousel;