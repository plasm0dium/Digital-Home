import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";

export default createSwitchNavigator(
  {
  LoadingScreen: LoadingScreen,
  Welcome: WelcomeScreen,
  Main: MainTabNavigator,
  Login: LoginScreen
}, {
  initialRouteName: "LoadingScreen"
});