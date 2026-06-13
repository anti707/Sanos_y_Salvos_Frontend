import { useEffect, useState } from "react";

function useGeolocation() {
  // 1. Inicializamos en null para saber cuándo está cargando la señal GPS real
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("La geolocalización no está soportada en este navegador.");
      return;
    }

    function onSuccess(pos) {
      // 2. Guardamos las coordenadas en formato de arreglo [lat, lng] para Leaflet
      setPosition([pos.coords.latitude, pos.coords.longitude]);
      setAccuracy(pos.coords.accuracy);
    }

    function onError(error) {
      console.error("Error retrieving geolocation:", error);
      setError(error.code === 1 ? "Permiso denegado" : "Ubicación no disponible");
    }

    // Opciones extras para forzar alta precisión
    const opciones = { enableHighAccuracy: true };

    const watcher = geo.watchPosition(onSuccess, onError, opciones);

    return () => geo.clearWatch(watcher);
  }, []);

  // Retornamos un objeto completo para que el mapa lo use con facilidad
  return { position, accuracy, error };
}
export default useGeolocation;