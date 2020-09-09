import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View, TextInput,Platform, 
  FlatList, TouchableHighlight, Button } from 'react-native';





export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Menu',
    headerStyle: {
    backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
    };
 
  render(){
  return (
    <View style={styles.container}>
      <Button style={styles.btn}
        title="Form Pahlawan"
        onPress={() => this.props.navigation.navigate("Pahlawan")}
      />
      <br/>
      <Button style={styles.btn}
        title="Data Diri"
        onPress={() => this.props.navigation.navigate("Data")}
      />
    </View>
);
}
}


  
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
