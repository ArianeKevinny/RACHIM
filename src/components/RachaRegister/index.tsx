/* eslint-disable prettier/prettier */
/* https://github.com/henninghall/react-native-date-picker */
//<IconButton icon={"arrow-left"} mode='contained' containerColor="white" style={{position: 'absolute', top: 10, left: 10, zIndex: 50}} />

import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import styles from "./style";

function RachaRegister(): JSX.Element {
  const user = auth().currentUser;
  const email = user?.email;
  const [nomeDoRacha, setNomeDoRacha] = useState("");
  const [date, setDate] = useState(new Date());
  const [local, setLocal] = useState("");
  const [jogadores, setJogadores] = useState("");
  const [loading, setLoading] = useState(false);

  const [openDateModal, setOpenDateModal] = useState(false);

  const toggleModalVisibility = () => {
    setOpenDateModal(!openDateModal);
  };

  const onChanged = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        Alert.alert("Insira apenas números");
      }
    }
    setJogadores(newText);
  };

  function cadastrarTime() {
    firestore()
      .collection("Rachas")
      .add({
        emailAdm: { email },
        datahora: { date },
        local: { local },
        jogadoresmax: { jogadores },
      })
      .then(() => {
        Alert.alert("Racha adcionado!");
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <View style={styles.container}>
        <DatePicker
          title={"Selecione a data da partida"}
          confirmText="Confirmar"
          cancelText="Cancelar"
          modal
          open={openDateModal}
          date={date}
          minimumDate={new Date()}
          locale="pt-BR"
          textColor="green"
          onConfirm={(date) => {
            toggleModalVisibility();
            setDate(date);
          }}
          onCancel={() => {
            toggleModalVisibility();
          }}
        />
        <View style={styles.titleContext}>
          <Text style={styles.title}>Agendar Racha</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.subForm}>


          <View style={styles.orLineContext}>
          <View style={styles.line} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.subFormTitle}>Informações Básicas:</Text>
          </View>
          <View style={styles.line} />
        </View>


            <View>
              <TextInput
                value={nomeDoRacha}
                onChangeText={setNomeDoRacha}
                mode="outlined"
                style={styles.textInput}
                label="Nome Do Racha"
                outlineColor="green"
                activeOutlineColor="green"
              />
            </View>
            <View>
              
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  onChangeText={(text) => onChanged(text)}
                  value={jogadores}
                  label="Máximo De Jogadores"
                  maxLength={2}
                  style={styles.textInput}
                  outlineColor="green"
                  activeOutlineColor="green"
                />
             
            </View>
          </View>

          <View style={styles.subForm}>
            <View>
            <View style={styles.orLineContext}>
          <View style={styles.line} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.subFormTitle}>Data e Hora:</Text>
          </View>
          <View style={styles.line} />
        </View>
              <TouchableOpacity
                style={styles.dateInputButton}
                onPress={toggleModalVisibility}
              >
                <View style={styles.dateInputView}>
                  <Text style={styles.dateString}>
                    {date.toLocaleString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </View>
                <View style={styles.calendarIconContext}>
                  <IconButton
                    icon="calendar"
                    size={40}
                    onPress={toggleModalVisibility}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.orLineContext}>
          <View style={styles.line} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.subFormTitle}>Endereço:</Text>
          </View>
          <View style={styles.line} />
        </View>
            <TextInput
              mode="outlined"
              selectTextOnFocus={true}
              label="Informações do local"
              multiline={true}
              numberOfLines={3}
              autoComplete="street-address"
              value={local}
              onChangeText={setLocal}
              style={styles.textInput}
              outlineColor="green"
              activeOutlineColor="green"
            />
          </View>
          <View style={styles.submitButton}>
            <Button
              mode="elevated"
              buttonColor={"#0E6F06"}
              rippleColor="#23A618"
              textColor="white"
              disabled={loading}
              loading={loading}
              onPress={() => {
                setLoading(true);
                cadastrarTime();
              }}
            >
              <Text>Confirmar</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default RachaRegister;
