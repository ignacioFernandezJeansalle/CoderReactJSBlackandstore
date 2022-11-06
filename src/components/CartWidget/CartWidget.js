import cart from "../../assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget__container">
      <a href="#">
        <img src={cart} alt="Carrito" />
        <span id="cartWidget__counter"> 0</span>
      </a>
    </div>
  );
};

export default CartWidget;
