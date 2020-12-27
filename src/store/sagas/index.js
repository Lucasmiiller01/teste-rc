import { all } from 'redux-saga/effects';
import authSaga from './auth';
import registerSaga from './register';
import channelSaga from './channel';


export default function* rootSaga() {
  yield all([authSaga(), registerSaga(), channelSaga()]);
}
