const initialState = {
  productList: [],
  filter: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
