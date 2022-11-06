import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = ({ productList }) => {
  return (
    <div className="itemList__container">
      <>
        {productList.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </>
    </div>
  );
};

export default ItemList;
