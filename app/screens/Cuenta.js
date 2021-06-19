import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, Input } from "react-native-elements";







export default function Cuenta() {
    return (
        <View>
          

                <Input
                placeholder='usuario'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                style={styles}
               
                
                />

                <Input placeholder="Password" 
                leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                secureTextEntry={true} />

                <Button
                    title="Entrar" 
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
      marginBottom: 30,
      marginTop:30

      
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