import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View, TextInput,  TouchableOpacity, } from 'react-native';





export default class IdentitasActivity extends React.Component {
   //Menginisialisasi state nama dan asal.
   constructor(props) {
 
    super(props)
 
    this.state = {
 
      TextInput_nama: '',
 
      TextInput_asal: ''
 
    }
 
  }
  //Get current Timestamp
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      tanggal:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  //Method mengirimkan data ke activity lain
  Kirim_data = () => {
 
    this.props.navigation.navigate('Hasil', {
      NamaOBJ: this.state.nama,
      AsalOBJ: this.state.asal,
      WaktuOBJ: this.state.tanggal
    });
 
   
  }

  static navigationOptions = {
    title: 'Data',
    headerStyle: {
    backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
    };

    tampilkan = () =>
    {
      alert("Nama : "+this.state.nama+"\n"+"asal : "+this.state.asal)
    }

  render(){
  return (

 
    <View style={{flex:0.8}}>

  
      <TextInput 
        style={styles.textInput}
        placeholder="Nama"
        onChangeText={(text)=>{
          this.setState({nama:text})
        }}
      />

      <TextInput 
          style={styles.textInput}
          placeholder="Asal"
          onChangeText={(text)=>{
            this.setState({asal:text})
        }}
        />

      {/* Tombol untuk mengirimkan data ke activity lain. */}
      <TouchableOpacity onPress={this.Kirim_data} activeOpacity={0.7} style={styles.btn} >
 
        <Text style={styles.btnText}> Submit</Text>

      </TouchableOpacity>
      
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
