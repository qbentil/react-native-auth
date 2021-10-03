import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import React from 'react';
import {StyleSheet} from 'react-native';
import SwitchNavigator from './navigation/loginNavigator'
import reducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default class App extends React.Component{

  render (){
    return(
      <Provider store = {store}>
        <SwitchNavigator /> 
      </Provider>
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
