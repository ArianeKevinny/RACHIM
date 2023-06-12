import React, {useState} from 'react';
import {Alert, View} from 'react-native';

import styles from './style';
import Time from '../Time';
import Placar from '../Placar';
import TimerAnimation from '../TimerAnimation';

type props = {
  naoZerarPlacar: boolean;
}

function PartidaStats(props: props): JSX.Element {

  const [time1, setTime1] = useState({nome: 'Meu Time 1', cor: 'red'}); //Receber informações dos times
  const [time2, setTime2] = useState({nome: 'Meu Time 2', cor: '#00A3FF'}); //Receber informações dos times
  const [time1Gols, setTime1Gols] = useState(0);
  const [time2Gols, setTime2Gols] = useState(0);
  
  React.useEffect(() => {
    if (props.naoZerarPlacar == false){
      setTime1Gols(0);
      setTime2Gols(0);
    }
  }, [props.naoZerarPlacar])

  const handleGolTime1 = (incrementar: boolean) => {
    if (!incrementar) {
      time1Gols == 0
        ? Alert.alert('Não é possível placar negativo.')
        : setTime1Gols(time1Gols - 1);
    } else {
      setTime1Gols(time1Gols + 1);
    }
  };

  const handleGolTime2 = (incrementar: boolean) => {
    if (!incrementar) {
      time2Gols == 0
        ? Alert.alert('Não é possível placar negativo.')
        : setTime2Gols(time2Gols - 1);
    } else {
      setTime2Gols(time2Gols + 1);
    }
  };

  const handleTime1InfoChange = (novaCor, novoNome) => {
    setTime1({nome: novoNome, cor: novaCor})
  }

  const handleTime2InfoChange = (novaCor, novoNome) => {
    setTime2({nome: novoNome, cor: novaCor})
  }

  return (
    <View style={styles.partidaStatsContext}>
      <View style={styles.animationContext}>
        <TimerAnimation />
      </View>
      <View style={styles.TimesPlacarContext}>
        <View style={styles.timesContext}>
          <Time
            name={time1.nome}
            cor={time1.cor}
            onGolsChange={handleGolTime1}
            onGolContra={handleGolTime2}
            onInfoChange={handleTime1InfoChange}
          />
        </View>

        <View style={styles.placarContext}>
          <Placar time1Gols={time1Gols} time2Gols={time2Gols} />
        </View>

        <View style={styles.timesContext}>
          <Time
            name={time2.nome}
            cor={time2.cor}
            onGolsChange={handleGolTime2}
            onGolContra={handleGolTime1}
            onInfoChange={handleTime2InfoChange}
            corTimeAntes
          />
        </View>
      </View>
    </View>
  );
}

export default PartidaStats;
