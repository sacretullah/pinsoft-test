const initialState = {
  filteredProductList: [],
  cartItems: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTERED_LIST":
      return {
        ...state,
        filteredProductList: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
