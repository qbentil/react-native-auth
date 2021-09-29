import { StyleSheet, Text, View } from 'react-native';

import { Component } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default class App extends React.Component{
  render (){
    return(
        <View style={styles.container}>
        <Text style={{color: "#fff"}}>Ready for My React Native Course</Text>
        <Text style={{color: "#fff"}}>I am BENTIL🤣🤣</Text>
        <StatusBar style="auto" />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
