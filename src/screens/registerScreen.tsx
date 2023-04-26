/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import RegisterComponent from '../components/userRegister';

function LoginScreen(): JSX.Element {
  return (
    <View>
      <RegisterComponent />
    </View>
  );
}

export default LoginScreen;
