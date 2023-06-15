import React from "react";
import { useSelector } from "react-redux";

const Product = ({ product }) => {
  return (
    <div className="card">
      <div className="product">
        <h3>{product.name}</h3>
        {product.title}
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
