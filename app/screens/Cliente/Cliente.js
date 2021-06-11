import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
  } from "react-native";

export default function Cliente() {
    return (
        <View>
          <FlatList
            data={clientes}
            renderItem={clientes}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.5}
          />
          <View style={styles.loaderClientes}>
            <ActivityIndicator size="large" />
            <Text>Cargando clientes</Text>
          </View>
      </View>
    );
}


const clientes = [
    {
      title: "Cliente 1",
      rfc: "RFC102030ABC"
    },
    {
      title: "Cliente 2",
        rfc: "RFC203040DEF"
      },
      {
        title: "Cliente 3",
        rfc: "RFC304050GHI"
      },
      {
        title: "Cliente 4",
        rfc: "RFC405060JKL"
      }
  ];

  const styles = StyleSheet.create({
    loaderClientes: {
      marginTop: 10,
      marginBottom: 10,
      alignItems: "center",
    },
    viewRestaurant: {
      flexDirection: "row",
      margin: 10,
    },
    viewRestaurantImage: {
      marginRight: 15,
    },
    imageRestaurant: {
      width: 80,
      height: 80,
    },
    restaurantName: {
      fontWeight: "bold",
    },
    restaurantAddress: {
      paddingTop: 2,
      color: "grey",
    },
    restaurantDescription: {
      paddingTop: 2,
      color: "grey",
      width: 300,
    },
    notFoundRestaurants: {
      marginTop: 10,
      marginBottom: 20,
      alignItems: "center",
    },
  });