
function MenuDesplegable() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle px-4 py-2 rounded-pill shadow"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ☰ Menú
      </button>

      <ul
        className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-4 mt-2"
        aria-labelledby="dropdownMenuButton"
      >
        <li>
          <a className="dropdown-item py-2" href="#">
            👤 Mi perfil
          </a>
        </li>

        <li>
          <a className="dropdown-item py-2" href="#">
            ✉️ Contáctanos
          </a>
        </li>

        <li>
          <a className="dropdown-item py-2" href="#">
            ⚙️ Configuración
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuDesplegable;