import { all, fork } from 'redux-saga/effects';
import locationSaga from "./locationSaga";

function* rootSaga() {
    yield all([fork(locationSaga)])
}

export default rootSaga;