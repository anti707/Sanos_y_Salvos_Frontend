import "../../css/Components/molecules/MascotaCard.css";
import BotonModoOscuro from "../molecules/BotonModoOscuro";



function MenuDesplegable() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle px-4 py-2 rounded-pill shadow"
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
          <a className="dropdown-item py-2" href="/ProfilePage">
            👤 Mi perfil
          </a>
        </li>

        <li>
          <a className="dropdown-item py-2" href="/Apoyanos">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#390606"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg> Apoyanos
          </a>
        </li>

        <li>
          <a className="dropdown-item py-2" href="/Map">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#515151"><path d="M480-388q54-50 84-80t47-50q16-20 22.5-37t6.5-37q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 21 6 37t22 36q17 20 46 50t86 81Zm0 202q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg> mapa
          </a>
        </li>

        <li>
          <a className="dropdown-item py-2" href="/Contactanos">
            ✉️ Contáctanos
          </a>
        </li>

        <li>
          <div className="d-flex align-items-center gap-3">
            <BotonModoOscuro /> {/* 🌟 Aquí se inyecta el interruptor */}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MenuDesplegable;