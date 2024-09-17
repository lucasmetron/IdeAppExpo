import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { faker } from "@faker-js/faker";

import * as S from "./styles";
import { stacksHome } from "Router/routes";
import MainBanner from "components/MainBanner";
import YoutubeView from "components/YoutubeView";
import News from "components/News";
import VitrineContents from "components/VitrineContents";
import { data2 } from "Views/Content/objsFake";
import HomeContentContext from "context/HomeContentContext";
import { ContentProps } from "types/ContentProps";

export default function Home() {
  const navigator: any = useNavigation();
  const { setContentSelected } = useContext(HomeContentContext);

  const contentBannerMain: ContentProps = {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  };

  return (
    <S.container>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate(stacksHome.contentSelected);
          setContentSelected(contentBannerMain);
        }}
      >
        <MainBanner
          bannerUrl={contentBannerMain.img}
          author={contentBannerMain.creator}
          title={contentBannerMain.title}
        />
      </TouchableOpacity>

      <S.fakeGap />

      <S.boxPadding>
        <VitrineContents
          selectFunction={setContentSelected}
          navigateTo={stacksHome.contentSelected}
          data={data2}
        />
      </S.boxPadding>

      <S.boxPadding>
        <YoutubeView />
      </S.boxPadding>

      <S.fakeGap />

      <S.boxPadding>
        <News />
      </S.boxPadding>
    </S.container>
  );
}
