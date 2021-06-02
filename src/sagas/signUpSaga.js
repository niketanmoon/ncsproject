import { all, put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";

import { SIGN_UP } from "../actions/constant";
import { signUpUserSuccess, signUpUserFail } from "../actions";
import {
  apiUrl,
  setAuthToken,
  setToken,
  setRefreshToken,
  setExpiresAt,
} from "../utils";

function* signUpUserRequest(action) {
  console.log("Action payload: ", action.payload);
  try {
    const res = yield call(
      axios.post,
      `${apiUrl}/api/v1/core/signup/`,
      action.payload
    );
    yield setToken(res.data.login_data.access_token);
    yield setRefreshToken(res.data.login_data.refresh_token);
    yield setAuthToken(res.data.login_data.access_token);
    yield setExpiresAt(res.data.login_data.expires_in);
    yield put(signUpUserSuccess());
    window.location.href = "/";
  } catch (e) {
    yield put(signUpUserFail(e.response.data.errors.non_field_errors[0]));
  }
}

export function* watchSignUpUserAPI() {
  yield takeEvery(SIGN_UP, signUpUserRequest);
}

export default function* rootSaga() {
  yield all([watchSignUpUserAPI()]);
}
