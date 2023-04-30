/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

function UserRegister(): JSX.Element {
  const navigation = useNavigation() 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNewAccount() {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use'){
        Alert.alert("Esse e-mail já está em uso!");
      }
      if (error.code === 'auth/invalid-email'){
        Alert.alert("E-mail inválido!");
      }
    })
    //Registro
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
        placeholder="Informe uma senha de no minimo 6 digítos"
        secureTextEntry={true}
        selectTextOnFocus={true}
        autoComplete="password"
        defaultValue={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleNewAccount()
        }}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSimple}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textButtonSimple}>Já possuo conta</Text>
      </TouchableOpacity>
      
    </View>
  );
}

export default UserRegister;
