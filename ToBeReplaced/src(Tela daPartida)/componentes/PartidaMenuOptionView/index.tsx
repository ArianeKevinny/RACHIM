import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import PartidaJogador from '../PartidaJogador';

type partidaMenuProps = {
  option: String;
};

function PartidaMenuOptionView(props: partidaMenuProps): JSX.Element {
  const time1 = { // SUBSTITUIR PELOS VERDADEIROS JOGADORES 
    principal: [
      'João',
      'José',
      'Maria',
      'Joaquina',
      'Enzo',
      'Valentina',
      'Dromedário',
      'Camelo',
      '123456789012345321321312',
      'Urso Panda324324',
    ],
    reservas: ['brasil', 'mexico', 'equador'],
  };
  const time2 = { // SUBSTITUIR PELOS VERDADEIROS JOGADORES
    principal: [
      'Carlos',
      'Isabel',
      'Mônica',
      'Cascão',
      'Magali',
      'Franjinha',
      'Urso Polar',
    ],
    reservas: ['argentina', 'italia', 'honduras'],
  };

  function renderPlayersList(lista: Array<any>): JSX.Element {
    return lista.map((value, index) => {
      return (
        <View key={index} style={{height: 40, width: '100%'}}>
          <PartidaJogador nome={value} />
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContext}>
        {renderPlayersList(
          props.option == 'Escalação' ? time1.principal : time1.reservas,
        )}
      </View>
      <View style={styles.divisor} />
      <View style={styles.listContext}>
        {renderPlayersList(
          props.option == 'Escalação' ? time2.principal : time2.reservas,
        )}
      </View>
    </View>
  );
}

export default PartidaMenuOptionView;
