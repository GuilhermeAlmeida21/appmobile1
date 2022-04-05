import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> PRAIAS LINDAS DO BRASIL </Text>
      
       <ScrollView style={estilo.fotos}>
        <Text style={estilo.legenda}> Praia de Ipanema </Text>
       <Image style={estilo.img}source={require("./assets/west.jpg")}/>

         <Text style={estilo.legenda}> Praia do Guarujá </Text>
        <Image style={estilo.img} source={require("./assets/sunset.jpg")}/>

           <Text style={estilo.legenda}> Praia de Copacabana </Text>
        <Image style={estilo.img} source={require("./assets/beach2.jpg")}/>

          <Text style={estilo.legenda}> Fernando de Noronha </Text>
        <Image style={estilo.img} source={require("./assets/beach.jpg")}/>
         
           <Text style={estilo.frase}></Text>
          </ScrollView>
    </View>

  );
}

const estilo =StyleSheet.create({
container:{
  flex:1,
  alignItems: 'center',
  backgroundColor:'#FFB90F'

},

  titulo:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Consolas',
    color: 'white',
    marginTop: 45,
    marginBottom: 20,
    backgroundColor: 'black',
    borderRadius: 10
    
  },

  frase:{
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Consolas'
  },

  img:{
    width: 395,
    height: 250,
    alignItems:'center',
    borderRadius: 5,
    
  },

  legenda:{
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 10,
    backgroundColor:'black',
    borderRadius: 5,
    color:'white',
  },

  fotos:{
    alignItems:'center',
    fontFamily: ' Consolas'
  },

});







