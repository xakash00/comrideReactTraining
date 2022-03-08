import { all } from "redux-saga/effects";
import { watchFetchDictioanryApiWorker } from "./dictionarySaga";
import { watchFetchApiWorker } from "./jokesSaga";
import { watchLoginWorker, watchLogoutWorker } from "./loginSaga";
import { watchRegistrationWorker } from "./registrationSaga";

export default function* rootSaga() {
  yield all([
    watchLogoutWorker(),
    watchLoginWorker(),
    watchRegistrationWorker(),
    watchFetchApiWorker(),
    watchFetchDictioanryApiWorker(),
  ]);
}
