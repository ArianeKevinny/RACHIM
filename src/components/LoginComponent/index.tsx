/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
//import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function LoginComponent(): JSX.Element {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleSignIn() {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert("Logado com sucesso");
    })
    .catch((error) => console.log(error));
  }

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você"))
    .catch(error => console.log(error));
  }


  return (
    <View style={styles.loginScreenContext}>

      <Text style={styles.loginScreenText}>Email:</Text>
      <TextInput
        style={styles.textInput}
        selectTextOnFocus={true}
        placeholder="Informe um email válido"
        autoComplete="email"
        defaultValue={email}
        onChangeText={setEmail}
      />

      <Text style={styles.loginScreenText}>Senha:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe sua senha"
        secureTextEntry={true}
        selectTextOnFocus={true}
        autoComplete="password"
        defaultValue={password}
        onChangeText={setPassword}
      />

  
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignIn()
        }}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('register' as never)}>
        <Text style={styles.textButton}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleForgotPassword();
        }}>
        <Text style={styles.textButton}>Esqueci senha</Text>
      </TouchableOpacity>

    </View>
  );
}
