import React, {useState} from 'react';
import {Text, View} from 'react-native';
import HeaderButton from '../Button';
import styles from './styles';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

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
