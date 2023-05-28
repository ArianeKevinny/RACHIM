/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

export function GerenciaRachaScreen(): JSX.Element {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);
  const [Time1, setTime1] = useState([]);
  const [Time2, setTime2] = useState([]);
  
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
    console.log('Nomes:', nomes);
    const TimeFull = randomizer(nomes);
    const JogadoresPorTime = Math.ceil(TimeFull.length / 2);
    const TimeA = TimeFull.slice(0, JogadoresPorTime);
    const TimeB = TimeFull.slice(JogadoresPorTime);

    setTime1(TimeA);
    setTime2(TimeB);

  };

  const randomizer = (array: never[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };


  return (
    <View >
      <TextInput 
      placeholder='Digite um nome'
      onChangeText={handleChangeNome}
      value={nome}
      />
      <Button title="Adiconar jogador" onPress={AdicionarPessoa}/>
      <Button title="Sortear times" onPress={ConcluirTime}/>

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
