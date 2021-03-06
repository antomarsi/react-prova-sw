import { takeLatest, put, call, all } from "redux-saga/effects";
import { apiGetActivity } from "../services/api";

function* fetchActivity(action) {
  try {
    const response = yield call(apiGetActivity, action.filter);
    yield put({
      type: "SUCCESS_ACTIVITY_FETCH",
      payload: { activity: response }
    });
  } catch (err) {
    console.error(err);
    yield put({ type: "FAILURE_ACTIVITY_FETCH" });
  }
}

export default function* root() {
  yield all([takeLatest("REQUEST_ACTIVITY_FETCH", fetchActivity)]);
}
