import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_WORD } from "../action/types";
import { DictionaryApis } from "../apis/dictionaryApi";

export function* fetchDictionaryApiWorker(action) {
  console.log(action, "fetchApiWorker");
  try {
    const data = yield call(DictionaryApis);
    console.log(data);
    if (data) {
      yield action.onSuccess(data);
    } else {
      yield action.onError("something went wrong");
    }
  } catch (err) {
    console.log(err);
    yield action.onError("Something went wrong");
  }
}

export function* watchFetchDictioanryApiWorker() {
  yield takeLatest(FETCH_WORD, fetchDictionaryApiWorker);
}
