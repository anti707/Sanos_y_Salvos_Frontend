import React, { useRef } from 'react';
import CardHorizontal from '../molecules/CardHorizontal';
import '../../css/Components/organisms/CarouselHorizontal.css';

const CarouselHorizontal = ({ tituloSeccion, items = [] }) => {
  const trackRef = useRef(null);


  const moverIzquierda = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const moverDerecha = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="container my-4 position-relative carousel-horizontal-container">
      {tituloSeccion && <h3 className="mb-4 text-black">{tituloSeccion}</h3>}
      
      <div className="carousel-view-wrapper">
        <button className="carousel-control-btn prev-arrow" onClick={moverIzquierda} aria-label="Anterior">
          ‹
        </button>

        <div className="carousel-horizontal-track" ref={trackRef}>
          {items.map((item, index) => (
            <div key={item.id || index} className="carousel-item-card">
              <CardHorizontal
                imagen={item.imagen}
                titulo={item.titulo}
                descripcion={item.descripcion}
                fecha={item.fecha}
              />
            </div>
          ))}
        </div>

        <button className="carousel-control-btn next-arrow" onClick={moverDerecha} aria-label="Siguiente">
          ›
        </button>
      </div>
    </div>
  );
};

export default CarouselHorizontal;