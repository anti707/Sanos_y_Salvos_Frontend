import { useState } from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import SearchLocation from "../molecules/SearchLocation";

function ChangeMapView({ center }) {

  const map = useMap();

  map.setView(center, 15);

  return null;
}

function MapSection() {

  const [position, setPosition] = useState([4.6097, -74.0817]);

  return (
    <div>

      <SearchLocation
        onResult={(place) => {
          setPosition([place.lat, place.lon]);
        }}
      />

      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "500px",
          width: "100%"
        }}
      >

        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Ubicación encontrada 📍
          </Popup>
        </Marker>

        <ChangeMapView center={position} />

      </MapContainer>

    </div>
  );
}

export default MapSection;