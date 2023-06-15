import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
