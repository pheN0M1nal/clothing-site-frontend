import {
    ADMIN_DETAILS_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    DELETE_ADMIN_FAIL,
    DELETE_ADMIN_START,
    DELETE_ADMIN_SUCCESS,
    DELETE_DESIGNER_FAIL,
    DELETE_DESIGNER_START,
    DELETE_DESIGNER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    FETCH_ALL_ADMIN_FAIL,
    FETCH_ALL_ADMIN_REQUEST,
    FETCH_ALL_ADMIN_SUCCESS,
    FETCH_ALL_DESIGNER_FAIL,
    FETCH_ALL_DESIGNER_REQUEST,
    FETCH_ALL_DESIGNER_SUCCESS,
    FETCH_ALL_USER_FAIL,
    FETCH_ALL_USER_REQUEST,
    FETCH_ALL_USER_SUCCESS,
    FETCH_RATED_DESIGNERS_FAIL,
    FETCH_RATED_DESIGNERS_REQUEST,
    FETCH_RATED_DESIGNERS_SUCCESS,
} from "../constants/adminConstants"
import axiosInstance from "../../api/axios"
import { toast } from "react-toastify"
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "../constants/userConstants"

export const fetchAdminInfo = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const { data } = await axiosInstance().get("/admins/")

        //dispatch(fetchShopDetails())
        if (data.userType === "Admin") {
            // dispatch(fetchDesignerProducts(data._id))
        }

        toast.success("Login Suuccessfull.")

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
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const adminLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST,
        })

        const { data } = await axiosInstance().post("/admins/loginAdmin", {
            email,
            password,
        })

        toast.success("Login Successfull.")

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })
        localStorage.setItem("token", data.token)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })

        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchAllUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_ALL_USER_REQUEST,
        })

        const { data } = await axiosInstance().get(`/admins/allUsers`)

        dispatch({
            type: FETCH_ALL_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FETCH_ALL_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchAllAdmins = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_ALL_ADMIN_REQUEST,
        })

        const { data } = await axiosInstance().get(`/admins/allAdmins`)

        dispatch({
            type: FETCH_ALL_ADMIN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FETCH_ALL_ADMIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchAllDesigners = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_ALL_DESIGNER_REQUEST,
        })

        const { data } = await axiosInstance().get(`/admins/allDesigners`)

        dispatch({
            type: FETCH_ALL_DESIGNER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FETCH_ALL_DESIGNER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteAdmin = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_ADMIN_START,
            payload: id,
        })

        const { data } = await axiosInstance().delete(
            `/admins/deleteAdmin/${id}`
        )

        toast.success("Deleted successfully.")

        dispatch({
            type: DELETE_ADMIN_SUCCESS,
            payload: id,
        })
    } catch (error) {
        dispatch({
            type: DELETE_ADMIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteDesigner = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_DESIGNER_START,
            payload: id,
        })

        const { data } = await axiosInstance().delete(
            `/admins/deleteDesigner/${id}`
        )
        toast.success("Deleted successfully.")
        dispatch({
            type: DELETE_DESIGNER_SUCCESS,
            payload: id,
        })
    } catch (error) {
        dispatch({
            type: DELETE_DESIGNER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_USER_START,
            payload: id,
        })

        const { data } = await axiosInstance().delete(
            `/admins/deleteUser/${id}`
        )
        toast.success("Deleted successfully.")
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: id,
        })
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const fetchRatedDesigners = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_RATED_DESIGNERS_REQUEST,
        })

        const { data } = await axiosInstance().get(
            `/designers/topRatedDesigners`
        )

        dispatch({
            type: FETCH_RATED_DESIGNERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FETCH_RATED_DESIGNERS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
