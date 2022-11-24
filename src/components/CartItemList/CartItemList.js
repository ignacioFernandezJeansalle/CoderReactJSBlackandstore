import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartItem from "../CartItem/CartItem";

import "./CartItemList.css";

const CartItemList = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cartItemList__container">
      {cart.map((product) => (
        <div key={product.id}>
          <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
          <CartItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
