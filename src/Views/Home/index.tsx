import React, { useState } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import MainBanner from "components/MainBanner";
import YoutubeViewr from "components/YoutubeViewr";
import News from "components/News";
import { faker } from "@faker-js/faker";
import VitrineContents from "components/VitrineContents";
import { data2 } from "Views/Content/objsFake";

export default function Home() {
  return (
    <S.container>
      <MainBanner
        bannerUrl={faker.image.url({ width: 1000, height: 1000 })}
        author={faker.person.firstName()}
        title={faker.lorem.words({ min: 2, max: 3 })}
      />

      <S.fakeGap />

      <VitrineContents data={data2} />

      <S.fakeGap />

      <YoutubeViewr />

      <S.fakeGap />

      <News />
    </S.container>
  );
}
