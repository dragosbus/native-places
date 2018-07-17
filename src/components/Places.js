import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const Places = props => {
  return <View style={styles.places}>{props.places.map((place, i) => <ListItem key={i} placeName={place} />)}</View>;
};

const styles = StyleSheet.create({
    places: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
    }
});

export default Places;
