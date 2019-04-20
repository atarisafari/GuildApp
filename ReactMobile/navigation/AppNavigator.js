import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/AuthenticationScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

	Main: MainTabNavigator,
	Auth: LoginScreen,
	SignUpScreen: SignUpScreen
},{
	initialRouteName: "Auth"
}
	
));
