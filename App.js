import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import RootNavigation from './navigation';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const App: () => Node = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: 'SET_LOCATION',
          payload: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      error => {
        console.log('error', error);
      },
      {enableHighAccuracy: true},
    );
  }, []);

  return <RootNavigation />;
};

const styles = StyleSheet.create({});

export default App;
