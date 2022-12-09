import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__brand">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="navbar__brand--logo" />
        </Link>
      </div>
      <ul className="navbar__items">
        <li>
          <NavLink
            to="/category/bolsos-y-accesorios"
            className={({ isActive }) => (isActive ? "navbar__items--linkActive" : "navbar__items--link")}
          >
            Bolsos/Accesorios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/mate"
            className={({ isActive }) => (isActive ? "navbar__items--linkActive" : "navbar__items--link")}
          >
            Mate
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/ropa"
            className={({ isActive }) => (isActive ? "navbar__items--linkActive" : "navbar__items--link")}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/cocina-y-bar"
            className={({ isActive }) => (isActive ? "navbar__items--linkActive" : "navbar__items--link")}
          >
            Cocina/Bar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/escritorio"
            className={({ isActive }) => (isActive ? "navbar__items--linkActive" : "navbar__items--link")}
          >
            Escritorio
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
