const initialState = {
  filteredProductList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTERED_LIST":
      return {
        ...state,
        filteredProductList: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
