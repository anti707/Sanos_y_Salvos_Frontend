import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import useGeolocation from '../../hooks/UseGeolocation';
import { API_URL } from '../../config';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
import { getAuthHeaders } from '../../utils/authToken';

function MapaGeolocalizacion({ onSeleccionarMascota }) {
  const { position, accuracy, error: geolocationError } = useGeolocation();
  const [reportes, setReportes] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const centroInicial = [-33.456, -70.648];

  useEffect(() => {
    const cargarReportes = async () => {
      try {
        setCargando(true);
        const headers = await getAuthHeaders();

        const respuesta = await fetch(`${API_URL}/api/mascotas`, {
          method: 'GET',
          headers
        });

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los reportes');
        }

        const datos = await respuesta.json();
        const lista = Array.isArray(datos)
          ? datos
          : Array.isArray(datos?.mascotas)
            ? datos.mascotas
            : Array.isArray(datos?.data)
              ? datos.data
              : Array.isArray(datos?.results)
                ? datos.results
                : Array.isArray(datos?.items)
                  ? datos.items
                  : datos && typeof datos === 'object'
                    ? [datos]
                    : [];

        setReportes(lista);
        setError(null);
      } catch (err) {
        console.error('Error cargando reportes:', err);
        setError('No se pudieron cargar los reportes del mapa.');
      } finally {
        setCargando(false);
      }
    };

    cargarReportes();

    const refrescarMapa = () => {
      cargarReportes();
    };

    window.addEventListener('map-refresh', refrescarMapa);

    return () => {
      window.removeEventListener('map-refresh', refrescarMapa);
    };
  }, []);

  const obtenerPosicion = (mascota) => {
    const lat = mascota?.latitud ?? mascota?.latitude ?? mascota?.lat ?? mascota?.location?.lat;
    const lng = mascota?.longitud ?? mascota?.longitude ?? mascota?.lng ?? mascota?.location?.lng;

    const latNumber = Number(lat);
    const lngNumber = Number(lng);

    if (!Number.isFinite(latNumber) || !Number.isFinite(lngNumber)) {
      return null;
    }

    return [latNumber, lngNumber];
  };

  const reportesConPosicion = reportes
    .map((mascota, index) => ({
      ...mascota,
      posicion: obtenerPosicion(mascota),
      marcadorKey: mascota?.id ?? mascota?._id ?? mascota?.id_mascota ?? `${mascota?.nombre || 'mascota'}-${index}`
    }))
    .filter((mascota) => mascota.posicion);

  const centroMapa = position || reportesConPosicion[0]?.posicion || centroInicial;

  const abrirDetalleMascota = (mascota) => {
    setMascotaSeleccionada(mascota);
    setMostrarModal(true);
  };

  const cerrarDetalleMascota = () => {
    setMascotaSeleccionada(null);
    setMostrarModal(false);
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      {(geolocationError || error) && (
        <div className="alert alert-danger" style={{ marginBottom: '10px' }}>
          {geolocationError || error}
        </div>
      )}

      {cargando && <div className="alert alert-info">Cargando reportes...</div>}

      <MapContainer center={centroMapa} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {reportesConPosicion.map((mascota) => (
          <Marker
            key={mascota.marcadorKey}
            position={mascota.posicion}
            eventHandlers={{
              click: () => {
                onSeleccionarMascota?.(mascota);
                abrirDetalleMascota(mascota);
              }
            }}
          >
            <Popup>
              <div>
                <strong>{mascota.nombre || 'Mascota perdida'}</strong>
                <br />
                {mascota.especie} · {mascota.raza}
                <br />
                {mascota.comuna && <>Comuna: {mascota.comuna}</>}
              </div>
            </Popup>
          </Marker>
        ))}

        {position && (
          <>
            <Marker position={position} />
            <Circle center={position} radius={accuracy} />
          </>
        )}
      </MapContainer>

      <Modal show={mostrarModal} onHide={cerrarDetalleMascota} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{mascotaSeleccionada?.nombre || 'Detalle de mascota'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mascotaSeleccionada && (
            <div>
              {mascotaSeleccionada.imagenes && mascotaSeleccionada.imagenes.length > 0 && (
                <img
                  src={mascotaSeleccionada.imagenes[0].url_imagen}
                  alt={mascotaSeleccionada.nombre}
                  style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }}
                />
              )}
              <p><strong>Especie:</strong> {mascotaSeleccionada.especie || 'No especificada'}</p>
              <p><strong>Raza:</strong> {mascotaSeleccionada.raza || 'No especificada'}</p>
              <p><strong>Sexo:</strong> {mascotaSeleccionada.sexo || 'No especificado'}</p>
              <p><strong>Edad:</strong> {mascotaSeleccionada.edad ? `${mascotaSeleccionada.edad} años` : 'No especificada'}</p>
              <p><strong>Comuna:</strong> {mascotaSeleccionada.comuna || 'No especificada'}</p>
              <p><strong>Información adicional:</strong> {mascotaSeleccionada.infoAdicional || 'Sin información adicional'}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarDetalleMascota}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MapaGeolocalizacion;