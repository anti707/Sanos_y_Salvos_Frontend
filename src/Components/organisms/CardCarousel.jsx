import { useEffect, useRef } from "react";
import CardHorizontal from "../molecules/CardHorizontal";

function CardCarousel({ mascotas }) {
  const carouselRef = useRef(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    const interval = setInterval(() => {
      if (carousel) {
        // Si llega al final vuelve al inicio
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth - 10
        ) {
          carousel.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          carousel.scrollBy({
            left: 400,
            behavior: "smooth",
          });

        }
      }

    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full overflow-hidden py-10">

      <div
        ref={carouselRef}
        className="
          d-flex
          gap-4
          overflow-x-auto
          px-4
        "
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {mascotas.map((mascota) => (

          <div
            key={mascota.id}
            style={{
              minWidth: "700px",
              flexShrink: 0,
            }}
          >

            <CardHorizontal
              imagen={mascota.imagen}
              titulo={mascota.titulo}
              descripcion={mascota.descripcion}
              fecha={mascota.fecha}
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default CardCarousel;