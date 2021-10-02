import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends  React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> Login Screen </Text>
                <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Signup')}>
                  <Text style = {{color: "#000"}}>ALready have account? Login</Text>  
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },    
    button: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
        borderRadius: 5
    }
  
  });
