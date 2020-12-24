import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import BeforeLoginScreen from '../pages/BeforeLogin';

import RegisterScreen from '../pages/Register';

import MainScreen from '../pages/Main';
import { useSelector } from 'react-redux';


const Stack = createStackNavigator();

export default () => {
  
  const { data, loaded } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        {data && (
          <>
            <Stack.Screen name="BeforeLogin" component={BeforeLoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          </>
        )}
      
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />

   

      </Stack.Navigator>
    </NavigationContainer>
  )
};
