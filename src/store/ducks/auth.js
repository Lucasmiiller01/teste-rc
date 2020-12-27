export const Types = {
    AUTHENTICATED: 'AUTHENTICATED',
    ASYNC_AUTHENTICATE: 'ASYNC_AUTHENTICATE',
    LOGOUT: 'LOGOUT',
    ERROR_FORM_LOGIN: 'ERROR_FORM_LOGIN',
  
  };
  
  const initialState = {
    data: null,
    loaded: false,
    errorsForm: null
  };
  
  export default (state = initialState, { type, payload }) => {

    switch (type) {
      case Types.ASYNC_AUTHENTICATE:
        return { ...state, loaded: false, errorsForm: null };
      case Types.ERROR_FORM_LOGIN:
        return { ...state, loaded: true, errorsForm: payload };
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
  

  