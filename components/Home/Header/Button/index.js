import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import COLORS from '../../../../constants/colors';

const HeaderButton = ({title, activeTab, setActiveTab}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: activeTab === title ? COLORS.BLACK : COLORS.SNOW},
      ]}
      onPress={() => setActiveTab(title)}>
      <Text
        style={[
          styles.text,
          {color: activeTab === title ? COLORS.SNOW : COLORS.BLACK},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
