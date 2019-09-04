import { put, call, takeEvery } from "redux-saga/effects";

import { QUOTE_FETCH, QUOTE_ERROR, QUOTE_SUCCESS } from "../actions/types";
import axios from "../config/axios";

function* quoteWatcher() {
  yield takeEvery(QUOTE_FETCH, quoteWorker);
}

function* quoteWorker() {
  try {
    const response = yield call(axios.post, "/", {
      query: `
        query {
          quote {
            text
            author {
              name
            }
          }
        }
    `
    });
    yield put({ type: QUOTE_SUCCESS, payload: response.data.data.quote });
  } catch (error) {
    yield put({ type: QUOTE_ERROR, payload: error.response.data });
  }
}

export default quoteWatcher;
