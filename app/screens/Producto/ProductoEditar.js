import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { Header } from 'react-native-elements'
export default function ProductoEditar() {
    return (
        <View style={styles.main}>
        <Text style={{fontWeight: "bold",alignSelf:'center', marginBottom:20}}>DESTACADOS</Text>
        <View style={{flexDirection:'row', margin:20, justifyContent:"space-between"}}>
          <Image
            style={{width: 100, height: 100, }}
            source={{ uri: 'https://source.unsplash.com/featured/?{product}' }}/>
          <Image
            style={{width: 100, height: 100}}
            source={{ uri: 'https://source.unsplash.com/featured/?{product}' }}/>
        </View>
        <View style={{flexDirection:'row', margin:20, justifyContent:"space-between"}}>
          <Image
            style={{width: 100, height: 100}}
            source={{ uri: 'https://source.unsplash.com/featured/?{product}' }}/>
          <Image
          style={{width: 100, height: 100}}
          source={{ uri: 'https://source.unsplash.com/featured/?{product}' }}/>
        </View>
      </View>
    );
}




const styles = StyleSheet.create({
    main: {
      flex: 1,
      margin: 40,
    },
  
    image: {
      width: 600,
      height: 110,
      position: 'absolute',
    },
  });