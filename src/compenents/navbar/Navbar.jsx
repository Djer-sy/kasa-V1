import React from "react";
import "./navbar.css";
import logo from "../../assets/logo2.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
   <nav className="navbar">
      <NavLink to="/">
      {" "}
      <div className="navbar_logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      </NavLink>
      <NavLink to="/">
        <div>Acceuil</div>
      </NavLink>
      <div className="acceuil">
      </div>
      <NavLink to="/about">
      <div>
        A Propos
      </div>
      </NavLink>

    </nav>
  );
}

export default Navbar;
