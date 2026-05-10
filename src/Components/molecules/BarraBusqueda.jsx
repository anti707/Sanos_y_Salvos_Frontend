import { useState } from "react";
import Buscar from "../atoms/Buscar";
import BotonBuscar from "../atoms/BotonBuscar";

function BarraBusqueda({ onBuscar }) {
  const [buscar, setBuscar] = useState("");

  const handleSearch = () => {
    if (buscar.trim() !== "") onBuscar(buscar);
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Buscar
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <BotonBuscar onClick={handleSearch} />
    </div>
  );
}

export default BarraBusqueda;
