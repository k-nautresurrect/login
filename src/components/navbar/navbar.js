import React from "react";

import "./navbar.css";
const Navbar = (props) => {
  return (
    <header>
      <nav className="Navbar-desktop">
        <div className="nav-items">
          <div className="nav-content">
            <h2 className="logo">Commbuilder</h2>
            <div className="menu">
              <span className="same"></span>
              <span className="diff"></span>
              <span className="same"></span>
              <span className="diff"></span>
            </div>
          </div>
          <div className="Org">
            <h3>∫ |E|dT</h3>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
