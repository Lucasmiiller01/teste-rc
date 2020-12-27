import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { Types } from '../ducks/auth';
import * as service from '../../services/auth';
import { getRealm } from '../../services/realm';


function* handleAuth({ payload }) {
  try {
    const realm =  yield call(getRealm);
    const findUserByName = realm.objects("User").filtered(`name == '${payload.name}' AND password == '${payload.password}'`);
    if(findUserByName && findUserByName.length > 0) {
      return yield all([
        call(service.setAuthStorage, { ...payload }),
        put({ type: Types.AUTHENTICATED, payload:  {...payload } }),    
      ]);
    }
    yield put({ type: Types.ERROR_FORM_LOGIN, payload:  "User not found !" });   
    
  } catch (error) {
    yield put({ type: Types.ERROR_FORM_LOGIN, payload:  "Internal error !" });   
  }

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
