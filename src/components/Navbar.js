import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navabar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand  text-light">Todo App</div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link text-light" to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-light" to="/about" exact>
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
