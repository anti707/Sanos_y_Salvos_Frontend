import React from "react";
import Error from "../atoms/ErrorMessage";

function PetStatus({ status }) {
  const statusConfig = {
    perdido: {
      text: "Mascota perdida",
      className: "text-red-500",
    },
    en_busqueda: {
      text: "En búsqueda",
      className: "text-yellow-500",
    },
    encontrado: {
      text: "Mascota encontrada",
      className: "text-green-500",
    },
  };

  const currentStatus = statusConfig[status];

  if (!currentStatus) return Error({ message: "un error a ocurrido" });

  return (
    <p className={`text-sm font-semibold ${currentStatus.className}`}>
      {currentStatus.text}
    </p>
  );
}

export default PetStatus;