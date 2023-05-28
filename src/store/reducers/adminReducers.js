import {
    ADMIN_DETAILS_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_RESET,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT,
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

//Get All admins
export const adminsReducer = (state = { admins: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL_ADMIN_REQUEST:
            return { loading: true, admins: [] }
        case FETCH_ALL_ADMIN_SUCCESS:
            return { loading: false, admins: action.payload }
        case FETCH_ALL_ADMIN_FAIL:
            return { loading: false, error: action.payload }
        case DELETE_ADMIN_START:
            return { loading_delete: action.payload, admins: state.admins }
        case DELETE_ADMIN_SUCCESS:
            return {
                loading_delete: "",
                admins: state.admins.filter(
                    (user) => user._id !== action.payload
                ),
            }
        case DELETE_ADMIN_FAIL:
            return {
                loading_delete: false,
                admins: state.admins,
                error: action.payload,
            }
        default:
            return state
    }
}

//Get All admins
export const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL_USER_REQUEST:
            return { loading: true, users: [] }
        case FETCH_ALL_USER_SUCCESS:
            return { loading: false, users: action.payload }
        case FETCH_ALL_USER_FAIL:
            return { loading: false, error: action.payload }
        case DELETE_USER_START:
            return { loading_delete: action.payload, users: state.users }
        case DELETE_USER_SUCCESS:
            return {
                loading_delete: "",
                users: state.users.filter(
                    (user) => user._id !== action.payload
                ),
            }
        case DELETE_USER_FAIL:
            return {
                loading_delete: false,
                users: state.admins,
                error: action.payload,
            }

        default:
            return state
    }
}

// admin-login
export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true }
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload }
        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_LOGOUT:
            return { loading: false, adminInfo: {} }
        default:
            return state
    }
}

//admin-details
export const adminDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADMIN_DETAILS_REQUEST:
            return { ...state, loading: true }
        case ADMIN_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }
        case ADMIN_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_DETAILS_RESET:
            return { loading: false, adminInfo: {} }
        case ADMIN_LOGOUT:
            return { loading: false, adminInfo: {} }
        default:
            return state
    }
}

//Get All designers
export const designersReducer = (state = { designers: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL_DESIGNER_REQUEST:
            return { loading: true, designers: [] }
        case FETCH_ALL_DESIGNER_SUCCESS:
            return { loading: false, designers: action.payload }
        case FETCH_ALL_DESIGNER_FAIL:
            return { loading: false, error: action.payload }
        case DELETE_DESIGNER_START:
            return {
                loading_delete: action.payload,
                designers: state.designers,
            }
        case DELETE_DESIGNER_SUCCESS:
            return {
                loading_delete: "",
                designers: state.designers.filter(
                    (user) => user._id !== action.payload
                ),
            }
        case DELETE_DESIGNER_FAIL:
            return {
                loading_delete: false,
                designers: state.designers,
                error: action.payload,
            }

        default:
            return state
    }
}

// RATED DESIGNERS
export const ratedDesignersReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_RATED_DESIGNERS_REQUEST:
            return { loading: true }
        case FETCH_RATED_DESIGNERS_SUCCESS:
            return {
                loading: false,
                maxRated: action.payload.maxRatingDesigner,
                maxSales: action.payload.maxSalesDesigner,
                maxProductsSales: action.payload.maxProductSalesDesigner,
            }
        case FETCH_RATED_DESIGNERS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
