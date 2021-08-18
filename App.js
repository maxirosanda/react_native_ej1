import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button, FlatList ,Modal} from 'react-native';

export default function App() {
  const [producto, setProducto] = useState("");
  const [productos, setProductos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [capturarId, setCapturarId] = useState("");
  const capturar = (t) =>{
    setProducto(t)
  }
  const agregar = () =>{
    setProductos([...productos,{_id:Math.random().toString(),producto:producto}])
    setProducto("")
  }

  const abrirModal = (id) =>{
    setCapturarId(id)
    setVisible(true)
  }
  const borrar = () =>{

  setProductos(productos.filter(item =>item._id !== capturarId))
  setVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerimput}> 
        <TextInput style={styles.imput} onChangeText={capturar} value={producto} placeholder="ingrese Producto" />
        <Button title="Enviar"  color="#000" onPress={agregar} />
        </View>
    <FlatList style={styles.flat} data={productos} keyExtractor={item => item._id} renderItem={(data) => (
        
        <View style={styles.containerimput}>
        <Text style={styles.text} >{data.item.producto}</Text>
        <View style={styles.contenedorbutton}><Button onPress={()=> abrirModal(data.item._id)} title="x"></Button></View>
        </View>
      )
    }/>
     <Modal animationType="slide" visible={visible}>
      <Text>Esta seguro que desea borrar el item</Text>
      <Button title="Borrar" onPress={borrar}></Button>
     </Modal>
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
    width:"35%",
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
