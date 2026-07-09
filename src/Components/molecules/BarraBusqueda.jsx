import { useState } from "react";
import Buscar from "../atoms/Buscar";
import BotonBuscar from "../atoms/BotonBuscar";

function BarraBusqueda({ onBuscar }) {
  const [buscar, setBuscar] = useState("");

  const handleSearch = () => {
    const texto = buscar.trim();
    if (texto) {
      onBuscar?.(texto);
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
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
