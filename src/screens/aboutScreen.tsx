/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function AboutScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.baseText}>
      Essa página está
      <Text style={styles.innerText}> em construção!</Text>
    </Text>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 200,
    padding: 60,
  },
  baseText: {
    color: 'black',
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});