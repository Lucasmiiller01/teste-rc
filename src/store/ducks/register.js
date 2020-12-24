export const Types = {
    REGISTER: 'REGISTER',
    ASYNC_REGISTER: 'ASYNC_REGISTER',
    ERROR_FORM_REGISTER: 'ERROR_FORM_REGISTER',

};
  
  const initialState = {
    data: null,
    loaded: false,
    errorsForm: null
  };
  
  export default (state = initialState, { type, payload }) => {

    switch (type) {
      case Types.ASYNC_REGISTER:
        return { ...state, loaded: false, errorsForm: null };
      case Types.ERROR_FORM_REGISTER:
        return { ...state, loaded: true, errorsForm: payload };
      case Types.REGISTER:
        return { ...state, data: payload, loaded: true };
      default:
        return state;
    }
  };
  
  export const handleRegister = (payload) => ({
    type: Types.ASYNC_REGISTER,
    payload,
  });


  