import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <Link to="/cart" className="cartWidget__container">
      <img src={cart} alt="Carrito" />
      <span id="cartWidget__counter"> 0</span>
    </Link>
  );
};

export default CartWidget;
