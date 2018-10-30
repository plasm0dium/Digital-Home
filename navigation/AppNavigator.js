import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoadingScreen from "../screens/LoadingScreen";

export default createSwitchNavigator(
  {
  LoadingScreen: LoadingScreen,
  Welcome: WelcomeScreen,
  Main: MainTabNavigator
}, {
  initialRouteName: "LoadingScreen"
});