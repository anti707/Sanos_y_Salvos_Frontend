import React from "react";

function ErrorMessage({ message }) {
  if (!message) return "Un error a ocurrido";

  return (
    <p className="text-red-500 text-sm mt-1">
      {message}
    </p>
  );
}

export default ErrorMessage;