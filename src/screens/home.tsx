/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

function Home({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Ir para tela de login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

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
