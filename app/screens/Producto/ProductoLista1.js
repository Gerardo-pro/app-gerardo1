import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from "react-native-elements";
import useFetch from '../../hooks/useFetch';

export default function ProductoLista1( { navigation }) {
  const { loading, data: productos } = useFetch('https://192.168.100.250:3000/productos')
    return (
      <View style={styles.container}>
      {loading ? <Text>Cargando ...</Text> :
          <FlatList
              style={styles.list}
              data={productos}
              keyExtractor={x => x._id}
              renderItem={({ item }) =>
                  <ListItem
                      onPress={() => navigation.navigate('producto-detalle', { _id: item._id })}
                      nomProducto={item.nomProducto}
                      precio={item.precio}
                  />
              }
          />}
  </View>
    );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
  },
  list: {
      alignSelf: 'stretch',
  }
})

