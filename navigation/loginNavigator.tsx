// In App.js in a new project

import * as React from 'react';

import Login from '../screens/Auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Auth/Signup';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';

const Stack = createStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    'Login-Font': require("../assets/fonts/Lobster-Regular.ttf")
  });
  

  if(!fontLoaded){
    return <View />
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component = {Login} options = {{headerShown: true}} />
          <Stack.Screen  name = "Signup" component = {Signup} options = {{headerShown: true}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// export default App;