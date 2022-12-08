import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import CartItemList from "../../components/CartItemList/CartItemList";

import "./CartContainer.css";

const CartContainer = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const { cart, clearCart } = useContext(CartContext);

  useEffect(() => {
    setTotalPrice(cart.reduce((acum, item) => acum + item.quantity * item.price, 0));
    setIsEmpty(cart.length === 0);
  }, [cart]);

  return (
    <div className="cartContainer__container">
      <h2>Carrito de compras</h2>
      <hr />
      <div className="cartContainer__columns">
        <p>Producto</p>
        <p>Subtotal</p>
      </div>
      <hr />
      <div className="cartContainer__products">
        {isEmpty ? <div>El carrito de compras está vacio!</div> : <CartItemList />}
      </div>
      <hr />
      <p className="cartContainer__totalPrice">
        <b>TOTAL: ${totalPrice}.-</b>
      </p>
      <hr />
      {!isEmpty && (
        <div className="cartContainer__buttons">
          <button
            className="cartContainer__btnClearCart"
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar carrito <i className="bi bi-trash3"></i>
          </button>
          <Link to="/checkout">
            <button className="cartContainer__btnCheckout">Finalizar compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
