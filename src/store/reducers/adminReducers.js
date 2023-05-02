import {
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
