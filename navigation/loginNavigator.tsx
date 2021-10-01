// In App.js in a new project

import * as React from 'react';

import { Text, View } from 'react-native';

import Login from '../screens/Auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Auth/Signup';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen  name = "Signup" component = {Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;