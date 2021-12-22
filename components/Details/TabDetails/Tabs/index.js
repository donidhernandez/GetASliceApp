import React, {useCallback, useEffect, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import COLORS from '../../../../constants/colors';
import Map from '../Map';
import ReviewList from '../Reviews/ReviewList';
import {YELP_API_KEY} from '../../../../constants/api_key';
import axios from 'axios';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: COLORS.TART_ORANGE, color: COLORS.BLACK}}
  />
);

export default function TabDetails({route}) {
  const {id} = route.params;
  const FirstRoute = () => <ReviewList id={id} />;
  const SecondRoute = () => <Map id={id} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Reviews'},
    {key: 'second', title: 'Location'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
