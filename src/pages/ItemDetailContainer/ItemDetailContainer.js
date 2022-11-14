import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbProducts } from "../../db/db";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundProduct = dbProducts.find((item) => item.id === parseInt(id));
      resolve(foundProduct);
    }, 2000);
  });

  useEffect(() => {
    getProduct.then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <div className="itemDetailContainer__container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
