import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RegisterRachaScreen } from '../screens/registerRachaScreen';
import { GerenciaRachaScreen } from '../screens/gerenciaRachaScreen';
import { UserScreen } from '../screens/userScreen';
import { Home } from '../screens/home';
import { PartidaGen } from '../screens/partidaScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Registar Racha" component={RegisterRachaScreen} options={{headerShown: false}}  />
      <Tab.Screen name="Gerenciar Racha" component={GerenciaRachaScreen} options={{headerShown: false}} />
      <Tab.Screen name="Partida" component={PartidaGen} options={{headerShown: false}} />
      <Tab.Screen name="Usuário" component={UserScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

