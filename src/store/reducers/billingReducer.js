import {
    ADD_BILLING_INfO,
    PLACE_ORDER_FAIL,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
} from "../constants/billingConstant"

export const billingReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_BILLING_INfO:
            return action.payload
        default:
            return state
    }
}

export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case PLACE_ORDER_REQUEST:
            return { loading: true }
        case PLACE_ORDER_SUCCESS:
            return { loading: false, placedOrder: action.payload }
        case PLACE_ORDER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
