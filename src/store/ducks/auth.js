export const Types = {
    AUTHENTICATED: 'AUTHENTICATED',
    ASYNC_AUTHENTICATE: 'ASYNC_AUTHENTICATE',
    LOGOUT: 'LOGOUT',
  
  };
  
  const initialState = {
    data: null,
    loaded: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case Types.ASYNC_AUTHENTICATE:
        return { ...state, loaded: false };
      case Types.AUTHENTICATED:
        return { ...state, data: payload, loaded: true };
      default:
        return state;
    }
  };
  
  export const handleAuth = (payload) => ({
    type: Types.ASYNC_AUTHENTICATE,
    payload,
  });
  export const logout = () => ({
    type: Types.LOGOUT
  });
  

  