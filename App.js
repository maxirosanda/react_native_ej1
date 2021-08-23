import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,View} from 'react-native';
import IngresoProducto from './components/ingresoProducto.js'
import List from './components/list.js'
import ModalEliminar from './components/modal.js'

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
    <IngresoProducto producto={producto} agregar={agregar} capturar={capturar} />
    <List productos={productos} abrirModal={abrirModal}></List>
    <ModalEliminar borrar={borrar} visible={visible} />
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
 
});
