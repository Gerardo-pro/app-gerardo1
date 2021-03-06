import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, View, Text } from "react-native";
import { Button, Icon, Input } from 'react-native-elements';


export default function ProductoForm(props) {

    const [nomProducto, setNomProducto] = useState();
    const [precio, setPrecio] = useState();
    const [cantidad, setCantidad] = useState();
    return (

        <View>
            <Text style={styles.textTitle}>{props.name}</Text>
            <Input
                placeholder='Nombre producto'
                leftIcon={{ type: 'material-community', name: 'cart' }}
                onChange={(e) => setNomProducto(e.nativeEvent.text)}
            />
            <Input
                placeholder='Precio'
                leftIcon={{ type: 'material-community', name: 'currency-usd' }}
                onChange={(e) => setPrecio(e.nativeEvent.text)}
            />
            <Input
                placeholder='Cantidad'
                leftIcon={{ type: 'material-community', name: 'format-list-bulleted-square' }}
                onChange={(e) => setCantidad(e.nativeEvent.text)}
            />
            <Button 
                title="Agregar producto"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  fetch('http://localhost:3000/productos/', {
                    method: 'POST',
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
