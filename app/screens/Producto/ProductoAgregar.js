import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

export default function ProductoAgregar(props) {
  const [cveProducto, setCveProducto] = useState();
  const [nomProducto, setNomProducto] = useState();
  const [precio, setPrecio] = useState();
  const [cantidad, setCantidad] = useState();

  return (
    <View>
      <Input
        placeholder="Cve-producto"
        leftIcon={{ type: "font-awesome", name: "unlock-alt" }}
        style={styles}
        onChange={(e) => setCveProducto(e.nativeEvent.text)}
      />
      <Input
        placeholder="Nombre de producto"
        leftIcon={{ type: "font-awesome", name: "book" }}
        style={styles}
        onChange={(e) => setNomProducto(e.nativeEvent.text)}
      />
      <Input
        placeholder="Precio"
        leftIcon={{ type: "font-awesome", name: "dollar" }}
        style={styles}
        onChange={(e) => setPrecio(e.nativeEvent.text)}
      />
      <Input
        placeholder="Cantidad"
        leftIcon={{ type: "font-awesome", name: "contao" }}
        style={styles}
        onChange={(e) => setCantidad(e.nativeEvent.text)}
      />

      <Button
        title="Agregar producto"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => {
          fetch("http://localhost:3000/productos/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nomProducto: nomProducto,
              precio: precio,
              cantidad: cantidad,
            }),
          })
            .then((res) => res.json())
            .then(() => {
              setNomProducto();
              setNomProducto("Escribe el nombre del producto ...");
              setPrecio();
              setPrecio("Escribe el precio del producto ...");
              setCantidad();
              setCantidad("Escribe la cantidad de productos ...");
              alert(
                "Producto agregado" +
                  " " +
                  nomProducto +
                  " " +
                  precio +
                  " " +
                  cantidad
              );
            });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 70,
    fontWeight: "bold",
  },

  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "100%",
    marginBottom: 5,
    marginTop: 5,
  },
  viewBtn: {
    flex: 6,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  photo: {
    height: 180,
    width: 180,
  },
});
