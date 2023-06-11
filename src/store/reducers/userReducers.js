import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_RESET,
    USER_LIST_SUCCESS,
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
    REVIEWS_REQUEST,
    REVIEWS_SUCCESS,
    REVIEWS_FAIL,
} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return { loading: false, userInfo: {} }
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return { loading: false, userInfo: {} }
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_DETAILS_FAIL:
            return { loading: false, user: state.user, error: action.payload }
        case USER_DETAILS_RESET:
            return { loading: false, userInfo: {} }
        case USER_LOGOUT:
            return { loading: false, userInfo: {} }
        default:
            return state
    }
}

export const userOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case USER_ORDERS_REQUEST:
            return { loading: true }
        case USER_ORDERS_SUCCESS:
            return { loading: false, orders: action.payload }
        case USER_ORDERS_FAIL:
            return {
                loading: false,
                orders: state.orders,
                error: action.payload,
            }

        default:
            return state
    }
}

export const reviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {
        case REVIEWS_REQUEST:
            return { loading: true }
        case REVIEWS_SUCCESS:
            return { loading: false, reviews: action.payload.reviews }
        case REVIEWS_FAIL:
            return {
                loading: false,
                reviews: state.reviews,
                error: action.payload,
            }

        default:
            return state
    }
}
