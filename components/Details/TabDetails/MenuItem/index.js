import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import COLORS from '../../../../constants/colors';
import Divider from '../../../Divider';

const MenuItem = ({food}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text style={styles.price}>{food.price}</Text>
      </View>
      <View>
        <Image style={styles.image} source={food.image} />
      </View>
      <Divider lineColor={COLORS.ORANGE_YELLOW_CRAYOLA} thickness={2} />
    </View>
  );
};

export default MenuItem;
