import { all, put, takeLatest, call } from 'redux-saga/effects';
import { Types } from '../ducks/channel';
import { getAllChannel } from "../../services/searchChannel";
import { getRealm } from '../../services/realm';


function* handleGetChannels({ payload }) {
  try {
    const { data } = yield call(getAllChannel, payload);   
    yield all([
        put({ type: Types.GET_CHANNELS, payload: data.items })
    ]);
  } catch (error) {
    console.log(error);  
  }

}


function* addFavorite({ payload: { title, id, uri }  }) {
    try {
        const realm =  yield call(getRealm);
        const findChannelFavoriteById = realm.objects("ChannelFavorite").filtered(`id == '${id}'`);
        if(!findChannelFavoriteById || findChannelFavoriteById.length === 0) {
            realm.write(() => {
                realm.create('ChannelFavorite', { name: title, id, url: uri });
            });   
            yield all([
                put({ type: Types.ADD_FAVORITE, payload: { name: title, id, url: uri } })
            ]);   
        }
    } catch (error) {
      console.log(">>>>>>>>>>>>>>>", error);  
    }
  
}

function* getAllChannelsFavorite() {
    try {
        const realm =  yield call(getRealm);
        const channelsFavorite = realm.objects("ChannelFavorite");
        yield all([
            put({ type: Types.GET_CHANNELS_FAVORITE, payload: channelsFavorite })
        ]);  
    } catch (error) {
      console.log(">>>>>>>>>>>>>>>", error);  
    }
  
}

export default function* channelSaga() {

  yield all([takeLatest(Types.ASYNC_GET_CHANNELS, handleGetChannels), takeLatest(Types.ASYNC_ADD_FAVORITE, addFavorite), takeLatest(Types.ASYNC_GET_CHANNELS_FAVORITE, getAllChannelsFavorite)]);
}
