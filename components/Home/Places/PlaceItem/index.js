import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../../constants/colors';
import {Rating} from 'react-native-ratings';

export default function PlaceItem({name, image, rating, is_closed, reviews}) {
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
          <Text
            style={{
              backgroundColor: is_closed ? COLORS.TART_ORANGE : COLORS.GREEN,
              color: COLORS.SNOW,
              width: 70,
              padding: 5,
              textAlign: 'center',
              borderRadius: 15,
              marginTop: 10,
            }}>
            {is_closed ? 'Closed' : 'Opened'}
          </Text>
        </View>
        <View style={styles.rating}>
          <Rating
            startingValue={rating}
            readonly
            fractions={1}
            imageSize={20}
          />
          <Text> ({reviews}+) </Text>
        </View>
      </View>
    </View>
  );
}
