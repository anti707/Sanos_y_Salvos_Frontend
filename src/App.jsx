import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";

function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

  );
}

export default App;
