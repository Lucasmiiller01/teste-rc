import api from './api';
import AsyncStorage from '@react-native-community/async-storage';

export const authenticate = async (data) => 
  api().request({
    url: '/auth/login',
    method: 'POST',
    data
  });


export const setAuthStorage = (auth) =>
  AsyncStorage.setItem('@auth', JSON.stringify(auth));

export const getAuthStorage = async () =>
  JSON.parse(await AsyncStorage.getItem('@auth'));

export const removeAuthStorage = () => AsyncStorage.removeItem('@auth');
