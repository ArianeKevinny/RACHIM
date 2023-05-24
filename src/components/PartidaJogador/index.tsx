import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

type jogadorProps = {
  nome: String;
};

function PartidaJogador(props: jogadorProps): JSX.Element {
  return (
    <View style={styles.jogadorContext}>
      <Text numberOfLines={1} style={styles.nomeJogador}>{props.nome}</Text>
    </View>
  );
}

export default PartidaJogador;
