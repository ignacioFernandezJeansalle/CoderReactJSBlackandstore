import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="greeting-container">
      <h2 className="greeting-message">{props.greetingMessage}</h2>
    </div>
  );
};

export default ItemListContainer;