import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import { Rating } from "react-native-ratings";

const About = ({place}) => {
  return (
    <View>
      <Image source={place.image} style={styles.image} />
      <View style={styles.heading}>
        <Text style={styles.title}>{place.name}</Text>
        <View style={styles.descriptionWrapper}>
          <Text>Hello</Text>
          <Rating
            startingValue={place.rating}
            readonly
            fractions={1}
            imageSize={20}
          />
        </View>
      </View>
    </View>
  );
};

export default About;
