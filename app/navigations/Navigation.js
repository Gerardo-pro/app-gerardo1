import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Menu from "./MenuStack";
import Producto from "./ProductoStack";
import Cliente from "./ClienteStack";
import Cuenta from "./CuentaStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="cuenta"
          tabBarOptions={{
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680"
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color)
          })}
        >
            <Tab.Screen
              name="menu"
              component={Menu}
              options={{ title: "HOME" }}
            />
            <Tab.Screen
              name="producto"
              component={Producto}
              options={{ title: "CATALOGO" }}
            />
            <Tab.Screen
              name="cliente"
              component={Cliente}
              options={{ title: "CLIENTES" }}
            />
            <Tab.Screen
              name="cuenta"
              component={Cuenta}
              options={{ title: "CUENTA" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "menu":
      iconName = "home-variant";
      break;
    case "producto":
      iconName = "cart";
      break;
    case "cliente":
      iconName = "account-child";
      break;
    case "cuenta":
      iconName = "cog-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}