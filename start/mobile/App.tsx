import React from 'react';
import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';

import Home from './src/Pages/Home';
import { AppLoading } from 'expo';


export default function App() {

  const [loading] = useFonts({
    HolidayFree: require('./src/assets/fonts/HolidayFree.otf'),
    LatoBlack: require('./src/assets/fonts/Lato-Black.ttf'),
    LatoBold: require('./src/assets/fonts/Lato-Bold.ttf'),
    LatoRegular: require('./src/assets/fonts/Lato-Regular.ttf'),
    RobotoBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
    RobotoMedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),

  });

  if (!loading)
    <AppLoading />
  
  return (
    <>
      <Home />
      <StatusBar barStyle="default" />
    </>
  );
}


