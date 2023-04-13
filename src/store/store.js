import { combineReducers, applyMiddleware, createStore, compose } from "redux"
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from "./reducers/userReducers"
import thunk from "redux-thunk"

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
})

// const bindMiddleware = (middleware) => {
//   const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
//   return composeEnhancers(middleware)
// }

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userDetails: { user: userInfoFromStorage },
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
