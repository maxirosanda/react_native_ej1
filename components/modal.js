
import React from 'react';
import { StyleSheet, Text,Button,Modal} from 'react-native';


export default function ModalEliminar({visible,borrar}) {
 

  return (
     <Modal animationType="slide" visible={visible}>
      <Text>Esta seguro que desea borrar el item</Text>
      <Button title="Borrar" onPress={borrar}></Button>
     </Modal>
    
  );
}

const styles = StyleSheet.create({
 
});
