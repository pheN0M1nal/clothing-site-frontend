import { ADD_BILLING_INfO } from "../constants/billingConstant";

export const billingReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BILLING_INfO:
      return [...state, action.payload];

    default:
      return state;
  }
};
