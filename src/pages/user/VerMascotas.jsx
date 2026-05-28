import { Container } from 'react-bootstrap';
import PasaPag from "../../Components/organisms/PasaPag";
import PetCard from "../../Components/organisms/PetCard";


function VerMascotas() {

  const Mascotas = [
        {
            id: 1,
            titulo: "Rocky",
            descripcion: "poodle perdido en el parque central, lleva collar rojo, tiene problmas de visión y es muy asustadizo",
            imagen: 'https://placedog.net/505',
            actualizacion: "publicado hace 3 min"
        },
        {
            id: 2,
            titulo: "canela",
            descripcion: "perritta raza pequeña, se perdio cerca del parque cerrillos al escuchar fuegos artificiales, por favor contactarme si lo a visto.",
            imagen: 'https://placedog.net/506',
            actualizacion: "publicado ayer"
        },
        {
            id: 3,
            titulo: "raco",
            descripcion: "es un perro de raza mediana, es muy jugueton y amable responde al nombre de raco, se esca´po hace 3 dias y nos preocuca mucho ya que toma medicamentos para sus problemas en los riñones, por favor ayudenme a encontrarlo.",
            imagen: 'https://placedog.net/507',
            actualizacion: "Publicado hace 2 horas"
        }
    ];
   
  return (
    <Container className='VerMascotas-container'>
          <div className="container my-5" style={{ maxWidth: '600px' }}>
            <h1 className="mb-4 text-center">Mascotas perdidas</h1>
            
            {Mascotas.map((mascota) => (
                <PetCard
                    key={mascota.id} 
                    titulo={mascota.titulo}
                    descripcion={mascota.descripcion}
                    imagen={mascota.imagen}
                    ultimaActualizacion={mascota.actualizacion}
                    altImagen={`Miniatura de: ${mascota.titulo}`}
                />
            ))}
        </div>




        <div>
            <PasaPag />
        </div>



    </Container>
  );
}

export default VerMascotas;