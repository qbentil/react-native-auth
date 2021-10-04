import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// Define screen dimensions

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;
export default class Login extends  React.Component {
    render() {

        return (
            <View style = {styles.container}>
                <Text style = {{fontSize: 30, fontWeight: 'bold'}}>INSTA CLONE</Text>
                <View style = {{top: 100}}>
                    {/* Label */}
                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}}>
                        <Text style = {{left: 15}}>Username:</Text>
                    </View>
                    <TextInput style = {styles.input} 
                    placeholderTextColor = {"grey"}
                    placeholder = {"@qbentil"}
                    />
                    
                    {/* Label */}
                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}}>
                        <Text style = {{left: 15}}>Password:</Text>
                    </View>
                    <TextInput style = {styles.input} 
                    placeholderTextColor = {"grey"}
                    placeholder = {"********"}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    //   justifyContent: 'center',
    },    
    input: {
        height: 50,
        width: SCREENWIDTH*0.9,
        color: "black",
        paddingHorizontal: 20,
        // margin: 0,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 1,
        
    }
  
  });
