import { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
    setTotalItems(cart.reduce((acum, item) => acum + item.quantity, 0));
    setTotalPrice(cart.reduce((acum, item) => acum + item.quantity * item.price, 0));
    setIsEmpty(cart.length === 0);
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, totalItems, totalPrice, isEmpty, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
