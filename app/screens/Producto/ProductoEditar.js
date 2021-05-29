import React from 'react';
import { View, Text } from "react-native";
import { Header } from 'react-native-elements'
export default function ProductoEditar() {
    return (

        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
/*         <View>
            <Text>Productos</Text>
        </View> */
    );
}
