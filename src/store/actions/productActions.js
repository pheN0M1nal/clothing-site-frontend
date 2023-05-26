import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

import axiosInstance from "../../api/axios";

//Fetch All Products
export const getAllProducts =
  (keyword = "", pageNumber = 1) =>
  async dispatch => {
    try {
      dispatch({
        type: ALL_PRODUCT_REQUEST,
      });

      const { data } = await axiosInstance().get(
        `/products/getAllProducts?keyword=${keyword}`
      );

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//Get Single Product
export const getproductById = single => async dispatch => {
  try {
    dispatch({
      type: SINGLE_PRODUCT_REQUEST,
    });

    const { data } = await axiosInstance().get(
      `/products/getProductByID/${single}`
    );

    dispatch({
      type: SINGLE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
