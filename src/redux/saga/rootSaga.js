import { all } from "redux-saga/effects";
import { watchLoginWorker, watchLogoutWorker } from "./loginSaga";
import { watchRegistrationWorker } from "./registrationSaga";

export default function* rootSaga() {
  yield all([watchLogoutWorker(),watchLoginWorker(),watchRegistrationWorker()]);
}
