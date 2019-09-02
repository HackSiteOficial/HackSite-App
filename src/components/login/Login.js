import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  TextInput
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import img1 from '../../assets/cursor.png';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {text: 'Esto es un placeholder'};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcomeText}>
            BIENVENIDO A HACKSITE
          </Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.textInput}
            placeholderTextColor='white'
          />
          <TextInput style={styles.textInput}
            placeholderTextColor='white'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black'
  },
  welcomeWrapper: {
    alignItems: 'center',
    padding: 50,
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
    marginBottom: 40,
    textAlign: 'center',
  },
  viewInput: {
    paddingLeft: 50,
    paddingRight: 50,
    flex: 1
  },
  textInput: {
    height: 60,
    borderColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    textAlign: 'center'
  },
});
