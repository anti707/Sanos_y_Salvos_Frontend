import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PetReportForm from '../../Components/organisms/PetReportForm';
import { API_URL } from '../../config';

const Reportar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  const handlePublishReport = async (datosFormulario) => {
    setCargando(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No tienes una sesión activa. Por favor, inicia sesión.");

      // se construye json respetando estructura de tablas de neon
      const datosFormateados = {
        nombre: datosFormulario.nombre,
        especie: datosFormulario.especie,
        raza: datosFormulario.raza,
        sexo: datosFormulario.sexo,
        edad: parseInt(datosFormulario.edad, 10), 
        comuna: datosFormulario.comuna,
        latitud: -33.51,
        longitud: -70.76,
        
        etiquetas: datosFormulario.etiquetas,
        url_imagen: datosFormulario.url_imagen
      };

      const res = await fetch(`${API_URL}/api/mascotas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(datosFormateados)
      });

      const resultado = await res.json();

      if (!res.ok) {
        // Si el backend te devuelve un error, avisa aqui
        throw new Error(resultado.error || resultado.message || 'Error al intentar guardar el reporte.');
      }

      console.log("¡Mascota guardada con éxito en Neon!", resultado);
      alert("¡Reporte publicado con éxito! Tu mascota quedó asociada a tu cuenta y registrada en Neon. 🐾");
      navigate('/'); 

    } catch (err) {
      console.error("Error en el flujo de guardado:", err);
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="reportar-page-container" style={{ padding: '20px' }}>
      {error && (
        <div style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
          ⚠️ Error: {error}
        </div>
      )}
      
      {cargando && (
        <div style={{ color: '#0070f3', marginBottom: '15px', fontWeight: 'bold' }}>
          Guardando reporte de forma segura en Neon... 🕒
        </div>
      )}

      <PetReportForm onPublish={handlePublishReport} />
    </div>
  );
};

export default Reportar;