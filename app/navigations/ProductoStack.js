import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Producto from "../screens/Producto/Producto";
import ProductoLista1 from "../screens/Producto/ProductoLista1";
import ProductoAgregar from "../screens/Producto/ProductoAgregar";
import ProductoBorrar from "../screens/Producto/ProductoBorrar";
import ProductoBorrar1 from "../screens/Producto/ProductoBorrar1";
import ProductoDetalle from "../screens/Producto/ProductoDetalle";
import ProductoEditar from "../screens/Producto/ProductoEditar";
import ProductoEditar1 from "../screens/Producto/ProductoEditar1";
import ProductoModal from "../screens/Producto/ProductoModal";

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
                name="producto-lista1"
                component={ProductoLista1}
                options={{title: "CATALOGO DE PRODUCTOS-API"}}
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
                name="producto-borrar1"
                component={ProductoBorrar1}
                options={{title: "BORRAR PRODUCTO 1"}}
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
            <Stack.Screen 
                name="producto-editar1"
                component={ProductoEditar1}
                options={{title: "EDITAR PRODUCTO 1"}}
            />            
            <Stack.Screen 
                name="producto-modal"
                component={ProductoModal}
                options={{title: "PRODUCTO MODAL"}}
            />
        </Stack.Navigator>
    );
}

