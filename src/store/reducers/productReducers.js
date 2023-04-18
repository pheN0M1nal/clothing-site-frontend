import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

//Get All Products
export const productDetailReducer = (state = { allProducts: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return { loading: true, allProducts: action.payload };
    case ALL_PRODUCT_SUCCESS:
      return { loading: false, allProducts: action.payload };
    case ALL_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//Get Single Product
export const singleproductReducer = (state = { singleProduct: [] }, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return { loading: true, singleProduct: action.payload };
    case SINGLE_PRODUCT_SUCCESS:
      return { loading: false, singleProduct: action.payload.product };
    case SINGLE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//
