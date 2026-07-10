import React, { useState, useEffect } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import PasaPag from "../../Components/organisms/PasaPag";
import PetCard from "../../Components/organisms/PetCard";
import { API_URL } from "../../config"; //  url del gateway
import { getAuthHeaders } from "../../utils/authToken";

function VerMascotas() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const terminoBusqueda = queryParams.get('search')?.toLowerCase() || '';
  const [mascotas, setMascotas] = useState([]);
  const [etiquetasDisponibles, setEtiquetasDisponibles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirDetalle = (mascota) => {
    setMascotaSeleccionada(mascota);
    setMostrarModal(true);
  };

  const cerrarDetalle = () => {
    setMostrarModal(false);
    setMascotaSeleccionada(null);
  };

  useEffect(() => {
    const cargarMascotas = async () => {
      try {
        const headers = await getAuthHeaders();

        const respuesta = await fetch(`${API_URL}/api/mascotas`, {
          method: "GET",
          headers
        });

        if (!respuesta.ok) throw new Error("Error al traer mascotas");

        const datos = await respuesta.json();
        setMascotas(Array.isArray(datos) ? datos : []);
      } catch (error) {
        console.error("Error conectando al Gateway:", error);
      } finally {
        setCargando(false);
      }
    };

    const cargarEtiquetas = async () => {
      try {
        const headers = await getAuthHeaders();
        const respuesta = await fetch(`${API_URL}/api/etiquetas`, {
          method: "GET",
          headers
        });

        if (respuesta.ok) {
          const datos = await respuesta.json();
          setEtiquetasDisponibles(Array.isArray(datos) ? datos : []);
        }
      } catch (error) {
        console.error("Error cargando etiquetas:", error);
      }
    };

    cargarMascotas();
    cargarEtiquetas();
  }, []);

  const mascotasFiltradas = mascotas.filter((mascota) => {
    if (!terminoBusqueda) return true;

    const textoMascota = [
      mascota?.nombre,
      mascota?.especie,
      mascota?.raza,
      mascota?.comuna,
      mascota?.sexo,
      mascota?.infoAdicional
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return textoMascota.includes(terminoBusqueda);
  });

  const obtenerInformacionAdicional = (mascota) => {
    return mascota?.infoAdicional || mascota?.info_adicional || mascota?.descripcion || mascota?.informacionAdicional || '';
  };

  const obtenerEtiquetasTexto = (mascota) => {
    const etiquetas = mascota?.etiquetas;

    if (!etiquetas) {
      return '';
    }

    if (Array.isArray(etiquetas)) {
      const nombres = etiquetas
        .map((item) => {
          if (typeof item === 'string') return item;
          return item?.nombre_etiqueta || item?.nombre || item?.etiqueta || item?.label;
        })
        .filter(Boolean);

      if (nombres.length > 0) {
        return nombres.join(', ');
      }

      const ids = etiquetas
        .map((item) => (typeof item === 'number' ? item : Number(item)))
        .filter((item) => Number.isFinite(item));

      if (ids.length > 0) {
        const mapaEtiquetas = new Map(
          etiquetasDisponibles.map((etiq) => [Number(etiq.id), etiq.nombre_etiqueta || etiq.nombre || etiq.label])
        );

        return ids
          .map((id) => mapaEtiquetas.get(id))
          .filter(Boolean)
          .join(', ');
      }
    }

    if (typeof etiquetas === 'string') {
      return etiquetas;
    }

    return '';
  };

  useEffect(() => {
    const abrirDesdeMapa = () => {
      const mascotaGuardada = localStorage.getItem('selected-pet');
      if (mascotaGuardada) {
        try {
          const mascota = JSON.parse(mascotaGuardada);
          abrirDetalle(mascota);
        } catch (error) {
          console.error('Error al abrir detalle desde el mapa:', error);
        }
      }
    };

    window.addEventListener('open-pet-detail', abrirDesdeMapa);

    return () => {
      window.removeEventListener('open-pet-detail', abrirDesdeMapa);
    };
  }, []);
   
  return (
    <Container className='VerMascotas-container' style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container my-5" style={{ maxWidth: '680px', width: '100%', flex: '1' }}>
        <h1 className="mb-4 text-center">Mascotas perdidas</h1>
        
        {cargando ? (
          <div style={{ minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="text-center mb-0">Cargando peluditos...</p>
          </div>
        ) : mascotasFiltradas.length === 0 ? (
          <div style={{ minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="text-center mb-0">No hay reportes que coincidan con tu búsqueda. 🐾</p>
          </div>
        ) : (
          mascotasFiltradas.map((mascota) => {
            // saca la primera imagen si existe, o un placeholder gris
            const imagenUrl = mascota.imagenes && mascota.imagenes.length > 0 
              ? mascota.imagenes[0].url_imagen 
              : 'https://via.placeholder.com/150';

            const informacionAdicional = obtenerInformacionAdicional(mascota);
            const etiquetasTexto = obtenerEtiquetasTexto(mascota);
            const textoEtiquetas = etiquetasTexto ? `Etiquetas: ${etiquetasTexto}` : 'Etiquetas: Sin etiquetas registradas';

            return (
              <PetCard
                key={mascota.id} 
                titulo={mascota.nombre}
                descripcion={`${mascota.especie} ${mascota.raza}. Sexo: ${mascota.sexo}, Edad: ${mascota.edad} años.${informacionAdicional ? ` ${informacionAdicional}` : ''}`}
                imagen={imagenUrl}
                ultimaActualizacion={textoEtiquetas}
                altImagen={`Foto de ${mascota.nombre}`}
                onVerMas={() => abrirDetalle(mascota)}
              />
            );
          })
        )}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <PasaPag />
      </div>

      <Modal show={mostrarModal} onHide={cerrarDetalle} centered size="lg">
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
                  style={{ width: '300px', maxHeight: '350px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }}
                />
              )}
              <p><strong>Especie:</strong> {mascotaSeleccionada.especie || 'No especificada'}</p>
              <p><strong>Raza:</strong> {mascotaSeleccionada.raza || 'No especificada'}</p>
              <p><strong>Sexo:</strong> {mascotaSeleccionada.sexo || 'No especificado'}</p>
              <p><strong>Edad:</strong> {mascotaSeleccionada.edad ? `${mascotaSeleccionada.edad} años` : 'No especificada'}</p>
              <p><strong>Etiquetas:</strong> {obtenerEtiquetasTexto(mascotaSeleccionada) || 'Sin etiquetas registradas'}</p>
              <p><strong>Información adicional:</strong> {obtenerInformacionAdicional(mascotaSeleccionada) || 'Sin información adicional'}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarDetalle}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default VerMascotas;