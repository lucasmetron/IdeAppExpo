import React from "react";
import { Dimensions, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import StackHome from "./StackHome/StackHome";
import StackContent from "./StackContent/StackContent";
import StackCollege from "./StackCollege/StackCollege";
import { tabsRoutes } from "./routes";
import { color } from "../styles/pallete";
import HeaderApp from "../components/HeaderApp";
import StackMore from "./StackMore/StackMore";
import { deleteTypeNavigatorFromString } from "utils/functions";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("tab-") ? <HeaderApp /> : null;
  }

  return (
    <Tab.Navigator
      initialRouteName={tabsRoutes.home.name}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case tabsRoutes.home.name:
              return (
                <Entypo
                  name={tabsRoutes.home.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            case tabsRoutes.content.name:
              return (
                <Entypo
                  name={tabsRoutes.content.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            case tabsRoutes.college.name:
              return (
                <Entypo
                  name={tabsRoutes.college.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            case tabsRoutes.more.name:
              return (
                <MaterialIcons
                  name={tabsRoutes.more.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            default:
              return (
                <Entypo
                  name={""}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );
          }
        },
        tabBarLabelStyle: { fontSize: 13, marginTop: -2 },
        tabBarActiveTintColor: color.interface.white,
        tabBarInactiveTintColor: color.interface.darkgray3,
        tabBarStyle: {
          backgroundColor: color.interface.backgroundColor,
          paddingBottom:
            Platform.OS === "android"
              ? 5
              : Dimensions.get("window").height * 0.04,
          paddingTop: 5,
          borderColor: color.interface.backgroundColor,
          height:
            Dimensions.get("window").height *
            (Platform.OS === "android" ? 0.07 : 0.1),
          borderTopColor: color.interface.backgroundColor,
        },

        headerSafeAreaInsets: { top: 0, left: 0, right: 0, bottom: 0 },
        headerShown: false,
        tabBarLabel: deleteTypeNavigatorFromString(route.name),
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
        headerStyle: {
          backgroundColor: "#f4511e", // Ajuste a cor de fundo
        },
      })}
    >
      <Tab.Screen name={tabsRoutes.home.name} component={StackHome} />
      <Tab.Screen name={tabsRoutes.content.name} component={StackContent} />
      <Tab.Screen name={tabsRoutes.college.name} component={StackCollege} />
      <Tab.Screen name={tabsRoutes.more.name} component={StackMore} />
    </Tab.Navigator>
  );
}
