import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/AuthenticationScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

	Main: MainTabNavigator,
	HomeScreen: HomeScreen,
	Auth: LoginScreen,
	SignUpScreen: SignUpScreen
},{
	initialRouteName: "Auth"
}
	
));
