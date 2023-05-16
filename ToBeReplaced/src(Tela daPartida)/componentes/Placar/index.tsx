import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import versusIcon from '../../imagens/versusIcon.png';
import Timer from '../timer';

type placarProps = {
  time1Gols: Number;
  time2Gols: Number;
};

function Placar(props: placarProps): JSX.Element {

  return (
    <View style={styles.container}>
      <View style={styles.placar}>
        <Text style={styles.placarText}>{props.time1Gols}</Text>
        <Image source={versusIcon} style={styles.versusIcon} />
        <Text style={styles.placarText}>{props.time2Gols}</Text>
      </View>

      <View style={styles.tempo}>
        <Timer />
      </View>
    </View>
  );
}

export default Placar;
