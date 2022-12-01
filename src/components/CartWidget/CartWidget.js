import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";

import "./CartWidget.css";

const CartWidget = () => {
  const [totalItems, setTotalItems] = useState(0);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setTotalItems(cart.reduce((acum, item) => acum + item.quantity, 0));
  }, [cart]);

  return (
    <Link to="/cart" className="cartWidget__container">
      <i className="bi bi-cart"></i>
      {totalItems > 0 && <span className="cartWidget__totalItems">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;
