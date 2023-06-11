import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import PartidaJogador from "../PartidaJogador";

type partidaMenuProps = {
  option: String;
  time1info: { timePrincipal: []; timeReserva: [] };
  time2info: { timePrincipal: []; timeReserva: [] };
};

function PartidaMenuOptionView(props: partidaMenuProps): JSX.Element {
  const time1 = props.time1info;
  const time2 = props.time2info;

  function renderPlayersList(lista: Array<any>): JSX.Element {
    return lista.length > 0 ? (
      lista.map((value, index) => {
        return (
          <View key={index} style={{ height: 40, width: "100%" }}>
            <PartidaJogador nome={value} />
          </View>
        );
      })
    ) : (
      <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Não há jogadores cadastrados</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContext}>
        {renderPlayersList(
          props.option == "Escalação" ? time1.timePrincipal : time1.timeReserva
        )}
      </View>
      <View style={styles.divisor} />
      <View style={styles.listContext}>
        {renderPlayersList(
          props.option == "Escalação" ? time2.timePrincipal : time2.timeReserva
        )}
      </View>
    </View>
  );
}

export default PartidaMenuOptionView;
