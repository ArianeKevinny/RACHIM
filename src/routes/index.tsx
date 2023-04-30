import React from "react";
import {LoginScreen} from '../screens/loginScreen';
import {RegisterScreen} from '../screens/registerScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
