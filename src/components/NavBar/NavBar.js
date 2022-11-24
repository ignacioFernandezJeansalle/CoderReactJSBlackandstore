import { Link } from "react-router-dom";
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
      {/* <ul className="navbar__items"> */}
      <ul className="navbar__items">
        <li>
          <Link to="/category/bolsos-y-accesorios" className="navbar__items--link">
            Bolsos/Accesorios
          </Link>
        </li>
        <li>
          <Link to="/category/mate" className="navbar__items--link">
            Mate
          </Link>
        </li>
        <li>
          <Link to="/category/ropa" className="navbar__items--link">
            Ropa
          </Link>
        </li>
        <li>
          <Link to="/category/cocina-y-bar" className="navbar__items--link">
            Cocina/Bar
          </Link>
        </li>
        <li>
          <Link to="/category/escritorio" className="navbar__items--link">
            Escritorio
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
