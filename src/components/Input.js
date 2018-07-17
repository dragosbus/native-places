import React from 'react';
import {StyleSheet, TextInput} from 'react-native';


const PlaceValue = (props) => {
    return (
        <TextInput
          style={styles.inp}
          placeholder="Name"
          value={props.placeName}
          onChangeText={props.changeInp}
        />
    );
};

const styles = StyleSheet.create({
    inp: {
        width: "80%",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(2,2,2,0.3)',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20
      }
});

export default PlaceValue;