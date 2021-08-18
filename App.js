import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button, FlatList } from 'react-native';

export default function App() {
  const [producto, setProducto] = useState("");
  const [productos, setProductos] = useState([]);

  const capturar = (t) =>{
    setProducto(t)
  }
  const agregar = () =>{
    setProductos([...productos,{_id:Math.random().toString(),producto:producto}])
    console.log(productos)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerimput}> 
        <TextInput style={styles.imput} onChangeText={capturar} placeholder="ingrese Producto" />
        <Button title="Enviar" color="#000" onPress={agregar} />
        </View>
    <FlatList style={styles.flat} data={productos} keyExtractor={item => item._id} renderItem={(data) => (
        
        <View style={styles.containerimput}>
        <Text style={styles.text} >{data.item.producto}</Text>
        <View style={styles.contenedorbutton}><Button title="x"></Button></View>
        </View>
      )
    }/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:50,
    justifyContent: 'flex-start',
  },
  containerimput:{
    flexDirection:'row'
  },
  imput:{
    marginLeft:"5%",
    textAlign:"center",
    marginRight:'3%',
    width:"55%",
    borderBottomWidth:1
  },
  text:{
    margin:20,
    padding:5,
    width:"75%",
    textAlign:"center",
    borderWidth:2
  },
  contenedorbutton:{
    flexDirection:"row",
    alignItems:"center",
    marginRight:3
  },
  flat:{
    flexDirection:"row",
    width:"100%"
    
  }
});
