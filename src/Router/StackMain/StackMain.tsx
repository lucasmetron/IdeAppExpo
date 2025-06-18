import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { stacksMain } from "Router/routes";
import Tabs from "Router/Tabs";
import Login from "Views/Login";
import FakeWhatsApp from "Views/FakeWhatsApp";

const StackMainCreator = createStackNavigator();

export default function StackMain() {
  return (
    <StackMainCreator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={stacksMain.fakeWhatsApp}
    >
      <StackMainCreator.Screen name={stacksMain.tabs} component={Tabs} />
      <StackMainCreator.Screen name={stacksMain.login} component={Login} />
      <StackMainCreator.Screen
        name={stacksMain.fakeWhatsApp}
        component={FakeWhatsApp}
      />
    </StackMainCreator.Navigator>
  );
}
