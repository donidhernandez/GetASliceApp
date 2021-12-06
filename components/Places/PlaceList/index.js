import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import PlaceItem from '../PlaceItem';

export default function PlaceList({places}) {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
      {places.map((place, index) => (
        <PlaceItem
          key={index}
          name={place.name}
          image={place.image_url}
          rating={place.rating}
        />
      ))}
    </TouchableOpacity>
  );
}
