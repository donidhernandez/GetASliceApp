import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import HeaderTabs from '../../components/Header/Tabs';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
