import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksMain } from "Router/routes";
import Tabs from "Router/Tabs";
import Login from "Views/Login";
import Teste from "Views/Teste";

const StackMore = createStackNavigator();

export default function StackMain() {
  return (
    <StackMore.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={stacksMain.tabs}
    >
      <StackMore.Screen name={stacksMain.tabs} component={Tabs} />
      <StackMore.Screen name={stacksMain.login} component={Login} />
      <StackMore.Screen name={"stacksMain-test"} component={Teste} />
    </StackMore.Navigator>
  );
}
