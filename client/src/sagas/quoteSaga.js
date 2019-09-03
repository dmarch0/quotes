import { put, call, takeEvery } from "redux-saga/effects";

import { QUOTE_FETCH, QUOTE_ERROR } from "../actions/types";
import axios from "../config/axios";

function* quoteWatcher() {
  yield takeEvery(QUOTE_FETCH, quoteWorker);
}

function* quoteWorker() {
  try {
    const result = yield call(axios, {
      query: `
        quote {
            text
            author {
                name
            }
        }
    `
    });
    //to do
    //put response data to the reducer
  } catch (error) {
    yield put({ type: QUOTE_ERROR, payload: error.response.data });
  }
}
