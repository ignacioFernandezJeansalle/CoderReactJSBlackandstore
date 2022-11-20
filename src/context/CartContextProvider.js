import { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  // Falta resolver lo de no permitir duplicados!!!!
  const addToCart = ({ id, title, price }, quantity) => {
    !isInCart(id) && quantity > 0 && setCart([...cart, { id, title, price, quantity }]);
  };

  //const removeFromCart = (id) => {};

  //const clearCart = () => {};

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
