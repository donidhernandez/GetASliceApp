import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

export default function Categories() {
  const categories = [
    {
      image: require('../../../assets/icons/pickups.png'),
      text: 'Pick-up',
    },
    {
      image: require('../../../assets/icons/burger.png'),
      text: 'Breads',
    },
    {
      image: require('../../../assets/icons/fries.png'),
      text: 'Fast Food',
    },
    {
      image: require('../../../assets/icons/pizza.png'),
      text: 'Pizza',
    },
    {
      image: require('../../../assets/icons/shakes.png'),
      text: 'Drinks',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Image style={styles.image} source={category.image} />
            <Text style={styles.text}>{category.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
