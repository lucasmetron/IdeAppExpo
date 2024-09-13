import React, { useContext } from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { ContentProps } from "types/ContentProps";
import { stacksContent } from "Router/routes";
import ContentContext from "context/ContentContext";
interface MainContentProps {
  data: ContentProps[];
}

export default function MainContent({ data }: MainContentProps) {
  const navigate: any = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const { setContentSelected } = useContext(ContentContext);

  return (
    <S.container>
      <S.title numberOfLines={1}>Em destaque</S.title>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Carousel
          mode="parallax"
          loop
          width={width}
          height={height * 0.35}
          autoPlay={false}
          data={data}
          renderItem={({ item, index }) => (
            <S.content
              key={index}
              onPress={() => {
                navigate.navigate(stacksContent.contentSelected);
                setContentSelected(item);
              }}
            >
              <S.imgContent>
                <S.img resizeMode="stretch" source={{ uri: item.img }} />
              </S.imgContent>

              <S.textsCard>
                <S.titleContent numberOfLines={1}>{item.title}</S.titleContent>
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
