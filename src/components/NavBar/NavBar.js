import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar__container">
      <h1 className="navbar__brand">Black&Store</h1>
      <ul className="navbar__items">
        <li>
          <a className="navbar__items--link" href="#">
            Bolsos/Accesorios
          </a>
        </li>
        <li>
          <a className="navbar__items--link" href="#">
            Ropa
          </a>
        </li>
        <li>
          <a className="navbar__items--link" href="#">
            Mate
          </a>
        </li>
        <li>
          <a className="navbar__items--link" href="#">
            Cocina/Bar
          </a>
        </li>
        <li>
          <a className="navbar__items--link" href="#">
            Cuero
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
