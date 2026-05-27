import React, { useState } from 'react';
import '../../css/Components/organisms/PetReportForm.css'; // Si usas CSS clásico

const PetReportForm = ({ onPublish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    raza: '',
    edad: '',
    color: '',
    infoMascota: '',
    lugarPerdida: '',
    horaPerdida: '',
    infoAdicional: '',
    foto: null
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      foto: e.target.files[0]
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onPublish) {
      onPublish(formData);
    }
  };

  return (
    <form className="pet-report-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Reportar Mascota Perdida</h2>
      
      <div className="form-grid">
        <div className="form-group full-width">
          <label htmlFor="foto">Agregar Foto de la Mascota</label>
          <input 
            type="file" 
            id="foto" 
            accept="image/*" 
            onChange={handleFileChange}
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


        <div className="form-group">
          <label htmlFor="raza">Raza</label>
          <input 
            type="text" 
            id="raza" 
            name="raza" 
            value={formData.raza} 
            onChange={handleChange} 
            placeholder="Ej: Quilterito, Poodle, etc"
            required 
          />
        </div>


        <div className="form-group">
          <label htmlFor="edad">Edad de la Mascota</label>
          <input 
            type="text" 
            id="edad" 
            name="edad" 
            value={formData.edad} 
            onChange={handleChange} 
            placeholder="Ej: 2 años / 5 meses"
            required 
          />
        </div>


        <div className="form-group">
          <label htmlFor="color">Color de la Mascota</label>
          <input 
            type="text" 
            id="color" 
            name="color" 
            value={formData.color} 
            onChange={handleChange} 
            placeholder="Ej: Negro con manchas blancas"
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
            placeholder="Ej: Av.la florida 3456"
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

  
        <div className="form-group full-width">
          <label htmlFor="infoMascota">Información de la Mascota (Señas particulares, collar, etc.)</label>
          <textarea 
            id="infoMascota" 
            name="infoMascota" 
            value={formData.infoMascota} 
            onChange={handleChange} 
            placeholder="Llevaba collar rojo, es muy miedoso, tiene una cicatriz en la oreja..."
            rows="3"
          />
        </div>


        <div className="form-group full-width">
          <label htmlFor="infoAdicional">Información Adicional (Contacto, recompensa, enfermedades de la mascota, etc.)</label>
          <textarea 
            id="infoAdicional" 
            name="infoAdicional" 
            value={formData.infoAdicional} 
            onChange={handleChange} 
            placeholder="Llamar urgente a cualquier hora, se ofrece recompensa..."
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