import {
    CREATE_SHOP_REQUEST,
    CREATE_SHOP_SUCCESS,
    CREATE_SHOP_FAIL,
    REGISTER_DESIGNER_SUCCESS,
    REGISTER_DESIGNER_FAIL,
    REGISTER_DESIGNER_REQUEST,
    REGISTER_DESIGNER_RESET,
    CREATE_SHOP_RESET,
    FETCH_DESIGNER_PRODUCT_SUCCESS,
    FETCH_DESIGNER_PRODUCT_FAIL,
    FETCH_DESIGNER_PRODUCT_REQUEST,
    TOP_DESIGNERS_REQUEST,
    TOP_DESIGNERS_SUCCESS,
    TOP_DESIGNERS_FAIL,
    GET_DESIGNER_BY_ID_REQUEST,
    GET_DESIGNER_BY_ID_SUCCESS,
    GET_DESIGNER_BY_ID_FAIL,
    DESIGNER_PRODUCT_DATA_REQUEST,
    DESIGNER_PRODUCT_DATA_SUCCESS,
    DESIGNER_PRODUCT_DATA_FAIL,
    DESIGNER_PRODUCT_DATA_RESET,
} from "../constants/designerConstants"

import {
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
} from "../constants/productConstants"

export const createShopReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SHOP_REQUEST:
            return { loading: true }
        case CREATE_SHOP_SUCCESS:
            return { loading: false, shopInfo: action.payload }
        case CREATE_SHOP_FAIL:
            return {
                loading: false,
                shopInfo: state.shopInfo,
                error: action.payload,
            }
        case CREATE_SHOP_RESET:
            return {}
        default:
            return state
    }
}

export const designerDataReducer = (state = {}, action) => {
    switch (action.type) {
        case DESIGNER_PRODUCT_DATA_REQUEST:
            return { loading: true }
        case DESIGNER_PRODUCT_DATA_SUCCESS:
            return { loading: false, designerProductsInfo: action.payload }
        case DESIGNER_PRODUCT_DATA_FAIL:
            return { loading: false, error: action.payload }
        case DESIGNER_PRODUCT_DATA_RESET:
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

export const designerProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DESIGNER_PRODUCT_REQUEST:
            return { loading: true }
        case FETCH_DESIGNER_PRODUCT_SUCCESS:
            return { loading: false, designerProducts: action.payload }
        case FETCH_DESIGNER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }

        case DELETE_PRODUCT_START:
            return {
                loading_delete: action.payload,
                designerProducts: state.designerProducts,
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                loading_delete: "",
                designerProducts: {
                    ...state.designerProducts,
                    products: state.designerProducts.products.filter(
                        (item) => item._id !== action.payload
                    ),
                },
            }
        case DELETE_PRODUCT_FAIL:
            return {
                loading_delete: false,
                designerProducts: state.designerProducts,
                error: action.payload,
            }

        default:
            return state
    }
}
// Top Rated Designers
export const topDesignersReducer = (state = {}, action) => {
    switch (action.type) {
        case TOP_DESIGNERS_REQUEST:
            return { loading: true }
        case TOP_DESIGNERS_SUCCESS:
            return { loading: false, topDesigners: action.payload }
        case TOP_DESIGNERS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
// Get Designer By Id
export const getDesignerDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DESIGNER_BY_ID_REQUEST:
            return { loading: true }
        case GET_DESIGNER_BY_ID_SUCCESS:
            return { loading: false, supplierInfo: action.payload }
        case GET_DESIGNER_BY_ID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
