import React from 'react';
import { View, Text } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FAB } from 'react-native-elements';


export default function ProductoDetalle() {


    return (
        <View>
            

            <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../../../assets/adaptive-icon.png')}>
                <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
                </Text>
{/*                 <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' /> */}
                <FAB title="View Now" />
            </Card.Image>
            </Card>          
        </View>
    );
}
