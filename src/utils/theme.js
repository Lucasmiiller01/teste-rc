import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
  } from '@react-navigation/native';


  const CombinedDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: { ...NavigationDefaultTheme.colors },
  };
  
  const selectTheme = () => {
    return CombinedDefaultTheme;
  };
  
  export default selectTheme;
  