import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import About from '../../components/Details/About';
import pizza from '../../assets/images/pizza.jpeg';
import banner from '../../assets/images/banner.png';

import TabDetails from '../../components/Details/TabDetails/Tabs';

const foods = [
  {
    title: 'Pork Tacos',
    description:
      'Dried, sour pudding is best blended with instant rice vinegar.',
    price: '$19.28',
    image: pizza,
  },
  {
    title: 'Pork Tacos',
    description:
      'Dried, sour pudding is best blended with instant rice vinegar.',
    price: '$19.28',
    image: pizza,
  },
  {
    title: 'Pork Tacos',
    description:
      'Dried, sour pudding is best blended with instant rice vinegar.',
    price: '$19.28',
    image: pizza,
  },
  {
    title: 'Pork Tacos',
    description:
      'Dried, sour pudding is best blended with instant rice vinegar.',
    price: '$19.28',
    image: pizza,
  },
  {
    title: 'Pork Tacos',
    description:
      'Dried, sour pudding is best blended with instant rice vinegar.',
    price: '$19.28',
    image: pizza,
  },
];

const yelpPlaceDetails = {
  name: 'Pork Tacos',
  image: banner,
  price: '$',
  rating: 4.5,
  reviews: 1500,
  categories: [
    {
      alias: 'coffee',
      title: 'Coffee & Tea',
    },
    {
      alias: 'snacks',
      title: 'Snacks',
    },
    {
      alias: 'ice cream',
      title: 'Ice Cream',
    },
  ],
};

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <About place={yelpPlaceDetails} />
      <TabDetails foods={foods} />
    </SafeAreaView>
  );
};

export default Details;
