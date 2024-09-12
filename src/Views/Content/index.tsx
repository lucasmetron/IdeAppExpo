/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Button } from "react-native";

import * as S from "./styles";
import VitrineContents from "components/VitrineContents";

export default function Content() {
  const navigation: any = useNavigation();

  return (
    <S.container>
      <VitrineContents />
    </S.container>
  );
}
