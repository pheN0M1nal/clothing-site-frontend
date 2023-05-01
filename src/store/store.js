import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from "./reducers/userReducers";
import {
  productDetailReducer,
  singleproductReducer,
} from "./reducers/productReducers";

import {
  usersReducer,
  adminsReducer,
  designersReducer,
} from "./reducers/adminReducers";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { billingReducer } from "./reducers/billingReducer";

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
  singleProduct: singleproductReducer,
  cartItems: cartReducer,
  billingInfo: billingReducer,
});

// const bindMiddleware = (middleware) => {
//   const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
//   return composeEnhancers(middleware)
// }

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const billingInfoFromStorage = localStorage.getItem("billingInfo")
  ? JSON.parse(localStorage.getItem("billingInfo"))
  : null;

const initialState = {
  cartItems: cartItemsFromStorage,
  userLogin: { userInfo: userInfoFromStorage },
  userDetails: { user: userInfoFromStorage },
  userBill: 0,
  billingInfo: billingInfoFromStorage,
};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

//const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;
