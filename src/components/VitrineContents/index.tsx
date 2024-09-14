import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { ContentProps } from "types/ContentProps";
import { stacksContent } from "Router/routes";
import ContentContext from "context/ContentContext";

interface VitrineContentsProps {
  data: ContentProps[];
  title?: string;
}

export default function VitrineContents({
  data,
  title = "",
}: VitrineContentsProps) {
  const navigate: any = useNavigation();
  const { setContentSelected } = useContext(ContentContext);

  return (
    <S.container>
      <S.boxContent>
        {title !== "" && <S.title numberOfLines={1}>{title} teste</S.title>}
        <S.scroll horizontal showsHorizontalScrollIndicator={false}>
          {data.length > 0 &&
            data.map((item, i) => (
              <S.content
                key={i}
                onPress={() => {
                  navigate.navigate(stacksContent.contentSelected);
                  setContentSelected(item);
                }}
              >
                <S.imgContent>
                  <S.img resizeMode="cover" source={{ uri: item.img }} />
                </S.imgContent>
                <S.titleContent numberOfLines={2}>{item.title}</S.titleContent>
                <S.subTitleContent numberOfLines={1}>
                  {item.subtitle}
                </S.subTitleContent>
              </S.content>
            ))}
        </S.scroll>
      </S.boxContent>
    </S.container>
  );
}
