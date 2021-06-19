import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, Input } from "react-native-elements";


export default function ProductoAgregar() {
    return (
        <View>
             <Input
                placeholder='Cve-producto'
                leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                style={styles}
               
                
                />
            <Input
             placeholder="Nombre de producto"
             leftIcon={{ type: 'font-awesome', name: 'book' }}
                style={styles}
            />
            <Input
             placeholder="Precio"
             leftIcon={{ type: 'font-awesome', name: 'dollar' }}
             style={styles}
            />
            <Input
             placeholder="Cantidad"
             leftIcon={{ type: 'font-awesome', name: 'contao' }}
                style={styles}
            />

                  <Button
                    title="AGREGAR PROUDCTO" 
                    onPress={() => navigation.navigate("#")}/>


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
      fontSize: 70,
      fontWeight: "bold"
    },
    
    btnStyle: {
      backgroundColor: "#00a680",
      
    },
    btnContainer: {
      width: "100%",
      marginBottom: 5,
      marginTop: 5
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
      marginBottom: 20,
      marginTop: 20
      
    },
    photo:{
      height: 180,
      width: 180,
      

    }
  });
