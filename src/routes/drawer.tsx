import React from 'react';
import { RegisterRachaScreen } from '../screens/registerRachaScreen';
import { GerenciaRachaScreen } from '../screens/gerenciaRachaScreen';
import { UserScreen } from '../screens/userScreen';
import { Home } from '../screens/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PartidaGen } from '../screens/partidaScreen';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Drawer.Screen name="Registar Racha" component={RegisterRachaScreen} options={{headerShown: false}}  />
      <Drawer.Screen name="Gerenciar Racha" component={GerenciaRachaScreen} options={{headerShown: false}} />
      <Drawer.Screen name="Partida" component={PartidaGen} options={{headerShown: false}} />
      <Drawer.Screen name="Usuário" component={UserScreen} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
}
