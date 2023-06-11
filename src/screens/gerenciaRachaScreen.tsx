/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

export function GerenciaRachaScreen({navigation}): JSX.Element {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);
  const [Time1, setTime1] = useState([]);
  const [Time2, setTime2] = useState([]);
  const [size, setSize] = useState('0');
  
  const handleChangeNome = (inputNome: React.SetStateAction<string>) => {
    setNome(inputNome);
  };

  const AdicionarPessoa = () => {
    if (nome !== '') {
      setNomes([...nomes, nome]);
      setNome('');
    }
  };

  const ConcluirTime = () => {
    if (nomes.length < Number.parseInt(size) * 2) {
      Alert.alert('Jogadores insuficientes', "Você escolheu " + size + " jogadores por time, mas não cadastrou nomes suficientes.");
      return;
    }
    console.log('Nomes:', nomes);
    const TimeFull = randomizer(nomes);
    const JogadoresPorTime = Math.ceil(TimeFull.length / 2);
    const TimeA = TimeFull.slice(0, JogadoresPorTime);
    const TimeB = TimeFull.slice(JogadoresPorTime);

    setTime1(TimeA);
    setTime2(TimeB);

    
  };

  const FinalizarTime = () => {
    navigation.navigate('Partida', {Time1: [...Time1], Time2: [...Time2], TeamSize: Number.parseInt(size)});
  };
  
  const randomizer = (array: never[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const novoSorteio = () => {
    setTime1([]);
    setTime2([]);
    setNomes([]);
  }

  return (
    <View >
      <TextInput 
      placeholder='Digite um nome'
      onChangeText={handleChangeNome}
      value={nome}
      />
      
      <TextInput 
      placeholder='Informe o tamanho de cada time'
      onChangeText={(value) => setSize(value)}
      value={size}
      keyboardType='numeric'
      />

      <Button title="Adiconar jogador" onPress={AdicionarPessoa}/>
      <Button title="Sortear times" onPress={ConcluirTime}/>
      <Button title="Finalizar" onPress={FinalizarTime}/>
      <Button title='Limpar Jogadores' onPress={novoSorteio} />
      <Text>Jogadores:</Text> 
      {nomes.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}

<Text>Time 1:</Text>
      {Time1.length > 0 && (
        <View>
          {Time1.map((nome, index) => (
            <Text key={index}>{nome}</Text>
          ))}
        </View>
      )}

      <Text>Time 2:</Text>
      {Time2.length > 0 && (
        <View>
          {Time2.map((nome, index) => (
            <Text key={index}>{nome}</Text>
          ))}
        </View>
      )}


    </View>
  );
}
