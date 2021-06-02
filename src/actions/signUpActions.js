import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "./constant";

export const signUpUser = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const signUpUserSuccess = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpUserFail = (payload) => ({
  type: SIGN_UP_FAILURE,
  payload,
});
