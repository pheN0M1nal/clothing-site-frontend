import {
    FETCH_ALL_ADMIN_FAIL,
    FETCH_ALL_ADMIN_REQUEST,
    FETCH_ALL_ADMIN_SUCCESS,
    FETCH_ALL_DESIGNER_FAIL,
    FETCH_ALL_DESIGNER_REQUEST,
    FETCH_ALL_DESIGNER_SUCCESS,
    FETCH_ALL_USER_FAIL,
    FETCH_ALL_USER_REQUEST,
    FETCH_ALL_USER_SUCCESS,
} from "../constants/adminConstants"
import axiosInstance from "../../api/axios"

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
