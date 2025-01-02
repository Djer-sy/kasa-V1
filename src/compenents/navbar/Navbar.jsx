import React from "react";
import "./navbar.css";
import logo from "../../assets/logo2.png";

function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      <div className="navbar_logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="acceuil">
        <a href="#">Accueil</a>
      </div>
      <div>
        <a href="#">A Propos</a>
      </div>
    </nav>
  );
}

export default Navbar;
