import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';

//para mover la cámara del mapa cuando cambie la posición
function ActualizarMapa({ center }) {
  const map = useMap();
  if (center) {
    map.setView(center, map.getZoom());
  }
  return null;
}

//para no tener problemas con los iconos de Leaflet en React, ya que no los encuentra por defecto
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapaGeolocalizacion() {
  const [position, setPosition] = useState(null); // Guarda [lat, lng]
  const [accuracy, setAccuracy] = useState(0);    // Guarda el radio de precisión

  useEffect(() => {
    // Equivalente al navigator.geolocation.watchPosition
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setPosition([latitude, longitude]);
        setAccuracy(accuracy);
      },
      (err) => {
        if (err.code === 1) {
          alert("Por favor, permite el acceso a la geolocalización");
        } else {
          alert("No se pudo obtener la ubicación actual");
        }
      },
      { enableHighAccuracy: true }
    );

    // Limpieza al desmontar el componente (Evita fugas de memoria en React)
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Coordenadas iniciales por defecto mientras carga la real (tratemos de añadir los hooks)
  const centroInicial = [51.505, -0.09];

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer 
        center={centroInicial} 
        zoom={13} 
        style={{ height: "100%", width: "100%" }}
      >
        {/* Fuente del mapa (OpenStreetMap) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Si ya tenemos la posición del usuario, dibujamos el marcador y el círculo */}
        {position && (
          <>
            <Marker position={position} />
            <Circle center={position} radius={accuracy} />
            <ActualizarMapa center={position} />
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default MapaGeolocalizacion;