import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
} from "../constants/productConstants"

//Get All Products
export const productDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return { loading: true, products: action.payload }
        case ALL_PRODUCT_SUCCESS:
            return { loading: false, products: action.payload }
        case ALL_PRODUCT_FAIL:
            return { loading: false, productsInfo: {} }
        default:
            return state
    }
}
//
