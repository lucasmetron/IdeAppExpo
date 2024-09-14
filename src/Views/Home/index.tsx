import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { faker } from "@faker-js/faker";

import * as S from "./styles";
import { stacksHome } from "Router/routes";
import MainBanner from "components/MainBanner";
import YoutubeViewr from "components/YoutubeViewr";
import News from "components/News";
import VitrineContents from "components/VitrineContents";
import { data2 } from "Views/Content/objsFake";

export default function Home() {
  const navigator: any = useNavigation();

  return (
    <S.container>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate(stacksHome.contentSelected);
        }}
      >
        <MainBanner
          bannerUrl={faker.image.url({ width: 1000, height: 1000 })}
          author={faker.person.firstName()}
          title={faker.lorem.words({ min: 2, max: 3 })}
        />
      </TouchableOpacity>

      <S.fakeGap />

      <VitrineContents data={data2} />

      <S.fakeGap />

      <YoutubeViewr />

      <S.fakeGap />

      <News />
    </S.container>
  );
}
