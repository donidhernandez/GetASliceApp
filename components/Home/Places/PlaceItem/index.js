import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../../constants/colors';
import {Rating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Divider from '../../../Divider';

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
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <Divider
          lineColor={COLORS.BACKGROUND}
          hrStyles={{
            paddingVertical: 5,
          }}
        />
        <View style={styles.description}>
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
          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{rating}</Text>
              <Ionicons name="star-sharp" size={20} style={styles.ratingIcon} />
            </View>
            <Text style={styles.reviewText}> {reviews} reviews </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
