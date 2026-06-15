import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import useGeolocation from "../../hooks/UseGeolocation";

function MapaGeolocalizacion() {
  
  // Consumimos el hook en una sola línea
  const { position, accuracy, error } = useGeolocation();

  const centroInicial = [-33.456, -70.648]; // Coordenadas por defecto

  return (
    <div style={{ height: "400px", width: "100%" }}>
      {error && <div className="alert alert-danger">{error}</div>}

      <MapContainer center={centroInicial} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Si el hook ya capturó la posición real, dibuja los marcadores automáticamente */}
        {position && (
          <>
            <Marker position={position} />
            <Circle center={position} radius={accuracy} />
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default MapaGeolocalizacion;