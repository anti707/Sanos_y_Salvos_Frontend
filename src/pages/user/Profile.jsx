import { getAuth, signOut } from "firebase/auth";
import appFirebase from "../../credential";
import { useNavigate } from "react-router-dom";
import "../../css/pages/Profile.css";

const auth = getAuth(appFirebase);

function Profile({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const nombreUsuario = user?.displayName || user?.name || "Usuario";
  const correo = user?.email || "Sin correo registrado";

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-hero">
          <div className="profile-avatar">{nombreUsuario?.charAt(0)?.toUpperCase() || "U"}</div>
          <div>
            <h1>Hola, {nombreUsuario}</h1>
            <p className="profile-subtitle">Tu espacio para gestionar tu cuenta</p>
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-item">
            <span className="profile-label">Correo</span>
            <span className="profile-value">{correo}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Estado</span>
            <span className="profile-value">Cuenta activa</span>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Profile;