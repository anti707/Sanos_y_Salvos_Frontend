import { Container } from 'react-bootstrap';
import "../../css/pages/Apoyanos.css";
import 'leaflet/dist/leaflet.css';
import MapaGeolocalizacion from '../../Components/templates/MapaGeolocalizacion';


function Map() {
   

 
  return (
    <Container className="map-container">
      
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-3">
            <h2 className="fw-bold text-secondary">Mascotas perdidas reportadas cerca de ti</h2>
            <p className="text-muted small">
              Permite el acceso a tu ubicación para ver los reportes en tiempo real sobre el mapa.
            </p>
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