import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RegisterRachaScreen } from '../screens/registerRachaScreen';
import { GerenciaRachaScreen } from '../screens/gerenciaRachaScreen';
import { AboutScreen } from '../screens/aboutScreen';
import { Home } from '../screens/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Gerar Partida" screenOptions={{tabBarActiveTintColor: 'green'}}>
      <Tab.Screen name="Gerar Partida" component={GerenciaRachaScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )}} />
      <Tab.Screen name="Registar Racha" component={RegisterRachaScreen} options={{headerShown: false,
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="card-plus" color={color} size={size} />
        )}}  />
      <Tab.Screen name="Rachas" component={Home} options={{headerShown: false,
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
        )}} />
      <Tab.Screen name="Sobre" component={AboutScreen} options={{headerShown: false,
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart-multiple" color={color} size={size} />
        )}} />
    </Tab.Navigator>
  );
}