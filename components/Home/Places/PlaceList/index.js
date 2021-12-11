import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import PlaceItem from '../PlaceItem';

export default function PlaceList({navigation, ...props}) {
  return (
    <>
      {props.places.map((place, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.wrapper}
          onPress={() =>
            navigation.navigate('Details', {
              id: place.id,
              name: place.name,
              image: place.image_url,
              price: place.price,
              reviews: place.review_count,
              rating: place.rating,
              categories: place.categories,
              is_closed: place.is_closed,
            })
          }>
          <PlaceItem
            name={place.name}
            image={place.image_url}
            rating={place.rating}
            is_closed={place.is_closed}
            reviews={place.review_count}
          />
        </TouchableOpacity>
      ))}
    </>
  );
}
