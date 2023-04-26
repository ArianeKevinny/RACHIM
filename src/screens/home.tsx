/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import auth from '@react-native-firebase/auth';



export function Home(): JSX.Element {
  function handleSignOut(){
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("AAAAAA")}>
        <Text style={styles.text}>LOGADO</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleSignOut()}>
        <Text style={styles.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});
