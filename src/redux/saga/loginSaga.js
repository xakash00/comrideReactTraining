import { put, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../action/types";
import { USER_EMAIL, USER_PASSWORD } from "../config";

export function* loginWorker(action) {
  console.log(action, "login");
  try {
    yield put({ type: LOGIN_LOADING });
    if (action.email === USER_EMAIL || action.password === USER_PASSWORD) {
      yield put({ type: LOGIN_SUCCESS });
      localStorage.setItem("email", action.email);
      yield action.onSuccess("Login SuccessFull");
    } else if (action.email === "" || action.password === "") {
      yield put({ type: LOGIN_FAIL });
      yield action.onError("Empty Fields");
    } else {
      yield put({ type: LOGIN_FAIL });
      yield action.onError("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
    yield action.onSuccess("Something went Wrong");
  }
}

export function* logoutWorker(action) {
  try {
    localStorage.removeItem("email");
  } catch (err) {
    console.log(err);
  }
}

export function* watchLogoutWorker() {
  yield takeLatest(LOGOUT, logoutWorker);
}
export function* watchLoginWorker() {
  yield takeLatest(LOGIN, loginWorker);
}
