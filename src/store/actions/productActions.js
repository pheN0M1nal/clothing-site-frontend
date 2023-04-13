import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
} from "../constants/productConstants"

import axiosInstance from "../../api/axios"

//Fetch All Products
export const getProducts = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST,
        })
        const {
            getProduct: { productInfo },
        } = getState()

        const { data } = await axiosInstance().get(`/products/getAllProducts`)

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
