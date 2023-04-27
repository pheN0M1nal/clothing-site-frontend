import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from "../constants/cartConstants";

//Add to cart
export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // var data = state;
      // state.map((item) => {
      //   if (item.id === action.payload.id && item.size[])
      // })
      return [...state, action.payload];
    case DELETE_FROM_CART:
      return state.filter(item => item._id !== action.payload);
    case INCREMENT:
      state.map(item => {
        if (item._id === action.payload) {
          return [
            ...state,
            (item.purchaseQty =
              item.purchaseQty <= item.quantity && item.purchaseQty + 1),
          ];
        }

        return state;
      });
      break;
    case DECREMENT:
      state.map(item => {
        if (item._id === action.payload) {
          return [
            ...state,
            (item.purchaseQty = item.purchaseQty > 0 && item.purchaseQty - 1),
          ];
        }
        return state;
      });
      break;
    default:
      return state;
  }
};
