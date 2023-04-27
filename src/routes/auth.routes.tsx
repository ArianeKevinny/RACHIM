import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LoginScreen} from '../screens/loginScreen';
import {RegisterScreen} from '../screens/registerScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={LoginScreen} />
      <Screen name="register" component={RegisterScreen} />
    </Navigator>
  );
}
