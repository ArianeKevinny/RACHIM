/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import { TextInput, Button, IconButton, Title } from "react-native-paper";
import auth from "@react-native-firebase/auth";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

function UserRegister(): JSX.Element {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const [username, setUsername] = useState("");

  //Hooks usados no icone do olho para "mostrar senha"
  const [showPassword, setShowPassword] = useState(false);
  const [iconName, setIconName] = useState("eye-off-outline");

  function handleNewAccount() {
    if (password !== confirmPassword) {
      Alert.alert("Senha Inválida", "As senhas não coincidem.");
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Esse e-mail já está em uso!");
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("E-mail inválido!");
        }
      });
    setLoading(false)
    //Registro
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setIconName("eye" + (!showPassword ? "-off" : "") + "-outline");
  };

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
   
      <View style={styles.container}>
      
        <View style={styles.simpleHeader}>
        <IconButton
          icon="arrow-left"
          size={25}
          onPress={() => navigation.goBack()}
        />
        </View>

        
        <View style={styles.welcomeContext} >
        <Image
                  source={require("../../images/app-logo.png")}
                  style={styles.logo}
                />
                <Title style={styles.screenTitle} >BEM-VINDO(A), PLAYER!</Title>
        </View>
        

        <View style={styles.form}>

        <TextInput 
        label="Nome de Usuário"
        selectionColor="white"
          style={styles.textInput}
          selectTextOnFocus={true}
          activeUnderlineColor="#23A618"
          value={username}
          onChangeText={(input) => {
            setUsername(input);
          }}
          left={<TextInput.Icon icon={'account-outline'}/>}
        />

        <TextInput
        label="Email"
          activeUnderlineColor="#23A618"
          style={styles.textInput}
          selectTextOnFocus={true}
          autoComplete="email"
          value={email}
          onChangeText={(input) => {
            setEmail(input);
          }}
          left={<TextInput.Icon icon={"email-outline"} />}
        />

        <TextInput
          label="Senha"
          activeUnderlineColor="#23A618"
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          left={<TextInput.Icon icon={"lock-outline"} />}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={iconName}
              onPress={() => {
                handleShowPassword();
              }}
            />
          }
        />

        <View style={styles.passwordRequirementsContext}>
          <Text>Requisitos:</Text>
          <Text style={{marginLeft: 15}}> - Minimo de 6 caracteres.</Text>
        </View>

        <TextInput
          label="Confirme sua senha"
          activeUnderlineColor="#23A618"
          style={styles.textInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          left={<TextInput.Icon icon={"lock-outline"} />}
          secureTextEntry={true}
        />

        <Button
          mode="elevated"
          style={styles.button}
          buttonColor="#23A618"
          loading={loading}
          onPress={() => {
            setLoading(true)
            handleNewAccount();
          }}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </Button>

        <TouchableOpacity
          style={styles.textLinkContext}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textLink}>Já possuo conta</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
}

export default UserRegister;
