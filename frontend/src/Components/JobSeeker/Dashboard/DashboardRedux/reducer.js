import {
  JOBSEEKER_POST_REQUEST,
  JOBSEEKER_POST_SUCCESS,
  JOBSEEKER_POST_FAILURE,
} from "./actionTypes";

const initState = {
  isLoading: false,
  error: false,
  jobSeeker: [],
};

export const jobSeekerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case JOBSEEKER_POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case JOBSEEKER_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        jobSeeker: payload,
      };
    }

    case JOBSEEKER_POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
