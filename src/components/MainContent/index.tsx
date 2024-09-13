import React from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import * as S from "./styles";
import { ContentProps } from "types/ContentProps";

interface MainContentProps {
  data: ContentProps[];
}

export default function MainContent({ data }: MainContentProps) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <S.container>
      <S.title numberOfLines={1}>Em destaque</S.title>
      <View style={{ flex: 1 }}>
        <Carousel
          mode="parallax"
          loop
          width={width}
          height={height * 0.35}
          autoPlay={false}
          data={data}
          renderItem={({ item, index }) => (
            <S.content key={index}>
              <S.imgContent>
                <S.img resizeMode="cover" source={{ uri: item.img }} />
              </S.imgContent>

              <S.textsCard>
                <S.titleContent numberOfLines={2}>{item.title}</S.titleContent>
                <S.subTitleContent numberOfLines={1}>
                  {item.subtitle}
                </S.subTitleContent>
              </S.textsCard>
            </S.content>
          )}
        />
      </View>
    </S.container>
  );
}
