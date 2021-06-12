import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Button, Icon, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import useFetch from '../../hooks/useFetch';

export default function ProductoBorrar1({route}) {
    const{cveProducto}=route.params;
    const [nomProducto, setNomProducto] = useState();
    const [precio, setPrecio] = useState();
    const [cantidad, setCantidad] = useState();
    const {loading, data: productos} 
    = useFetch(`http://localhost:3000/productos?filter[where][id]=${cveProducto}`);
    const navigation = useNavigation();
    
    setNomProducto(productos.nomProducto);
    setPrecio(productos.precio);
    setPrecio(productos.cantidad);
    return (

        <View>
            <Text style={styles.textTitle}>Datos del producto cev: {cveProducto}</Text>
            <TextInput
                placeholder={nomProducto}
                leftIcon={{ type: 'material-community', name: 'cart' }}
                onChange={(e) => setNomProducto(e.nativeEvent.text)}
            />
            <TextInput
                placeholder={precio}
                leftIcon={{ type: 'material-community', name: 'currency-usd' }}
                onChange={(e) => setPrecio(e.nativeEvent.text)}
            />
            <TextInput
                placeholder={cantidad}
                leftIcon={{ type: 'material-community', name: 'format-list-bulleted-square' }}
                onChange={(e) => setCantidad(e.nativeEvent.text)}
            />
            <Button 
                title="Borrar producto"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  fetch(`http://localhost:3000/productos/${cveProducto}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      nomProducto: nomProducto,
                      precio: precio,
                      cantidad: cantidad
                    })
                }).then(()=>{ 
                  setNomProducto();
                  setNomProducto('Escribe el nombre del producto ...');
                  setPrecio();
                  setPrecio('Escribe el precio del producto ...');
                  setCantidad();
                  setCantidad('Escribe la cantidad de productos ...');
                  alert('Producto agregado'+' '+nomProducto+' '+precio+' '+cantidad);
                  navigation.navigate(producto-lista1);
                })
                }}
            />
    </View>
    );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnStyle: {
      backgroundColor: "#00a680"
    },
    btnContainer: {
      width: "100%",
      marginBottom: 5,
      marginTop: 5
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
    },
    photo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 20
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });

