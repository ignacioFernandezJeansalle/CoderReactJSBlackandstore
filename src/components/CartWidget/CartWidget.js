import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";

import "./CartWidget.css";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartWidget__container">
      <i className="bi bi-cart"></i>
      <span className="cartWidget__totalItems">{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
