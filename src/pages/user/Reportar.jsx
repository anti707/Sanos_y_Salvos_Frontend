import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PetReportForm from '../../Components/organisms/PetReportForm';
import { API_URL } from '../../config';
import { getAuthHeaders } from '../../utils/authToken';

const Reportar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  const handlePublishReport = async (datosFormulario) => {
    setCargando(true);
    setError(null);

    try {
      const headers = await getAuthHeaders();

      let latitud = datosFormulario?.latitud ?? -33.51;
      let longitud = datosFormulario?.longitud ?? -70.76;

      if (!Number.isFinite(latitud) || !Number.isFinite(longitud)) {
        latitud = -33.51;
        longitud = -70.76;
      }

      const edadNumerica = Number.parseInt(datosFormulario?.edad, 10);
      const edadValida = Number.isFinite(edadNumerica) ? Math.min(Math.max(edadNumerica, 0), 100) : 0;

      if (edadNumerica > 100) {
        throw new Error('La edad debe ser menor o igual a 100 años.');
      }

      const urlImagen = typeof datosFormulario?.url_imagen === 'string'
        ? datosFormulario.url_imagen.trim()
        : '';

      const datosFormateados = {
        nombre: datosFormulario?.nombre?.trim(),
        especie: datosFormulario?.especie?.trim(),
        raza: datosFormulario?.raza?.trim(),
        sexo: datosFormulario?.sexo?.trim(),
        edad: edadValida,
        latitud,
        longitud,
        latitude: latitud,
        longitude: longitud,
        infoAdicional: datosFormulario?.infoAdicional?.trim(),
        info_adicional: datosFormulario?.infoAdicional?.trim(),
        color: datosFormulario?.color?.trim(),
        etiquetas: datosFormulario?.etiquetas || [],
        url_imagen: urlImagen
      };

      const res = await fetch(`${API_URL}/api/mascotas`, {
        method: 'POST',
        headers,
        body: JSON.stringify(datosFormateados)
      });

      let resultado = null;
      try {
        resultado = await res.json();
      } catch (parseError) {
        resultado = null;
      }

      if (!res.ok) {
        const mensajeError = resultado?.error || resultado?.message || resultado?.detail || 'Error al registrar mascota';
        throw new Error(mensajeError);
      }

      console.log("¡Mascota guardada con éxito en Neon!", resultado);
      localStorage.setItem('map-refresh-token', Date.now().toString());
      window.dispatchEvent(new Event('map-refresh'));
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
           Error: {error}
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