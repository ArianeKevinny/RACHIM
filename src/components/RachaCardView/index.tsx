import React, { useState } from "react";
import styles from "./style";
import { View, Text, Pressable, Image} from "react-native";
import {Button, Divider, IconButton} from "react-native-paper";

type rachaInfo = {
    adm: String;
    jogadoresMax: number;
    dataHora: Date;
    local: String;
    nomeDoRacha: String;
}

function RachaCardView(props: rachaInfo): JSX.Element {

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    function renderSeeMore(){
        return(
            <View style={{margin: 10}}>
                <Divider style={{backgroundColor: "lightgray", marginBottom: 5}}/>
                <Text numberOfLines={2} style={styles.cardSubTitle}>Local: {props.local}</Text>
                <Text numberOfLines={1} style={styles.cardSubTitle}>Máximo de jogadores: {props.jogadoresMax}</Text>
                <Text numberOfLines={1} style={styles.cardSubTitle}>Jogadores de inscritos: 10</Text>
                <Text numberOfLines={1} style={styles.cardSubTitle}>Adm: {props.adm}</Text>
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
                            <Text numberOfLines={1} style={styles.cardSubTitle}>Data: 12.12.2012</Text>
                        </View>
                        <View style={styles.resumoLineContext}>
                            <Text numberOfLines={1} style={styles.cardSubTitle}>Hora: 12:12</Text>
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