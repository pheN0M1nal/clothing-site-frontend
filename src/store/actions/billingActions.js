import {
    ADD_BILLING_INfO,
    PLACE_ORDER_FAIL,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
} from "../constants/billingConstant"
import axiosInstance from "../../api/axios"

export const addBillingInfo = (billInfo) => async (dispatch) => {
    dispatch({
        type: ADD_BILLING_INfO,
        payload: billInfo,
    })
    localStorage.setItem("billingInfo", JSON.stringify(billInfo))
}

export const placeAnOrder = (order) => async (dispatch) => {
    try {
        dispatch({
            type: PLACE_ORDER_REQUEST,
        })

        const { data } = await axiosInstance().post(`/orders/placeOrder`, order)

        dispatch({
            type: PLACE_ORDER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PLACE_ORDER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
