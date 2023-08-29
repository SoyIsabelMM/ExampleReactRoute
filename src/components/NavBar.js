import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="menu">
      <NavLink
        exact
        to="/"
        className="menu__link"
        activeClassName="menu__link_active"
      >
        Inicio
      </NavLink>
      <NavLink
        to="/reviews"
        className="menu__link"
        activeClassName="menu__link_active"
      >
        Reseña de Emojis
      </NavLink>
      <NavLink
        to="/about-me"
        className="menu__link"
        activeClassName="menu__link_active"
      >
        Sobre mí
      </NavLink>
      <NavLink
        to="/about-us"
        className="menu__link"
        activeClassName="menu__link_active"
      >
        Sobre nosotros
      </NavLink>
    </nav>
  );
}

export default NavBar;
