import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ProductList from "./components/productList.js";
import store from "./redux/store.js";
import products from "./products-list.json";
import { setProductList } from "./redux/actions.js";

store.dispatch(setProductList(products));
ReactDOM.render(
  <Provider store={store}>
    <ProductList />
  </Provider>,
  document.getElementById("root")
);
