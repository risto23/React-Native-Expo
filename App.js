import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View, TextInput, 
  FlatList, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
//import PahlawanForm from './components/PahlawanForm';

import PahlawanActivity from './components/PahlawanActivity';
import Home from './components/Home';

import IdentitasActivity from './components/IdentitasActivity';
import HasilActivity from './components/HasilActivity';




export default class App extends React.Component {
   


  render(){
  return (

    <AppContainer/>
);
}
}

const AppStackNavigator = createStackNavigator ({
  Home : {screen: Home},
 Pahlawan :{ screen :PahlawanActivity},
  Data : {screen :IdentitasActivity},
  Hasil : {screen : HasilActivity}
 
})

const AppContainer = createAppContainer (AppStackNavigator);
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff'    
  },
  namaPahlawan:{
    color:'red',
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 10
  },
  asal:{
    fontSize:18
  },
  textInput:{    
    height:50,
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 5,
    margin:10,
    paddingLeft: 10,
    fontSize: 18    
  },
  btn:{
    backgroundColor:'#0fa0d1',
    height:50,
    margin:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  }
});
