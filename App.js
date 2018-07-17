/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inp}
          placeholder="Name"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inp: {
    width: 390,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(2,2,2,0.3)',
    borderRadius: 5,
    marginBottom: 20
  },
  btn: {
    width: 120,
    backgroundColor: '#313B72',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 16
  }
});
