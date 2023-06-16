import React from "react";
import { useSelector } from "react-redux";

const Navigation = ({ inputValue, setInputValue }) => {
  const cartItems = useSelector((state) => state.cartItems);

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
      <div className="bucket">
        <span className="counter">{cartItems.length}</span>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
};

export default Navigation;
