import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './src/components/login/Login';

const Routes = createStackNavigation({
  Login: Login,
}, {
  initialRoute: 'Login',
});

export default class App extends React.Component {
  render() {
    return (
      <Routes/>
    );
  }
}
