import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function Divider({
  fontSize,
  hrPadding,
  hrStyles = 0,
  lineColor,
  text,
  textPadding = 3,
  textStyles,
  thickness = 1,
}) {
  return (
    <View
      style={[
        styles.row,
        {marginLeft: hrPadding, marginRight: hrPadding},
        hrStyles,
      ]}>
      <View
        style={[styles.side, {height: thickness, backgroundColor: lineColor}]}
      />
      {/*<Text
        style={[
          {fontSize: fontSize},
          {paddingLeft: textPadding, paddingRight: textPadding},
          textStyles,
        ]}>
        {text}
      </Text>
      <View
        style={[styles.side, {height: thickness, backgroundColor: lineColor}]}
      />*/}
    </View>
  );
}

export default Divider;
