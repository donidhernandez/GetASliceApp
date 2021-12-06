import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({cityHandler}) => {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyD76jpwAb7XIWhNEoV7htmCaiM7LUyHB4w'}}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        styles={styles.searchBar}
        placeholder="Search"
        renderLeftButton={() => (
          <View style={styles.searchIcon}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.loadingResults}>
            <AntDesign name="clockcircle" size={11} style={styles.clockIcon} />
            <Text style={styles.searchText}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
