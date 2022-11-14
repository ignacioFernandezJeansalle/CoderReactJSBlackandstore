import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`} className="item__container">
      <div className="item__picture">
        <img src={product.pictureUrl[0]} alt={product.title} />
      </div>
      <div className="item__details">
        <h3>{product.title}</h3>
        <p>Precio: ${product.price}</p>
        <p>Disponibles: {product.stock} u.</p>
      </div>
    </Link>
  );
};

export default Item;
