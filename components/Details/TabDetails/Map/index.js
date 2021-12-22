import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {GOOGLE_MAPS_API_KEY} from '@env';

const Map = () => {
  const selector = useSelector(state => state.location);
  const [pos, setPos] = useState(selector.location);
  const [businessesPos, setBusinessesPos] = useState(selector.business);

  useEffect(() => {
    let cancel = false;

    if (cancel) {
      return;
    }
    setPos(selector.location);
    setBusinessesPos(selector.business);

    return () => {
      cancel = true;
    };
  }, [selector.business, selector.location]);

  const ShowMap = () => {
    if (businessesPos.latitude && businessesPos.longitude) {
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
            onStart={params => {
              console.log(
                `Started routing between "${params.origin}" and "${
                  params.destination
                }"${
                  params.waypoints.length
                    ? ' using waypoints: ' + params.waypoints.join(', ')
                    : ''
                }`,
              );
            }}
            onError={errorMessage => {
              console.log(errorMessage);
            }}
            resetOnChange={false}
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
