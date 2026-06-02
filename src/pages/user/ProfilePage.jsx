import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../credential'; 
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import UserProfileCard from '../../Components/organisms/UserProfileCard';

const ProfilePage = () => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();


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
              foto: userFirebase.photoURL || "https://via.placeholder.com/150"
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

  const handleVolver = () => {
    navigate('/home'); //
  };

  const handleEditar = () => {
    navigate('/perfil/editar');
  };

  //pantalla de carga limpia
  if (cargando) {
    return (
      <div className="container py-5 text-center text-secondary">
        <div className="spinner-border text-success mb-2" role="status"></div>
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
      />
    </div>
  );
};

export default ProfilePage;