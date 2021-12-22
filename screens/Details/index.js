import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import About from '../../components/Details/About';
import pizza from '../../assets/images/pizza.jpeg';
import banner from '../../assets/images/banner.png';

import TabDetails from '../../components/Details/TabDetails/Tabs';

const Details = ({route}) => {
  const id = useState(route.params.id);
  return (
    <SafeAreaView style={styles.container}>
      <About route={route} />
      <TabDetails route={route} />
    </SafeAreaView>
  );
};

export default Details;
