import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, ScrollView} from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default function Russia() {
  const [codigos_postais, setCodigosPostais] = useState("")
  const [codigos_postais3, setCodigosPostais3] = useState("")
  const [enderecoRu, setEnderecoRu] = useState(null)
  const [carregandoRu, setCarregandoRu] = useState(false)
  const [erroRu, setErroRu] = useState("")

const buscarCodigosPostais = () => {

  //Validacao de CEP

  if(codigos_postais3.length != 3){
    alert('Inserir os 3 primeiros números do código postal')
    return 
  }

  if(codigos_postais.length != 5){
    alert('Inserir os 5 números do código postal')
    return 
  }

  setCarregandoRu(true)
  fetch(`https://www.postindexapi.ru/json/${codigos_postais3}/${codigos_postais}.json`)
  .then(respostaRu => respostaRu.json())
  .then(obj =>{
    if(obj.erroRu){
      setErroRu("Código postal não encontrado!")
      return
    }
    setEnderecoRu(obj)
    setErroRu("")
  })
  .catch(() => {
    setErroRu(`Ocorreu um erro ao buscar o endereço pelo Código postal`)
  })
  .finally(() => {
    setCarregandoRu(false)
  })
}

  return (
   <ScrollView>
   <View style={styles.container}>
      <Text style={styles.Titulo}>Consultar Códigos Postais Russos</Text>
      <Feather name='map-pin' size={50} color='black' ></Feather>
      <Text style={styles.subTitulo}>Digite o Codigo Postal</Text>
      <Text style={styles.russo}>Введите почтовый индекс</Text>
      <TextInput placeholder='Digite 3 numero'style={styles.input} value={codigos_postais3} onChangeText={input => setCodigosPostais3 (input)}/>
      <TextInput placeholder='Digite 5 numero'style={styles.input} value={codigos_postais} onChangeText={input => setCodigosPostais (input)}/>
      <Button style={styles.button} title='Buscar' onPress={buscarCodigosPostais}/>
      {carregandoRu && <Text>Загрузка....</Text>}
      {erroRu != "" && <Text style={styles.erroRu}>{erroRu}</Text>}
      {enderecoRu != null && !carregandoRu && erroRu == "" && (
        <View style={styles.enderecoCardRu}>
          <Text>Código postal(Почтовый индекс): {enderecoRu.Index}</Text>
          <Text>Nome serviço postal(почтовой связи): {enderecoRu.OPSName}</Text>
          <Text>Subordinação(Подчинение): {enderecoRu.OPSSubm}</Text>
          <Text>Região(области): {enderecoRu.Region}</Text>
          <Text>Região autonoma(автономной области): {enderecoRu.Autonom}</Text>
          <Text>Distrito(района): {enderecoRu.Area}</Text>
          <Text>Cidade Subordinado(Подчиненный город): {enderecoRu.City}</Text>
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
   
  enderecoCardRu: { 
    fontSize: 20,
    marginVertical: 30, 
    padding: 20, 
    backgroundColor: '#D5DBDB',
    borderRadius: 10
  },

  erroRu: {
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
    paddingEnd: 50,
    paddingBottom: 44,
  },

  subTitulo: {
    marginVertical: 10, 
    fontSize: 20,
    color: 'black'
  },

  russo: {
    marginVertical: 2, 
    color: 'black'
  },

});