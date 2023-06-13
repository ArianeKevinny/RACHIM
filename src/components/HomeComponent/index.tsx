import React, { useState, useEffect } from "react";
import styles from "./style";
import { ScrollView, View} from "react-native";
import auth from "@react-native-firebase/auth";
import {
  Searchbar,
  IconButton,
} from "react-native-paper";
import RachaCardView from "../RachaCardView";
import firestore from "@react-native-firebase/firestore";

const user = auth().currentUser;

function HomeComponent({ navigation }: any): JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  function handleSignOut() {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  }

  function getRachas(): JSX.Element {

    const [rachas, setRachas] = useState([])

    useEffect(()=>{
    firestore().collection("Rachas")
    .get()
    .then(querySnapshot => {
      lista = []
      let myMap = new Map<string, number>();
  
      console.log('Total users: ', querySnapshot.size);
  
      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        myMap.set("id", documentSnapshot.id);
        myMap.set("datahora", documentSnapshot.data().datahora.seconds);
        myMap.set("emailAdm", documentSnapshot.data().emailAdm);
        myMap.set("local", documentSnapshot.data().local);
        myMap.set("nome", documentSnapshot.data().nome);
        myMap.set("jogadores", documentSnapshot.data().jogadoresmax);
        lista.push(myMap);
      });

      setRachas(lista)
      console.log("Racha: ", rachas)
    })
    });

    return rachas.map((racha, index) => {
      return (
        <View key={index} style={styles.cardContext}>
          <RachaCardView
            id={racha.id}
            adm={racha.emailAdm}
            jogadoresMax={racha.jogadoresmax}
            dataHora={racha.datahora}
            local={racha.local}
            nomeDoRacha={racha.nome}
          />
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <IconButton
        icon={"logout"}
        containerColor="white"
        size={30}
        onPress={() => {
          navigation.navigate('Registar Racha');
        }}
        style={styles.drawerIcon}
      />
      <Searchbar
        placeholder="Pesquisar Racha"
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={2}
        style={styles.searchBar}
      />

      <IconButton
        onPress={() => {
          handleSignOut();
        }}
        icon={"plus"}
        size={30}
        containerColor="#23A618"
        iconColor="gold"
        mode="contained"
        style={styles.addRachaIcon}
      />
      <View style={styles.rachasListContext}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {getRachas()}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeComponent;