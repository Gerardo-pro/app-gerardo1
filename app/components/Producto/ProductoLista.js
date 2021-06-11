import React from 'react'
import { View } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from 'react-native-gesture-handler';


export default function ProductoLista(props) {
    const navigation = useNavigation();

    return(
        <View>
        {props.elementos.map((item, i) => (
            <ListItem key={i} 
                    bottomDivider 
                    onPress={()=> {navigation.navigate('producto-detalle')}}
            >
                <Icon name={item.icon} type="material-community" />
                <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            ))}
        </View>
    );

}