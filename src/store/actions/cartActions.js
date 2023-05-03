import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from "../constants/cartConstants";

import { toast } from "react-toastify";

export const addToCart = item => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
  toast.success("Item added to cart");
  localStorage.setItem("cartItems", JSON.stringify(getState().cartItems));
};
export const deleteFromCart = id => async (dispatch, getState) => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: id,
  });
  toast.success("Item removed from cart");
  localStorage.setItem("cartItems", JSON.stringify(getState().cartItems));
};
export const incQty = value => async (dispatch, getState) => {
  dispatch({
    type: INCREMENT,
    payload: value,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cartItems));
};
export const decQty = value => async (dispatch, getState) => {
  dispatch({
    type: DECREMENT,
    payload: value,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cartItems));
};
