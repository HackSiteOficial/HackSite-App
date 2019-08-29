import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './src/components/login/Login';

const AppNavigator = createStackNavigator({
  Login: Login,
}, {
  initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);
