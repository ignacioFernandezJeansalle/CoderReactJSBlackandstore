import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = ({ id, title, price }, quantity) => {
    !isInCart(id) && quantity > 0 && setCart([...cart, { id, title, price, quantity }]);
  };

  const removeFromCart = (id) => {
    isInCart(id) && setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
