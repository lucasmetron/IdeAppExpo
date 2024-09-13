/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Button } from "react-native";

import * as S from "./styles";
import VitrineContents from "components/VitrineContents";
import MainContent from "components/MainContent";

export default function Content() {
  const navigation: any = useNavigation();

  return (
    <S.container>
      <MainContent />
      <VitrineContents title="Adicionados recentemente" />
      <VitrineContents title="Mais populares" />
      <VitrineContents title="Celulas" />
      <VitrineContents title="Sermoes de domingo" />
    </S.container>
  );
}
