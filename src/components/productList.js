import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/actions.js";

const ProductList = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Ürünleri filtrele"
      />
      <ProductListFiltered filter={filter} />
    </div>
  );
};

const ProductListFiltered = ({ filter }) => {
  const productList = useSelector((state) => state.productList);

  const filteredProducts = productList.filter((product) => {
    // Filtreleme mantığını burada uygulayabilirsiniz
    // Örneğin, ürün adı veya kategori filtrelemesi yapabilirsiniz
    return (
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
