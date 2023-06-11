import axiosInstance from "../../api/axios"
import { toast } from "react-toastify"
import {
    REVIEWS_FAIL,
    REVIEWS_REQUEST,
    REVIEWS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_ORDERS_FAIL,
    USER_ORDERS_REQUEST,
    USER_ORDERS_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from "../constants/userConstants"
import {
    CREATE_SHOP_RESET,
    REGISTER_DESIGNER_RESET,
    REGISTER_DESIGNER_SUCCESS,
} from "../constants/designerConstants"
import {
    fetchDesignerInfo,
    fetchDesignerProducts,
    fetchShopDetails,
} from "./designerActions"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const { data } = await axiosInstance().post("/users/loginUser", {
            email,
            password,
        })

        toast.success("Login successful.")
        data?.token && localStorage.setItem("token", data.token)

        if (data.userType === "Designer") {
            dispatch(fetchDesignerProducts(data._id))
            dispatch(fetchShopDetails())
        }

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })

        if (data.userType === "Designer") {
            dispatch({
                type: REGISTER_DESIGNER_SUCCESS,
                payload: data,
            })
        }
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const { data } = await axiosInstance().post("/users/registerUser", {
            myName: name,
            email,
            password,
        })
        data?.token && localStorage.setItem("token", data.token)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })
        const {
            userLogin: { userInfo },
        } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axiosInstance().get(`/users/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchUserDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })

        const { data } = await axiosInstance().get(`/users/`)

        dispatch(fetchDesignerInfo())
        dispatch(fetchShopDetails())
        if (data.userType === "Designer") {
            dispatch(fetchDesignerProducts(data._id))
        }

        if (data) {
            data?.token && localStorage.setItem("token", data.token)

            dispatch({
                type: USER_DETAILS_SUCCESS,
                payload: data,
            })
        }
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchUserOrders = (id) => async (dispatch) => {
    try {
        dispatch({
            type: USER_ORDERS_REQUEST,
        })

        const { data } = await axiosInstance().get(
            `/orders/usersAllOrder?id=${id}`
        )

        dispatch({
            type: USER_ORDERS_SUCCESS,
            payload: data?.orders,
        })
    } catch (error) {
        dispatch({
            type: USER_ORDERS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchReviews = (id) => async (dispatch) => {
    try {
        dispatch({
            type: REVIEWS_REQUEST,
        })

        const { data } = await axiosInstance().get(
            `/reviews/allReviewsOfProduct?id=${id}`
        )

        dispatch({
            type: REVIEWS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REVIEWS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGOUT,
        })

        dispatch({
            type: REGISTER_DESIGNER_RESET,
        })

        dispatch({
            type: CREATE_SHOP_RESET,
        })

        toast.success("Logged out successfully.")

        window.localStorage.removeItem("token")
    } catch (error) {}
}
