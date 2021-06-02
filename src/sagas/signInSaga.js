import { all, put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import { SIGN_IN_USER, LOGOUT_USER } from "../actions/constant";
import { signInUserFail, signInUserSuccess } from "../actions";

import {
  apiUrl,
  getToken,
  removeToken,
  setAuthToken,
  setToken,
  setRefreshToken,
  setExpiresAt,
} from "../utils";

function* signInUserRequest(action) {
  console.log(action.payload);
  try {
    const res = yield call(
      axios.post,
      `${apiUrl}/api/v1/core/login/`,
      action.payload
    );
    yield setToken(res.data.login_data.access_token);
    yield setRefreshToken(res.data.login_data.refresh_token);
    yield setAuthToken(res.data.login_data.access_token);
    yield setExpiresAt(res.data.login_data.expires_in);
    yield put(signInUserSuccess());
    window.location.href = "/";
  } catch (e) {
    console.log(e);
    console.log(e.response.data.message);
    yield put(signInUserFail(e.response.data.message));
  }
}

function* logOutUserRequest() {
  try {
    yield axios.post(
      `${apiUrl}/api/v1/core/logout/`,
      {
        deviceUniqueId: "",
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    yield removeToken();
    window.location.href = "/";
  } catch (e) {
    console.log(e);
  }
}

export function* watchSignInUserAPI() {
  yield takeEvery(SIGN_IN_USER, signInUserRequest);
}

export function* watchLogOut() {
  yield takeEvery(LOGOUT_USER, logOutUserRequest);
}

export default function* rootSaga() {
  yield all([watchSignInUserAPI(), watchLogOut()]);
}
