/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
//import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function LoginComponent(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation() 

  function handleSignIn() {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert("Logado com sucesso");
    })
    .catch((error) => {
      if(error.code === 'auth/user-not-found'){
        Alert.alert("Usuário não encontrado!")
      }
      if(error.code === 'auth/wrong-password'){
        Alert.alert("Senha Inválida!")
      }
      console.log(error);
    })
  }

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você"))
    .catch(error => console.log(error));
  }

  function googleLogin() {
    Alert.alert("N implementado")
  }

  return (
    <View style={styles.loginScreenContext}>

      <Text style={styles.loginScreenText}>Email:</Text>
      <TextInput
        style={styles.textInput}
        selectTextOnFocus={true}
        placeholder="Informe seu email"
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
        onPress={() => {
          googleLogin()
        }}>
        <Text style={styles.textButton}>Login com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Register')
        }}>
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

export default LoginComponent;
