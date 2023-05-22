/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

function RachaRegister(): JSX.Element {
    const [nomeTime, setNomeTime] = useState('')
    const [email, setEmail] = useState('')

    async function brasao() {
        Alert.alert("Ainda não é possivel")
    }
    
    function cadastrarTime() {
        Alert.alert("Ainda não é possivel")
    }

    return (
        <View style={styles.loginScreenContext}>
            <Text style={styles.loginScreenText}>Nome:</Text>
            <TextInput
                style={styles.textInput}
                selectTextOnFocus={true}
                placeholder="Informe o nome do time"
                defaultValue={nomeTime}
                onChangeText={setNomeTime}
            />
    
            <Text style={styles.loginScreenText}>Email responsavel:</Text>
            <TextInput
                style={styles.textInput}
                selectTextOnFocus={true}
                placeholder="Email do administrador"
                autoComplete="email"
                defaultValue={email}
                onChangeText={setEmail}
            />
            
            
            <Text style={styles.loginScreenText}>Brasão do time:</Text>
            <Text>IMPLEMENTAR</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    cadastrarTime()
                }}>
                <Text style={styles.textButton}>Cadastrar time</Text>
            </TouchableOpacity>

        </View>
    );
}
export default RachaRegister;
