import { useEffect, useRef } from "react";
import leaflet from "leaflet";
import UseLocalStore from "../../hooks/UseLocalStore";

export default function HomeMap() {

    const mapRef = useRef()
    const {userPosition, setUserPosition}=UseLocalStore('user_marker',{
      latitude: 51.505,
      longitude: -0.09
    });


    useEffect(() => {
      mapRef.current = leaflet.map('map').setView([userPosition.latitude, userPosition.longitude], 13);

      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

    }, [])

  return (
    <div id="map" ref={mapRef}></div>
  );
}