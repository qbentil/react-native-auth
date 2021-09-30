import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { Component } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default class App extends React.Component{
  state = {
    number: 0
  }
  add = () => {
    this.setState({number: this.state.number +1})
  }
  subtract = () => {
    if((this.state.number-1) < 0)
    {
      alert("Minimum Digit should be Zero")
    }else{
      this.setState({number: this.state.number -1})
    }
  }
  
  render (){
    return(
        <View style={styles.container}>
        <Text>Day3: Conditional Rendering</Text>
        
        <Text style ={styles.screen}>{this.state.number}</Text>
        <TouchableOpacity style = {styles.button} onPress={() => this.add()}>
          <Text style = {{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style = {styles.button} onPress={this.subtract}>
          <Text style = {{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>

        
        <StatusBar style="auto" />
      </View>
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
  button: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 5,
  },
  screen: {
    margin: 15,
    fontSize: 20,
    color: "green",
    
  }
});
