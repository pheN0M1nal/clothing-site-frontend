import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_FAIL,
    SINGLE_PRODUCT_SUCCESS,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_START,
} from "../constants/productConstants"
import { toast } from "react-toastify"

import axiosInstance from "../../api/axios"
import axios from "axios"

//Fetch All Products
export const getAllProducts =
    (formData, pageNumber = 1) =>
    async (dispatch) => {
        try {
            dispatch({
                type: ALL_PRODUCT_REQUEST,
            })

            const { data } = await axiosInstance().get(
                `/products/getAllProducts?keyword=${formData?.keyword}&maxPrice=${formData?.maxPrice}&minPrice=${formData?.minPrice}&category=${formData?.category}&avgRating=${formData?.avgRating}`
            )
            //

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

//Get Single Product
export const getproductById = (single) => async (dispatch) => {
    try {
        dispatch({
            type: SINGLE_PRODUCT_REQUEST,
        })

        const { data } = await axiosInstance().get(
            `/products/getProductByID/${single}`
        )

        dispatch({
            type: SINGLE_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Get Single Product
export const createProduct = (product) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PRODUCT_REQUEST,
        })

        const url =
            process.env.REACT_APP_NODE_ENV === "development"
                ? process.env.REACT_APP_MAIN_SERVER_URL_DEVELOPMENT
                : process.env.REACT_APP_MAIN_SERVER_URL_PRODUCTION

        const { data } = await axios.post(
            `${url}/api/products/createProduct`,
            product,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )

        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//delete a product

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_PRODUCT_START,
            payload: id,
        })

        const { data } = await axiosInstance().delete(
            `/products/deleteProductByID/${id}`
        )
        toast.success("Deleted successfully.")
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: id,
        })
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
