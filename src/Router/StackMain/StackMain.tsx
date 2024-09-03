import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { stacksMain } from "Router/routes";
import Tabs from "Router/Tabs";
import Login from "Views/Login";
import Teste from "Views/Teste";

const StackMainCreator = createStackNavigator();

export default function StackMain() {
  const insets = useSafeAreaInsets();
  console.log("insets: ", insets);
  return (
    <StackMainCreator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={stacksMain.tabs}
    >
      <StackMainCreator.Screen name={stacksMain.tabs} component={Tabs} />
      <StackMainCreator.Screen name={stacksMain.login} component={Login} />
      <StackMainCreator.Screen name={"stacksMain-test"} component={Teste} />
    </StackMainCreator.Navigator>
  );
}
