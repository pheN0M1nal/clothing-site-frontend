import {
  ADD_BILLING_INfO,
  PLACE_ORDER_REQUEST,
} from "../constants/billingConstant";

export const billingReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BILLING_INfO:
      return [action.payload];
    default:
      return state;
  }
};

export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return [action.payload];
    default:
      return state;
  }
};
