import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_FAIL,
    SINGLE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    TOP_PRODUCTS_REQUEST,
    TOP_PRODUCTS_SUCCESS,
    TOP_PRODUCTS_FAIL,
    FEATURE_PRODUCTS_REQUEST,
    FEATURE_PRODUCTS_SUCCESS,
    FEATURE_PRODUCTS_FAIL,
} from "../constants/productConstants"

//Get All Products
export const productDetailReducer = (state = { allProducts: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return { loading: true, allProducts: action.payload }
        case ALL_PRODUCT_SUCCESS:
            return { loading: false, allProducts: action.payload }
        case ALL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

//Get All Products
export const featuredproductDetailReducer = (
    state = { featureProducts: [] },
    action
) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return { loading: true, featureProducts: action.payload }
        case ALL_PRODUCT_SUCCESS:
            return { loading: false, featureProducts: action.payload }
        case ALL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

//Get Single Product
export const singleproductReducer = (state = { singleProduct: [] }, action) => {
    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return { loading: true, singleProduct: action.payload }
        case SINGLE_PRODUCT_SUCCESS:
            return { loading: false, singleProduct: action.payload.product }
        case SINGLE_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//add Product
export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_REQUEST:
            return { loading: true }
        case ADD_PRODUCT_SUCCESS:
            return { loading: false, addedProduct: action.payload }
        case ADD_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//UPDATE Product
export const updateProductReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_REQUEST:
            return { loading: true }
        case UPDATE_PRODUCT_SUCCESS:
            return { loading: false, updatedProduct: action.payload }
        case UPDATE_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//Top Products
export const topProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case TOP_PRODUCTS_REQUEST:
            return { loading: true }
        case TOP_PRODUCTS_SUCCESS:
            return { loading: false, topProducts: action.payload }
        case TOP_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//Feature Products
export const featureProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case FEATURE_PRODUCTS_REQUEST:
            return { loading: true }
        case FEATURE_PRODUCTS_SUCCESS:
            return { loading: false, featureProducts: action.payload }
        case FEATURE_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
