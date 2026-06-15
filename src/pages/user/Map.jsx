import { Container } from 'react-bootstrap';
import "../../css/pages/Map.css";
import "../../css/pages/Apoyanos.css";
import 'leaflet/dist/leaflet.css';
import MapaGeolocalizacion from '../../Components/templates/MapaGeolocalizacion';



function Map() {
   

 
  return (
    <Container className="map-container">
      
        <div className="row justify-content-center">
          <div  className="apoyanos-header">
            <h1 className="apoyanos-title">Mascotas perdidas reportadas cerca de ti</h1>
            <h2 className="apoyanos-subtitle">
              Permite el acceso a tu ubicación para ver los reportes en tiempo real sobre el mapa.
            </h2>
          </div>
        
        <div className="col-12 col-lg-10">
          <div className="contenedor-mapa">
            <MapaGeolocalizacion />
          </div>
        </div>
      </div>

      

    </Container>
  );
}

export default Map;