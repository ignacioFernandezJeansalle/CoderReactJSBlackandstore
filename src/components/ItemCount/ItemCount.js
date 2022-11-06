import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);

  const subItem = () => {
    count > 0 && setCount(count - 1);
  };

  const addItem = () => {
    count < stock && setCount(count + 1);
  };

  return (
    <div className="itemCount__container">
      <div className="itemCount__quantity">
        <button className="itemCount__quantity--subItem" onClick={subItem}>
          -
        </button>
        <p className="itemCount__quantity--totalItem">{count}</p>
        <button className="itemCount__quantity--addItem" onClick={addItem}>
          +
        </button>
      </div>
      <div className="itemCount__addToCart">
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
