/**
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';

import { AppRegistry, DevSettings, useColorScheme } from 'react-native';

import App from './src';
import { name as appName } from './app.json';

import AsyncStorage from '@react-native-community/async-storage';
import { ThemeProvider } from 'styled-components';
import selectTheme from './src/utils/theme';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Main = () => {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider theme={selectTheme(colorScheme)}>
            <App />
        </ThemeProvider>
    );
};


AppRegistry.registerComponent(appName, () => Main);

DevSettings.addMenuItem('Clear Storage and Refresh', async () => {
  await AsyncStorage.clear();
  DevSettings.reload();
});
