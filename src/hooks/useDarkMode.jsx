import { useEffect, useState } from "react";

export default function useDarkMode() {
  // Revisa si el usuario ya tenía guardada una preferencia, si no, usa el modo claro por defecto
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement; // Selecciona la etiqueta <html>

    //Aplica el atributo de Bootstrap correspondiente ('dark' o 'light')
    root.setAttribute("data-bs-theme", theme);
    
    // 3. Guarda la elección en el navegador para que no se pierda al recargar
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 4. Función para alternar entre claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}