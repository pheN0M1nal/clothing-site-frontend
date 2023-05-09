import {
  CREATE_SHOP_REQUEST,
  CREATE_SHOP_SUCCESS,
  CREATE_SHOP_FAIL,
} from "../constants/designerConstants";
import { toast } from "react-toastify";
export const createShopReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SHOP_REQUEST:
      return { loading: true };
    case CREATE_SHOP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CREATE_SHOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
