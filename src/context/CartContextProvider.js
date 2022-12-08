import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCartLocalStorage = () => {
    const cartJSONGet = JSON.parse(localStorage.getItem("cartJSON"));
    cartJSONGet && setCart(cartJSONGet);
  };

  const setCartLocalStorage = () => localStorage.setItem("cartJSON", JSON.stringify(cart));

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

  useEffect(() => {
    getCartLocalStorage();
  }, []);

  useEffect(() => {
    setCartLocalStorage();
    // eslint-disable-next-line
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
