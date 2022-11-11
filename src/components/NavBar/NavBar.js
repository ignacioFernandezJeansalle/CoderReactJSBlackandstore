import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar__container">
      <h1 className="navbar__brand">
        <Link to="/">
          <img src="logo.png" alt="logo" className="navbar__brand--logo" />
        </Link>
        {/* <a href="/">
          <img src="logo.png" alt="logo" />
        </a> */}
      </h1>
      <ul className="navbar__items">
        <li>
          <a className="navbar__items--link" href="/">
            Bolsos/Accesorios
          </a>
        </li>
        <li>
          <Link to="/otraPagina" className="navbar__items--link">
            Mate
          </Link>
          {/* <a className="navbar__items--link" href="/otraPagina">
            Mate
          </a> */}
        </li>
        <li>
          <a className="navbar__items--link" href="#">
            Ropa
          </a>
        </li>
        <li>
          <a className="navbar__items--link" href="#">
            Cocina/Bar
          </a>
        </li>
        <li>
          <a className="navbar__items--link" href="#">
            Escritorio
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
