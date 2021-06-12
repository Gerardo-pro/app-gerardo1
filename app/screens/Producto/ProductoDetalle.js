import React from 'react';
import { View, Text } from "react-native";
import { Card, Button, Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

export default function ProductoDetalle({route }) {
    const {id, nomProducto, precio, cantidad} = route.params;

    return (
        <View>
            <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../../../assets/img/photo-1.jpg')}>
                <Text style={{marginBottom: 10}}>
                {id}
                {nomProducto}
                {precio}
                {cantidad} 
                </Text>
                <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card.Image>
            </Card>          
        </View>
    );
}
