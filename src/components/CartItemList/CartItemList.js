import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

import "./CartItemList.css";

const CartItemList = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cartItemList__container">
      {cart.map((product) => (
        <div className="cartItemList__product" key={product.id}>
          <div className="cartItemList__product--detail">
            <button className="cartItemList__product--btnDelete" onClick={() => removeFromCart(product.id)}>
              <i className="bi bi-x-circle"></i>
            </button>
            <div>
              {product.title} (x {product.quantity}u.)
            </div>
          </div>
          <div className="cartItemList__product--price">${product.quantity * product.price}.-</div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
