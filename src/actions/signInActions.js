import {
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
  LOGOUT_USER,
} from "./constant";

export const signInUser = (payload) => ({
  type: SIGN_IN_USER,
  payload,
});

export const signInUserSuccess = (payload) => ({
  type: SIGN_IN_USER_SUCCESS,
  payload,
});

export const signInUserFail = (payload) => ({
  type: SIGN_IN_USER_FAILURE,
  payload,
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});
