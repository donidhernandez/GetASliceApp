import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function IconButton({icon, text}) {
  return (
    <TouchableOpacity>
      <View>
        <Ionicons name={icon} size={25} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
