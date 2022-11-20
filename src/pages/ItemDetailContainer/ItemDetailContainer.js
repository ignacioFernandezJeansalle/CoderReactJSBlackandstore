import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbProducts } from "../../db/db";
import Loading from "../../components/Loading/Loading";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="itemDetailContainer__container">{loading ? <Loading /> : <ItemDetail product={product} />}</div>
  );
};

export default ItemDetailContainer;
