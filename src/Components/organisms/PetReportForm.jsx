import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config'; // conexion con gateway
import '../../css/Components/organisms/PetReportForm.css';

const PetReportForm = ({ onPublish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    especie: 'Perro', 
    raza: '',
    sexo: 'Macho',   
    edad: '',
    comuna: '',    
    color: '',        
    lugarPerdida: '',
    horaPerdida: '',
    infoAdicional: '',
    url_imagen: ''    // se cambia el archivo(input) a una url
  });

  // states para manejar etiquetas de neon y seleccionadas por usuario
  const [listaEtiquetas, setListaEtiquetas] = useState([]);
  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);

  // cargar etiquetas desde backend
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

  // controlar checkboxes
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
        etiquetas: etiquetasSeleccionadas
      });
    }
  };

  return (
    <form className="pet-report-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Reportar Mascota Perdida</h2>
      
      <div className="form-grid">
        {/* url de la foto, reemplazando archivo directo */}
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

        {/* nombre */}
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

        {/* especie */}
        <div className="form-group">
          <label htmlFor="especie">Especie</label>
          <select id="especie" name="especie" value={formData.especie} onChange={handleChange} required>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        {/* raza */}
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

        {/* sexo */}
        <div className="form-group">
          <label htmlFor="sexo">Sexo</label>
          <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </div>

        {/* edad */}
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

        {/* comuna */}
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

        {/* direccion del lugar de perdida */}
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

        {/* hora de perdida */}
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

        {/*checkbox de etiquetas */}
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

        {/* Información Adicional */}
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