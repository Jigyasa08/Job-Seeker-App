import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from "./actionTypes";
import { loadData, saveData } from "../../../../Redux/localStorage";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: loadData("isAuth") || false,
  token: "",
  data: [],
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
