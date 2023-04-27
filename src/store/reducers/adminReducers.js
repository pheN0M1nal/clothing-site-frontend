import {
    DELETE_ADMIN_SUCCESS,
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
        case DELETE_ADMIN_SUCCESS:
            return {
                loading: false,
                admins: [
                    ...state.admins.filter(
                        (user) => user._id !== action.payload
                    ),
                ],
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

        default:
            return state
    }
}
