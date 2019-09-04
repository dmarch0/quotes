import { all } from "redux-saga/effects";

import quoteSaga from "./quoteSaga";

function* helloSaga() {
  console.log("Hello world");
}

export default function* rootSaga() {
  yield all([helloSaga(), quoteSaga()]);
}
