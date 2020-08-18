/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

export default class Touchables extends Component {
  state = {
    email: '',
    password: '',
  };
  _onPressButton(email, pass) {
    alert('email: ' + email + ' password: ' + pass);
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="     Email"
          placeholderTextColor="#111111"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="     Password"
          placeholderTextColor="#111111"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableHighlight
          onPress={() =>
            this._onPressButton(this.state.email, this.state.password)
          }
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={styles.button}>
            <Text style font={styles.buttonText}>
              Login
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  //text button*
  button: {
    borderRadius: 13,
    marginBottom: 30,
    width: 260,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#01579B',
  },
  //text input
  input: {
    borderRadius: 13,
    margin: 15,
    height: 40,
    width: 260,
    borderColor: '#111111',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
