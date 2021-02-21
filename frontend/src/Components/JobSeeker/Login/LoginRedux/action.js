import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios";

export const loginReq = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginUserData = ({ email, password }) => (dispatch) => {
  dispatch(loginReq());
  console.log(email, password);
  axios({
    method: "POST",
    url: "https://reqres.in/api/login",
    data: {
      email,
      password,
    },
  })
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => dispatch(loginFailure(err)));
};
