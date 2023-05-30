import { combineReducers, applyMiddleware, createStore, compose } from "redux"
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
} from "./reducers/userReducers"
import {
    productDetailReducer,
    singleproductReducer,
    addProductReducer,
} from "./reducers/productReducers"

import {
    createShopReducer,
    designerProductsReducer,
    registerDesignerReducer,
} from "./reducers/designerReducers"

import {
    usersReducer,
    adminsReducer,
    designersReducer,
    ratedDesignersReducer,
} from "./reducers/adminReducers"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducers"
import { billingReducer } from "./reducers/billingReducer"

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,

    allAdmins: adminsReducer,
    allUsers: usersReducer,
    allDesigners: usersReducer,
    allAdmins: adminsReducer,
    allDesigners: designersReducer,
    allProducts: productDetailReducer,

    addedProduct: addProductReducer,
    singleProduct: singleproductReducer,
    registerDesigner: registerDesignerReducer,
    designerProducts: designerProductsReducer,
    cartItems: cartReducer,
    billingInfo: billingReducer,
    ratedDesigners: ratedDesignersReducer,
    createShop: createShopReducer,
})

// const bindMiddleware = (middleware) => {
//   const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
//   return composeEnhancers(middleware)
// }

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []

const billingInfoFromStorage = localStorage.getItem("billingInfo")
    ? JSON.parse(localStorage.getItem("billingInfo"))
    : []

const initialState = {
    cartItems: cartItemsFromStorage,
    billingInfo: billingInfoFromStorage,
}

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    initialState,
    /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
)

//const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
