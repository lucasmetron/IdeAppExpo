import React from "react";

import * as S from "./styles";
import { Text } from "react-native";
import { ContentProps } from "types/ContentProps";
interface VitrineContentsProps {
  title: string;
  data: ContentProps[];
}

export default function VitrineContents({ title, data }: VitrineContentsProps) {
  return (
    <S.container>
      <S.boxContent>
        <S.title numberOfLines={1}>{title}</S.title>
        <S.scroll horizontal showsHorizontalScrollIndicator={false}>
          {data.length > 0 &&
            data.map((item, i) => (
              <S.content key={i}>
                <S.imgContent>
                  <S.img source={{ uri: item.img }} />
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
