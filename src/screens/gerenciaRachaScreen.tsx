/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Divider, IconButton, Title } from "react-native-paper";

export function GerenciaRachaScreen({ navigation }): JSX.Element {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);
  const [Time1, setTime1] = useState([]);
  const [Time2, setTime2] = useState([]);
  const [size, setSize] = useState("0");

  const handleChangeNome = (inputNome: React.SetStateAction<string>) => {
    setNome(inputNome);
  };

  const AdicionarPessoa = () => {
    if (nome !== "") {
      setNomes([...nomes, nome]);
      setNome("");
    }
  };

  const excluirJogador = (index: number) => {
    try {
      const novaLista = [...nomes];
      novaLista.splice(index, 1);
      setNomes(novaLista);
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    sortearTimes();
  }, [nomes])

  const sortearTimes = () => {
    if (nomes.length < Number.parseInt(size) * 2) {
      Alert.alert(
        "Jogadores insuficientes",
        "Você escolheu " +
          size +
          " jogadores por time, mas não cadastrou nomes suficientes."
      );
      return;
    }
    console.log("--> Nomes:", nomes);
    const TimeFull = randomizer(nomes);
    const JogadoresPorTime = Math.ceil(TimeFull.length / 2);
    const TimeA = TimeFull.slice(0, JogadoresPorTime);
    const TimeB = TimeFull.slice(JogadoresPorTime);

    setTime1(TimeA);
    setTime2(TimeB);
  };

  const FinalizarTime = () => {
    navigation.navigate("Partida", {
      Time1: [...Time1],
      Time2: [...Time2],
      TeamSize: Number.parseInt(size),
    });
  };

  const randomizer = (array: never[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const novoSorteio = () => {
    setTime1([]);
    setTime2([]);
    setNomes([]);
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <TouchableOpacity style={styles.shuffleButton} onPress={FinalizarTime}>
          <IconButton icon={"dice-multiple-outline"} />
          <Text style={{fontWeight: '800', color: 'black', }} numberOfLines={2}>Sortear Times</Text>
        </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.containerScroll}>
      
      <View style={styles.container}>
        
      <Text style={styles.inputLabel}>Adicionar Jogador:</Text>

        <View style={styles.addPlayerContext}>
        
          <View style={styles.addPlayerView}>
            <TextInput
              style={styles.addPlayerInput}
              placeholder="Nome do jogador"
              onChangeText={handleChangeNome}
              value={nome}
            />
            <TouchableOpacity
              style={styles.addPlayerButton}
              onPress={AdicionarPessoa}
            >
              <IconButton icon={"check-bold"} iconColor="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.sizeContext}>
          <Text style={styles.inputLabel}>Jogadores Por Time:  </Text>
          <View style={styles.sizeView}>
            <TextInput
              style={styles.sizeInput}
              placeholder="Quantidade"
              onChangeText={(value) => setSize(value)}
              value={size}
              keyboardType="numeric"
              maxLength={2}
              textAlign="center"
            />
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.listViewContext}>
          <Title>Lista de Jogadores</Title>
          <View style={styles.listView}>
            <View style={{borderBottomWidth: 0.5, borderBottomColor: 'green', alignItems: 'center'}}>
              <Text numberOfLines={1} style={{color: 'black'}}>Inscritos: {nomes.length}</Text>
            </View>
            {nomes.map((value, index) => {
              return (
                <View
                  key={index}
                  style={{
                    height: 40,
                    width: "100%",
                    maxWidth: "100%",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <PartidaJogador nome={value} />
                  </View>

                  <TouchableOpacity
                    onPress={() => excluirJogador(index)}
                    style={{
                      borderWidth: 0.5,
                      borderColor: "green",
                      borderTopWidth: 0,
                      justifyContent: "center",
                      width: "15%",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      icon="delete-outline"
                      size={20}
                      iconColor="red"
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
    
  );
}

import { StyleSheet } from "react-native";
import PartidaJogador from "../components/PartidaJogador";

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    width: "100%",
    minHeight: "100%",
    paddingBottom: 40,
  },
  container: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  addPlayerContext: {
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  addPlayerView: {
    flexDirection: "row",
  },
  addPlayerButton: {
    backgroundColor: "green",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  addPlayerInput: {
    borderWidth: 0.5,
    borderColor: "green",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingLeft: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  inputLabel: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  listViewContext: {
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listView: {
    flexGrow: 1,
    width: "90%",
    maxWidth: '90%',
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 15,
    paddingBottom: 15,
  },
  sizeContext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shuffleButton: {
    backgroundColor: "#EDD224",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    paddingRight: 10,
    position: "absolute",
    zIndex: 99,
    bottom: 10,
    right: 10,
  },
  sizeView: {},
  sizeInput: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 45,
  },
  line: {height: 1, width: '90%', backgroundColor: 'green', marginVertical: 10},
});
