import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import arsenalShield from '../../imagens/arsenal.png'; //para teste, substituir pelo escudo do time
import manCityShield from '../../imagens/mancity.png'; //para teste, substituir pelo escudo do time
import CustomModal from '../CustomModal';
import {timerContext} from '../../Screens/gerenciadorPartidas';

type timeProps = {
  name: String;
  corTimeAntes?: boolean;
  cor: String;
  onGolsChange: Function;
  onGolContra: Function;
};

function Time(props: timeProps): JSX.Element {
  const [showModalGol, setShowModalGol] = useState(false);

  const handleModalVisible = () => {
    if (!myTimerContext.isPaused) {
      setShowModalGol(!showModalGol);
    }
  };

  const myTimerContext = React.useContext(timerContext);

  function renderRetangulo() {
    return (
      <View
        style={[
          styles.corTime,
          {backgroundColor: props.cor},
          props.corTimeAntes
            ? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}
            : {borderTopRightRadius: 10, borderBottomRightRadius: 10},
        ]}
      />
    );
  }

  return (
    <View>
      <Pressable style={styles.container} onPress={() => handleModalVisible()}>
        <View style={styles.IconShirtColor}>
          {props.corTimeAntes ? renderRetangulo() : null}

          <Image
            source={props.corTimeAntes ? manCityShield : arsenalShield}
            style={styles.shieldImage}
          />

          {!props.corTimeAntes ? renderRetangulo() : null}
        </View>

        <Text numberOfLines={2} style={styles.nomeTime}>
          {props.name}
        </Text>
      </Pressable>

      <CustomModal
        visible={showModalGol}
        onRequestClose={() => handleModalVisible()}
        style={styles.modalView}>
        <Pressable
          style={styles.modalOptionView}
          onPress={() => {
            handleModalVisible();
            props.onGolsChange(true);
          }}>
          <Text style={styles.modalOptionText}>Gol a favor (+1)</Text>
        </Pressable>

        <Pressable
          style={styles.modalOptionView}
          onPress={() => {
            handleModalVisible();
            props.onGolContra(true);
          }}>
          <Text style={styles.modalOptionText}>
            Gol contra (+1 para o adversário)
          </Text>
        </Pressable>

        <Pressable
          style={styles.modalOptionView}
          onPress={() => {
            handleModalVisible();
            props.onGolsChange(false);
          }}>
          <Text style={styles.modalOptionText}>Remover gol (-1)</Text>
        </Pressable>
      

      </CustomModal>
    </View>
  );
}

export default Time;
