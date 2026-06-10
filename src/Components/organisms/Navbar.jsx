import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/Components/organisms/Navbar.css";
import BarraBusqueda from "../molecules/BarraBusqueda";
import logo from "../../assets/logo.png";
import "../molecules/MenuDesplegable"
import MenuDesplegable from "../molecules/MenuDesplegable";

function Navbar({ links =[]}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));


  const handleLinkClick = (e, link) => {
    if (link.label === "Salir") {
      e.preventDefault();
    } else {      
      setIsOpen(false);
    }
  };


  return (
    <nav className="navbar-container">
      <div className="navbar-inner">

        <div className="nav-left">
          <img src={logo} alt="Logo" className="nav-logo" />
          <h1 className="nav-brand"><span>Sanos&Salvos</span></h1>
        </div>

        <div className="nav-menu">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={(e) => link.label === "Salir" && handleLinkClick(e, link)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}

          {user && (
            <span className="nav-user">
              Hola, <b>{user.nombreUsuario}</b>
            </span>
          )}


        <div className="nav-right">
          <BarraBusqueda onBuscar={(query) => navigate(`/search?q=${query}`)} />

        </div>
        

            <MenuDesplegable/>

          </div>
          </div>

    </nav>
  );
};

export default Navbar;