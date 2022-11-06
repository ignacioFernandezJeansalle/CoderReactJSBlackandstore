import ItemCount from "../ItemCount/ItemCount";

import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="item__container">
      <div className="item__image">
        <img src={product.pictureUrl} alt={product.title} />
      </div>
      <div className="item__description">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        {/* <p>id: {product.id}</p> */}
        <p>Disponible: {product.stock} u.</p>
      </div>
      <ItemCount stock={product.stock} />
    </div>
  );
};

export default Item;
