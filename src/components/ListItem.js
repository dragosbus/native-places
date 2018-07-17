import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = (props) =>{
    return(
        <View style={styles.listItem}>
            <Text style={styles.placeText}>{props.placeName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        width: '90%',
        backgroundColor: '#e6e6e6',
        padding: 10,
        borderRadius: 4,
        marginTop: 10
    },
    placeText: {
        fontSize: 16
    }
});

export default ListItem;