import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { registerReducer } from "../Components/JobSeeker/Register/RegisterRedux/reducer";
const rootReducer = combineReducers({
  register: registerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
