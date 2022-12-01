import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartItemList from "../../components/CartItemList/CartItemList";

import "./CartContainer.css";

const CartContainer = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const { cart } = useContext(CartContext);

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
    </div>
  );
};

export default CartContainer;
