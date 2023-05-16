import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {timerContext} from '../../Screens/gerenciadorPartidas';

function Timer() {
  const myTimerContext = React.useContext(timerContext);

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        height: 25,
      }}>
      <View>
        <Text style={styles.tempoText}>{myTimerContext.tempo}</Text>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: 15,
        }}>
        <Text style={styles.tempoExtraText}>
          {myTimerContext.isAcrescimos ? myTimerContext.acrescimos : null}
        </Text>
      </View>
    </View>
  );
}

export default Timer;
