import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
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
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
