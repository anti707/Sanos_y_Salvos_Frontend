

function MenuDesplegable({}) {
  return (
    <div className="dropdown">
    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Menu
    </a>

    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a className="dropdown-item" href="#">Mi perfil</a></li>
        <li><a className="dropdown-item" href="#">Contactanos</a></li>
        <li><a className="dropdown-item" href="#">Configuracion</a></li>
    </ul>
    </div>
    );
}

export default MenuDesplegable;