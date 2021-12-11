import React from 'react';
import Divider from '../../../Divider';
import {ScrollView, View} from 'react-native';
import MenuItem from '../MenuItem';

export default function MenuList({foods}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => {
        return (
          <View key={index}>
            <MenuItem food={food} />
            <Divider lineColor="#ccc" thickness={1} />
          </View>
        );
      })}
    </ScrollView>
  );
}
