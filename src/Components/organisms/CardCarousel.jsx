import { useEffect, useRef } from "react";
import MascotaCard from "../molecules/MascotaCard";

function CardCarousel({ items }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const interval = setInterval(() => {
      if (carousel) {

        // Si llega abajo vuelve arriba
        if (
          carousel.scrollTop + carousel.clientHeight >=
          carousel.scrollHeight
        ) {
          carousel.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {

          // Baja automáticamente
          carousel.scrollBy({
            top: 250,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-10">

      <div
        ref={carouselRef}
        className="
          h-[600px]
          w-[350px]
          overflow-y-auto
          scroll-smooth
          space-y-6
          p-4
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {items.map((item) => (
          <MascotaCard
            key={item.id}
            mascota={item}
          />
        ))}

      </div>
    </div>
  );
}

export default CardCarousel;