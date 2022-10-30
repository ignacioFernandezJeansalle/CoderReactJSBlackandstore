import React from "react";
import cart from "../../assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="navbar-cart">
      <a href="#">
        <img src={cart} className="" alt="Carrito" />
      </a>
    </div>
  );
};

export default CartWidget;
