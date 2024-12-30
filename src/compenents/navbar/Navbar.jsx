import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      <div className="navbar_logo">
        <img src="logo2.png" alt="logo" className="logo" />
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
