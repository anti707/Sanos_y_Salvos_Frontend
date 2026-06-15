import useDarkMode from "../../hooks/useDarkMode";

export default function BotonModoOscuro() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className={`btn ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"} d-flex align-items-center gap-2`}
      style={{ borderRadius: "20px", padding: "6px 16px", fontWeight: "500" }}
    >
      {theme === "light" ? (
        <>
          <span></span> Modo Oscuro
        </>
      ) : (
        <>
          <span></span> Modo Claro
        </>
      )}
    </button>
  );
}