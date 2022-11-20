import cartIcon from "../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartWidget__container">
      <img src={cartIcon} alt="Carrito" />
      <span id="cartWidget__counter">{cart.length}</span>
    </Link>
  );
};

export default CartWidget;
