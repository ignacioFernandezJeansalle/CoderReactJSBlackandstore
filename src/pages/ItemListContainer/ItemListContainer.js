import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbProducts } from "../../db/db";
import Loading from "../../components/Loading/Loading";
import ItemList from "../../components/ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId) {
        const filteredDbProducts = dbProducts.filter((item) => item.category === categoryId);
        resolve(filteredDbProducts);
      } else {
        resolve(dbProducts);
      }
    }, 2000);
  });

  useEffect(() => {
    setLoading(true);
    getProducts.then((res) => {
      setProductList(res);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="itemListContainer__container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="itemListContainer__greetingMessage">
            Nos volvimos locos, 6 cuotas sin interés en todos nuestros productos!
          </h2>
          <ItemList productList={productList} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
