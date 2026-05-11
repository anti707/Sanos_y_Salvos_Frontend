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

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>👤 Perfil de usuario</h1>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Profile;