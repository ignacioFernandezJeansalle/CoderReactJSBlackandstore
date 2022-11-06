import { useEffect, useState } from "react";
import { dbProducts } from "../../db/db";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = ({ greetingMessage }) => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dbProducts);
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((res) => {
      setProductList(res);
    });
  });

  return (
    <div className="itemListContainer__container">
      <h2 className="itemListContainer__greetingMessage">{greetingMessage}</h2>
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
