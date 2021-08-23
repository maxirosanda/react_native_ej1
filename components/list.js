
import React from 'react';
import { StyleSheet,FlatList} from 'react-native';
import Item from '../Views/item.js'

export default function List ({productos,abrirModal}) {


  return (

    <FlatList style={styles.flat} data={productos} keyExtractor={item => item._id} renderItem={(data) => (
     <Item item={data.item} abrirModal={abrirModal} ></Item>   

      )
    }/>

   
  );
}

const styles = StyleSheet.create({

  flat:{
    width:"100%"
    
  }
});
