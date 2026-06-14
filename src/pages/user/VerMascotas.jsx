import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PasaPag from "../../Components/organisms/PasaPag";
import PetCard from "../../Components/organisms/PetCard";
import { API_URL } from "../../config"; //  url del gateway

function VerMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarMascotas = async () => {
      try {
        const token = localStorage.getItem("token");

        // petición segura al api Gateway
        const respuesta = await fetch(`${API_URL}/api/mascotas`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!respuesta.ok) throw new Error("Error al traer mascotas");

        const datos = await respuesta.json();
        setMascotas(datos); 
      } catch (error) {
        console.error("Error conectando al Gateway:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarMascotas();
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
              />
            );
          })
        )}
      </div>

      <div>
        <PasaPag />
      </div>
    </Container>
  );
}

export default VerMascotas;