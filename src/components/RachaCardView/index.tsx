import React, { useState } from "react";
import styles from "./style";
import { View, Text, Pressable, Image} from "react-native";
import {Button, Divider, IconButton} from "react-native-paper";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore' 


type rachaInfo = {
    id: string;
    adm: String;
    jogadoresMax: String;
    dataHora: number;
    local: String;
    nomeDoRacha: String;
}

function RachaCardView(props: rachaInfo): JSX.Element {

    console.log("props: ", props.id);

    const [loading, setLoading] = useState(false);
    const lenFila = firestore().collection('Fila').doc(props.id).get().then(querySnapshot => {querySnapshot.size;})
    const user = auth().currentUser;
    const userEmail = user?.email
    const [visible, setVisible] = useState(false)

    var horadataNovo = new Date(props.dataHora).toLocaleString();
    
    if( userEmail == props.adm ){
        setVisible(true);
    }

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }  
    
      function entrarFila(){
        firestore()
        .collection('Fila')
        .add({
            id: props.id,
            emailIn: userEmail,
        })
        .then(() => {
            Alert.alert('Entrou na fila do racha!');
        })
        .catch((error) => {console.log(error)});
        setLoading(false)
      }


    function renderSeeMore(){
        return(
            <View>
            <View style={{margin: 10}}>
                <Divider style={{backgroundColor: "lightgray", marginBottom: 5}}/>
                <Text numberOfLines={2} style={styles.cardSubTitle}>Local: {props.local}</Text>
                <Text numberOfLines={1} style={styles.cardSubTitle}>Máximo de jogadores: {props.jogadoresMax}</Text>
                <Text numberOfLines={1} style={styles.cardSubTitle}>Jogadores inscritos: {lenFila}</Text>
                <Text numberOfLines={1} style={styles.cardSubTitle}>Adm: {props.adm}</Text>
            </View>

            <View>
                <Button
                    mode = "outlined"
                    loading = {loading}
                    icon="check"
                    onPress={() => {
                        setLoading(true)
                        entrarFila();
                    }}
                    >Entrar nesse racha</Button>

                <Button
                    mode = "outlined"
                    disabled = {visible}
                    loading = {loading}
                    icon="in"
                    onPress={() => {
                        setLoading(true)
                        entrarFila();
                        }}
                >Inciar partida</Button>

            </View>

            </View>

        );
    }

    return (
        <Pressable style={{width: '100%', elevation: 4}} onPress={() => {
            toggleShowMore();
        }}>
            <View style={styles.container}>
                
                <View style={styles.card}>
                    <View style={styles.imageContext}>
                        <Image source={require('../../images/football-field.png')} style={styles.image} />
                    </View>

                    <View style={styles.cardResumo}>
                        <View style={styles.resumoLineContext}>
                            <Text numberOfLines={1} style={styles.cardTitle}>{props.nomeDoRacha}</Text>
                        </View>
                        <View style={styles.resumoLineContext}>
                            <Text numberOfLines={1} style={styles.cardSubTitle}>Data e hora: {horadataNovo}</Text>
                        </View>
                        
                    </View>

                    <View style={styles.menuArrow}>
                    <IconButton icon={'chevron-'+ (showMore ? 'up':'down') +'-circle-outline'} iconColor="white"/>
                    </View>
                </View>
                
                <View>
                    {showMore == true ? renderSeeMore() : null}
                </View>
                
            </View>
        
        </Pressable>
    );
}

export default RachaCardView;