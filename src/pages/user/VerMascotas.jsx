import React, { useState, useEffect } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import PasaPag from "../../Components/organisms/PasaPag";
import PetCard from "../../Components/organisms/PetCard";
import { API_URL } from "../../config"; //  url del gateway
import { getAuthHeaders } from "../../utils/authToken";

function VerMascotas() {
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
    <Container className='VerMascotas-container'>
      <div className="container my-5" style={{ maxWidth: '600px' }}>
        <h1 className="mb-4 text-center">Mascotas perdidas</h1>
        
        {cargando ? (
          <p className="text-center">Cargando peluditos...</p>
        ) : mascotas.length === 0 ? (
          <p className="text-center">No hay reportes activos. 🐾</p>
        ) : (
          mascotas.map((mascota) => {
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

      <div>
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
          <Button variant="secondary" onClick={cerrarDetalle}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default VerMascotas;