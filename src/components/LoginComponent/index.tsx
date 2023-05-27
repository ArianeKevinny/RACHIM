/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import {TextInput, Button, Switch} from "react-native-paper";
import styles from "./style";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
//import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function LoginComponent(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  //Hooks usados no icone do olho para "mostrar senha"
  const [showPassword, setShowPassword] = useState(false);
  const [iconName, setIconName] = useState("eye-outline");

  const navigation = useNavigation();

  function handleSignIn() {
    auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        Alert.alert("Logado com sucesso");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          Alert.alert("Usuário não encontrado!");
        }
        else if (error.code === "auth/wrong-password") {
          Alert.alert("Senha Inválida!");
        }
        else {
          Alert.alert("Ops! Algo de errado aconteceu. Por favor, tente novamente.");
        }
        console.log(error);
      });
    setLoading(false)
  }

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email.trim())
      .then(() =>
        Alert.alert("Redefinir senha", "Enviamos um e-mail para você")
      )
      .catch((error) => console.log(error));
  }

  function googleLogin() {
    Alert.alert("N implementado");
  }

  //Função para definir icone do olho para "mostrar senha"
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setIconName("eye" + (!showPassword ? "-off" : "") + "-outline");
  };

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <View style={styles.container}>
        <Image
          source={require("../../images/app-logo.png")}
          style={styles.logo}
        />

        <TextInput
          activeOutlineColor="#23A618"
          style={styles.textInput}
          selectTextOnFocus={true}
          placeholder="Informe seu email"
          autoComplete="email"
          value={email}
          onChangeText={(input) => {setEmail(input)}}
          mode="outlined"
          label="Email"
          left={<TextInput.Icon icon={"email-outline"} />}
        />

        <TextInput
          activeOutlineColor="#23A618"
          style={styles.textInput}
          placeholder="Informe sua senha"
          autoComplete="password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          left={<TextInput.Icon icon={"lock-outline"} />}
          label="Senha"
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={iconName}
              onPress={() => {
                setLoading(false);
                handleShowPassword();
              }}
            />
          }
        />
        
        <View style={styles.forgotPasswordContext}>
          <TouchableOpacity
            onPress={() => {
              handleForgotPassword();
            }}
          >
            <Text style={styles.textLink}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <Button
          style={styles.loginButton}
          buttonColor='#23A618'
          textColor='white'
          icon="send"
          mode="elevated"
          loading = {loading}
          onPress={() => {
            handleSignIn();
          }}
        >
          Entrar
        </Button>

        

        <View style={styles.orLineContext}>
          <View style={styles.line} />
          <View style={{ marginHorizontal: 10 }}>
            <Text>OU</Text>
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.googleLoginContext}>
          <TouchableOpacity
            style={styles.googleLoginButton}
            onPress={() => {
              googleLogin();
            }}
          >
            <Image
              source={require("../../images/icons/google-icon.png")}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
            <Text style={styles.googleLoginText}>Entre com o Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.createAccountContext}>
          <Text>Ainda não tem uma conta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <Text style={styles.textLink}> Cadastre-se agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginComponent;
