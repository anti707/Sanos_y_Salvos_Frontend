import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Login from "./pages/data/Login";
import Apoyanos from "./pages/user/Apoyanos";
import Map from "./pages/user/Map";
import Profile from "./pages/user/Profile";
import Nabvar from "./Components/organisms/Navbar";
import Footer from "./Components/organisms/Foother";
import Contactanos from "./pages/user/Contactanos";
import Reportar from "./pages/user/Reportar";
//firebase
import appFirebase from '../src/credential';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

function PrivateRoute({ user, children }) {
  if (!user) return <Login />; // Si no hay usuario, redirige a login no olvidar 
  return children; // Si hay usuario, renderiza el componente
}

function App() {

  const [user, setUser] = useState(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      setUser(userFirebase);
    });

    return () => unsubscribe();
    }, []);

    
  return (
      <main>

        <Nabvar/>

        <Routes>
          <Route path="/" element={ <PrivateRoute user={user}>  <Home user={user} /> </PrivateRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="/apoyanos" element={<Apoyanos />} />
          <Route path="/map" element={<Map />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/reportar" element={<Reportar />} />
          <Route path="/profile" element={ <PrivateRoute user={user}> <Profile user={user} /> </PrivateRoute> } />
        </Routes>

        <Footer/>
      </main>

  );
}

export default App;
