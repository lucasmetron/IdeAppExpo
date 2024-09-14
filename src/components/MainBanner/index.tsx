import React from "react";
import { Text, TouchableOpacity } from "react-native";

import * as S from "./styles";

interface MainBannerProps {
  bannerUrl: string;
  title: string;
  author: string;
}

export default function MainBanner({
  bannerUrl,
  author,
  title,
}: MainBannerProps) {
  return (
    <TouchableOpacity>
      <S.container source={{ uri: bannerUrl }}>
        <S.boxInfo>
          <S.title numberOfLines={1}>{title}</S.title>
          <S.author numberOfLines={1}>{author}</S.author>
        </S.boxInfo>
      </S.container>
    </TouchableOpacity>
  );
}
