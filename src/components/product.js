import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card">
      <img src={product.image} id="img"></img>
      <h3>{product.title}</h3>

      <hr></hr>
      <p className="price"> {product.price} $</p>

      <button class="button-78" role="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
