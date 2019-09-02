import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.colorText}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  colorText: {
    color: 'white',
  },
});
