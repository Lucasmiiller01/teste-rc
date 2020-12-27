export const Types = {
    GET_CHANNELS: 'GET_CHANNELS',
    ASYNC_GET_CHANNELS: 'ASYNC_GET_CHANNELS',
    ASYNC_ADD_FAVORITE: 'ASYNC_ADD_FAVORITE',
    ADD_FAVORITE: "ADD_FAVORITE",
    GET_CHANNELS_FAVORITE: 'GET_CHANNELS_FAVORITE',
    ASYNC_GET_CHANNELS_FAVORITE: 'ASYNC_GET_CHANNELS_FAVORITE',

  };
  
  const initialState = {
    data: null,
    loaded: false,
    channelsFavorite: []
  };
  
  export default (state = initialState, { type, payload }) => {

    switch (type) {
        case Types.ASYNC_GET_CHANNELS:
            return { ...state, loaded: false };
        case Types.GET_CHANNELS:
            return { ...state, data: payload, loaded: true };
        case Types.ADD_FAVORITE:
            return { ...state, channelsFavorite: [...state.channelsFavorite, payload] };
        case Types.GET_CHANNELS_FAVORITE:
            return { ...state, channelsFavorite: payload };
      default:
        return state;
    }
  };
  
export const handleGetChannel = (payload) => ({
    type: Types.ASYNC_GET_CHANNELS,
    payload,
});

export const handleAddChannelFavorite = (payload) => ({
    type: Types.ASYNC_ADD_FAVORITE,
    payload,
});

export const handleGetChannelFavorite = () => ({
    type: Types.ASYNC_GET_CHANNELS_FAVORITE
});


  