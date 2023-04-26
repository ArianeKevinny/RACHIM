/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {UserRegister} from '../components/UserRegister';
import {useNavigation} from '@react-navigation/native';

export function RegisterScreen() {
  const navigation = useNavigation();
  
  return (
    <View>
      <UserRegister />
      
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Text>Já possuo conta!</Text>
      </TouchableOpacity>

    </View>
  );
}
