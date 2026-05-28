import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../credential'; // Ajusta la ruta a tu archivo firebase
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import UserProfileCard from '../../Components/organisms/UserProfileCard';

const ProfilePage = () => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Escuchar si hay un usuario logueado en Firebase Auth
    const desuscribir = onAuthStateChanged(auth, async (userFirebase) => {
      if (userFirebase) {
        try {
          // 2. Apuntar al documento del usuario usando su UID único de Firebase
          const userDocRef = doc(db, "usuarios", userFirebase.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            // 3. Guardar los datos de Firestore en nuestro estado local
            setUsuario({
              id: userDocSnap.id,
              ...userDocSnap.data()
            });
          } else {
            console.log("El usuario está autenticado pero no tiene un documento en Firestore.");
            // Opcional: podrías poner datos por defecto de Firebase Auth
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
        // Si no está logueado, redirigir a la pantalla de login
        console.log("No hay usuario activo, redirigiendo...");
        navigate('/login');
      }
    });

    return () => desuscribir(); // Limpiamos el listener al desmontar el componente
  }, [navigate]);

  const handleVolver = () => {
    navigate('/home'); // O la ruta de tu inicio
  };

  const handleEditar = () => {
    navigate('/perfil/editar'); // O abrir un modal de edición
  };

  // Mientras se conecta a Firebase, mostramos una pantalla de carga limpia
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
      {/* 4. Le pasamos los datos reales traídos de Firebase a nuestro organismo */}
      <UserProfileCard 
        userData={usuario} 
        onBack={handleVolver} 
        onEdit={handleEditar} 
      />
    </div>
  );
};

export default ProfilePage;