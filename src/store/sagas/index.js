import { all } from 'redux-saga/effects';
import authSaga from './auth';
import registerSaga from './register';


export default function* rootSaga() {
  yield all([authSaga(), registerSaga()]);
}
