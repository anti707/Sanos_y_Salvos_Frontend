import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Login from "./pages/data/Login";
import Apoyanos from "./pages/user/Apoyanos";
import Map from "./pages/user/Map";

function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apoyanos" element={<Apoyanos />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </main>

  );
}

export default App;
