import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const HeaderButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
