import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles';
import axios from 'axios';
import SearchBar from '../../components/Home/SearchBar';
import Categories from '../../components/Home/Categories';
import PlaceList from '../../components/Home/Places/PlaceList';
/*import BottomTabs from '../../components/Home/BottomTabs/Tabs';*/
import HeaderTabs from '../../components/Home/Header/Tabs';
import {YELP_API_KEY} from '../../constants/api_key';

export default function Home({navigation}) {
  const [places, setPlaces] = useState([]);
  const [city, setCity] = useState('San Antonio');
  const [activeTab, setActiveTab] = useState('Delivery');

  useEffect(() => {
    const getPlacesFromYelp = async () => {
      const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
      const res = await axios
        .get(yelpURL, apiOptions)
        .catch(e => console.log(e));

      if (res.data) {
        return res.data.businesses.filter(business =>
          business.transactions.includes(activeTab.toLowerCase()),
        );
      }
    };
    getPlacesFromYelp().then(res => setPlaces(res));
  }, [activeTab, city]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <View>
        <Categories />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PlaceList places={places} navigation={navigation} />
      </ScrollView>
      {/* <BottomTabs />*/}
    </SafeAreaView>
  );
}
