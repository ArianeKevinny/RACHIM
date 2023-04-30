/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import auth from '@react-native-firebase/auth';

const user = auth().currentUser;

export function Home(): JSX.Element {
  function handleSignOut(){
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  return (
    <View >
      <Text>Welcome {user?.displayName} </Text>
      
      <TouchableOpacity onPress={() => handleSignOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

