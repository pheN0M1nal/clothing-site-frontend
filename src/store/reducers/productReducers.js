import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_FAIL,
    SINGLE_PRODUCT_SUCCESS,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
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

        case DELETE_PRODUCT_START:
            return {
                loading_delete: action.payload,
                allProducts: state.allProducts,
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                loading_delete: "",
                allProducts: {
                    ...state.allProducts,
                    products: state.allProducts.products.filter(
                        (item) => item._id !== action.payload
                    ),
                },
            }
        case DELETE_PRODUCT_FAIL:
            return {
                loading_delete: false,
                allProducts: state.allProducts,
                error: action.payload,
            }
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
//
