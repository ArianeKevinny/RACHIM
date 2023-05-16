import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import ball from '../../imagens/bola-de-futebol.png';

function TimerAnimation(): JSX.Element {
  return (
    <View style={styles.animation}>
      <Image source={ball} style={styles.ballIcon} />
    </View>

  );
}

export default TimerAnimation;
