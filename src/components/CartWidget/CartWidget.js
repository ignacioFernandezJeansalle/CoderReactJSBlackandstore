import React from "react";
import cart from "../../assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="navbar-cart">
      <a href="#">
        <img src={cart} alt="Carrito" />
        <span id="navbar-cart-counter"> 0</span>
      </a>
    </div>
  );
};

export default CartWidget;
