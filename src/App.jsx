import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Home from "./pages/user/Home";
import Login from "./pages/data/Login";
import Apoyanos from "./pages/user/Apoyanos";
import Map from "./pages/user/Map";
import Profile from "./pages/user/Profile";
import Nabvar from "./Components/organisms/Navbar";
import Footer from "./Components/organisms/Foother";
import Contactanos from "./pages/user/Contactanos";
import Reportar from "./pages/user/Reportar";
import ProfilePage from "./pages/user/ProfilePage";
import VerMascotas from "./pages/user/VerMascotas";
import Registro from "./pages/data/Register";
import SimuladorWebpay from "./Components/templates/SimuladorWebpay";
//firebase
import appFirebase from '../src/credential';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);



function App() {

  //FUNCION PARA  QUE TODAS LAS PAGINAS TENGAN EL NAVBAR Y EL FOOTER MENOS LOGIN Y REGISTRO
  const MainLayout = ({ user }) => {
    return (
        <>
            <Nabvar user={user} />
            
            <Outlet /> 

            <Footer />
        </>
    );
};


  const [user, setUser] = useState(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      setUser(userFirebase);
    });

    return () => unsubscribe();
    }, []);

    
  return (
      <main>


        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

            <Route element={<MainLayout user={user} />}>
                <Route path="/" element={<Home/>} />
                <Route path="/apoyanos" element={<Apoyanos />} />
                <Route path="/map" element={<Map />} />
                <Route path="/contactanos" element={<Contactanos />} />
                <Route path="/reportar" element={<Reportar />} />
                <Route path="/vermascota" element={<VerMascotas />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profilepage" element={<ProfilePage/>} />
                <Route path="/simulador-webpay" element={<SimuladorWebpay />} />
            </Route>
        </Routes>


        
      </main>

  );
}

export default App;
