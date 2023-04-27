import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from "../constants/cartConstants";

// cartItems: [...state.cartItems, action.payload],
// error: "",

// return {
//   cartItems: state.cartItems,
//   error: "Product already in the cart",
// };
//Add to cart
export const cartReducer = (state = { cartItems: [], error: "" }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var flag = false;
      return {
        cartItems: [
          ...state?.cartItems.map(item => {
            if (
              item.size === action.payload.size &&
              item._id === action.payload._id
            ) {
              flag = true;
            } else {
              return item;
            }
          }),
          action.payload,
        ],
        error: flag ? "Already in the cart" : "",
      };
    // case DELETE_FROM_CART:
    //   return state.filter(item => item._id !== action.payload);
    // case INCREMENT:
    //   return state.map(item => {
    //     if (item._id === action.payload) {
    //       return {
    //         ...item,
    //         purchaseQty:
    //           item.purchaseQty <= item.quantity && item.purchaseQty + 1,
    //       };
    //     } else {
    //       return item;
    //     }
    //   });
    // case DECREMENT:
    //   return state.map(item => {
    //     if (item._id === action.payload) {
    //       return {
    //         ...item,
    //         purchaseQty: item.purchaseQty > 0 && item.purchaseQty - 1,
    //       };
    //     } else {
    //       return item;
    //     }
    //   });
    default:
      return state;
  }
};
