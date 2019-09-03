import { all } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello world");
}

export default function* rootSaga() {
  yield all([helloSaga()]);
}
