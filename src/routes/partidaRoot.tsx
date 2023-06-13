import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PartidaGen } from '../screens/partidaScreen';
import MyTabs from './myTabs'

const Stack = createNativeStackNavigator();

export default function PartidaRoot() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Partida" component={PartidaGen} />
    </Stack.Navigator>
  );
}
