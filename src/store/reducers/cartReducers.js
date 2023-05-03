import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from "../constants/cartConstants";

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case DELETE_FROM_CART:
      return state.filter(item => item._id !== action.payload);
    case INCREMENT:
      return action.payload;
    case DECREMENT:
      return action.payload;
    default:
      return state;
  }
};
