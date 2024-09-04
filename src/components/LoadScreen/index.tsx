import React from "react";
import { ActivityIndicator } from "react-native";

import * as S from "./styles";
import { color } from "../../styles/pallete";

interface LoadScreenProps {
  size?: "large" | "small";
  colorLoad?: string;
}

export default function LoadScreen({
  size = "small",
  colorLoad = color.interface.white,
}: LoadScreenProps) {
  return (
    <S.loadContainer>
      <ActivityIndicator size={size} color={colorLoad} />
    </S.loadContainer>
  );
}
