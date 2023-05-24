/* eslint-disable prettier/prettier */
/* https://github.com/henninghall/react-native-date-picker */

import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { Button } from "react-native-paper";
import DatePicker from 'react-native-date-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'



function RachaRegister(): JSX.Element {
    const user = auth().currentUser;
    const email = user?.email
    const [date, setDate] = useState(new Date())
    const [local, setLocal] = useState('')
    const [jogadores, setJogadores] = useState('')
    const [loading, setLoading] = useState(false)

    const onChanged = (text) => {
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                Alert.alert("Insira apenas números");
            }
        }
        setJogadores(newText);
    }
    
    function cadastrarTime() {
        firestore()
        .collection('Rachas')
        .add({
            emailAdm: {email},
            datahora: {date},
            local: {local},
            jogadoresmax: {jogadores}
        })
        .then(() => {
            Alert.alert('Racha adcionado!');
        })
        .catch((error) => {console.log(error)});
        setLoading(false)
    }

    return (
        <View>
            <Text>Registre seu racha!</Text>


        <Text>Data e Hora do Racha:</Text>
            <DatePicker
                date={date}
                onDateChange={setDate}
                minimumDate = {new Date()}
                locale="pt-BR"
                textColor="green"
            />
        
        <Text>Endereço do Racha:</Text>
            <TextInput
                selectTextOnFocus={true}
                placeholder="Local do Racha"
                autoComplete="street-address"
                defaultValue={local}
                onChangeText={setLocal}
            />
        
        <Text>Máximo de pessoas permitidas:</Text>
            <TextInput
                keyboardType='numeric'
                onChangeText={text => onChanged(text)}
                value={jogadores}
                placeholder='Number'
                maxLength={2}
            />
            

            <Button
                mode="elevated"
                buttonColor="#23A618"
                loading={loading}
                onPress={() => {
                    setLoading(true)
                    cadastrarTime();
                }}
                >
                <Text>Cadastrar Racha</Text>
                </Button>

        </View>
    );
}
export default RachaRegister;
