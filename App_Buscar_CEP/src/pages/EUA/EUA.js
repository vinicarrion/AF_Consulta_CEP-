import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, ScrollView} from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default function EUA() {
  const [codigos_postais, setCodigosPostais] = useState("")
  const [enderecoEUA, setEnderecoEUA] = useState(null)
  const [carregandoEUA, setCarregandoEUA] = useState(false)
  const [erroEUA, setErroEUA] = useState("")

const buscarCodigosPostais = () => {

  //Validacao de CEP

  if(codigos_postais.length != 5){
    alert('Código Postal invalido')
    return 
  }

  setCarregandoEUA(true)
  fetch(`http://ziptasticapi.com/${codigos_postais}`)
  .then(respostaEUA => respostaEUA.json())
  .then(obj =>{
    if(obj.erroEUA){
      setErroEUA("Código postal não encontrado!")
      return
    }
    setEnderecoEUA(obj)
    setErroEUA("")
  })
  .catch(() => {
    setErroEUA(`Ocorreu um erro ao buscar o endereço pelo Código postal`)
  })
  .finally(() => {
    setCarregandoEUA(false)
  })
}

  return (
   <ScrollView>
   <View style={styles.container}>
      <Text style={styles.Titulo}>Consultar Códigos Postais Americano</Text>
      <Feather name='map-pin' size={50} color='black' ></Feather>
      <Text style={styles.subTitulo}>Digite o Codigo Postal</Text>
      <TextInput placeholder='Digite 5 numero'style={styles.input} value={codigos_postais} onChangeText={input => setCodigosPostais (input)}/>
      <Button style={styles.button} title='Buscar' onPress={buscarCodigosPostais}/>
      {carregandoEUA && <Text>Carregando....</Text>}
      {erroEUA != "" && <Text style={styles.erroEUA}>{erroEUA}</Text>}
      {enderecoEUA != null && !carregandoEUA && erroEUA == "" && (
        <View style={styles.enderecoCardEUA}>
          <Text>Estado: {enderecoEUA.state}</Text>
          <Text>Cidade: {enderecoEUA.city}</Text>
        </View>
        )}
      <StatusBar style="auto" />
    </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
  enderecoCardEUA: { 
    fontSize: 20,
    marginVertical: 30, 
    padding: 20, 
    backgroundColor: '#D5DBDB',
    borderRadius: 10
  },

  erroEUA: {
    marginVertical:12,
    fontSize: 18,
    color: '#93032e'
  },

  input: { 
    marginVertical: 20, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: 100,
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Titulo: {
    fontSize: 30,
    color: 'black',
    marginBottom:20,
    backgroundColor: '#BB8FCE',
    paddingTop: 100,
    flexDirection: "row",
    paddingStart: 80,
    paddingEnd: 76,
    paddingBottom: 44,
  },

  subTitulo: {
    marginVertical: 10, 
    fontSize: 20,
    color: 'black'
  },

});