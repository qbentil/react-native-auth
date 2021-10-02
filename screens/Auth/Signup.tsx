import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Signup extends  React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Day5: React Navigations</Text>
                <Text style = {{marginVertical: 10}}> Signup Screen</Text>
                <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Login')}>
                  <Text style = {{color: "#000"}}>Already have account? Login</Text>  
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