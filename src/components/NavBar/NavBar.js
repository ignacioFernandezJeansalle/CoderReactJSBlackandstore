import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <h1 className="navbar-brand">Black&Store</h1>
      <ul className="navbar-items">
        <li>
          <a className="navbar-items-link" href="#">
            Bolsos/Accesorios
          </a>
        </li>
        <li>
          <a className="navbar-items-link" href="#">
            Ropa
          </a>
        </li>
        <li>
          <a className="navbar-items-link" href="#">
            Mate
          </a>
        </li>
        <li>
          <a className="navbar-items-link" href="#">
            Cocina/Bar
          </a>
        </li>
        <li>
          <a className="navbar-items-link" href="#">
            Cuero
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
