import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <h1>Ruben Kraan</h1>
      </div>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>Projet</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>A Propos de moi</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
