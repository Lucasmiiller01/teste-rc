import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  name: Yup.string().required('The name field is required'),
  password: Yup.string().required('The password field is required'),
});
