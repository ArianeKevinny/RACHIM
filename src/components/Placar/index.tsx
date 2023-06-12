import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert} from "react-native";
import styles from "./style";
import versusIcon from "../../images/icons/versusIcon.png";
import Timer from "../timer";
import { timerContext } from "../../screens/partidaScreen";
import CustomModal from "../CustomModal";

type placarProps = {
  time1Gols: Number;
  time2Gols: Number;
};

function Placar(props: placarProps): JSX.Element {
  const myContext = React.useContext(timerContext);
  const [showModal, setShowModal] = React.useState(false);
  const [tempoLimite, setTempoLimite] = React.useState('10');

  const handleModalVisible = () => {
    if (myContext.isPaused) {
      setShowModal(!showModal);
    }
  };

  const setTimerChanegs = () => {

    const tempo = Number.parseInt(tempoLimite);
    if (isNaN(tempo)){
      Alert.alert("Tempo Inválido", "Informe um tempo válido.");
      return;
    }

    if (myContext.setTimerLimitFunction !== null) {
      myContext.setTimerLimitFunction(tempo);
      handleModalVisible();
    }
  }

  return (
    <View style={styles.container}>
      <CustomModal visible={showModal}
        onRequestClose={() => handleModalVisible()}
        style={styles.modalView}>
          <Text style={styles.modalText} >Informe o Tempo da Partida: </Text>
          <View style={styles.inputContextView}>
            <TextInput  style={styles.modalTextInput} textAlign="center" value={tempoLimite} onChangeText={setTempoLimite} keyboardType="numeric" maxLength={2}/>
            <Text style={styles.textInputAffix} >Minutos</Text>
          </View>
          <TouchableOpacity onPress={setTimerChanegs} style={{padding: 15, alignSelf: 'flex-end'}}>
            <Text style={styles.submitText}>Confirmar</Text>
          </TouchableOpacity>
        </CustomModal>

      <TouchableOpacity style={styles.container} onPress={handleModalVisible}>
        <View style={styles.placar}>
          <Text style={styles.placarText}>{props.time1Gols}</Text>
          <Image source={versusIcon} style={styles.versusIcon} />
          <Text style={styles.placarText}>{props.time2Gols}</Text>
        </View>

        <View style={styles.tempo}>
          <Timer />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Placar;
