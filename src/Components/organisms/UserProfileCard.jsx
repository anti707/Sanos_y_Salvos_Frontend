import { useNavigate } from 'react-router-dom';
import { auth} from '../../credential';
import { signOut } from "firebase/auth";
import "../../css/Components/organisms/UserProfileCard.css";

const UserProfileCard = ({ userData, onBack, onEdit }) => {
  const navigate = useNavigate();
  // Controlamos que si no vienen datos, muestre un estado de carga sutil
  if (!userData) {
    return (
      <div className="card shadow-sm border-0 p-5 text-center user-profile-card">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
        try {
          await signOut(auth);
          navigate("/login");
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        }
      };

  return (
    <div className="card shadow-sm border-0 p-4 user-profile-card">
      
      {/* ENCABEZADO: FOTO Y NOMBRE DE USUARIO */}
      <div className="text-center mb-4">
        <div className="avatar-profile-container mx-auto mb-3">
          <img 
            src={userData.foto || "https://via.placeholder.com/150"} 
            alt={userData.nombre} 
            className="rounded-circle profile-img-fluid" 
          />
        </div>
        <h2 className="mb-1 text-dark">{userData.nombre} {userData.apellido}</h2>
        {userData.rol && (
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold">
            {userData.rol}
          </span>
        )}
      </div>

      <hr className="text-muted opacity-25 my-4" />

      {/* CUERPO: BIOGRAFÍA */}
      {userData.bio && (
        <div className="mb-4">
          <h5 className="text-secondary fw-bold mb-2 small text-uppercase tracking-wider">Sobre mí</h5>
          <p className="text-dark bg-light p-3 rounded-3 border-start border-success border-3 mb-0 italic-bio">
            "{userData.bio}"
          </p>
        </div>
      )}

      {/* DETALLES Y DATOS DE CONTACTO */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6">
          <div className="info-profile-item">
            <span className="text-muted d-block small">Correo Electrónico</span>
            <strong className="text-dark">{userData.correo}</strong>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="info-profile-item">
            <span className="text-muted d-block small">Teléfono de Contacto</span>
            <strong className="text-dark">{userData.telefono || 'No especificado'}</strong>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="info-profile-item">
            <span className="text-muted d-block small">Ubicación principal</span>
            <strong className="text-dark">{userData.ubicacion || 'No especificada'}</strong>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="info-profile-item">
            <span className="text-muted d-block small">Miembro desde</span>
            <strong className="text-dark">{userData.miembroDesde || 'Recientemente'}</strong>
          </div>
        </div>
      </div>

      {/* ACCIONES DEL PERFIL (Controladas externamente por props) */}
      <div className="d-flex gap-3 justify-content-end mt-2">
        {onBack && (
          <button className="btn btn-light border px-4" onClick={onBack}>
            Volver
          </button>
        )}
        {onEdit && (
          <button className="btn btn-success text-white px-4" onClick={onEdit}>
            Editar Mis Datos
          </button>
        )}
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </div>

    </div>
  );
};

export default UserProfileCard;