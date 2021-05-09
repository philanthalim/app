import authReducer from "./auth";
import errorReducer from "./error";
import { combineReducers } from "redux";

//name of state is on the left, to be called in APP.js (state.counter eg)
const rootReducer = combineReducers({
  authReducer: authReducer,
  errorReducer: errorReducer,
});

export default rootReducer;
