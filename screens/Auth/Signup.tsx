import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default class Signup extends  React.Component {
    render()
    {
        return (
            <View style = {styles.container}>
                <Text style = {{marginVertical: 50, fontSize: 35, fontWeight: 'bold', fontFamily: 'Lobster-Regular'}}>Bentilzone</Text>
                <View style = {{top: 40}}>
                    {/* Label */}
                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}}>
                        <Text style = {{left: 15}}>Email:</Text>
                    </View>
                    <TextInput 
                        style = {styles.input} 
                        placeholderTextColor = {"grey"}
                        placeholder = {"example@domain.com"}
                        keyboardType = {'email-address'}
                        autoFocus = {true}
                    />

                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}}>
                        <Text style = {{left: 15}}>Username:</Text>
                    </View>
                    <TextInput
                        style = {styles.input} 
                        placeholderTextColor = {"grey"}
                        placeholder = {"@qbentil"}
                    />
                    
                    {/* Label */}
                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}}>
                        <Text style = {{left: 15}}>Password:</Text>
                    </View>
                    <TextInput 
                        style = {styles.input} 
                        placeholderTextColor = {"grey"}
                        // placeholder = {"********"}
                        secureTextEntry = {true}
                    />

                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}}>
                        <Text style = {{left: 15}}>Confirm Password:</Text>
                    </View>
                    <TextInput 
                        style = {styles.input} 
                        placeholderTextColor = {"grey"}
                        // placeholder = {"********"}
                        secureTextEntry = {true}
                    />
                </View>
                {/* Button */}
                <View style = {{width: SCREENHEIGHT, justifyContent: 'center', alignItems: 'center', marginVertical: 120 }}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 20 }}>LOGIN</Text>
                    </TouchableOpacity>
                    
                    {/* Sign Up page link */}
                    <TouchableOpacity 
                        onPress = {() => this.props.navigation.navigate('Login')}
                        style = {{alignItems: 'center', flexDirection: 'row', marginVertical: 15}}
                    >
                        <Text style = {{fontSize: 15, color: '#000'}}>Already have an account? </Text>
                        <Text style = {{color: '#0095f6', fontWeight: 'bold', fontSize: 15}}>Login</Text>
                    </TouchableOpacity>
                </View>
    
                {/*flexDirection: 'row' OR justifyContent: 'center', alignItems: 'center'*/}
                <View style = {{ position: 'absolute', bottom: 60, flexDirection: 'row'}}>
                    <Text style = {{fontSize: 13,}}>From </Text>
                    <Text style = {{fontSize: 15, fontWeight: 'bold' }}>Themanbentil</Text>
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
      },
      button:{
          width: SCREENWIDTH*0.6,
          height: 50,
          borderRadius: 30,
          backgroundColor: '#0095f6',
          alignItems: 'center',
          justifyContent: 'center',
      }
  
  });