import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Moment from 'moment';
import {Rating} from 'react-native-ratings';

const ReviewItem = ({review}) => {
  const date = Moment(review.time_created).format('DD/MM/YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={{uri: review.user.image_url}}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{review.user.name}</Text>
      </View>
      <View style={styles.row}>
        <Rating
          style={styles.rating}
          startingValue={review.rating}
          readonly
          fractions={1}
          imageSize={18}
        />
        <Text>{date}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
