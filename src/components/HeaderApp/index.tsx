import React from "react";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";

import * as S from "./styles";
import {
  tabsRoutes,
  stacksMore,
  stacksHome,
  stacksCollege,
  stacksContent,
  stacksMain,
} from "Router/routes";
import HeaderMenu from "components/HeaderMenu";
import HeaderDefault from "components/HeaderDefault";

export default function HeaderApp() {
  const route = useRoute();

  function returnHeaderCorrect() {
    switch (route.name) {
      case stacksHome.home:
        return <HeaderMenu route={route} />;

      case tabsRoutes.content.name:
        return <HeaderDefault route={route} />;

      case tabsRoutes.college.name:
        return <HeaderDefault route={route} />;

      case tabsRoutes.more.name:
        return <HeaderDefault route={route} />;

      case stacksMore.schedule:
      case stacksMore.ourPages:
      case stacksMore.askForPray:
      case stacksMore.donation:
      case stacksMore.share:
      case stacksMore.talkToUs:
      case stacksHome.teste:
      case stacksCollege.teste:
      case stacksContent.teste:
      case stacksMain.teste:
        return <HeaderDefault route={route} showBackArrow />;

      default:
        return <HeaderDefault route={route} />;
    }
  }

  return (
    <View>
      <S.container>{returnHeaderCorrect()}</S.container>
    </View>
  );
}
