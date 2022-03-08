import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_JOKES } from "../action/types";
import { jokeApis } from "../apis/jokeApi";

export function* fetchApiWorker(action) {
  console.log(action, "fetchApiWorker");
  try {
    const data = yield call(jokeApis);
    console.log(data);
    if (data.error === false) {
      yield action.onSuccess(data);
    } else {
      yield action.onError("Something went wrong");
    }
  } catch (err) {
    console.log(err);
    yield action.onError("Something went wrong");
  }
}

export function* watchFetchApiWorker() {
  yield takeLatest(FETCH_JOKES, fetchApiWorker);
}
