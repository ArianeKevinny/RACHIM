/* eslint-disable prettier/prettier */
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import HomeComponent from "../components/HomeComponent";


export function Home(): JSX.Element {

  return (
    <View>
      <HomeComponent />
    </View>
  );
}
