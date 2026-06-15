import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../credential'; 
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import UserProfileCard from '../../Components/organisms/UserProfileCard';


const ProfilePage = () => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();


      const handleCerrarSesion = async () => {
        try {
            await signOut(auth); 
            alert("Sesión cerrada correctamente");
            navigate('/login'); // Redirige al login automáticamente tras salir
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };


  useEffect(() => {
    // revisa si hay un usuario logueado en Firebase Auth
    const desuscribir = onAuthStateChanged(auth, async (userFirebase) => {
      if (userFirebase) {
        try {
          // Apuntar al documento del usuario usando su UID único de Firebase
          const userDocRef = doc(db, "usuarios", userFirebase.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            //Guardar los datos de Firestore en nuestro estado local
            setUsuario({
              id: userDocSnap.id,
              ...userDocSnap.data()
            });
          } else {
            console.log("El usuario está autenticado pero no tiene un documento en Firestore.");
            setUsuario({
              nombre: userFirebase.displayName || "Usuario",
              correo: userFirebase.email,
              foto: userFirebase.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
            });
          }
        } catch (error) {
          console.error("Error al obtener los datos de Firestore:", error);
        } finally {
          setCargando(false);
        }
      } else {
        console.log("No hay usuario activo, redirigiendo...");
        navigate('/login');
      }
    });

    return () => desuscribir();
      }, [navigate]);

      //vuelve a home al apretar el voton volver 
      const handleVolver = () => {
        navigate('/'); //
      };

      const handleEditar = () => {
        navigate('/perfil/editar');
      };

  //pantalla de carga limpia
  if (cargando) {
    return (
      <div className="container py-5 text-center text-secondary">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p>Conectando con Sanos&Salvos...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/*datos reales traídos de Firebase*/}
      <UserProfileCard 
        userData={usuario}
        onBack={handleVolver}
        onEdit={handleEditar}
        onLogout={handleCerrarSesion}
      />
    </div>
  );
};

export default ProfilePage;