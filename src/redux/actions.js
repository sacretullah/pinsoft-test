export const setFilteredList = (filteredList) => ({
  type: "SET_FILTERED_LIST",
  payload: filteredList,
});
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
