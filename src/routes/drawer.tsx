import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RegisterRachaScreen } from '../screens/registerRachaScreen';
import { GerenciaRachaScreen } from '../screens/gerenciaRachaScreen';
import { userScreen } from '../screens/userScreen';


const Drawer = createDrawerNavigator();

export default function Drawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Registar Racha"
        component={RegisterRachaScreen}
        options={
          {
            headerShown: false,
            title: "Registar Racha"

          }
        }
        />
      <Drawer.Screen 
        name="Gerenciar Racha"
        component={GerenciaRachaScreen}
        options={
          {
            headerShown: false,
            title: "Gerenciar seus rachas"

          }
        }
        />
      <Drawer.Screen 
        name="Usuário"
        component={userScreen}
        options={
          {
            headerShown: false,
            title: "Seu usuário"

          }
        }
        />

    </Drawer.Navigator>
  );
}
