import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import PartidaStats from '../components/PartidaStats/index';
import PartidaMenuOptionView from '../components/PartidaMenuOptionView';

export const timerContext = React.createContext({
  acrescimos: '',
  tempo: '',
  isAcrescimos: false,
  isPaused: true,
});

function PartidaGen(): JSX.Element {

  //A partir daqui, até...
  const [acrescimosMin, setAcrescimosMin] = useState(0);
  const [acrescimosSec, setAcrescimosSec] = useState(0);

  const [timerLimit, setTimerLimit] = useState(1); // Receber tempo da partida em minutos

  const [timerMinutos, setTimerMinutos] = useState(0);
  const [timerSegundos, setTimerSegundos] = useState(0);

  const [customInterval, setCustomInterval] = useState(null);
  const [isTimerPaused, setIsTimerPaused] = useState(true);
  const [isAcrescimos, setIsAcrescimos] = useState(false);
  const [isFimDeJogo, setIsFimDeJogo] = useState(true);
  const [shouldStartTimer, setShouldStartTimer] = useState(false);

  useEffect(() => {
    if (shouldStartTimer) {
      startTimer();
      setShouldStartTimer(false);
    }
  }, [shouldStartTimer]);

  useEffect(() => {
    if (timerMinutos == timerLimit) {
      setIsAcrescimos(true);
      clearInterval(customInterval);
      startAcrescimos();
    }
  }, [timerSegundos]);

  const handleStartTimer = () => {
    if (isFimDeJogo) {
      clearTimer();
      setIsFimDeJogo(false);
      setShouldStartTimer(true);
    } else if (isAcrescimos) {
      startAcrescimos();
    } else {
      setShouldStartTimer(true);
    }
  };

  const handleStopTimer = () => {
    pauseTimer();
    setIsFimDeJogo(true);
  };

  const startTimer = () => {
    if (customInterval != null && isTimerPaused == false) {
      return;
    }
    setCustomInterval(
      setInterval(() => {
        changeTimer();
      }, 1000),
    );
    setIsTimerPaused(false);
  };
  const pauseTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
      setIsTimerPaused(true);
    }
  };

  const startAcrescimos = () => {
    setCustomInterval(
      setInterval(() => {
        changeAcrescimos();
      }, 1000),
    );
    setIsTimerPaused(false);
  };

  const changeTimer = () => {
    setTimerSegundos(prevState => {
      if (prevState + 1 == 60) {
        setTimerMinutos(timerMinutos + 1);
        return 0;
      }
      return prevState + 1;
    });
  };

  const changeAcrescimos = () => {
    setAcrescimosSec(prevState => {
      if (prevState + 1 == 60) {
        setAcrescimosMin(prevMin => {
          return prevMin + 1;
        });
        return 0;
      }
      return prevState + 1;
    });
  };

  const clearTimer = () => {
    setTimerMinutos(0);
    setTimerSegundos(0);
    setAcrescimosSec(0);
    setAcrescimosMin(0);

    if (customInterval) {
      clearInterval(customInterval);
    }
    setCustomInterval(null);
    setIsTimerPaused(true);
    setIsAcrescimos(false);
  };
  //...Até aqui, são coisas do cronômetro bugado


  const [opcaoEscolhida, setOpcaoEscolhida] = useState<String>('Escalação');
  const opcoes = ['Escalação', 'Reservas'];

  return (
    <View style={styles.container}>
      <timerContext.Provider
        value={{
          acrescimos:
            '+' +
            acrescimosMin +
            ':' +
            (acrescimosSec < 10 ? '0' + acrescimosSec : acrescimosSec),
          tempo:
            (timerMinutos < 10 ? '0' + timerMinutos : timerMinutos) +
            ':' +
            (timerSegundos < 10 ? '0' + timerSegundos : timerSegundos),
          isAcrescimos: isAcrescimos,
          isPaused: isTimerPaused,
        }}>
        <View style={styles.algumNome}>
          <PartidaStats naoZerarPlacar={isFimDeJogo} />
        </View>
        <View style={styles.parte2}>
          <View style={styles.miniMenu}>
            {opcoes.map((value, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.options,
                    opcaoEscolhida === opcoes[index]
                      ? {borderBottomWidth: 4, borderBottomColor: '#EDD224'}
                      : null,
                  ]}
                  onPress={() => setOpcaoEscolhida(value)}>
                  <Text style={styles.optionText}>{value}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={{width: '100%'}}>
            <PartidaMenuOptionView option={opcaoEscolhida} />
          </ScrollView>
        </View>

        <View style={styles.buttonsContext}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                isTimerPaused ? handleStartTimer() : handleStopTimer();
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>
                {isTimerPaused ? 'Iniciar' : 'Finalizar'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => pauseTimer()}
              disabled={isTimerPaused}
              style={styles.button}>
              <Text style={styles.buttonText}>Pausar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </timerContext.Provider>
    </View>
  );
}

export default PartidaGen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  algumNome: {
    width: '100%',
    height: 150,
    backgroundColor: '#0E6F06',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parte2: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  miniMenu: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: '#0E6F06',
    elevation: 5,
  },
  options: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: '#0E6F06',
    elevation: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonsContext: {
    width: '100%',
    height: 50,
    backgroundColor: '#0E6F06',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 35,
    backgroundColor: '#23A618',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
