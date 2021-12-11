import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import COLORS from '../../../../constants/colors';
import MenuList from '../MenuList';

const SecondRoute = () => <View style={{flex: 1, backgroundColor: '#fff'}} />;
const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#fff'}} />;

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: COLORS.TART_ORANGE, color: COLORS.BLACK}}
  />
);

export default function TabDetails({foods}) {
  const FirstRoute = () => <MenuList foods={foods} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Menu'},
    {key: 'second', title: 'Reviews'},
    {key: 'third', title: 'Location'},
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
