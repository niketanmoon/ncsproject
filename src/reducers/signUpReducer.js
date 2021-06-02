import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../actions/constant";

const INITIAL_STATE = {
  loading: false,
  signUpData: {},
  error: "",
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, signUpData: action.payload };
    case SIGN_UP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
