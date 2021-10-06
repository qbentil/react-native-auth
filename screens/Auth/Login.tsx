import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUsername, updatePassword } from '../../actions/user'


// Define screen dimensions

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;
class Login extends  React.Component {
    render() {

        return (
            <View style = {styles.container}>
                <Image source = {require("../../assets/backgrounds/back.jpg")} style = {styles.bg} />
                <Text style = {{marginBottom: 50, marginTop: 90, fontSize: 35, fontWeight: 'bold', fontFamily: 'Login-Font', color:'#0095f6'}}>Bentilzone</Text>
                <View style = {{top: 60}}>
                    {/* Label */}
                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}} >
                        <Text style = {{left: 15}}>Username:</Text>
                    </View>
                    <TextInput 
                        style = {styles.input} 
                        placeholderTextColor = {"grey"}
                        placeholder = {"@qbentil"}
                        autoFocus = {false}
                        onChangeText={input=>this.props.updateUsername(input)}
                        value={this.props.user.username}
                    />
                    
                    {/* Label */}
                    <View style = {{width: SCREENWIDTH*0.9, marginTop: 10}}>
                        <Text style = {{left: 15}}>Password:</Text>
                    </View>
                    <TextInput 
                        style = {styles.input} 
                        placeholderTextColor = {"grey"}
                        secureTextEntry = {true}
                        onChangeText={input=>this.props.updatePassword(input)}
                        value={this.props.user.password}
                    />
                </View>
                {/* Button */}
                <View style = {{width: SCREENHEIGHT, justifyContent: 'center', alignItems: 'center', marginVertical: 150 }}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 20 }}>LOGIN</Text>
                    </TouchableOpacity>
                    
                    {/* Sign Up page link */}
                    <TouchableOpacity 
                        onPress = {() => this.props.navigation.navigate('Signup')}
                        style = {{alignItems: 'center', flexDirection: 'row', marginVertical: 15}}
                    >
                        <Text style = {{fontSize: 15, color: '#000'}}>Don't have an account? </Text>
                        <Text style = {{color: '#0095f6', fontWeight: 'bold', fontSize: 15}}>Signup</Text>
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
    },
    bg: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: -1,
        width: SCREENWIDTH,
        height: SCREENHEIGHT+50
    }
  
  });

//   Implementing Redux
const mapStateToProps = (state) =>{
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateUsername, updatePassword}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)