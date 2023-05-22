import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/home';
import {RegisterRachaScreen} from '../screens/registerRachaScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cadastrar Time" component={RegisterRachaScreen} />
    </Tab.Navigator>
  );
}
