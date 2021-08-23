
import React from 'react';
import { StyleSheet, Text,Button,Modal, View, BackHandler} from 'react-native';


export default function ModalEliminar({visible,borrar}) {
 

  return (
     <Modal  transparent={true} animationType="slide" visible={visible}>
         <View style={styles.mensaje}>
      <Text style={styles.text}>Esta seguro que desea borrar el item</Text>
      <Button title="Borrar" onPress={borrar}></Button>
      </View>
     </Modal>
    
  );
}

const styles = StyleSheet.create({
mensaje:{
     width:"80%",
     height:200,
     marginTop:200,
     marginHorizontal:"10%",
     alignItems:'center',
     justifyContent: "center",
     backgroundColor:"#33FFFF"
    
 },
 text:{
    textAlign:"center",
    fontSize: 25,
    marginBottom:10

  },
});
