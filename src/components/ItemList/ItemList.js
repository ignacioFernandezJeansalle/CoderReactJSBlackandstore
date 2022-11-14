import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = ({ productList }) => {
  console.log(productList.length);
  return (
    <>
      {productList.length > 0 ? (
        <div className="itemList__container">
          {productList.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="loading__container">
          <div className="loading__container--spinner"></div>
        </div>
      )}
    </>
  );
};

export default ItemList;
