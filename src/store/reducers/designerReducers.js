import {
    CREATE_SHOP_REQUEST,
    CREATE_SHOP_SUCCESS,
    CREATE_SHOP_FAIL,
    REGISTER_DESIGNER_SUCCESS,
    REGISTER_DESIGNER_FAIL,
    REGISTER_DESIGNER_REQUEST,
    REGISTER_DESIGNER_RESET,
    CREATE_SHOP_RESET,
} from "../constants/designerConstants"

export const createShopReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SHOP_REQUEST:
            return { loading: true }
        case CREATE_SHOP_SUCCESS:
            return { loading: false, shopInfo: action.payload }
        case CREATE_SHOP_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_SHOP_RESET:
            return {}
        default:
            return state
    }
}

export const registerDesignerReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_DESIGNER_REQUEST:
            return { loading: true }
        case REGISTER_DESIGNER_SUCCESS:
            return { loading: false, designerInfo: action.payload }
        case REGISTER_DESIGNER_FAIL:
            return { loading: false, error: action.payload }
        case REGISTER_DESIGNER_RESET:
            return {}
        default:
            return state
    }
}
