import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/actions";

const CartDialog = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className={`cart-dialog ${isOpen ? "open" : ""}`}>
      <div className="cart-dialog__content">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <span>{item.name}</span>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartDialog;
