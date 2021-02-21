import {
  JOBSEEKER_POST_REQUEST,
  JOBSEEKER_POST_SUCCESS,
  JOBSEEKER_POST_FAILURE,
} from "./actionTypes";

import axios from "axios";
export const jobseekerPostRequest = () => {
  return {
    type: JOBSEEKER_POST_REQUEST,
  };
};

export const jobseekerPostSuccess = (payload) => {
  return {
    type: JOBSEEKER_POST_SUCCESS,
    payload: payload,
  };
};

export const jobseekerPostFailure = (payload) => {
  return {
    type: JOBSEEKER_POST_FAILURE,
    payload: payload,
  };
};

export const postUser = (userDetails) => (dispatch) => {
  dispatch(jobseekerPostRequest());
  console.log(userDetails);
  const config = {
    method: "POST",
    url: "https://mock-heroku-test.herokuapp.com/tasks",
    data: userDetails,
    headers: { "Content-Type": "application/json" },
  };

  axios(config)
    .then((res) => {
      dispatch(jobseekerPostSuccess(res.data));
    })
    .catch((res) => dispatch(jobseekerPostFailure(res.data)));
};
