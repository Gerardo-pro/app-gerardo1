import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useFetch from "../../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";
import ListItems from "../../components/Producto/ListItem";

export default function ProductoLista1() {
  const { loading, data: productos } = useFetch(
    "http://localhost:3000/productos"
  );
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.ScrollviewBody}>
      <View style={styles.container}>
        {loading ? (
          <Text>Cargando ...</Text>
        ) : (
          <FlatList
            style={styles.list}
            data={productos}
            renderItem={({ item }) => (
              <ListItems
                onPress={() =>
                  navigation.navigate("producto-detalle", {
                    id: item.id,
                    nomProducto: item.nomProducto,
                    precio: item.precio,
                    cantidad: item.cantidad,
                  })
                }
                id={item.id}
                nomProducto={item.nomProducto}
                precio={item.precio}
                cantidad={item.cantidad}
              ></ListItems>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5c",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});
