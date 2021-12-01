import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import HeaderTabs from '../../components/Header/Tabs';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import PlaceList from '../../components/Places/PlaceList';
import axios from 'axios';

const YELP_API_KEY =
  '8LQucso6rGHh8ONa8Yc76T6Nlu4HqN-o1CRpFQUce9SQxZmdKRfnc9-ZWo-SVtcGXN0_NSQJPuSAd30dOHRLWU6AZWj2kiy3wMA2Wf-YpTpYta_UmmJTY7Iv4nOlYXYx';

export default function Home() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const getPlacesFromYelp = async () => {
      const yelpURL =
        'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego';

      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
      const res = await axios.get(yelpURL, apiOptions);
      return res.data.businesses;
    };
    getPlacesFromYelp().then(res => setPlaces(res));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <PlaceList places={places} />
      </ScrollView>
    </SafeAreaView>
  );
}
