import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

import axios from "axios";
export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload: payload,
  };
};

export const registerFailure = (payload) => {
  return {
    type: REGISTER_FAILURE,
    payload: payload,
  };
};

export const registerUser = (userDetails) => (dispatch) => {
  dispatch(registerRequest());
  console.log(userDetails);
  const config = {
    method: "POST",
    url: "http://localhost:8000/api/register",
    data: userDetails,
    headers: { "Content-Type": "application/json" },
  };

  axios(config)
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((res) => dispatch(registerFailure(res.data)));
};
