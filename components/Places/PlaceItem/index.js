import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../constants/colors';

export default function PlaceItem({name, image, rating}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color={COLORS.SNOW}
        />
      </TouchableOpacity>
      <View style={styles.descriptionWrapper}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.delivery}>30-45 min</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
}
