import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksContent } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Content from "Views/Content";
import ContentSelected from "Views/ContentSelected";

const StackMore = createStackNavigator();

export default function StackContent() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksContent-") ? <HeaderApp /> : null;
  }

  return (
    <StackMore.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksContent.content}
    >
      <StackMore.Screen name={stacksContent.content} component={Content} />
      <StackMore.Screen
        name={stacksContent.contentSelected}
        component={ContentSelected}
      />
    </StackMore.Navigator>
  );
}
