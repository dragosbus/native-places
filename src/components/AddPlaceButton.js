import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const AddPlace = (props) => {
    return (
        <TouchableOpacity style={styles.btn} onPress=       {props.placeSubmit}>
          <Text style={styles.btnText}>Add Place</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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

export default AddPlace;