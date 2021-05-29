import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, Input } from 'react-native-elements';

export default function ProductoAgregar() {
    return (
        <View>
            <Input
                placeholder='Cve. producto'
                leftIcon={{ type: 'material-community', name: 'key' }}
            />
            <Input
                placeholder='Nombre producto'
                leftIcon={{ type: 'material-community', name: 'cart' }}
            />
            <Input
                placeholder='Precio'
                leftIcon={{ type: 'material-community', name: 'currency-usd' }}
            />
            <Input
                placeholder='Cantidad'
                leftIcon={{ type: 'material-community', name: 'format-list-bulleted-square' }}
            />
            <Button 
                title="Agregar producto"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
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
      }
  });
