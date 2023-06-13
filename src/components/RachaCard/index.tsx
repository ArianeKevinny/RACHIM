import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore' 




export default function RachaCard({ id, email, date, local, jogadores}){

  const naFila = await firestore().collection('Fila').doc(id).get();
  const [loading, setLoading] = useState(false)
  const [seeDelete, setDelete] = useState(false)
  const [seeEdit, setEdit] = useState(false)
  const [śeeIn, setIn] = useState(false)
  const [lenfila, setLenfila] = useState(0)
  const user = auth().currentUser;
  const userEmail = user?.email

  if (email == user?.email){
    setDelete(true)
    setEdit(true)
  }

  const lenFila = firestore().collection('Fila').where('id', '==', {id}).count()
  const naFila = firestore().collection('Fila').where(id', '==', {id}, '&&')


  firestore()
  .collection('Fila')
  .doc('ABC')
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
    }
  });


  function permitido(){

  }

  function editCard(){

  }


  function deleteCard(){
    firestore()
    .collection('Rachas')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Card deleted!');
    });
    setLoading(false)
  }


  function entrarFila(){
    firestore()
    .collection('Fila')
    .add({
        id: {id}
        email: {userEmail},
    })
    .then(() => {
        Alert.alert('Entrou na fila do racha!');
    })
    .catch((error) => {console.log(error)});
    setLoading(false)
  }

  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title>Informações do Racha</Card.Title>
          <Card.Divider />

          <Text>Data e Hora: {date}</Text>
          <Text>Local: {local}</Text>
          <Text>Máximo de jogadores permitido: {jogadores}</Text>
          <Text>Quantidades de inscritos: {lenfila}</Text>
          <Button
            loading = {loading}
            onPress={() => {
              setLoading(true)
              entrarFila();
            }}
            icon={
              <Icon
                name="ei-check"
                color="green"
                iconStyle={{ marginRight: 5 }}
              />
            }
            title="Entrar nesse racha"
          />
        </Card>
      </View>
    </ScrollView>
);
};
