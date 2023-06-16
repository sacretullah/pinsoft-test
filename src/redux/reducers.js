const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newItem = {
          id: action.payload.id,
          name: action.payload.title,
          count: 1,
          price: action.payload.price,
        };
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    default:
      return state;
  }
};

export default rootReducer;
