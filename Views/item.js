
import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function Item({item,abrirModal}) {

  console.log(item)
  return (
   
        <View >
        <Text style={styles.text} >{item.producto}</Text>
        <View style={styles.contenedorbutton}><Button onPress={()=> abrirModal(item._id)} title="x"></Button></View>
        </View>


   
  );
}

const styles = StyleSheet.create({

  text:{
    margin:20,
    padding:5,
    width:"35%",
    textAlign:"center",
    borderWidth:2
  },
  contenedorbutton:{
    flexDirection:"row",
    alignItems:"center",
    marginRight:3
  },

});
