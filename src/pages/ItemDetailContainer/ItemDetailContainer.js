import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Loading from "../../components/Loading/Loading";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = () => {
    const db = getFirestore();
    const dbQuery = doc(db, "items", id);
    getDoc(dbQuery)
      .then((response) => {
        setProduct({ id: response.id, ...response.data() });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="itemDetailContainer__container">{loading ? <Loading /> : <ItemDetail product={product} />}</div>
  );
};

export default ItemDetailContainer;
