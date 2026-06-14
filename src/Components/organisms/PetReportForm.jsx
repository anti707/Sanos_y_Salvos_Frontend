import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config'; // Conexión con el gateway
import '../../css/Components/organisms/PetReportForm.css';

const PetReportForm = ({ onPublish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    especie: '', 
    raza: '',
    sexo: '',  
    edad: '',
    comuna: '',    
    color: '',        
    lugarPerdida: '',
    horaPerdida: '',
    infoAdicional: '',
    url_imagen: ''    
  });

  const [listaEtiquetas, setListaEtiquetas] = useState([]);
  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);

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
        etiquetas: etiquetasSeleccionadas // envia los ids seleccionados
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

        <div className="form-group">
          <label htmlFor="comuna">Comuna</label>
          <input 
            type="text" 
            id="comuna" 
            name="comuna" 
            value={formData.comuna} 
            onChange={handleChange} 
            placeholder="Ej: Ñuñoa, Providencia..."
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="lugarPerdida">Lugar de pérdida</label>
          <input 
            type="text" 
            id="lugarPerdida" 
            name="lugarPerdida" 
            value={formData.lugarPerdida} 
            onChange={handleChange} 
            placeholder="Ej: Av. Grecia con Macul"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="horaPerdida">Hora de pérdida</label>
          <input 
            type="time" 
            id="horaPerdida" 
            name="horaPerdida" 
            value={formData.horaPerdida} 
            onChange={handleChange} 
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
      </div>

      <button type="submit" className="btn-submit">
        Publicar Reporte 🐾
      </button>
    </form>
  );
};

export default PetReportForm;