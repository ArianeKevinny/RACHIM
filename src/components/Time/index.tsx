import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity, ScrollView} from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./style";
import arsenalShield from "../../images/arsenal.png"; //para teste, substituir pelo escudo do time
import manCityShield from "../../images/mancity.png"; //para teste, substituir pelo escudo do time
import CustomModal from "../CustomModal";
import { timerContext } from "../../screens/partidaScreen";
import ColorPicker from "react-native-wheel-color-picker";

type timeProps = {
  name: String;
  corTimeAntes?: boolean;
  cor: String;
  onGolsChange: Function;
  onGolContra: Function;
  onInfoChange: (cor: string, nome: string) => {};
};

function Time(props: timeProps): JSX.Element {
  const [showModalGol, setShowModalGol] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const handleModalVisible = () => {
    if (!myTimerContext.isPaused) {
      setShowModalGol(!showModalGol);
    } else {
      setShowModalInfo(!showModalInfo);
    }
  };

  const handleInfoChange = () => {
    if (teamName !== "") {
      props.onInfoChange(teamColor, teamName);
    }
  };

  const myTimerContext = React.useContext(timerContext);

  function renderRetangulo() {
    return (
      <View
        style={[
          styles.corTime,
          { backgroundColor: props.cor },
          props.corTimeAntes
            ? { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }
            : { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
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
        style={styles.modalView}
      >
        <Pressable
          style={styles.modalOptionView}
          onPress={() => {
            handleModalVisible();
            props.onGolsChange(true);
          }}
        >
          <Text style={styles.modalOptionText}>Gol a favor (+1)</Text>
        </Pressable>

        <Pressable
          style={styles.modalOptionView}
          onPress={() => {
            handleModalVisible();
            props.onGolContra(true);
          }}
        >
          <Text style={styles.modalOptionText}>
            Gol contra (+1 para o adversário)
          </Text>
        </Pressable>

        <Pressable
          style={styles.modalOptionView}
          onPress={() => {
            handleModalVisible();
            props.onGolsChange(false);
          }}
        >
          <Text style={styles.modalOptionText}>Remover gol (-1)</Text>
        </Pressable>
      </CustomModal>

      <CustomModal
        visible={showModalInfo}
        onRequestClose={() => handleModalVisible()}
        style={[styles.modalView, {width: '90%'}]}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            width: '100%',
          }}
        >
          <View style={{maxWidth: '95%', alignItems: 'center'}}>
            <Text
              style={{ fontWeight: "700", color: "black", marginVertical: 10 }}
            >
              Informe Novo Nome Do Time:
            </Text>
            <TextInput
              style={{minWidth: '95%'}}
              activeUnderlineColor="green"
              value={teamName}
              onChangeText={setTeamName}
            />
          </View>

          <Text
            style={{ fontWeight: "700", color: "black", marginVertical: 10 }}
          >
            Nova Cor Do Time:
          </Text>

          <View
            style={{
              height: 300,
              width: '95%',
              marginBottom: 10,
            }}
          >
            <ColorPicker
              color={teamColor}
              onColorChange={setTeamColor}
              thumbSize={40}
              sliderSize={20}
              gapSize={0}
              swatches={false}
            />
          </View>
          <View style={{ alignItems: "flex-end", width: "100%" }}>
            <TouchableOpacity
              style={{ padding: 15}}
              onPress={() => {
                handleInfoChange();
                handleModalVisible();
              }}
            >
              <Text style={{ fontSize: 15, color: "green", fontWeight: "600" }}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </CustomModal>
    </View>
  );
}

export default Time;
