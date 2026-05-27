import { Container } from 'react-bootstrap';
import PetReportForm from '../../Components/organisms/PetReportForm';

function Reportar() {

  const handlePublishData = (data) => {
    console.log("¡Datos listos para enviar a la base de datos!", data);
    alert(`¡Reporte para ${data.nombre} creado con éxito!`);
  };
  
 
  return (
    <Container className='Reportar-container'>
        <div>

        </div>
        
        <div className="page-container">
            <PetReportForm onPublish={handlePublishData} />
        </div>
    </Container>
  );
}

export default Reportar;