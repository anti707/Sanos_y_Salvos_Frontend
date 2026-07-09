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

        // petición segura al api Gateway
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

    cargarMascotas();
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

            return (
              <PetCard
                key={mascota.id} 
                titulo={mascota.nombre}
                descripcion={`${mascota.especie} ${mascota.raza}. Sexo: ${mascota.sexo}, Edad: ${mascota.edad} años.`}
                imagen={imagenUrl}
                ultimaActualizacion={`Comuna: ${mascota.comuna || 'No especificada'}`}
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
              <p><strong>Comuna:</strong> {mascotaSeleccionada.comuna || 'No especificada'}</p>
              <p><strong>Información adicional:</strong> {mascotaSeleccionada.infoAdicional || 'Sin información adicional'}</p>
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