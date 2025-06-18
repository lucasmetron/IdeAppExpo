import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksMore, stacksMain } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Schedule from "Views/Schedule";
import OurPages from "Views/OurPages";
import Donation from "Views/Donation";
import More from "Views/More";
import AskForPray from "Views/AskForPray";
import Share from "Views/Share";
import TalkWithUs from "Views/TalkWithUs";
import FakeWhatsApp from "Views/FakeWhatsApp";

const StackMore = createStackNavigator();

export default function Tabs() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksMore-") ? <HeaderApp /> : null;
  }

  return (
    <StackMore.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksMore.moreStack}
    >
      <StackMore.Screen name={stacksMore.moreStack} component={More} />
      <StackMore.Screen name={stacksMore.schedule} component={Schedule} />
      <StackMore.Screen name={stacksMore.ourPages} component={OurPages} />
      <StackMore.Screen name={stacksMore.askForPray} component={AskForPray} />
      <StackMore.Screen name={stacksMore.donation} component={Donation} />
      <StackMore.Screen name={stacksMore.share} component={Share} />
      <StackMore.Screen name={stacksMore.talkToUs} component={TalkWithUs} />
    </StackMore.Navigator>
  );
}
