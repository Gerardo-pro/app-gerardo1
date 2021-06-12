import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ProductoBorrar() {
    const navigation = useNavigation();
    const [cveProducto, setCveProducto] = useState();

    return (
      <ScrollView centerContent={true} style={styles.viewBody}>
        <View style={styles.viewBtn}>
            <Text style={styles.textTitle}>Buscar producto</Text>
            <Input
                placeholder='Clave producto'
                leftIcon={{ type: 'material-community', name: 'cart' }}
                onChange={(e) => setCveProducto(e.nativeEvent.text)}
            />

            <Button 
                title="Buscar producto"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate('producto-borrar1', {cveProducto:cveProducto})}
            />
      </View>
    </ScrollView>
    );
}



const styles = StyleSheet.create({
  viewBody: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },
  division:{
    fontSize: 5,
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color:"#2980B9"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#00BCD4"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 15
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  },  
  photo: {
    height: 140,
    width: 140,
    marginBottom: 20,
    marginTop: 20
  }
});