import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';


const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Registrar" component={RegisterScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
