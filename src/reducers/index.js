import { combineReducers } from "redux";

import SignInReducer from "./signInReducer";
import SignUpReducer from "./signUpReducer";
const reducers = combineReducers({
  SignInReducer,
  SignUpReducer,
});

export default reducers;
