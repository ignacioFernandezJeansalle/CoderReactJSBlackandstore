import "./ItemCount.css";

const ItemCount = ({ count, setCount, stock }) => {
  const subItem = () => {
    setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : currentCount));
  };

  const addItem = () => {
    setCount((currentCount) => (currentCount < stock ? currentCount + 1 : currentCount));
  };

  return (
    <div className="itemCount__container">
      <div className="itemCount__quantity">
        <button className="itemCount__quantity--btnSubItem" onClick={subItem}>
          <i className="bi bi-dash-lg"></i>
        </button>
        <p className="itemCount__quantity--totalItem">{count}</p>
        <button className="itemCount__quantity--btnAddItem" onClick={addItem}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
