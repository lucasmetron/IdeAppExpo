import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksHome } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Home from "Views/Home";
import HomeContent from "Views/HomeContent";

const StackMore = createStackNavigator();

export default function StackHome() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksHome-") ? <HeaderApp /> : null;
  }

  return (
    <StackMore.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksHome.home}
    >
      <StackMore.Screen name={stacksHome.home} component={Home} />
      <StackMore.Screen
        name={stacksHome.contentSelected}
        component={HomeContent}
      />
    </StackMore.Navigator>
  );
}
