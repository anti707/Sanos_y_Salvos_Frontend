

function MenuDesplegable{
  return (
   <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Menu
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Mi perfil</a></li>
    <li><a class="dropdown-item" href="#">Contactanos</a></li>
    <li><a class="dropdown-item" href="#">Configuracion</a></li>
  </ul>
</div>
  );
}

export default MenuDesplegable;