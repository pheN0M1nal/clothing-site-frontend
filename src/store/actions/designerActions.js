import {
    CREATE_SHOP_REQUEST,
    CREATE_SHOP_SUCCESS,
    CREATE_SHOP_FAIL,
    REGISTER_DESIGNER_REQUEST,
    REGISTER_DESIGNER_SUCCESS,
    REGISTER_DESIGNER_FAIL,
    FETCH_DESIGNER_PRODUCT_SUCCESS,
    FETCH_DESIGNER_PRODUCT_FAIL,
    FETCH_DESIGNER_PRODUCT_REQUEST,
} from "../constants/designerConstants"
import axiosInstance from "../../api/axios"
import {
    USER_DETAILS_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_SUCCESS,
} from "../constants/userConstants"

export const createShop = (formData, id) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_SHOP_REQUEST,
        })

        const { data } = await axiosInstance().post(
            `/shops/createShop?designerID=${id}`,
            formData
        )

        dispatch({
            type: CREATE_SHOP_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CREATE_SHOP_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchDesignerProducts = (id) => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_DESIGNER_PRODUCT_REQUEST,
        })

        const { data } = await axiosInstance().get(
            `/products/getProductsByDesignerID/${id}`
        )

        dispatch({
            type: FETCH_DESIGNER_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FETCH_DESIGNER_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchShopDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_SHOP_REQUEST,
        })

        const { data } = await axiosInstance().get(`/shops`)

        dispatch({
            type: CREATE_SHOP_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CREATE_SHOP_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const registerDesigner = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_DESIGNER_REQUEST,
        })

        const { data } = await axiosInstance().post(
            "/designers/registerDesigner",
            formData
        )
        localStorage.setItem("token", data.token)

        dispatch({
            type: REGISTER_DESIGNER_SUCCESS,
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

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REGISTER_DESIGNER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchDesignerInfo = () => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_DESIGNER_REQUEST,
        })

        const { data } = await axiosInstance().get("/designers")

        dispatch(fetchShopDetails())
        if (data.userType === "Designer") {
            dispatch(fetchDesignerProducts(data._id))
        }

        dispatch({
            type: REGISTER_DESIGNER_SUCCESS,
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

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REGISTER_DESIGNER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
