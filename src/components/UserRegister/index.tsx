/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

export function UserRegister(): JSX.Element {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation()

  function register() {
    setIsLoading(true);

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use'){
        console.log("Esse e-mail já está em uso!");
      }
      if (error.code === 'auth/invalid-email'){
        console.log("E-mail inválido!");
      }
      console.log(error);
    })
    .finally(() => setIsLoading(false));
    //Registro
  }

  return (
    <View style={styles.loginScreenContext}>
      <Text style={styles.loginScreenText}>Usuário:</Text>
      <TextInput
        style={styles.textInput}
        selectTextOnFocus={true}
        placeholder="Informe seu usuário"
        autoComplete="username"
        defaultValue={username}
        onChangeText={setUsername}
      />

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
        placeholder="Informe sua senha de no minimo 6 digítos"
        secureTextEntry={true}
        selectTextOnFocus={true}
        autoComplete="password"
        defaultValue={password}
        onChangeText={setPassword}
      />

      isLoading = {isLoading}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          register();
        }}>
        <Text style={styles.textButton}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
