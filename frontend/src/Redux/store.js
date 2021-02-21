import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { registerReducer } from "../Components/JobSeeker/Register/RegisterRedux/reducer";
import { loginReducer } from "../Components/JobSeeker/Login/LoginRedux/reducer";
import { jobSeekerReducer } from "../Components/JobSeeker/Dashboard/DashboardRedux/reducer";
const rootReducer = combineReducers({
  register: registerReducer,
  auth: loginReducer,
  user: jobSeekerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
