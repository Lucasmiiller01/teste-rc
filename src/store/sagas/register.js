import { all, put, takeLatest, call } from 'redux-saga/effects';
import { Types } from '../ducks/register';
import { Types as TypesAuth } from '../ducks/auth';

import { getRealm } from '../../services/realm';


function* handleRegister({ payload }) {
  try {
    const realm =  yield call(getRealm);
    const findUserByName = realm.objects("User").filtered(`name == '${payload.name}'`);
    if(!findUserByName || findUserByName.length === 0) {
        realm.write(() => {
            realm.create('User', { ...payload });
        });      
        return yield all([
            put({ type: TypesAuth.ASYNC_AUTHENTICATE, payload:  {...payload } })
        ]);
    }
    yield put({ type: Types.ERROR_FORM_REGISTER, payload:  "User already exists !" });   
    
  } catch (error) {
    yield put({ type: Types.ERROR_FORM_REGISTER, payload:  "Internal error !" });   
  }

}

export default function* registerSaga() {

  yield all([takeLatest(Types.ASYNC_REGISTER, handleRegister)]);
}
