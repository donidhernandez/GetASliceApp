import React from 'react';
import {Text, View} from 'react-native';
import HeaderButton from '../Button';
import styles from './styles';

const HeaderTabs = () => {
  return (
    <View style={styles.buttonsContainer}>
      <HeaderButton title="Delivery" />
      <HeaderButton title="Pickup" />
    </View>
  );
};

export default HeaderTabs;
