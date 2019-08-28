import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.colorText}>Bienvenido a HackSite</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    background: black;
  },
  colorText: {
    color: white;
  }
})
