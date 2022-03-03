import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../action/types";
import { loginState } from "../constants/loginConstant";

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        message: "login loading",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        message: "login success",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        message: "login Fail",
      };
    default:
      return state;
  }
};
