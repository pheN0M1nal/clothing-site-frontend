import { ADD_BILLING_INfO } from "../constants/billingConstant";

export const addBillingInfo = billInfo => async (dispatch, getState) => {
  dispatch({
    type: ADD_BILLING_INfO,
    payload: billInfo,
  });
  localStorage.setItem("billingInfo", JSON.stringify(getState().billingInfo));
};
