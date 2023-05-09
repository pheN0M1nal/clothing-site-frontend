import {
  CREATE_SHOP_REQUEST,
  CREATE_SHOP_SUCCESS,
  CREATE_SHOP_FAIL,
} from "../constants/designerConstants";
import axiosInstance from "../../api/axios";

export const createShop = (_id, shopName, description) => async dispatch => {
  try {
    dispatch({
      type: CREATE_SHOP_REQUEST,
    });

    const { data } = await axiosInstance().post("/shops/createShop", {
      _id,
      shopName,
      description,
    });

    dispatch({
      type: CREATE_SHOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SHOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
