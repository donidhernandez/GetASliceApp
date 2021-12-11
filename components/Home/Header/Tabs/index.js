import React from 'react';
import {View} from 'react-native';
import HeaderButton from '../Button';
import styles from './styles';

const HeaderTabs = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.buttonsContainer}>
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;
