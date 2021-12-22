import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {Rating} from 'react-native-ratings';
import COLORS from '../../../constants/colors';
import Divider from '../../Divider';

const About = props => {
  const {name, image, price, rating, reviews, categories, is_closed} =
    props.route.params;

  return (
    <View>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.heading}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.descriptionWrapper}>
            {categories.map((category, index) => {
              return (
                <Text key={index} style={styles.category}>
                  {category.title}
                </Text>
              );
            })}
          </View>
        </View>
        <Divider
          lineColor={COLORS.BACKGROUND}
          hrStyles={{
            paddingVertical: 5,
          }}
        />
        <View style={styles.row}>
          <View>
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
          <View style={styles.row}>
            <Rating
              startingValue={rating}
              readonly
              fractions={1}
              imageSize={20}
            />
            <Text style={styles.reviews}>({reviews} reviews)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;
