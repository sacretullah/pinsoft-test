import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import productList from "../products-list.json";
import "./product.scss";
import Product from "./product";

const ProductList = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const products = useSelector((state) => state.filteredProductList);
  let result = productList.filter(function (obj) {
    if (checkedCategories.length > 0) {
      return (
        obj.title.toLowerCase().includes(inputValue.toLowerCase()) &&
        checkedCategories.includes(obj.category)
      );
    } else {
      return obj.title.toLowerCase().includes(inputValue.toLowerCase());
    }
  });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setCheckedCategories([...checkedCategories, event.target.value]);
    } else {
      setCheckedCategories(
        checkedCategories.filter((value) => value !== event.target.value)
      );
    }
  };

  return (
    <div className="mainDiv">
      <div>
        {categories.map((value, key) => (
          <p key={key}>
            {value}{" "}
            <input
              type="checkbox"
              value={value}
              checked={checkedCategories.includes(value)}
              onChange={(event) => handleCheckbox(event)}
            ></input>{" "}
          </p>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Ürünleri filtrele"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {result.map((value, index) => (
        <Product product={value} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
