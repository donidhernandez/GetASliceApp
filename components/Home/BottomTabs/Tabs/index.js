import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import IconButton from '../Button';

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <IconButton icon="home-sharp" text="Home" />
      <IconButton icon="search-sharp" text="Browse" />
      <IconButton icon="pizza-sharp" text="Grocery" />
      <IconButton icon="receipt-sharp" text="Orders" />
      <IconButton icon="person-sharp" text="Account" />
    </View>
  );
}
