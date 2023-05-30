import {
  ADD_BILLING_INfO,
  PLACE_ORDER_REQUEST,
} from "../constants/billingConstant";

export const addBillingInfo = billInfo => async dispatch => {
  dispatch({
    type: ADD_BILLING_INfO,
    payload: billInfo,
  });
  localStorage.setItem("billingInfo", JSON.stringify(billInfo));
};
export const placeOrderAction = orderDetails => async dispatch => {
  dispatch({
    type: PLACE_ORDER_REQUEST,
    payload: orderDetails,
  });
};
