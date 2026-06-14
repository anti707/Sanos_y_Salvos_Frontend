import { Container } from 'react-bootstrap';
import PetReportForm from '../../Components/organisms/PetReportForm';
import { API_URL } from '../../config'; // conexion a gateway

function Reportar(){

  const handlePublishData = async (data) =>{
    try{
      const token = localStorage.getItem("token");

      // body readaptado en base al controller de api
      const payload = {
        nombre: data.nombre,
        especie: data.especie,
        raza: data.raza,
        sexo: data.sexo,
        edad: parseInt(data.edad) || 0, // para asegurar num entero
        latitud: -33.345, // coordenadas de prueba
        longitud: -70.534,
        comuna: data.comuna,
        usuario_id: "usuario_prueba",
        url_imagen: data.url_imagen,
        etiquetas: data.etiquetas

      };

      console.log("Enviando reporte", payload);

      const respuesta = await fetch(`${API_URL}/api/mascotas`,{
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if(!respuest.ok){
        throw new Error("Error en respuesta al crear reporte");
      }

      const resultado = await respuesta.json();
      console.log("Respuesta exitosa", resultado);

      alert(`El reporte de ${data.nombre} se guardo con exito`);
    }catch(e){
      alert("Hubo un problema al publicar el reporte");
    }
  };

  return(
    <Container className='Reportar-container'>
        <div className="page-container" style={{ marginTop: '30px' }}>
            <PetReportForm onPublish={handlePublishData} />
        </div>
    </Container>
  );
}

export default Reportar;