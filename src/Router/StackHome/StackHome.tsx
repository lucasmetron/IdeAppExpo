import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksHome } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Home from "Views/Home";
import HomeContent from "Views/HomeContent";
import NewsWebView from "Views/NewsWebView";

const Stack = createStackNavigator();

export default function StackHome() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksHome-") ? <HeaderApp /> : null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksHome.home}
    >
      <Stack.Screen name={stacksHome.home} component={Home} />
      <Stack.Screen name={stacksHome.newsWebview} component={NewsWebView} />
      <Stack.Screen name={stacksHome.contentSelected} component={HomeContent} />
    </Stack.Navigator>
  );
}
