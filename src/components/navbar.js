import React from "react";
import { useSelector } from "react-redux";

const Navigation = ({ inputValue, setInputValue, setOpen }) => {
  const cartItems = useSelector((state) => state.cart);
  let sum = 0;

  cartItems.forEach((element) => {
    sum += element.count;
  });
  return (
    <nav className="navBar">
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="bucket" onClick={() => setOpen(true)}>
        <span className="counter">{sum}</span>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
};

export default Navigation;
