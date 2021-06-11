import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cliente from "../screens/Cliente/Cliente";

const Stack = createStackNavigator();

export default function ClienteStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="cliente"
                component={Cliente}
                options={{title: "LISTADO DE CLIENTES"}}
            />
        </Stack.Navigator>
    );
}

