import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [pictureNumber, setPictureNumber] = useState(0);

  return (
    <>
      {product.id !== undefined ? (
        <div className="itemDetail__container">
          <h1>{product.title}</h1>
          <div className="itemDetail__columns">
            <div className="itemDetail__column--pictures">
              <div
                onClick={() => {
                  setPictureNumber(0);
                }}
              >
                <img src={product.pictureUrl[0]} alt={product.title} />
              </div>
              <div
                onClick={() => {
                  setPictureNumber(1);
                }}
              >
                <img src={product.pictureUrl[1]} alt={product.title} />
              </div>
              <div
                onClick={() => {
                  setPictureNumber(2);
                }}
              >
                <img src={product.pictureUrl[2]} alt={product.title} />
              </div>
            </div>
            <div className="itemDetail__column--picture">
              <div>
                <img src={product.pictureUrl[pictureNumber]} alt={product.title} />
              </div>
            </div>
            <div className="itemDetail__column--info">
              <p>{product.description}</p>
              <h2>${product.price}.-</h2>
              <p>Disponibles: {product.stock}</p>
              <ItemCount stock={product.stock} />
            </div>
          </div>
        </div>
      ) : (
        <div className="loading__container">
          <div className="loading__container--spinner"></div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
