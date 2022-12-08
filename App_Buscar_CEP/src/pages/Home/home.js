import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';

export default class Home extends React.Component {
    constructor(props){
    super(props)
    this.brasil = this.brasil.bind(this)
    this.russia = this.russia.bind(this)
    this.eua    = this.eua.bind(this)
}

brasil(){
    this.props.navigation.navigate("Brasil")
}

russia(){
    this.props.navigation.navigate("Russia")
}

eua(){
    this.props.navigation.navigate("EUA")
}


render() {
    return (
        <ScrollView>
<View style={styles.container}>
    <Icon name="mail" size={200} color="black"/>
      <Text style={styles.Titulo}>Consultar Caixa Postal</Text>
      <Text style={styles.subTitulo}>Selecione um Pais</Text>
      <TouchableOpacity onPress={this.brasil}>
        <Text style={styles.button}>Brasil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.russia}>
        <Text style={styles.button}>Russia</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.eua}>
        <Text style={styles.button}>Estados Unidos</Text>
      </TouchableOpacity>
    </View> 
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    button : {
    marginVertical:20,
    fontSize: 18,
    backgroundColor: '#B0B0B0',
    padding: 15,
    borderRadius: 10
  },

  
  Titulo: {
    fontSize: 58,
    color: 'black',
    flexDirection: "row",
    paddingStart: 'auto',
    paddingEnd: 60,
    paddingBottom: 'auto',
    
  },

  subTitulo: {
    marginVertical: 30, 
    fontSize: 20,
    color: 'black'
  },

});