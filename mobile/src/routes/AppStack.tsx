import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import MyRequests from '../Pages/MyRequests';
import Cart from '../Pages/Cart';
import ClientData from '../Pages/ClientData';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="MyRequests" component={MyRequests} />
        <Screen name="Cart" component={Cart} />
        <Screen name="ClientData" component={ClientData} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;