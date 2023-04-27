/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import storage from '@react-native-firebase/storage';
import {Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../LoginComponent/style';
import { utils } from '@react-native-firebase/app';


export function TimeRegister() {
    const [nomeTime, setNomeTime] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const logoTime = storage().ref('logo-time.png');
    const pathToFile = ('')

    
    async function brasao() {
        const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
        await logoTime.putFile(pathToFile);

        const task = logoTime.putFile(pathToFile);
    }
    
    const task = logoTime.putFile(pathToFile);

    function registrar() {
        setIsLoading(true)

        task.on('state_changed', (taskSnapshot: { bytesTransferred: any; totalBytes: any; }) => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });
    
        task.then(() => {
            console.log('Image uploaded to the bucket!');
        });

        firestore()
        .collection('times')
        .add({
            nomeTime,
            email,
            pathToFile,
            created_at = firestore.FieldValue.serverTimestamp(),
        })
        
        
    }

    return (
        <View style={styles.loginScreenContext}>
            <Text style={styles.loginScreenText}>Nome:</Text>
            <TextInput
                style={styles.textInput}
                selectTextOnFocus={true}
                placeholder="Informe o nome do time"
                autoComplete="nome"
                defaultValue={nomeTime}
                onChangeText={setNomeTime}
            />
    
            <Text style={styles.loginScreenText}>Email responsavel:</Text>
            <TextInput
                style={styles.textInput}
                selectTextOnFocus={true}
                placeholder="Informe o email do administrador"
                autoComplete="email"
                defaultValue={email}
                onChangeText={setEmail}
            />
            
            
            <Text style={styles.loginScreenText}>Brasão do time:</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    brasao(); 
                }}>
                <Text style={styles.textButton}>Escolher Arquivo</Text>
            </TouchableOpacity>


            isLoading = {isLoading}
            
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    registrar();
                }}>
                <Text style={styles.textButton}>Enviar informações do time</Text>
            </TouchableOpacity>
            </View>
    );
}
