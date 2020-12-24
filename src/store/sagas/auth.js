import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { Types } from '../ducks/auth';
import * as service from '../../services/auth';


function* handleAuth({ payload }) {

}

function* loadAuth() {
  const auth = yield call(service.getAuthStorage);
  yield put({ type: Types.AUTHENTICATED, payload: auth })
}

function* logout() {
  yield call(service.removeAuthStorage);
  yield put({ type: Types.AUTHENTICATED, payload: null })
}


export default function* authSaga() {

  yield fork(loadAuth, { payload: null });
  yield all([takeLatest(Types.ASYNC_AUTHENTICATE, handleAuth), takeLatest(Types.LOGOUT, logout)]);
}
