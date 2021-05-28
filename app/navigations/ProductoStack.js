import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Producto from "../screens/Producto/Producto";
import ProductoAgregar from "../screens/Producto/ProductoAgregar";
import ProductoBorrar from "../screens/Producto/ProductoBorrar";
import ProductoDetalle from "../screens/Producto/ProductoDetalle";
import ProductoEditar from "../screens/Producto/ProductoEditar";

const Stack = createStackNavigator();

export default function ProductoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="producto"
                component={Producto}
                options={{title: "CATALOGO DE PRODUCTOS"}}
            />
            <Stack.Screen 
                name="producto-agregar"
                component={ProductoAgregar}
                options={{title: "AGREGAR PRODUCTO"}}
            />
            <Stack.Screen 
                name="producto-borrar"
                component={ProductoBorrar}
                options={{title: "BORRAR PRODUCTO"}}
            />
            <Stack.Screen 
                name="producto-detalle"
                component={ProductoDetalle}
                options={{title: "PRODUCTO DETALLE"}}
            />
            <Stack.Screen 
                name="producto-editar"
                component={ProductoEditar}
                options={{title: "EDITAR PRODUCTO"}}
            />
        </Stack.Navigator>
    );
}

