import React from "react";
import { ActivityIndicator } from "react-native";

import * as S from "./styles";
import { color } from "../../styles/pallete";

interface LoadScreenProps {
  text?: string;
  size?: "large" | "small";
  colorLoad?: string;
}

export default function LoadScreen({
  text = "",
  size = "small",
  colorLoad = color.interface.white,
}: LoadScreenProps) {
  return (
    <S.loadContainer>
      <ActivityIndicator size={size} color={colorLoad} />
      {text !== "" && <S.text>{text}</S.text>}
    </S.loadContainer>
  );
}
