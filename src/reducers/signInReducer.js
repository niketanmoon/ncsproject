import {
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
} from "../actions/constant";
import { getToken } from "../utils";

const INITIAL_STATE = {
  loading: false,
  error: "",
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return { ...state, loading: true };
    case SIGN_IN_USER_SUCCESS: {
      return { ...state, loading: false };
    }
    case SIGN_IN_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const selectUser = () => getToken();
