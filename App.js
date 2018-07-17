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
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: []
    };
    this.changeInp = this.changeInp.bind(this);
    this.placesSubmitHandler = this.placesSubmitHandler.bind(this);
  }

  changeInp(e) {
    this.setState({
      placeName: e
    });
  }

  placesSubmitHandler() {
    if(!this.state.placeName) return;
    
    this.setState(prevState=>{
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    });
  }

  render() {
    const placesOutput = this.state.places.map((place, i)=>(
      <Text key={i}>{place}</Text>
    ));

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inp}
          placeholder="Name"
          value={this.state.placeName}
          onChangeText={this.changeInp}
        />
        <TouchableOpacity style={styles.btn} onPress={this.placesSubmitHandler}>
          <Text style={styles.btnText}>Add Place</Text>
        </TouchableOpacity>
        <View>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inp: {
    width: "80%",
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(2,2,2,0.3)',
    borderRadius: 5,
    marginTop: 20,
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
