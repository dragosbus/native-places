import React from 'react';
import { View } from 'react-native';

import ListItem from './ListItem';

const Places = props => {
  return <View>{props.places.map((place, i) => <ListItem key={i} placeName={place} />)}</View>;
};

export default Places;
