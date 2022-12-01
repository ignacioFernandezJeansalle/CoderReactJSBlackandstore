import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Loading from "../../components/Loading/Loading";
import ItemList from "../../components/ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const dbCollection = collection(db, "items");
    const dbQuery = !categoryId ? dbCollection : query(dbCollection, where("categoryId", "==", categoryId));
    getDocs(dbQuery)
      .then((response) => {
        setProductList(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
    // eslint-disable-next-line
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
