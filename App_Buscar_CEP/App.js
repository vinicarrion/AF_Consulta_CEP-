import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, ScrollView} from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Brasil from './src/pages/Brasil/Brasil'
import Russia from './src/pages/Russia/Russia'
import EUA from './src/pages/EUA/EUA'
import Home   from './src/pages/Home/home'

const Stack = createStackNavigator()

export default class App extends React.Component{
  render() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Brasil" component={Brasil}/>
      <Stack.Screen name="Russia" component={Russia}/>
      <Stack.Screen name="EUA" component={EUA}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
  }
}
