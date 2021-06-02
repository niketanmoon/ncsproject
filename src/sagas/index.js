import { all } from "redux-saga/effects";

import SignInSaga from "./signInSaga";
import SignUpSaga from "./signUpSaga";

export default function* rootSaga() {
  yield all([SignInSaga(), SignUpSaga()]);
}
