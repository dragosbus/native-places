import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const Places = props => {
  return <FlatList style={styles.places}>{props.places.map((place, i) => <ListItem key={i} placeName={place} onItemPressed={()=>props.onItemDelete(i)}/>)}</FlatList>;
};

const styles = StyleSheet.create({
    places: {
        marginTop: 20,
        width: '100%'
    }
});

export default Places;
