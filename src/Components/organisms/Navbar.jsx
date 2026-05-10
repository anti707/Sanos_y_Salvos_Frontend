import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/Components/organisms/Navbar.css";
import BarraBusqueda from "../molecules/BarraBusqueda";
import logo from "../../assets/logo.png";

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

    const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
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

           {!user ? (
            <button className="btn-account" onClick={goToLogin}>
              Mi Cuenta
            </button>
          ) : (
            <button className="btn-logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
      </div>

      <div className={`nav-mobile ${isOpen ? "open" : ""}`}>
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            onClick={(e) => handleLinkClick(e, link)}
            className="nav-mobile-link"
          >
            {link.label}
          </NavLink>
        ))}

        {user && (
          <p className="nav-mobile-user">Hola, {user.nombreUsuario}</p>
        )}

        {!user ? (
          <button className="nav-mobile-btn" onClick={goToLogin}>
            Mi Cuenta
          </button>
        ) : (
          <button className="nav-mobile-btn" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        )}

      </div>
    </nav>
  );
};

export default Navbar;