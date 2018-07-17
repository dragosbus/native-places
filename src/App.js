import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Places from './components/Places';
import AddPlace from './components/AddPlaceButton';
import PlaceValue from './components/Input';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: []
    };
    this.changeInp = this.changeInp.bind(this);
    this.placesSubmitHandler = this.placesSubmitHandler.bind(this);
    this.onItemDelete = this.onItemDelete.bind(this);
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

  onItemDelete(index) {
    this.setState(prevState=>{
      return {
        places: prevState.places.filter((place, i)=>{
          return i !== index;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceValue 
          placeName={this.state.placeName} 
          changeInp={this.changeInp}
        />
        <AddPlace placeSubmit={this.placesSubmitHandler}/>
        <Places places={this.state.places} onItemDelete={this.onItemDelete}/>
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
});
