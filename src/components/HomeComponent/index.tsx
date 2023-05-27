import React, { useState } from "react";
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
  const rachas = [ //Substituir pelos dados do Firebase
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "50",
      local: "Casa Da Mãe Joana",
    },
    {
      datahora: Date.now(),
      emailAdm: "arianekevinny@gmail.com",
      jogadoresmax: "3",
      local: "aaaaaaaaaaaaaaaaaaa",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "50",
      local: "Arena do seu jão",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "5",
      local: "Rfc",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "50",
      local: "Arena do seu jão",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "",
      local: "",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "5",
      local: "A",
    },
    {
      datahora: Date.now(),
      emailAdm: "arianekevinny@gmail.com",
      jogadoresmax: "50",
      local: "UFCA Juazeiro do norte",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "5",
      local: "A",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "50",
      local: "Arena do seu jão",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "5",
      local: "Rfc",
    },
    {
      datahora: Date.now(),
      emailAdm: "raphaelriven@gmail.com",
      jogadoresmax: "50",
      local: "Arena do seu jão",
    },
  ];

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  function handleSignOut() {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  }

  function getRachas(): JSX.Element {
    //const snapshot = firestore().collection('Rachas').get()

    return rachas.map((racha, index) => {
      return (
        <View key={index} style={styles.cardContext}>
          <RachaCardView
            adm={racha.emailAdm}
            jogadoresMax={racha.jogadoresmax}
            dataHora={racha.datahora}
            local={racha.local}
            nomeDoRacha={"Valendo um Guaraná"}
          />
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <IconButton
        icon={"menu"}
        containerColor="white"
        size={30}
        onPress={() => {
          handleSignOut();
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
