
import React from 'react';
import { StyleSheet,View,TextInput,Button} from 'react-native';


export default function IngresoProducto ({producto,capturar,agregar}) {

  
    return (
        <View style={styles.containerimput}> 
          <TextInput style={styles.imput} onChangeText={capturar} value={producto} placeholder="ingrese Producto" />
          <View style={styles.enviar}><Button title="Enviar"  color="#000" onPress={agregar} /></View>
          </View>    
    );
  }
  
  const styles = StyleSheet.create({
    containerimput:{
      flexDirection:'row'
    },
    imput:{
      marginLeft:"5%",
      textAlign:"center",
      marginRight:'3%',
      flex:1,
      borderBottomWidth:1
    },
    enviar:{
        flex:1,
    }
   
  });
  