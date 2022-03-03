import { all } from "redux-saga/effects";
import { watchLoginWorker, watchLogoutWorker } from "./loginSaga";

export default function* rootSaga() {
  yield all([watchLogoutWorker(),watchLoginWorker()]);
}
