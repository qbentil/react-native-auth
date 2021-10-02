import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { Component } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import SwitchNavigator from './navigation/loginNavigator'

export default class App extends React.Component{
  
  render (){
    return(
      <SwitchNavigator /> 
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
