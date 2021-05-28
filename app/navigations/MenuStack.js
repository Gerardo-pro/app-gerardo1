import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../screens/Menu/Menu";

const Stack = createStackNavigator();

export default function MenuStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="menu"
                component={Menu}
                options={{title: "BIENVENIDOS A TIENDOTA"}}
            />
        </Stack.Navigator>
    );
}

