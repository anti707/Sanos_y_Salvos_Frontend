import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { API_URL } from '../../config'; // Conexión con el gateway
import '../../css/Components/organisms/PetReportForm.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const PetReportForm = ({ onPublish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    especie: '', 
    raza: '',
    sexo: '',  
    edad: '',
    color: '',        
    infoAdicional: '',
    url_imagen: ''    
  });

  const [listaEtiquetas, setListaEtiquetas] = useState([]);
  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState([-33.4569, -70.6483]);

  // Cargar etiquetas desde el backend
  useEffect(() => {
    const obtenerEtiquetas = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/api/etiquetas`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) {
          const datos = await res.json();
          setListaEtiquetas(datos);
        }
      } catch (err) {
        console.error("Error cargando etiquetas de la BD:", err);
      }
    };
    obtenerEtiquetas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (etiquetaId) => {
    if (etiquetasSeleccionadas.includes(etiquetaId)) {
      setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter(id => id !== etiquetaId));
    } else {
      setEtiquetasSeleccionadas([...etiquetasSeleccionadas, etiquetaId]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onPublish) {
      onPublish({
        ...formData,
        etiquetas: etiquetasSeleccionadas,
        latitud: ubicacionSeleccionada[0],
        longitud: ubicacionSeleccionada[1]
      });
    }
  };

  return (
    <form className="pet-report-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Reportar Mascota Perdida</h2>
      
      <div className="form-grid">
        <div className="form-group full-width">
          <label htmlFor="url_imagen">URL de la Foto de la Mascota</label>
          <input 
            type="text" 
            id="url_imagen" 
            name="url_imagen"
            placeholder="https://images.unsplash.com/photo-ejemplo..."
            value={formData.url_imagen}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre de la Mascota</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            placeholder="Ej: Firulais"
            required 
          />
        </div>

        {/* Especie */}
        <div className="form-group">
          <label htmlFor="especie">Especie</label>
          <input 
            type="text" 
            id="especie" 
            name="especie" 
            value={formData.especie} 
            onChange={handleChange} 
            placeholder="Ej: Perro, Gato, Ave..."
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="raza">Raza</label>
          <input 
            type="text" 
            id="raza" 
            name="raza" 
            value={formData.raza} 
            onChange={handleChange} 
            placeholder="Ej: Quilterito, Poodle..."
            required 
          />
        </div>

        {/* Sexo */}
        <div className="form-group">
          <label htmlFor="sexo">Sexo</label>
          <input 
            type="text" 
            id="sexo" 
            name="sexo" 
            value={formData.sexo} 
            onChange={handleChange} 
            placeholder="Ej: Macho, Hembra..."
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="edad">Edad (en años)</label>
          <input 
            type="number" 
            id="edad" 
            name="edad" 
            value={formData.edad} 
            onChange={handleChange} 
            placeholder="Ej: 3"
            required 
          />
        </div>

        {/*Checkboxes de etiquetas*/}
        <div className="form-group full-width">
          <label className="fw-bold" style={{ display: 'block', marginBottom: '10px', color: '#555' }}>
            Selecciona características adicionales (Etiquetas):
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
            {listaEtiquetas.map((etiq) => (
              <label key={etiq.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
                <input 
                  type="checkbox"
                  checked={etiquetasSeleccionadas.includes(etiq.id)}
                  onChange={() => handleCheckboxChange(etiq.id)}
                />
                {etiq.nombre_etiqueta}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="infoAdicional">Información Adicional (Contacto, recompensa, etc.)</label>
          <textarea 
            id="infoAdicional" 
            name="infoAdicional" 
            value={formData.infoAdicional} 
            onChange={handleChange} 
            placeholder="Se ofrece recompensa, necesita medicamentos..."
            rows="3"
          />
        </div>

        <div className="form-group full-width">
          <label>Ubicación del reporte en el mapa</label>
          <p className="map-helper-text">Haz clic en el mapa para seleccionar la zona donde se perdió la mascota.</p>
          <div className="map-picker-container">
            <MapContainer
              center={ubicacionSeleccionada}
              zoom={13}
              style={{ height: '280px', width: '100%' }}
              whenCreated={(map) => {
                map.on('click', (e) => {
                  setUbicacionSeleccionada([e.latlng.lat, e.latlng.lng]);
                });
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={ubicacionSeleccionada}
                draggable={true}
                eventHandlers={{
                  dragend: (event) => {
                    const marker = event.target;
                    const { lat, lng } = marker.getLatLng();
                    setUbicacionSeleccionada([lat, lng]);
                  }
                }}
              >
                <Popup>Ubicación seleccionada</Popup>
              </Marker>
            </MapContainer>
          </div>
          <small className="map-coords-text">
            Coordenadas: {ubicacionSeleccionada[0].toFixed(4)}, {ubicacionSeleccionada[1].toFixed(4)}
          </small>
        </div>
      </div>

      <button type="submit" className="btn-submit">
        Publicar Reporte 🐾
      </button>
    </form>
  );
};

export default PetReportForm;