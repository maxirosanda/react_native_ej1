
import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function Item({item,abrirModal}) {

  return (
   
        <View style={styles.item} >
        <Text style={styles.text} >{item.producto}</Text>
        <View style={styles.contenedorbutton}><Button onPress={()=> abrirModal(item._id)} title="Eliminar Producto"></Button></View>
        </View>


   
  );
}

const styles = StyleSheet.create({
  item:{
    width:"100%",
    marginTop:30,
    marginLeft:30,
    flexDirection:'row',
    alignItems: "center"
  },
  text:{
    flex:1,
    textAlign:"center",
    fontSize: 25

  },
  contenedorbutton:{
    flex:2,
    alignItems:"center",
    marginRight:3
  },

});
