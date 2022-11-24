import "./CartItem.css";

const CartItem = ({ product }) => {
  return (
    <div>
      {product.id} / {product.title} / {product.quantity} / {product.quantity * product.price}
    </div>
  );
};

export default CartItem;
