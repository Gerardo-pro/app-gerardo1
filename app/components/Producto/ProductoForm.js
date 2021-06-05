import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, View, Text } from "react-native";
import { Button, Icon, Input } from 'react-native-elements';


export default function ProductoForm() {

    const [cveProducto, setCveProducto] = useState();
    const [nomProducto, setNomProducto] = useState();
    const [precio, setPrecio] = useState();
    const [cantidad, setCantidad] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View>
            <Input
                placeholder='Cve. producto'
                leftIcon={{ type: 'material-community', name: 'key' }}
                onChange={(e) => setCveProducto(e.nativeEvent.text)}
            />
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
                onPress={() => setModalVisible(true)}
            />
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{cveProducto}</Text>
            <Text style={styles.modalText}>{nomProducto}</Text>
            <Text style={styles.modalText}>{precio}</Text>
            <Text style={styles.modalText}>{cantidad}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>

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
