import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartItemList from "../../components/CartItemList/CartItemList";

import "./CartContainer.css";

const CartContainer = () => {
  const { totalPrice, isEmpty } = useContext(CartContext);

  return (
    <div className="cartContainer__container">
      <h2>Carrito de compras</h2>
      <hr />
      <div className="cartContainer__titles">
        <p className="cartContainer__titles--product">Producto</p>
        <p className="cartContainer__titles--quantity">Cantidad</p>
        <p className="cartContainer__titles--price">Subtotal</p>
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
