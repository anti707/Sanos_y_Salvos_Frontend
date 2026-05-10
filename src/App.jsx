import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Login from "./pages/data/Login";

function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

  );
}

export default App;
