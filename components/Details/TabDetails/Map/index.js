import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {useSelector} from 'react-redux';
import {YELP_API_KEY} from '../../../../constants/api_key';
import axios from 'axios';

const GOOGLE_MAPS_API_KEY = 'AIzaSyD76jpwAb7XIWhNEoV7htmCaiM7LUyHB4w';

const Map = ({id}) => {
  const selector = useSelector(state => state.location);
  const [pos, setPos] = useState(selector.location);
  const [businessesPos, setBusinessesPos] = useState({});

  useEffect(() => {
    const getBusinessCoordinates = async () => {
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };

      const res = await axios
        .get(`https://api.yelp.com/v3/businesses/${id}`, apiOptions)
        .catch(e => console.log(e));

      return {
        latitude: res.data.coordinates.latitude,
        longitude: res.data.coordinates.longitude,
      };
    };
    getBusinessCoordinates().then(res => setBusinessesPos(res));

    return () => {
      setBusinessesPos({});
    };
  }, []);

  console.log('businesses', businessesPos);

  const ShowMap = () => {
    if (businessesPos.latitude) {
      return (
        <MapView
          style={styles.map}
          followsUserLocation={true}
          initialRegion={{
            latitude: pos.latitude,
            longitude: pos.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={pos} />
          <Marker coordinate={businessesPos} />
          <MapViewDirections
            origin={pos}
            destination={businessesPos}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        </MapView>
      );
    } else {
      return <Text />;
    }
  };

  return (
    <View style={styles.container}>
      <ShowMap />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
